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
    icon: FiGrid,
    path: "/dashboard",
  },
  {
    title: "Sales",
    icon: FiShoppingCart,
    submenu: [
      { title: "Customers", icon: FiUsers, path: "/sales/customers" },
      { title: "Sales", icon: FiFileText, path: "/sales/sales" },
      { title: "Sales Orders", icon: FiFileText, path: "/sales/orders" },
      { title: "Receipts", icon: FiDollarSign, path: "/sales/receipts" },
      {
        title: "Credit Notes",
        icon: FiCreditCard,
        path: "/sales/credit-notes",
      },
      { title: "Billing", icon: FiBriefcase, path: "/sales/billing" },
    ],
  },
  {
    title: "Purchase",
    icon: FiBox,
    submenu: [
      { title: "Vendors", icon: FiUsers, path: "/purchase/vendors" },
      { title: "Purchase", icon: FiFileText, path: "/purchase/orders" },
      { title: "Debit Note", icon: FiFileText, path: "/purchase/debit-notes" },
      { title: "Payment", icon: FiDollarSign, path: "/purchase/payments" },
    ],
  },
  {
    title: "Inventory",
    icon: FiBox,
    submenu: [
      { title: "Stock Item", icon: FiBox, path: "/inventory/stock-items" },
      { title: "Group", icon: FiArchive, path: "/inventory/groups" },
      { title: "Category", icon: FiGrid, path: "/inventory/categories" },
      { title: "Godown", icon: FiTruck, path: "/inventory/godowns" },
      { title: "UOM", icon: FiBarChart2, path: "/inventory/uom" },
    ],
  },
  {
    title: "Report",
    icon: FiFileText,
    submenu: [
      { title: "Outstanding", icon: FiFileText, path: "/reports/outstanding" },
      {
        title: "Trial Balance",
        icon: FiFileText,
        path: "/reports/trial-balance",
      },
      {
        title: "Balance Sheet",
        icon: FiFileText,
        path: "/reports/balance-sheet",
      },
    ],
  },
  {
    title: "Communication",
    icon: FiMessageSquare,
    path: "/communication",
  },
  {
    title: "Collaboration",
    icon: FiUsers,
    path: "/collaboration",
  },
  {
    title: "Account",
    icon: FiDatabase,
    submenu: [
      { title: "Ledger", icon: FiBook, path: "/account/ledger" },
      { title: "Group", icon: FiArchive, path: "/account/group" },
      { title: "Tax", icon: FiBarChart2, path: "/account/tax" },
      { title: "Journal", icon: FiMessageSquare, path: "/account/journal" },
    ],
  },
];

export const utilityMenuData = [
  {
    title: "Preferences",
    icon: FiSettings,
    path: "/preferences",
  },
  {
    title: "Help",
    icon: FiHelpCircle,
    path: "/help",
  },
];
