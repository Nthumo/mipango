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
        <header className='flex justify-between md:mt-2 ml-4 mr-4 h-[50px]'>
            <div className='flex gap-8'>
                <Menu onClick={onToggle} className='text-black dark:text-white h-[20px] w-[25px] md:h-[40px] md:w-[30px]'/>
                <div className='flex gap-2 items-center'>
                    <img src="/mipangoflogo.png" alt="Mipango logo"  className='h-[25px] md:h-[35px]'/>
                    <h1 className="md:text-2xl font-bold text-green-500">Mipango</h1>
                </div>
            </div>
            <ThemeToggle/>
        </header>
        </>
    )
}