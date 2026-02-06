import Navbar from "@/components/Navbar"

function VoicePage ()  {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        <div className="mb-12 overflow-hidden">
            <div className="flex items-center justify-between bg-gradient-to-br from-primary/10 to-background rounded-3xl p-8 border border-primary/20">
            <div className="space-y-4">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
               <div className="w-2 h-2  bg-primary rounded-full animate-pulse"></div>
               <span className="text-sm font-medium text-primary">Voice Assistant ready</span>
               </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default VoicePage