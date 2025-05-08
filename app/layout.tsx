

import type { Metadata } from "next";
import { ThemeProvider } from "./components-mipango/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mipango",
  description: "Mipango App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  lang="en" suppressHydrationWarning>
      <body className="bg-zinc-300 dark:bg-zinc-800 text-black dark:text-white h-screen">
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
