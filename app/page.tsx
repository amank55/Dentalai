import CTA from "@/components/landing/CTA"
import Footer from "@/components/landing/Footer"
import Header from "@/components/landing/header"
import Hero from "@/components/landing/hero"
import HowItWorks from "@/components/landing/howItWorks"
import PricingSection from "@/components/landing/PricingSection"
import WhatToAsk from "@/components/landing/WhatToAsk"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"


export default async function Home(){
 const user = await currentUser()
 if(user)  redirect("/dashboard")
  return (
    <>
    <Header/>
    <Hero/>
    <HowItWorks/>
    <WhatToAsk/>
    <PricingSection/>
    <CTA/>
    <Footer/>
    </>
  )
}
