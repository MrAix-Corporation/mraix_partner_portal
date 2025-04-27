
"use client";
import Link from "next/link";

export default function Sidebar() {
  const menuItems = [
    { label: "Dashboard", href: "/" },
    { label: "Sale", href: "/sale" },
    { label: "Purchase", href: "/purchase" },
  ];

  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4 fixed left-0 top-16 bottom-0">
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.label} className="mb-2">
              <Link
                href={item.href}
                className="block p-2 rounded hover:bg-gray-700 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
