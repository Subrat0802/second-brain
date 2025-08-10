import { Outlet } from "react-router-dom"


const Auth = () => {
  return (
    <div className="min-h-[100dvh] font-inter flex pt-[9vh]">
        <div className="w-[50%] flex flex-col justify-center items-center text-center px-16 ">
            <p className="text-5xl mb-2">Enter Your Digital Mind</p>
            <p>All your saved posts, links, and ideas—organized, searchable, and always with you. Sign in to unlock your personal hub of inspiration and knowledge.</p>
        </div>
        <div className="w-[50%]">
            <Outlet />        
        </div>
    </div>
  )
}

export default Auth