'use client';

import { useEffect, useState } from 'react';
import Layout from '../components-mipango/layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {

  return (
    <>
      <Layout>
        <div className="flex bg-zinc-300 dark:bg-zinc-900 text-gray-800 dark:text-white">
          <main className="flex-1 p-6">
            <h1 className="text-2xl font-bold mb-4">Settings</h1>
          </main>
        </div>
      </Layout>
    </>
  );
}
