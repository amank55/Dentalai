import { CalendarIcon } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"

function RightSection() {
  return (
   <Card className="bg-gradient-to-br from-primary/10 to-primary-5">
    <CardHeader>
        <CardTitle className="flex items-center gap-2 pl-0.5">
            <CalendarIcon className="size-5 text-primary"/>
               Next Appointment
        </CardTitle>
         <CardDescription className="space-y-4">
        <div className="flex items-center bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 rounded-3xl p-4">

        </div>
    </CardDescription>
    </CardHeader>
   </Card>
  ) 
}
export default RightSection