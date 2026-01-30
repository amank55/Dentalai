import Navbar from "@/components/Navbar"
const AdminDashboardClient = () => {
  return (
   <>
    <Navbar/>
    <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
         <div className="mb-12 flex items-center justify-between bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-8 border border-primary/20">
         <div className="space-y-4">
            <div className="flex-inline items-center gap-2 px-3 py-1 rounded-full border border-primary/10 bg-primary/10">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                   <span className="text-sm font-medium text-primary">Admin Dashboard</span>
            </div>
         </div>
         </div>
    </div>
   </>
  )
}
export default AdminDashboardClient