
"use client";
import { useState } from 'react';
import MenuItem from "./MenuItem";
import { menuItems } from "../data/menuData";

export default function Sidebar() {
  return (
    <aside className="bg-white w-64 min-h-screen p-4 fixed left-0 top-16 bottom-0 border-r">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
          {menuItems[0].icon}
        </div>
        <span className="text-lg font-semibold">{menuItems[0].label}</span>
      </div>

      <nav className="space-y-6">
        {menuItems.slice(1).map((section, index) => (
          <div key={index}>
            <h2 className="text-gray-500 text-sm mb-2">{section.label}</h2>
            <ul className="space-y-1">
              {section.submenu?.map((item) => (
                <MenuItem
                  key={item.href}
                  label={item.label}
                  href={item.href}
                  icon={item.icon}
                  badge={item.badge}
                  submenu={item.submenu}
                />
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
