import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import { Bell, LayoutDashboard, Mail, Plus, Ribbon } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

function HeaderComponent() {
  const navLinkClass =
    "text-green-800 text-sm h-full py-3 px-3 rounded-full font-medium transition-all duration-300";
  const activeClass = "bg-[#0b5e57] text-white";

  return (
    <header className="w-full z-50 flex py-3 px-4 md:px-16 justify-between fixed items-center">
      <div>
       <Link to="/"> <Ribbon className="text-green-800 bg-[#ffe275] p-1 rounded-full" width={35} height={35} /></Link>
      </div>

      <SignedOut>
        <Link to="/sign-in" className="text-white bg-yellow-400 hover:bg-yellow-600 duration-300 transition-all px-4 py-2 rounded-lg">SignIn</Link>
      </SignedOut>

      <SignedIn>
        <div className="flex gap-4 items-center justify-center h-12">
          <div className="flex gap-2 items-center bg-gray-100 px-4 md:px-8 rounded-full">
            <NavLink
              to="/discover"
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : "hover:bg-[#0b5e57] hover:text-white"}`
              }
            >
              Discover
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `${navLinkClass} flex items-center gap-1 ${
                  isActive ? activeClass : "hover:bg-[#0b5e57] hover:text-white"
                }`
              }
            >
              <LayoutDashboard width={16} height={16} />
              Dashboard
            </NavLink>

            <NavLink
              to="/your-trip"
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : "hover:bg-[#0b5e57] hover:text-white"}`
              }
            >
              Your Trips
            </NavLink>

            <NavLink
              to="/archive"
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : "hover:bg-[#0b5e57] hover:text-white"}`
              }
            >
              Archive
            </NavLink>
          </div>

          <div>
            <NavLink
              to="/new-trip"
              className="flex gap-2 items-center border-2 hover:bg-[#ffe275] hover:text-gray-900 transition-all text-sm border-[#ffe275] rounded-full py-2 px-3"
            >
              <Plus className="bg-[#ffe275] rounded-full p-1" />
              New Trip
            </NavLink>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <Bell width={35} height={35} className="bg-gray-200 p-2 rounded-full text-[#0b5e57]" />
          <Mail width={35} height={35} className="bg-gray-200 p-2 rounded-full text-[#0b5e57]" />
          <UserButton />
        </div>
      </SignedIn>
    </header>
  );
}

export default HeaderComponent;
