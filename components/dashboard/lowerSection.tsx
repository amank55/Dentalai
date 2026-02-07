import { Card } from "../ui/card"

function LowerSection() {
  return (
   <>
    <div className="grid md:grid-cols-2  gap-8 mb-12">
      <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    </div>
      </Card>
    </div>

   </>
  )
}
export default LowerSection