import { Zap } from "lucide-react"

const HowItWorks = () => {
  return (
   <section className="items-center text-center px-36 py-8 outline-hideden">
    <div className=" inline-flex items-center gap-3 px-6 py-3 linear-to-r from-primary/15 to-primary/10 rounded-full mt-4 border-2 border-primary/30 backdrop-blur-md shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:scale-105 ">
    <Zap className="size-4  text-primary"/>
       <div className=" text-sm font-semibold text-primary tracking-wide items-center">
                 Simple Process
    </div>
       <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          <span className="bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Three steps to
          </span>
          <br />
          <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            better dental health
          </span>
        </h2>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Our streamlined process makes dental care accessible, convenient, and stress-free for
          everyone
        </p>
      </div>
   </section>
   
  )
}
export default HowItWorks