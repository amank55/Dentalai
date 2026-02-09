import { BrainIcon, MessageSquareIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { getUserAppointmentStats } from "@/lib/actions/appointment"
import { format } from "date-fns"
import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"
import { Button } from "../ui/button"
import Link from "next/link"
async function LowerSection() {
  try {
    const appointmentStats = await getUserAppointmentStats();
    const { userId } = await auth();
    const user = userId ? await prisma.user.findUnique({ where: { clerkId: userId } }) : null;
  
  return (
   <>
     <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 pl-4">
            <BrainIcon className="size-5 text-primary"/>
                 Our Dental Health
        </CardTitle>
         <CardDescription className="pl-4">Keep track of your Dental Journey</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-6 pl-3">
            <div className="text-center p-4 bg-muted/30 rounded-xl">
            <div className="text-2xl font-bold text-primary mb-1">
                 {appointmentStats.completedAppointments}
            </div>
            <div className="text-sm text-muted-foreground">
              Completed Visits
            </div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-xl">
            <div className="text-primary font-bold text-2xl mb-1">
                  {appointmentStats.totalAppointments}
            </div>
            <div className="text-muted-foreground text-sm">Total Appointments</div>
            </div>
            <div className="text-center bg-muted/30 p-4 rounded-xl">
            <div className="text-xl font-bold mb-1 text-primary">
             {user?.createdAt ? format(new Date(user.createdAt), "MMM yyyy") : "N/A"}
            </div>
            <div className="text-sm text-muted-foreground">Member since</div>
            </div>
        </div>
       <div className="mt-6 p-4 bg-linear-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
          <div className="flex items-start gap-3">
            <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
              <MessageSquareIcon className="size-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-1">Ready to get started?</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Book your first appointment or try our AI voice assistant for instant dental advice.
              </p>
              <div className="flex gap-2">
                <Link href="/voice">
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Try AI Assistant
                  </Button>
                </Link>
                <Link href="/appointments">
                  <Button size="sm" variant="outline">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
   </>
  );
  } catch (error) {
    console.error("LowerSection error:", error);
    return null; // silently fail if data can't be fetched
  }
}
export default LowerSection