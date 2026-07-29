import { MapPin } from "lucide-react";
import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const location = false;
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
              {location ? <div></div> : "Add Address"}
            </span>
            <FaCaretDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
