'use client'
import * as React from 'react'
import { Moon, Sun, Menu } from "lucide-react"
import ThemeToggle from './theme-toggle'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Header({ onToggle }: { onToggle: () => void}) {

    return(
        <>
        <header className='fixed w-full flex justify-between h-[55px] bg-zinc-200 dark:bg-zinc-800 border-b'>
            <div className='flex gap-8 ml-4 mt-2'>
                <Menu onClick={onToggle} className='text-black dark:text-white h-[20px] w-[25px] md:h-[40px] md:w-[30px] '/>
                <div className='flex gap-2 items-center'>
                    <img src="/mipangoflogo.png" alt="Mipango logo"  className='h-[25px] md:h-[35px]'/>
                    <h1 className="md:text-2xl font-bold text-green-500">Mipango</h1>
                </div>
            </div>
            <span className='mr-4 mt-2'>
                <ThemeToggle />
            </span>
        </header>
        </>
    )
}