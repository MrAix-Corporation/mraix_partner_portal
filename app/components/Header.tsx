
"use client";
import { useState } from "react";
import Link from "next/link";
import { BsSearch, BsBell, BsPin, BsPinFill } from "react-icons/bs";

interface FavoriteItem {
  label: string;
  href: string;
  icon?: string;
  parentLabel?: string;
}

export const FavoritesContext = React.createContext<{
  favorites: FavoriteItem[];
  toggleFavorite: (item: FavoriteItem) => void;
}>({
  favorites: [],
  toggleFavorite: () => {},
});

export default function Header() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  const toggleFavorite = (item: FavoriteItem) => {
    if (favorites.some(fav => fav.href === item.href)) {
      setFavorites(favorites.filter(fav => fav.href !== item.href));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  return (
    <header className="bg-white h-16 flex items-center px-4 fixed top-0 left-0 right-0 z-50 border-b">
      <div className="flex items-center gap-2 mr-4">
        <span className="text-lg font-semibold text-purple-600">MrAix ERP</span>
      </div>

      {/* Favorites Section */}
      <div className="flex items-center gap-3 px-4 border-l border-r">
        {favorites.map((item) => (
          <div key={item.href} className="flex items-center gap-1">
            <Link href={item.href} className="text-sm text-gray-600 hover:text-gray-900">
              {item.parentLabel && (
                <span className="text-gray-400 mr-1">{item.parentLabel} / </span>
              )}
              {item.label}
            </Link>
            <button
              onClick={() => toggleFavorite(item)}
              className="text-gray-400 hover:text-gray-600"
            >
              <BsPinFill className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>

      <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>

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

      <div className="flex items-center justify-end gap-4 ml-auto">
        <button className="p-2 hover:bg-gray-100 rounded-lg relative">
          <BsBell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center">
          <button className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50">
            DU
          </button>
        </div>
      </div>
    </header>
    </FavoritesContext.Provider>
  );
}
