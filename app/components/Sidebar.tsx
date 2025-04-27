
"use client";
import MenuItem from "./MenuItem";
import { menuItems } from "../data/menuData";

export default function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4 fixed left-0 top-16 bottom-0">
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <MenuItem
              key={item.href}
              label={item.label}
              href={item.href}
              submenu={item.submenu}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
