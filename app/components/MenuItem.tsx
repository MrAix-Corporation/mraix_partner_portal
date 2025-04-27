
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItemProps {
  label: string;
  href: string;
  icon?: string;
  badge?: string;
  submenu?: { label: string; href: string; }[];
}

export default function MenuItem({ label, href, icon, badge, submenu }: MenuItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname === href;

  const baseClasses = `flex items-center justify-between p-2 rounded-lg transition-colors ${
    isActive ? 'bg-gray-100' : 'hover:bg-gray-50'
  }`;

  if (!submenu) {
    return (
      <li>
        <Link href={href} className={baseClasses}>
          <div className="flex items-center gap-3">
            {icon && <span className="text-gray-500">{icon}</span>}
            <span className="text-gray-700">{label}</span>
          </div>
          {badge && (
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">{badge}</span>
          )}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={baseClasses}
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-gray-500">{icon}</span>}
          <span className="text-gray-700">{label}</span>
        </div>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <ul className="ml-8 mt-1 space-y-1">
          {submenu.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block p-2 rounded-lg hover:bg-gray-50 text-gray-600 text-sm"
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
