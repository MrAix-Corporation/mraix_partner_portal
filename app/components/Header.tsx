"use client";
import { useState } from "react";
import Link from "next/link";
import { BsSearch, BsBell, BsPin, BsPinFill, BsGear } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { toggleFavorite } from "../store/favoritesSlice";

export default function Header() {
  const favorites = useAppSelector((state) => state.favorites.items);
  const dispatch = useAppDispatch();

  const handleToggleFavorite = (item: any) => {
    dispatch(toggleFavorite(item));
  };

  return (
    <header className="bg-white h-16 flex items-center px-4 fixed top-0 left-0 right-0 z-50 border-b">
      <div className="flex items-center gap-2 mr-4">
        <span className="text-lg font-semibold text-purple-600">MrAix</span>
      </div>

      <div className="flex-1 max-w-xl mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-purple-500"
          />
          <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <span className="text-xs text-gray-400">⌘K</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 ml-auto">
        <button className="p-2.5 hover:bg-gray-100 rounded-full relative transition-colors">
          <BsGear className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2.5 hover:bg-gray-100 rounded-full relative transition-colors">
          <BsBell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center">
          <button className="w-9 h-9 flex items-center justify-center text-sm bg-purple-100 text-primary text-xs p3-2 font-semibold border-2 border-purple-200 rounded-full hover:bg-purple-200 transition-colors">
            DU
          </button>
        </div>
      </div>
    </header>
  );
}
