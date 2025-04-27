import {
  FiGrid,
  FiShoppingCart,
  FiUsers,
  FiFileText,
  FiCreditCard,
  FiBriefcase,
  FiBox,
  FiDollarSign,
  FiTruck,
  FiBook,
  FiDatabase,
  FiArchive,
  FiBarChart2,
  FiMessageSquare,
  FiSettings,
  FiHelpCircle,
} from "react-icons/fi";

export const menuData = [
  {
    title: "Dashboard",
    href: "/",
    icon: "⊞",
    badge: "3RD"
  },
  {
    title: "Sales",
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
    title: "Purchase",
    href: "/purchase",
    icon: "🚚",
    submenu: [
      { label: "Vendor", href: "/purchase/vendor" },
      { label: "Purchase", href: "/purchase/orders" },
      { label: "Debit Note", href: "/purchase/debit-note" },
      { label: "Payment", href: "/purchase/payment" }
    ]
  }
];

export const utilityMenuData = [
  {
    title: "Preferences",
    icon: FiSettings,
    href: "/preferences"
  },
  {
    title: "Help",
    icon: FiHelpCircle,
    href: "/help"
  }
];