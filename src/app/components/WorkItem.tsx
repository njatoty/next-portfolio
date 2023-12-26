'use client'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaGithub, FaGlobe } from 'react-icons/fa'

type Props = {
    imgs: Array<any>,
    github: string,
    demo: string
}
const WorkItem = ({ imgs, github, demo }: Props) => {
    const [isMouseEnter, setIsMouseEnter] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = imgs.length;
    var timeId: NodeJS.Timer;
    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0) ? totalSlides - 1 : prev - 1);
    }
    const handleNext = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1) ? 0 : prev + 1);
    }

    useEffect(() => {

        //   if (imgs.length > 1 )
        //     timeId = setInterval(() => {
        //         handleNext();
        //     }, 6000);

        return () => {
            // timeId && clearInterval(timeId);
        }
    }, [imgs]);


    return (
        <div className='relative transition-transform duration-300 overflow-hidden p-[1px]'
            onMouseEnter={() => {
                setIsMouseEnter(true);
                timeId && clearInterval(timeId);
            }}
            onMouseLeave={() => setIsMouseEnter(false)}
        >
            {
                imgs.length > 1 &&
                <motion.button className={`btn-slider prev`} onClick={handlePrev}
                    animate={{ x: isMouseEnter ? '0' : '-200%', y: '-50%' }}
                >
                    <ChevronLeftIcon className='w-6 h-6' />
                </motion.button>
            }
            {/* Slide container */}
            <motion.div className='flex' animate={{ x: `${-(currentSlide * 100)}%` }}>
                {
                    imgs.map((img, index) =>
                        <Image key={index} className={`slide w-full ${index !== currentSlide && 'opacity-0'}`}
                            alt='/' fill={false} placeholder='empty' width='1364' height='660'
                            src={`/images/${img}`}
                        />
                    )
                }
            </motion.div>
            {
                imgs.length > 1 &&
                <motion.button className={`btn-slider next`} onClick={handleNext}
                    animate={{ x: isMouseEnter ? '0' : '200%', y: '-50%' }}
                >
                    <ChevronRightIcon className='w-6 h-6' />
                </motion.button>
            }
        </div>
    )
}

export default WorkItem