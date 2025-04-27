
"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsPin, BsPinFill } from "react-icons/bs";
import { useFavorites } from "../context/FavoritesContext";

interface MenuItemProps {
  label: string;
  href: string;
  icon?: string;
  badge?: string;
  submenu?: { label: string; href: string }[];
}

export default function MenuItem({
  label,
  href,
  icon,
  badge,
  submenu,
}: MenuItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname === href;

  const { favorites, toggleFavorite } = useFavorites();
  const isPinned = favorites.some(fav => fav.href === href);

  const handlePin = (e: React.MouseEvent, item: { label: string; href: string }) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite({ ...item, parentLabel: label });
  };

  const baseClasses = `flex hover:bg-secondary/5 items-center justify-between p-2 rounded-lg transition-colors ${
    isActive
      ? "text-secondary font-bold bg-secondary/10"
      : "hover:bg-secondary/5"
  }`;

  if (!submenu) {
    return (
      <li>
        <Link href={href} className={baseClasses}>
          <div className="flex items-center gap-3">
            {icon && <span className="text-gray-500">{icon}</span>}
            <span className="text-gray-700 text-xs">{label}</span>
          </div>
          {badge && (
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
              {badge}
            </span>
          )}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button onClick={() => setIsOpen(!isOpen)} className={baseClasses}>
        <div className="flex items-center gap-3">
          {icon && <span className="text-gray-500">{icon}</span>}
          <span className="text-gray-700 text-xs">{label}</span>
        </div>
        <span
          className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <ul className="ml-8 mt-1 space-y-1">
          {submenu.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 text-gray-600 text-xs"
              >
                <div className="flex items-center gap-2">
                  {item.icon && <span className="text-gray-500">{item.icon}</span>}
                  <span>{item.label}</span>
                </div>
                <button
                  onClick={(e) => handlePin(e, item)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  {favorites.some(fav => fav.href === item.href) ? (
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
