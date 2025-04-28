import { IconType } from "react-icons";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { LuPin } from "react-icons/lu";
import { MdPushPin } from "react-icons/md";

interface SubMenuItem {
  title: string;
  icon: IconType;
  path: string;
}

interface MenuItemProps {
  title: string;
  icon: IconType;
  path?: string;
  submenu?: SubMenuItem[];
  isExpanded: boolean;
  expandedMenu: string | null;
  onToggleMenu: (menu: string) => void;
  onPinItem?: (item: { title: string; icon: IconType; path: string }) => void;
  pinnedItems: string[]; // <-- make sure this is here
}

const MenuItem = ({
  title,
  icon: Icon,
  path,
  submenu,
  isExpanded,
  expandedMenu,
  onToggleMenu,
  onPinItem,
  pinnedItems,
}: MenuItemProps) => {
  const isSubMenuOpen = expandedMenu === title;

  if (submenu) {
    return (
      <div className="">
        <button
          onClick={() => onToggleMenu(title)}
          className={`w-full flex hover:text-primary items-center space-x-3 px-3 py-2 hover:bg-secondary/5 rounded-lg text-xs ${
            isSubMenuOpen ? "text-primary font-bold" : "text-secondarygraycolor"
          }`}
        >
          <Icon className="w-5 h-5" />
          {isExpanded && (
            <>
              <span>{title}</span>
              <span className="flex-1"></span>
              {isSubMenuOpen ? (
                <FiChevronDown className="ml-2" />
              ) : (
                <FiChevronRight className="ml-2" />
              )}
            </>
          )}
        </button>

        {isExpanded && isSubMenuOpen && (
          <div className="ml-8 space-y-1 mt-1">
            {submenu.map((item) => {
              const isPinned = pinnedItems.includes(item.path);

              return (
                <div
                  key={item.path}
                  className="group relative flex items-center space-x-3 px-4 py-2 text-gray-600 hover:text-primary rounded-lg text-xs"
                >
                  <a href={item.path} className="flex items-center space-x-3">
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </a>

                  {onPinItem && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        onPinItem({
                          title: item.title,
                          icon: item.icon,
                          path: item.path,
                        });
                      }}
                      className="absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <LuPin
                        className={`w-4 h-4 hover:text-primary ${
                          isPinned ? "text-primary rotate-45" : "text-gray-400"
                        }`}
                      />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <a
      href={path}
      className="flex w-fit items-center space-x-3 px-4 py-2 text-secondarygraycolor hover:bg-secondary/5 hover:text-primary rounded-lg text-xs"
    >
      <Icon className="w-5 h-5" />
      {isExpanded && <span>{title}</span>}
    </a>
  );
};

export default MenuItem;
