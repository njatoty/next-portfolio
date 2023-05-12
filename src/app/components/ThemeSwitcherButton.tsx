'use client';
import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes"
import { SunIcon, MoonIcon} from "@heroicons/react/24/solid";

const ThemeSwitcherButton = () => {

    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <>
            {
            currentTheme === "dark" ? (
                <div className='p-2 rounded-full bg-slate-800/50 hover:bg-slate-800 hover:cursor-pointer' onClick={() => setTheme('light')}>
                    <SunIcon className='h-8 w-8 cursor-pointer text-yellow-500'/>
                </div>
            ) : (
                <div className='p-2 rounded-full bg-slate-100/50 hover:bg-slate-100 hover:cursor-pointer'  onClick={() => setTheme('dark')}>
                    <MoonIcon className='h-8 w-8 cursor-pointer text-gray-600'/>
                </div>
            ) 
            }
        </>
    )
}

export default ThemeSwitcherButton