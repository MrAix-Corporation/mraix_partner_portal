
"use client";
import { useState } from 'react';
import Link from 'next/link';

interface MenuItemProps {
  label: string;
  href: string;
  submenu?: { label: string; href: string; }[];
}

export default function MenuItem({ label, href, submenu }: MenuItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!submenu) {
    return (
      <li>
        <Link
          href={href}
          className="block p-2 rounded hover:bg-gray-700 transition-colors"
        >
          {label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-2 rounded hover:bg-gray-700 transition-colors flex justify-between items-center"
      >
        {label}
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <ul className="ml-4 mt-1 space-y-1">
          {submenu.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block p-2 rounded hover:bg-gray-700 transition-colors text-sm"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
