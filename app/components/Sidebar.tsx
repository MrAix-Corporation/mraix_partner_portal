"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { LuPin } from "react-icons/lu";
import { IconType } from "react-icons";
import MenuItem from "./MenuItem";
import { utilityMenuData, menuData } from "../data/sidebarMenuData";

const Sidebar = () => {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(true);
  const [pinnedItems, setPinnedItems] = useState<string[]>([]);

  const toggleMenu = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  const handlePinItem = (item: {
    title: string;
    icon: IconType;
    path: string;
  }) => {
    if (pinnedItems.includes(item.path)) {
      setPinnedItems(pinnedItems.filter((path) => path !== item.path));
    } else {
      setPinnedItems([...pinnedItems, item.path]);
    }
  };

  return (
    <aside
      className={`relative flex flex-col h-[90vh] border-r border-gray-200 transition-all duration-300 ${
        isExpanded ? "w-64" : "w-16"
      }`}
    >
      <div className="relative flex items-center space-x-3 px-4 py-3 bg-white border-b border-gray-200">
        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold">M</span>
        </div>
        {isExpanded && (
          <span className="flex-1 text-base font-semibold bg-gradient-to-r from-[#9552F3] to-[#7A56EE] bg-clip-text text-transparent">
            MrAix ERP
          </span>
        )}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`absolute top-1/2 -translate-y-1/2 bg-white rounded-full p-1 border border-gray-200 shadow-sm ${
            isExpanded ? "right-2" : "left-12"
          }`}
        >
          {isExpanded ? (
            <FiChevronLeft className="w-4 h-4 text-gray-600" />
          ) : (
            <FiChevronRight className="w-4 h-4 text-gray-600" />
          )}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-2 space-y-2 [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-thumb]:bg-primarygraycolor [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
        {isExpanded && (
          <div className=" mb-4 border-b border-gray-200">
            <h2 className="text-xxs px-4 text-gray-500 font-semibold mb-2">
              Favorites
            </h2>
            {pinnedItems.length === 0 ? (
              <p className="px-4 text-xxs text-gray-500 mb-3">
                Pin items from modules below to add them to your favorites.
              </p>
            ) : (
              <div className="space-y-1 mb-2 px-1">
                {menuData.map((menu) =>
                  menu.submenu
                    ?.filter((subItem) => pinnedItems.includes(subItem.path))
                    .map((item) => (
                      <div
                        key={item.path}
                        className="flex items-center justify-between px-3 py-2 hover:bg-secondary/5 hover:text-primary text-secondarygraycolor rounded-lg text-xs group"
                      >
                        <a
                          href={item.path}
                          className="flex items-center space-x-3"
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.title}</span>
                        </a>
                        <button
                          onClick={() => handlePinItem(item)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <LuPin className="w-4 h-4 text-primary rotate-45" />
                        </button>
                      </div>
                    )),
                )}
              </div>
            )}
          </div>
        )}

        <div className="space-y-1 pb-3 border-b border-gray-200">
          {isExpanded && (
            <span className="px-3 text-xxs font-semibold text-gray-500 capitalize">
              Navigation
            </span>
          )}
          {menuData.map((item) => (
            <MenuItem
              key={item.title}
              {...item}
              isExpanded={isExpanded}
              expandedMenu={expandedMenu}
              onToggleMenu={toggleMenu}
              onPinItem={handlePinItem}
              pinnedItems={pinnedItems}
            />
          ))}
        </div>

        <div className="space-y-1 pt-3">
          {isExpanded && (
            <span className="px-3 text-xxs font-semibold text-gray-500 capitalize">
              Utilities
            </span>
          )}
          {utilityMenuData.map((item) => (
            <MenuItem
              key={item.title}
              {...item}
              isExpanded={isExpanded}
              expandedMenu={expandedMenu}
              onToggleMenu={toggleMenu}
              onPinItem={handlePinItem}
              pinnedItems={pinnedItems}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
