import { Plus } from "lucide-react"
import Button from "../../ui/Button"

const DashboardHome = () => {
  return (
    <div className="p-4 min-h-[91vh]">  
    
      <div className=" flex justify-between items-center">
        <p className="text-2xl">Hello User</p>
        <div>
          <Button text={"Add Item"}  size={"sm"} varient="primary" startIcon={<Plus />}/>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome