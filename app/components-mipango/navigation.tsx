'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Star,
  Plus,
  Loader,
  Settings,
  CircleCheckBig,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import CreateTask from './createtask';
import { Button } from '@/components/ui/button';
import { Span } from 'next/dist/trace';

const navItems = [

  { label: 'Overview', path: 'overview', icon: LayoutDashboard },
  { label: 'Starred', path: 'starred', icon: Star },
  { label: 'Completed', path: 'completed', icon: CircleCheckBig },
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
        className={`bg-zinc-300 dark:bg-zinc-950 mt-14 transition-all duration-300 p-2${collapsed ? 'w-2' : 'w-64'
          }`}
      >
        <div className="flex flex-col justify-between text-black dark:text-white p-2">
          <div>
            {!collapsed &&
              <span>
                <CreateTask/>
              </span>}
          </div>
          <nav className="space-y-2 mt-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;
              return (

                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 transition ${isActive ? 'bg-zinc-900 text-green-500 font-semibold' : ''
                    }`}
                >
                  {!collapsed && <Icon className='w-4 md:w-5 h-4 md:h-5' />}
                  {!collapsed && <span className='text-[14px] md:text-[16px]'>{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
