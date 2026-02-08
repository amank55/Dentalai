import Navbar from "@/components/Navbar"

function page() {
  return (
   <>
    <Navbar/>
    <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        <div className="mb-12 overflow-hidden">
            <div className="text-3xl font-bold flex items-center">
                Book an Appointment
            </div>
            <div className="text-sm text-muted-foreground mt-2">
                Find and book with verified dentists in your area
            </div>
            <div className="mt-6 flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="font-bold text-black text-xl">1</span>
                </div>      
                <span className="pl-2 flex items-center">Select Dentist</span>
            </div>
        </div>
    </div>
   </>
   
  )
}
export default page