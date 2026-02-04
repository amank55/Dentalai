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
  return (
    <div>AdminStats</div>
  )
}
export default AdminStats