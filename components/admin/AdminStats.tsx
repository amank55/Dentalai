"use client"
import { Calendar, Clock, UserCheck, Users } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import AddDoctorDialog from "./AddDoctorDialog"
import { useState } from "react"
interface AdminStatsProps{
    totalDoctors : number,
    activeDoctors : number,
    totalAppointments: number,
    completedAppointments: number,
}
function  AdminStats ({
    totalDoctors,
    activeDoctors,
    totalAppointments,
    completedAppointments
}: AdminStatsProps)  {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  return (
       <div className="grid md:grid-cols-4 gap-6 mb-12">
      <Card className="border-2 hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
              <Users className="size-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-400">{totalDoctors}</div>
              <div className="text-sm text-muted-foreground">Total Doctors</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500/10 to-green-500/20 rounded-xl flex items-center justify-center">
              <UserCheck className="size-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-green-500">{activeDoctors}</div>
              <div className="text-sm text-muted-foreground">Active Doctors</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-500/10 to-violet-500/20 rounded-xl flex items-center justify-center">
              <Calendar className="size-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-violet-500">{totalAppointments}</div>
              <div className="text-sm text-muted-foreground">Total Appointments</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-400/20 to-pink-400/10 flex items-center justify-center rounded-xl">
             <Clock className="size-6"/>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-400">{completedAppointments}</div>
              <div className="text-sm text-muted-foreground">Completed Appointments</div>
            </div>
          </div>
        </CardContent>
      </Card>
        <AddDoctorDialog isOpen={isAddDialogOpen} onClose={() => setIsAddDialogOpen(false)} />
    </div>  
    
  )
}
export default AdminStats