import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Bell, LayoutDashboard, Mail, Plus, Ribbon } from "lucide-react";
import { Link } from "react-router-dom";
function HeaderComponent() {
  return (
    <header className="w-full flex py-3 px-16 justify-between items-center ">
      <div >
        <Ribbon className="text-green-800" width={30} height={30} />
      </div>

     
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
      <div className="flex gap-4 items-center justify-center h-12 ">
        <div className="flex gap-2 items-center bg-gray-100 px-8 rounded-full">
          <Link to="/discover" className="text-green-800 text-sm h-full py-3 px-3 rounded-full font-medium hover:bg-[#0b5e57] hover:text-white duration-300 transition-all">Discover</Link>
          <Link to="/dashboard" className="text-green-800 text-sm flex items-center gap-1 h-full py-3 px-3 rounded-full font-medium hover:bg-[#0b5e57] hover:text-white duration-300 transition-all"><LayoutDashboard width={16} height={16} />Dashboard</Link>
          <Link to="/your-trip" className="text-green-800 text-sm h-full py-3 px-3 rounded-full font-medium hover:bg-[#0b5e57] hover:text-white duration-300 transition-all">Your Trips</Link>
          <Link to="/archive" className="text-green-800 text-sm h-full py-3 px-3 rounded-full font-medium hover:bg-[#0b5e57] hover:text-white duration-300 transition-all">Archive</Link>
        </div>
        <div>
          <Link to="/new-trip" className="flex gap-2 items-center border-2 hover:bg-[#ffe275] hover:text-gray-900 duration-300 transition-all text-sm border-[#ffe275] rounded-full py-2 px-3">
            <Plus className="bg-[#ffe275] rounded-full"  />
            New Trip
          </Link>
        </div>
        
      </div>
      <div className="flex gap-2 items-center">
      <Bell width={35} height={35} className="bg-gray-200 p-2  rounded-full text-[#0b5e57]" />
      <Mail width={35} height={35} className="bg-gray-200 p-2  rounded-full text-[#0b5e57]" />
      <UserButton />
      </div>
      
      </SignedIn >
    </header>
  );
}

export default HeaderComponent;
