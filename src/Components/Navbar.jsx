import { SearchIcon } from "@heroicons/react/solid";
import { TextInput } from "@tremor/react";
import React from "react";

const Navbar = () => {
  return (
    <div id="top" 
    className="relative w-full sm:flex justify-between items-center p-2">
    <h1 className="c font-bold text-gray-300">Dashboard</h1>
    <div>
      <TextInput className="w-full" icon={SearchIcon} placeholder="Search...."/>
    </div>
    </div>
  )
}

export default Navbar;
