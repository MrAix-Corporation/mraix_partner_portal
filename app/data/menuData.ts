
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
    submenu: []
  },
  {
    label: "Navigation",
    href: "#",
    submenu: [
      { label: "Dashboard", href: "/", icon: "⊞", badge: "3RD" },
      { 
        label: "Sales", 
        href: "/sales", 
        icon: "🛒",
        submenu: [
          { label: "Customer", href: "/sales/customer" },
          { label: "Invoice", href: "/sales/invoice" },
          { label: "Credit Note", href: "/sales/credit-note" },
          { label: "Receipt", href: "/sales/receipt" }
        ]
      },
      { 
        label: "Purchase", 
        href: "/purchase", 
        icon: "🚚",
        submenu: [
          { label: "Vendor", href: "/purchase/vendor" },
          { label: "Purchase", href: "/purchase/orders" },
          { label: "Debit Note", href: "/purchase/debit-note" },
          { label: "Payment", href: "/purchase/payment" }
        ]
      },
      { label: "Account", href: "/account", icon: "📊" },
      { label: "Inventory", href: "/inventory", icon: "📦" },
      { label: "Reports", href: "/reports", icon: "📈" },
      { label: "Communications", href: "/communications", icon: "✉", badge: "3PM" },
      { label: "Collaboration", href: "/collaboration", icon: "👥", badge: "OFF" }
    ]
  }
];
