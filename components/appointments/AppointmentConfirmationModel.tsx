import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon, MailIcon, CalendarIcon, ClockIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface AppointmentConfirmationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  appointmentDetails: {
    doctorName: string;
    appointmentDate: string;
    appointmentTime: string;
    userEmail: string;
  };
}

export function AppointmentConfirmationModal({
  open,
  onOpenChange,
  appointmentDetails,
}: AppointmentConfirmationModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center space-y-3">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
            <CheckCircleIcon className="h-7 w-7 text-green-600 dark:text-green-400" />
          </div>

          <DialogTitle className="text-2xl font-bold text-center">
            Appointment Confirmed!
          </DialogTitle>

          <DialogDescription className="text-center text-muted-foreground text-sm">
            Your appointment has been successfully booked
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-1">
          {/* Email Notification Section */}
          <div className="flex flex-col items-center space-y-2 bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4">
            <div className="relative">
              <Image
                src="/email-sent.png"
                alt="Email sent"
                width={80}
                height={80}
                className="mx-auto w-20 h-20 object-contain"
              />
            </div>

            <div className="text-center space-y-1">
              <div className="flex items-center justify-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                <MailIcon className="h-4 w-4" />
                <span>Details sent to your inbox</span>
              </div>
              {appointmentDetails?.userEmail && (
                <p className="text-xs text-muted-foreground">{appointmentDetails.userEmail}</p>
              )}
            </div>
          </div>

          {/* Appointment Summary */}
          {appointmentDetails && (
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-4 space-y-3">
              <h4 className="font-semibold text-sm text-center">Quick Summary</h4>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm">
                  <UserIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="font-medium">{appointmentDetails.doctorName}</span>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <CalendarIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span>{appointmentDetails.appointmentDate}</span>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <ClockIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span>{appointmentDetails.appointmentTime}</span>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 pt-1">
            <Link href="/appointments" className="w-full">
              <Button className="w-full" onClick={() => onOpenChange(false)}>
                View My Appointments
              </Button>
            </Link>

            <Button variant="outline" className="w-full" onClick={() => onOpenChange(false)}>
              Close
            </Button>
          </div>

          {/* Additional Info */}
          <div className="text-center text-xs text-muted-foreground bg-amber-50 dark:bg-amber-950/20 rounded-lg p-3">
            <p>
              Please arrive 15 minutes early.
              <br />
              Contact us to reschedule 24 hours in advance.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}