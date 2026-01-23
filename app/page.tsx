import Footer from "@/components/landing/Footer"
import Header from "@/components/landing/header"
import Hero from "@/components/landing/hero"
import HowItWorks from "@/components/landing/howItWorks"
import PricingSection from "@/components/landing/PricingSection"
import WhatToAsk from "@/components/landing/WhatToAsk"


const page = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <HowItWorks/>
    <WhatToAsk/>
    <PricingSection/>
    <Footer/>
    </>
  )
}
export default page