
interface MenuItem {
  label: string;
  href: string;
  submenu?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    label: "Dashboard",
    href: "/"
  },
  {
    label: "Sale",
    href: "/sale",
    submenu: [
      { label: "Customer", href: "/sale/customer" },
      { label: "Invoice", href: "/sale/invoice" },
      { label: "Credit Note", href: "/sale/credit-note" },
      { label: "Receipt", href: "/sale/receipt" }
    ]
  },
  {
    label: "Purchase",
    href: "/purchase",
    submenu: [
      { label: "Vendor", href: "/purchase/vendor" },
      { label: "Purchase", href: "/purchase/order" },
      { label: "Debit Note", href: "/purchase/debit-note" },
      { label: "Payment", href: "/purchase/payment" }
    ]
  }
];
