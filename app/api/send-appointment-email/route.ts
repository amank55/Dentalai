import AppointmentConfirmationEmail from "@/components/emails/AppointmentConfiermationEmail";
import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("📧 Email API route called");

  try {
    // Check if RESEND_API_KEY is set
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    console.log("✅ RESEND_API_KEY is configured");

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY);
    console.log("✅ Resend instance created");

    let body;
    try {
      body = await request.json();
      console.log("📝 Request body parsed successfully");
    } catch (parseError) {
      console.error("❌ Failed to parse request body:", parseError);
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const {
      userEmail,
      doctorName,
      appointmentDate,
      appointmentTime,
      appointmentType,
      duration,
      price,
    } = body;

    console.log("📝 Extracted data:", { userEmail, doctorName, appointmentDate, appointmentTime });

    // validate required fields
    if (!userEmail || !doctorName || !appointmentDate || !appointmentTime) {
      console.error("❌ Missing required fields");
      return NextResponse.json(
        { error: "Missing required fields: userEmail, doctorName, appointmentDate, appointmentTime" },
        { status: 400 }
      );
    }

    // provide defaults for optional fields
    const safeAppointmentType = appointmentType || "General Checkup";
    const safeDuration = duration || "30 minutes";
    const safePrice = price || "To be confirmed";

    console.log("✅ All required fields validated");
    console.log("📋 Using values:", {
      appointmentType: safeAppointmentType,
      duration: safeDuration,
      price: safePrice,
    });

    // Create email component
    console.log("🎨 Creating email component...");
    let emailComponent;
    try {
      emailComponent = AppointmentConfirmationEmail({
        doctorName,
        appointmentDate,
        appointmentTime,
        appointmentType: safeAppointmentType,
        duration: safeDuration,
        price: safePrice,
      });
      console.log("✅ Email component created successfully");
    } catch (componentError) {
      console.error("❌ Failed to create email component:", componentError);
      const componentErrorMsg = componentError instanceof Error ? componentError.message : String(componentError);
      return NextResponse.json(
        { error: `Failed to create email template: ${componentErrorMsg}` },
        { status: 500 }
      );
    }

    // send the email
    console.log("📤 Sending email via Resend to:", userEmail);
    let sendResult;
    try {
      sendResult = await resend.emails.send({
        from: "DentWise <no-reply@resend.dev>",
        to: [userEmail],
        subject: "Appointment Confirmation - DentWise",
        react: emailComponent,
      });
      console.log("📩 Resend response received:", sendResult);
    } catch (sendError) {
      console.error("❌ Error calling Resend API:", sendError);
      const sendErrorMsg = sendError instanceof Error ? sendError.message : String(sendError);
      return NextResponse.json(
        { error: `Resend API error: ${sendErrorMsg}` },
        { status: 500 }
      );
    }

    const { data, error } = sendResult;

    if (error) {
      console.error("❌ Resend returned error:", error);
      const errorMsg = typeof error === "object" ? JSON.stringify(error) : String(error);
      return NextResponse.json(
        { error: `Failed to send email: ${errorMsg}` },
        { status: 500 }
      );
    }

    console.log("✅ Email sent successfully with ID:", data?.id);
    return NextResponse.json(
      { message: "Email sent successfully", emailId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Unexpected error in email API:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : "";
    console.error("📋 Error stack:", errorStack);

    return NextResponse.json(
      {
        error: `Internal server error: ${errorMessage}`,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}