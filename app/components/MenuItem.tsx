
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsPin, BsPinFill } from 'react-icons/bs';

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
  const [isPinned, setIsPinned] = useState(false);

  const handlePin = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPinned(!isPinned);
    // Add to favorites in Header
    const favoriteItem = { label, href, icon };
    // You'll need to implement a global state management solution to handle this
    // For now, we'll just toggle the pin state locally
  };

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
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <ul className="ml-8 mt-1 space-y-1">
          {submenu.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 text-gray-600 text-sm"
              >
                <span>{item.label}</span>
                <button
                  onClick={handlePin}
                  className="text-gray-400 hover:text-gray-600"
                >
                  {isPinned ? (
                    <BsPinFill className="w-3 h-3" />
                  ) : (
                    <BsPin className="w-3 h-3" />
                  )}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
