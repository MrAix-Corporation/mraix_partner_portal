
interface MenuItem {
  label: string;
  href: string;
  icon?: string;
  badge?: string;
  submenu?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    label: "MrAix ERP",
    href: "/",
    icon: "M"
  },
  {
    label: "Favorites",
    href: "#",
    submenu: [
      { label: "Sales", href: "/sales", icon: "🛒" }
    ]
  },
  {
    label: "Navigation",
    href: "#",
    submenu: [
      { label: "Dashboard", href: "/", icon: "⊞", badge: "3RD" },
      { label: "Sales", href: "/sales", icon: "🛒" },
      { label: "Purchase", href: "/purchase", icon: "🚚" },
      { label: "Account", href: "/account", icon: "📊" },
      { label: "Inventory", href: "/inventory", icon: "📦" },
      { label: "Reports", href: "/reports", icon: "📈" },
      { label: "Communications", href: "/communications", icon: "✉", badge: "3PM" },
      { label: "Collaboration", href: "/collaboration", icon: "👥", badge: "OFF" }
    ]
  }
];
