
"use client";
import Link from "next/link";
import { BsSearch, BsGear, BsBell } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import PeriodSelect from "./PeriodSelect";

export default function Header() {
  return (
    <header className="bg-white shadow-md h-16 flex items-center px-6 fixed top-0 left-0 right-0 z-50">
      <div className="flex-1 flex items-center gap-6">
        <div className="text-xl font-bold">MrAix Exo</div>
        <div className="relative max-w-xl flex-1">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <PeriodSelect />
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <BsGear className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full relative">
          <BsBell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <FaUserCircle className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
