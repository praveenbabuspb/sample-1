import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  onItemClick: (item: NavItem) => void;
  className?: string;
}

export function NavBar({ items, onItemClick, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0]?.name || '');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleItemClick = (item: NavItem) => {
    setActiveTab(item.name);
    onItemClick(item);
  };

  return (
    <div
      className={cn(
        "fixed bottom-4 md:top-6 left-1/2 -translate-x-1/2 z-40 px-4 md:px-0",
        className,
      )}
    >
      <div className="flex items-center gap-1 bg-white/20 dark:bg-slate-900/20 border border-white/30 dark:border-slate-700/40 backdrop-blur-xl py-2 px-2 rounded-full shadow-2xl shadow-blue-500/20">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <button
              key={item.name}
              onClick={() => handleItemClick(item)}
              className={cn(
                "relative cursor-pointer text-xs md:text-sm font-semibold px-3 md:px-5 py-2 md:py-2.5 rounded-full transition-all duration-300 whitespace-nowrap",
                "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400",
                "hover:bg-white/30 dark:hover:bg-slate-800/30",
                isActive && "text-blue-600 dark:text-blue-400 bg-white/40 dark:bg-slate-800/40 shadow-lg"
              )}
            >
              <span className="hidden md:inline relative z-10">{item.name}</span>
              <span className="md:hidden relative z-10">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-gradient-to-r from-blue-500/30 to-indigo-500/30 dark:from-blue-400/30 dark:to-indigo-400/30 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                >
                  {/* Lamp Effect - Top Glow */}
                  <div className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 w-6 md:w-8 h-1 md:h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 rounded-t-full opacity-80">
                    {/* Outer Glow */}
                    <div className="absolute w-12 md:w-16 h-6 md:h-8 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 dark:from-blue-400/30 dark:to-indigo-400/30 rounded-full blur-lg -top-2 md:-top-3 -left-3 md:-left-4" />
                    {/* Middle Glow */}
                    <div className="absolute w-8 md:w-12 h-4 md:h-6 bg-gradient-to-r from-blue-500/40 to-indigo-500/40 dark:from-blue-400/40 dark:to-indigo-400/40 rounded-full blur-md -top-1 md:-top-2 -left-1 md:-left-2" />
                    {/* Inner Glow */}
                    <div className="absolute w-4 md:w-6 h-3 md:h-4 bg-gradient-to-r from-blue-500/50 to-indigo-500/50 dark:from-blue-400/50 dark:to-indigo-400/50 rounded-full blur-sm -top-0.5 md:-top-1 left-1" />
                  </div>
                  
                  {/* Additional Ambient Light */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-400/10 dark:to-indigo-400/10 rounded-full blur-xl scale-150" />
                </motion.div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}