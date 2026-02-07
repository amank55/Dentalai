import Navbar from "@/components/Navbar"
import FeaturingCards from "@/components/voice/featuringCards"
import VapiWidget from "@/components/voice/VapiWidget"
import { MicIcon } from "lucide-react"

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
               <h1 className="text-3xl font-bold mb-2">Ai Voice Assistant</h1> 
               <p className="text-muted-foreground">Talk yo your Dental Ai Assistant using natural voice commands. get instant Advice and professional Guidance</p>
            </div>

            <div  className="hidden lg:block">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <MicIcon className="h-16 w-16 text-primary "/>
                </div>
            </div>
              
            </div>
        </div>
        <FeaturingCards/>
    </div>
    <VapiWidget/>
    </>
  )
}
export default VoicePage