import { MapPin } from "lucide-react";
import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";

function Navbar({ location }) {
  return (
    <div className="bg-white py-3 shadow-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo Section  */}
        <div className="flex gap-7 items-center">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl">
              <span className="text-yellow-500 font-serif">MZ</span>Tech
            </h1>
          </Link>
          <div className="flex gap-1 cursor-pointer text-gray-700 items-center">
            <MapPin className="text-yellow-600" />
            <span className="font-semibold">
              {location ? (
                <div className="-space-y-1 text-sm">
                  <p>
                    {location.city || location.state_district || location.state}
                  </p>
                  <p className="text-xs text-gray-500 font-normal">
                    {location.country}
                  </p>
                </div>
              ) : (
                "Add Address"
              )}
            </span>
            <FaCaretDown />
          </div>
        </div>

        {/* Menu Section  */}
        <nav className="flex gap-7 items-center">
          <ul className="flex gap-7 items-center font-semibold">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 transition-all border-yellow-500" : "text-black"} cursor-pointer`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 transition-all border-yellow-500" : "text-black"} cursor-pointer`
              }
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 transition-all border-yellow-500" : "text-black"} cursor-pointer`
              }
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 transition-all border-yellow-500" : "text-black"} cursor-pointer`
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>
          <Link to={"/cart"} className="relative">
            <IoCartOutline className="h-7 w-7" />
            <span className="bg-yellow-500 px-2 rounded-full absolute -top-2 -right-4">
              0
            </span>
          </Link>

          <div>
            <Show when="signed-out">
              <div className="flex items-center gap-3">
                <SignInButton className="bg-yellow-500 text-white font-bold px-3 py-1 rounded-md cursor-pointer " />
                <SignUpButton className="bg-yellow-500 text-white font-bold px-3 py-1 rounded-md cursor-pointer" />
              </div>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
