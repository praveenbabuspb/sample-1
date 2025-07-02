export interface NavItem {
  name: string;
  url: string;
  icon: string; // We'll use string for icon names to make it easier to manage
}

export const categories: NavItem[] = [
  { name: "Supermarket", url: "/supermarket", icon: "ShoppingCart" },
  { name: "Pharmacy", url: "/pharmacy", icon: "Pill" },
  { name: "Meat", url: "/meat", icon: "Beef" },
  { name: "Electronics", url: "/electronics", icon: "Smartphone" },
  { name: "Stationary", url: "/stationary", icon: "PenTool" },
  { name: "Fruits & Vegetables", url: "/fruits-vegetables", icon: "Apple" },
  { name: "Gifts", url: "/gifts", icon: "Gift" },
];