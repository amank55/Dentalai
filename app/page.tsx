import { Button } from "@/components/ui/button"
import {  SignInButton, SignOutButton } from "@clerk/nextjs"

const page = () => {
  return (
    <>
    <div>
       <SignOutButton>
       <h1>SignedIn</h1> 
      </SignOutButton>
      <SignInButton mode="modal">
        <h1>Lgout</h1>
      </SignInButton>
    </div>
    </>
  )
}
export default page