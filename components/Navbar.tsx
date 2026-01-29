import { useUser } from "@clerk/nextjs"
import { usePathname } from "next/navigation";

const Navbar = () => {
    const {user} = useUser();
    const pathname = usePathname
  return (
    <div>
        
    </div>
  )
}
export default Navbar