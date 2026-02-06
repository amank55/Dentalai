import { MicIcon } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"

function FeaturingCards() {
  return (
  <div className="grid md:grid-cols-2 gap-8 mb-12">
    <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    </div>
    <CardHeader className="relative">
      <CardTitle className="flex items-center gap-2">
        <div className="flex items-center justify-center bg-gradient-to-br from-primary/20 to-priamry/10 w-10 h-10 rounded-xl">
              <MicIcon className="text-primary w-5 h-5"/>
        </div>
        How to Use
      </CardTitle>
      <CardDescription className="text-muted-foreground">Simple Steps to get started with voice assistance
        
      </CardDescription>
    </CardHeader>
    </Card>
  </div>
  )
}
export default FeaturingCards