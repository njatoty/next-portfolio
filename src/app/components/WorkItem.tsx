'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaGithub, FaGlobe } from 'react-icons/fa'

type Props = {
    img: string | any,
    github: string,
    demo: string
}
const WorkItem = ({ img, github, demo } : Props) => {
    const [isMouseEnter, setIsMouseEnter] = useState(false);
  return (
    <div className='relative p-1 overflow-hidden' onMouseEnter={() => setIsMouseEnter(true)} onMouseLeave={() => setIsMouseEnter(false)}>
        <Image alt='/' fill={false} placeholder='empty' width='800' height='600' src={img} />
        <div className={`absolute bg-slate-900/10 backdrop-blur-sm shadow-lg ${isMouseEnter ? 'opacity-100' : 'opacity-0'} transition-all ease-in duration-200 top-0 left-0 h-full w-full flex items-center justify-center gap-5`}>
            <div className="flex items-center gap-3 text-slate-200 px-4 py-2 shadow-md bg-cyan-700 hover:bg-cyan-600 rounded-lg hover:cursor-pointer">
                <FaGithub className='w-6 h-6' /> Code
            </div>
            <div className="flex items-center gap-3 text-slate-200 px-4 py-2 shadow-md bg-cyan-700 hover:bg-cyan-600 rounded-lg hover:cursor-pointer">
                <FaGlobe className='w-6 h-6' /> Demo
            </div>
        </div>
    </div>
  )
}

export default WorkItem