import { MapPin } from "lucide-react";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";
import { CgClose } from "react-icons/cg";

function Navbar({ location, getLocation, openDropdown, setOpenDropdown }) {

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown)
  }

  
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
            <FaCaretDown onClick={toggleDropdown} />
          </div>
          {
            openDropdown ? <div className="w-[250px] h-max shadow-2xl  bg-white fixed top-16 left-60 border-2 p-5 border-gray-100 rounded-md">
              <h1 className="font-semibold mb-4 text-xl flex justify-between ">Change Location <span className="cursor-pointer text-gray-500 hover:text-black" onClick={() => setOpenDropdown(false)}><CgClose /></span></h1>
              <button onClick={getLocation} className="bg-yellow-500 text-white rounded-md px-3 py-1 cursor-pointer hover:bg-yellow-400">Detect my Location</button>
            </div> : null
          }
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
