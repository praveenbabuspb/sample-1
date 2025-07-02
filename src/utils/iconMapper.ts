import { ShoppingCart, Pill, Beef, Smartphone, PenTool, Apple, Gift, ShoppingBag, Coffee, Zap, DivideIcon as LucideIcon } from 'lucide-react';

// Icon mapping utility to convert string names to actual icon components
export const iconMap: Record<string, LucideIcon> = {
  ShoppingCart,
  Pill,
  Beef,
  Smartphone,
  PenTool,
  Apple,
  Gift,
  ShoppingBag,
  Coffee,
  Zap,
};

export const getIcon = (iconName: string): LucideIcon => {
  return iconMap[iconName] || ShoppingBag; // Default fallback icon
};