'use client';

import { useState } from 'react';
import Sidebar from './navigation';
import Header from './header';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
    <Header onToggle={() => setCollapsed(!collapsed)} />
    <div className="flex h-screen bg-zinc-300 dark:bg-zinc-900 text-white">
      <Sidebar collapsed={collapsed} />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-4 overflow-auto">{children}</main>
      </div>
    </div>
    </>
  );
}
