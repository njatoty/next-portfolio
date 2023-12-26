'use client'
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import { Bars3Icon, BookOpenIcon, BriefcaseIcon, CheckBadgeIcon, ChevronDoubleRightIcon, CodeBracketIcon, GlobeAltIcon, HomeIcon, IdentificationIcon, MinusIcon, PencilIcon, PhoneIcon } from '@heroicons/react/24/solid'
import image from './images/me.jpg'
import smiling from './images/smile.png'
import serious from './images/serious.png'
import pl from './images/pl.png'
import cimage from './images/contact.png'
import logo from './mcode-Recovered.png'
import about from './images/about.png'
import Image from "next/image";
import { FaCode, FaEnvelope, FaFacebook, FaGithub, FaHandPaper, FaLinkedin, FaRegHandPaper, FaTimes } from 'react-icons/fa';
import { useEffect, useRef, useState } from "react";
import WorkItem from "./components/WorkItem";
import { Form } from "./components/Input";
import SocialMediaLink from "./components/SocialMediaLink";
import ThemeSwitcherButton from "./components/ThemeSwitcherButton";
import data from "./utils/data"
import publicData from "./utils/data";
import { motion } from "framer-motion";

export default function Home() {
  
  const bgImageStyle = {
    backgroundImage: `url("/line.svg")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  const bgImageSkill = {
    // backgroundImage: `url("/linelr.svg")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  
  const bgImageContact = {
    backgroundImage: `url("/contactbg.svg")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  const handleNav = () => {
    setIsOpen(!isOpen);
  }
  
  useEffect(() => {
    const height = homeRef.current?.offsetHeight || 0; 
    const onScroll = (ev: Event) => {
      const { target } = ev;
      if (navRef.current) {
        if (scrollY > height)
          navRef.current.classList.add('fixed-nav');
        else 
          navRef.current.classList.remove('fixed-nav');
      }
    }
    document.body.onscroll = onScroll;
    
    return () => {
      document.body.onscroll = null;
    }
  }, []);

  return (
    
    <main className="flex min-h-screen flex-col items-center bg-gray-900 antialiased">
      <div ref={navRef} className={`header flex items-center justify-between w-full px-4 md:px-8 lg:px-10 z-50
       absolute top-11 left-0 transition-all ease-in duration-0 border-transparent`}>
        <div className="logo p-1">
          <div className="flex items-center justify-center gap-2">
            <Image src={logo} alt="logo" height={100} width={100} className="w-9 h-9 md:w-12 md:h-12 lg:w-14 lg:h-14" />
            <p className="font-bold hidden">
              <span className="text-cyan-500">&lt;</span>
              <span className="text-slate-200">MiCODE</span>
              <span className="text-cyan-500">&gt;</span>
            </p>
          </div>
        </div>
        <div className="menu hidden sm:flex">
          {/* <LinkScroll to="home" smooth={true} spy={true} offset={-100} duration={500} className="menu-item">
            Home
          </LinkScroll> */}
          <LinkScroll to="about" smooth={true} spy={true} offset={-100} duration={500} className="menu-item">
            About
          </LinkScroll>
          <LinkScroll to="skill" smooth={true} spy={true} offset={-100} duration={500} className="menu-item">
            Skill
          </LinkScroll>
          <LinkScroll to="work" smooth={true} spy={true} offset={-100} duration={500} className="menu-item">
            Work
          </LinkScroll>
          <LinkScroll to="contact" smooth={true} spy={true} offset={-100} duration={500} className="menu-item">
            Contact
          </LinkScroll>
        </div>
        <button className="logo bg-transparent border-0 p-1 rounded-md hover:bg-slate-200 hover:dark:bg-slate-800 inline sm:hidden" onClick={handleNav}>
          <Bars3Icon className="w-8 h-8 md:w-10 md:h-10 text-slate-500"/>
        </button>
        {/* <div className="hidden sm:inline">
          <ThemeSwitcherButton />
        </div> */}
      </div>
      <div className={`menu-layout fixed top-0 ${isOpen ? 'left-0 sm:left-[-200%]' : 'left-[-200%]'} transition-all ease-in duration-300 z-50
      bg-white/90 backdrop-blur-lg h-screen w-full shadow-2xl border-r-2 border-slate-800`}>
        <div className="py-4 px-4 mb-2 flex items-start justify-between">
          <div className="logo p-1">
            {/* <FaCode className="w-8 h-8 md:w-12 md:h-12 text-cyan-600"/> */}
            <Image src={logo} alt="logo" height={120} width={120} className="w-16 h-16" />
          </div>
          {/* <ThemeSwitcherButton /> */}
          <button className="close p-2 text-slate-300 hover:text-slate-50 hover:bg-slate-800/60" onClick={handleNav}>
            <FaTimes className="w-6 h-6 " />
          </button>
        </div>
        <div className="w-full relative px-8 flex flex-col h-[100svh] justify-between overflow-y-auto">
          <div>
            <div className="border-b border-slate-700">
              <h2 className="text-xl px-4 py-3 text-slate-900 dark:text-slate-300 hidden">Let's build a beautiful website</h2>
            </div>
            <div className="flex flex-col flex-grow gap-5 px-4 py-6">
              <LinkScroll to="home" smooth={true} spy={true} offset={-100} duration={500}
                className="menu-item-layout" onClick={() => setIsOpen(false)}>
                <HomeIcon className="h-6 w-6" />
                Home
              </LinkScroll>
              <LinkScroll to="about" smooth={true} spy={true} offset={-100} duration={500}
                className="menu-item-layout" onClick={() => setIsOpen(false)}>
                <IdentificationIcon className="h-6 w-6" />
                About
              </LinkScroll>
              <LinkScroll to="skill" smooth={true} spy={true} offset={-100} duration={500}
                className="menu-item-layout" onClick={() => setIsOpen(false)}>
                <BookOpenIcon className="h-6 w-6" />
                Skill
              </LinkScroll>
              <LinkScroll to="work" smooth={true} spy={true} offset={-100} duration={500}
                className="menu-item-layout" onClick={() => setIsOpen(false)}>
                <BriefcaseIcon className="h-6 w-6" />
                Work
              </LinkScroll>
              <LinkScroll to="contact" smooth={true} spy={true} offset={-100} duration={500}
                className="menu-item-layout" onClick={() => setIsOpen(false)}>
                <PhoneIcon className="h-6 w-6" />
                Contact
              </LinkScroll>
            </div>
          </div>
          <div className="py-4 px-4 border-t border-slate-700">
            <h2 className="text-xl py-3 text-secondary uppercase font-semibold">Let's connect</h2>
            <SocialMediaLink />
          </div>
        </div>
      </div>
      {/* Header section */}
      <div id="home" ref={homeRef} className="w-full min-h-[756px] h-[100svh] flex items-center justify-center bg-transparent home bg-dark" style={bgImageStyle}>
        <div className="section flex items-center justify-center max-md:flex-col px-10 max-md:px-5 overflow-x-hidden">
          <div className="left-side flex-1">
            <p className="text-left text-slate-300 max-md:text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
              Hello, I am <span className="text-secondary font-bold">Njatotiana</span>
            </p>
            <p className="text-left mt-2 max-md:text-center text-slate-500 dark:text-slate-300 text-lg sm:text-xl lg:text-2xl">
              A passionate <span className="font-semibold">Web Developer</span> from Madagascar.
            </p>
            <p className="quote text-left max-md:text-center md:text-lg text-slate-400 my-2 2xl:my-8 italic">
              I design and code beautifully simple things, I am passionate about my work.
            </p>
            <div className="max-md:hidden bg-secondary w-full h-[3px] rounded-full my-4" />
            <div className="max-md:hidden social flex items-center justify-start gap-2 sm:gap-4 my-6">
              <Link href="#" className="social-media-item">
                <FaLinkedin className="social-media-icon" />
              </Link>
              <Link href="#" className="social-media-item">
                <FaFacebook className="social-media-icon" />
              </Link>
              <Link href="#" className="social-media-item">
                <FaGithub className="social-media-icon" />
              </Link>
              <Link href="#" className="social-media-item">
                <FaEnvelope className="social-media-icon" />
              </Link>
            </div>
          </div>
          <div className="right-side flex-1 flex flex-col items-center justify-center py-3">
            <div className="relative flex items-center justify-center my-8 w-44 h-52 md:w-52 md:h-64 lg:w-64 lg:h-72">
              <motion.div className="absolute top-0 bg-primary profile-shape"
                initial={{x: 0 }}
                animate={{y: -10, rotate: '-45deg', scale: 1}}
              ></motion.div>
              <motion.div className="absolute top-0 left-0 bg-secondary/60 profile-shape"
                initial={{y: 0 }}
                animate={{x: '0px', rotate: '110deg', scale: 1.27}}
              ></motion.div>
              <motion.div className="absolute top-0 flex items-center justify-center border-0 border-cyan-800 bg-white profile-shape overflow-hidden"
                initial={{y: -10 }}
                animate={{y: -10 }}
              >
                <Image src={image} alt="me" className="w-fill h-fill" />
              </motion.div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="flex-shrink-0 bg-primary h-2 w-2 rotate-45 opacity-30"></span>
              <span className="flex-shrink-0 bg-primary h-4 w-4 rotate-45 opacity-40"></span>
              <span className="flex-shrink-0 bg-primary h-5 w-5 rotate-45 opacity-60"></span>
              <span className="flex-shrink-0 bg-primary h-6 w-6 rotate-45 opacity-70"></span>
              <span className="flex-shrink-0 bg-primary h-7 w-7 rotate-45 hidden lg:flex opacity-80"></span>
              <a href="#" className="cv-button whitespace-nowrap">Download my CV </a>
              <span className="flex-shrink-0 bg-primary h-7 w-7 rotate-45 hidden lg:flex opacity-80"></span>
              <span className="flex-shrink-0 bg-primary h-6 w-6 rotate-45 opacity-70"></span>
              <span className="flex-shrink-0 bg-primary h-5 w-5 rotate-45 opacity-60"></span>
              <span className="flex-shrink-0 bg-primary h-4 w-4 rotate-45 opacity-40"></span>
              <span className="flex-shrink-0 bg-primary h-2 w-2 rotate-45 opacity-30"></span>
            </div>
            <div className="md:hidden social flex items-center justify-center gap-2 sm:gap-4 mt-4  mb-6">
              <Link href="#" className="social-media-item">
                <FaLinkedin className="social-media-icon" />
              </Link>
              <Link href="#" className="social-media-item">
                <FaFacebook className="social-media-icon" />
              </Link>
              <Link href="#" className="social-media-item">
                <FaGithub className="social-media-icon" />
              </Link>
              <Link href="#" className="social-media-item">
                <FaEnvelope className="social-media-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* ABOUT */}
      <div id='about' className="w-full min-h-screen justify-center flex bg-white about">
        <div className="section my-auto">
            <h1 className="my-4 md:my-0 mb-8 text-center font-bold text-2xl lg:text-3xl xl:text-4xl text-dark max-md:text-center">About me</h1>
            <div className="responsive-text flex items-center max-md:flex-wrap md:gap-2 gap-1">
              <div className="flex-grow px-1">
                <div className="about-item flex-grow text-dark text-justify flex flex-col gap-4">
                  <div className="about-section">
                    <div className="about-section-icon">
                      <IdentificationIcon className="w-full h-full" />
                    </div>
                    {/* <p className="text-cyan-600 text-base float-left">Personal infos</p> */}
                  </div>
                  <p>
                    My fullname is ANDRIAMANIRISOA Njatotiana Fiononana. A pationate full-stack web developer dedicated to crafting scalable solutions for web application.
                    With a comprehensive understanding of front-end and back-end technologies,
                    I strive to create seamless user experiences through coding and problem-solving skills.
                  </p>
                  {/* <p>I have a strong understanding of HTML & CSS, Javascript, Nodejs, React, SQL, and PHP, and I am always eager to learn more. In my portfolio, you will find examples of my work including a Quiz game application and an example of a portfolio.</p> */}
                  {/* <p>In my free time, I enjoy exploring new technologies and working on personal projects. I am passionate about web development and am dedicated to writing clean, efficient, and maintainable code. Thank you for taking the time to review my portfolio, and I look forward to discussing any potential opportunities with you.</p> */}
                </div>

                <div className="about-item mb-2 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 text-base max-md:text-sm xl:text-lg">
                  <div className="about-section">
                    <div className="about-section-icon">
                      <BriefcaseIcon className="w-full h-full" />
                    </div>
                  </div>
                  <div className="background-about">
                    <h2 className="font-semibold text-secondary">Professional Background</h2>
                    A <span>Web Developer</span> with 2 years of experience.
                    <p className="italic text-gray-900">Solumada, 04 July 2022</p>
                  </div>
                  <div className="background-about">
                    <h2 className="font-semibold text-secondary">Academic Background</h2>
                    A bachelor of science in <span>Computer Science</span>.
                    <p className="italic text-gray-900">Université Adventist Zurcher,  14 November 2021</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* SKILL */}
      <div id="skill" className="w-full flex flex-col skill">
        <div className="section">
            <h1 className="mb-8 text-center font-bold text-2xl lg:text-3xl xl:text-4xl text-white max-md:text-center">My skills</h1>
            <div className="responsive-text w-full flex-grow flex flex-col mx-auto bg-white p-6 md:p-8 lg:p-14 mb-12" style={bgImageSkill}>
              <div className="skill-card frontend">
                <div className="skill-title">
                  <div className="skill-icon w-fit h-fit p-3 bg-transparent text-slate-100 rounded-full">
                    <PencilIcon className="w-4 h-4 md:w-5 h:h-5 lg:w-6 lg:h-6 hidden" />
                  </div>
                  <h2 className="text-base md:text-lg lg:text-xl font-bold mb-2">Frontend</h2>
                </div>
                <div className="w-full px-6 md:px-10 py-6">
                  <div className="w-full text-center">
                    <p className="text-slate-700 italic">I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                  </div>
                  <div className="skill-grid">
                    {/* Thinngs i like to desing */}
                    <div className="text-left">
                      <h3 className="text-secondary font-semibold">Things i like to design</h3>
                      <p className="text-dark pl-2">
                        {data.frontend.desires.join(', ')}
                      </p>
                    </div>
                    {/* Languages frontend */}
                    <div className="text-left">
                      <h3 className="text-secondary font-semibold">Languages i use</h3>
                      <div className="text-dark pl-2">
                        {
                          data.frontend.languages.map((lang, index) =>
                            <div key={index} className="my-1">
                              <span className="text-slate-800 font-bold">* {lang.title}:</span>
                              <p className="pl-2">
                                { lang.data.map((langItem, index) => langItem.title).join(', ') }
                              </p>
                            </div>
                        )}
                      </div>
                    </div>
                    {/* Desing tools */}
                    <div className="text-left">
                      <h3 className="text-secondary font-semibold">Design tools</h3>
                      <ul className="text-dark pl-2">
                        {
                          data.frontend.tools.map((tool, index) => 
                            <li key={index} className="flex-col items-center gap-3  my-1">
                              <p className="text-slate-800 font-bold">* {tool.title}:</p>
                              <span className="pl-2">{tool.data.join(', ')}.</span>
                            </li>
                          )
                        }
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
              <div className="skill-card backend">
                <div className="skill-title">
                  <h2 className="text-base md:text-lg lg:text-xl font-bold mb-2">Backend</h2>
                  <div className="skill-icon w-fit h-fit p-3 bg-transparent text-slate-100 rounded-full">
                    <CodeBracketIcon className="w-4 h-4 md:w-5 h:h-5 lg:w-6 lg:h-6 hidden" />
                  </div>
                </div>
                <div className="w-full px-6 md:px-10 py-6">
                  <div className="w-full text-center">
                    <p className="text-dark italic">I like to code things from scratch, and enjoy bringing ideas to life in the browser</p>
                  </div>
                  <div className="skill-grid">
                    {/* Thinngs i like to code */}
                    <div className="text-left">
                      <h3 className="text-secondary font-semibold">Things i like to code</h3>
                      <p className="text-dark pl-2">
                        {data.backend.desires.join(', ')}
                      </p>
                    </div>
                    {/* Languages i use */}
                    <div className="text-left">
                      <h3 className="text-secondary font-semibold">Languages i use</h3>
                      <div className="text-dark pl-2">
                        {
                          data.backend.languages.map((lang, index) =>
                            <div key={index} className="my-1">
                              <span className="text-slate-800 font-bold">* {lang.title}:</span>
                              <p className="pl-2">
                                { lang.data.map((langItem, index) => langItem.title).join(', ') }.
                              </p>
                            </div>
                        )}
                      </div>
                    </div>

                    <div className="text-left">
                      <h3 className="text-secondary font-semibold">Development tools</h3>
                      <ul className="text-black pl-2">
                        {
                          data.backend.tools.map((tool, index) => 
                            <li key={index} className="flex-col items-center gap-3 my-1">
                              <span className="text-slate-800 font-bold">* {tool.title}:</span>
                              <p className="pl-2">{tool.data.join(', ')}.</p>
                            </li>
                          )
                        }
                      </ul>
                    </div>
                  </div>

                  </div>
              </div>
            </div>
        </div>
      </div>
      
      {/* WORK */}
      <div id="work" className="w-full min-h-screen work">
        <div className="section">
          <h1 className="mb-8 text-center font-bold text-2xl lg:text-3xl xl:text-4xl text-primary max-md:text-center">My works</h1>
          <div className="responsive-text grid max-sm:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-4 py-8">
            {
              publicData.work.map((work, index) =>   
              <div className="w-full p-3 rounded-md bg-white border border-gray-100" key={index}>
                <div className="flex flex-col">
                  <div className="work-project-title">
                    <h1 className="text-base lg:text-lg">{work.title}</h1>
                    <div className="link flex justify-between gap-4">
                      <Link href="#" className="text-slate-300 hover:text-secondary">
                        <GlobeAltIcon className="w-6 h-6" />
                      </Link>
                      <Link href="#" className="text-slate-300 hover:text-secondary">
                        <CodeBracketIcon className="w-6 h-6" />
                      </Link>
                    </div>
                  </div>
                  <div className="work-screenshot">
                    <WorkItem demo={work.link} github={work.github} imgs={work.image} />
                  </div>
                </div>
                <div className="paragraph text-dark">
                  <p className="mb-1">{work.description}</p>
                  {/* Key */}
                  <ul className="">
                    {
                      work.key.map((key, index) => (
                        <li className="flex items-center gap-1" key={index}>
                          <CheckBadgeIcon className="text-warning w-5 h-5" />
                          <span>{key}</span>
                        </li>
                      ))
                    }
                  </ul>
                  {/* TechStack */}
                  <p className="text-gray-700">
                    <span className="text-danger whitespace-nowrap">* Tech Stack: </span>
                      { work.techStack.join(', ') }
                  </p>
                  {/* Libraries */}
                  <p className="text-gray-700">
                    <span className="text-danger whitespace-nowrap">* Libraries/Tools: </span>
                      { work.libraries.join(', ') }
                  </p>
                </div>
              </div>
              )
            }
          </div>
        </div>
      </div>
      
      {/* CONTACT */}
      <div id="contact" className="w-full contact min-h-screen">
        <div className="section">
            <h1 className="mb-8 text-center font-bold text-2xl lg:text-3xl xl:text-4xl text-primary max-md:text-center">Contact</h1>
            <div className="flex flex-col items-center gap-0 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
                <div className="flex items-center justify-center">
                  <div className="box"> 
                    <div className="img p-6 flex items-center justify-center">
                      <Image src={cimage} alt="" className="" width={250} height={200}/>
                    </div>
                    <h3 className="text-dark text-center md:text-left">ANDRIAMANIRISOA Njatotiana Fiononana</h3>
                    <p className="text-gray-800 font-thin mb-6 text-center md:text-left">I am available to do freelance or work in full-time, so let's talk by connecting with: </p>
                    <div className="flex items-center md:justify-normal justify-center w-full">
                      <SocialMediaLink />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="box">
                      <h1 className="text-2xl text-primary uppercase">Get in touch</h1>
                      <Form />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      {/* footer */}
      <footer className=" bg-slate-100 dark:bg-slate-900 py-4 lg:py-8 border-t border-slate-200 dark:border-slate-700/60 w-full text-slate-00 dark:text-slate-200 text-center">
        Copyright&copy; 2023
      </footer>
    </main>
  )
}
