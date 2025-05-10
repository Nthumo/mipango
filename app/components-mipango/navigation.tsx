'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Star,
  Loader,
  Settings,
  CircleCheckBig,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Header from './header';

const navItems = [
  { label: 'Overview', path: 'overview', icon: LayoutDashboard },
  { label: 'Starred', path: 'starred', icon: Star },
  { label: 'Completed', path: 'completed', icon: CircleCheckBig },
];

const bottomItems = [
  { label: 'Settings', path: '/settings', icon: Settings },
];

export default function Sidebar({ collapsed }: { collapsed: boolean }) {
  const router = useRouter();
  const pathname = usePathname();
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <>

      <aside
        className={` border-r flex flex-col justify-between shadow transition-all duration-300${collapsed ? 'w-20' : 'w-64'
          }`}
      >
        <div className="flex flex-col justify-between h-screen text-black dark:text-white">
          <nav className="space-y-2 mt-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded hover:bg-zinc-700 transition ${isActive ? 'bg-zinc-900 text-green-500 font-semibold' : ''
                    }`}
                >
                  <Icon />
                  {!collapsed && <span>{item.label}</span>}
                </button>
              );
            })}
          </nav>

          {/* Bottom Nav Items */}
          <nav className="space-y-2 mb-4">
            <hr className="border-gray-700" />
            {bottomItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className="w-full flex items-center gap-3 px-4 py-2 rounded hover:bg-zinc-700 transition"
                >
                  <Icon />
                  {!collapsed && <span>{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>

  );
}
