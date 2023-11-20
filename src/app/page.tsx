'use client'
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import { Bars3Icon, BookOpenIcon, BriefcaseIcon, CodeBracketIcon, GlobeAltIcon, HomeIcon, IdentificationIcon, PencilIcon, PhoneIcon } from '@heroicons/react/24/solid'
import image from './images/profile.jpg'
import pl from './images/pl.png'
import cimage from './images/contact.png'
import Image from "next/image";
import { FaCode, FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa';
import { useState } from "react";
import WorkItem from "./components/WorkItem";
import { Form } from "./components/Input";
import SocialMediaLink from "./components/SocialMediaLink";
import ThemeSwitcherButton from "./components/ThemeSwitcherButton";

export default function Home() {
  
  const bgImageStyle = {
    backgroundImage: `url("/line.svg")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom'
  }
  const bgImageSkill = {
    backgroundImage: `url("/linelr.svg")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: ''
  }
  
  const bgImageContact = {
    backgroundImage: `url("/contactbg.svg")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  }
  

function calculer (ex: Array<number>) {
  const result = [];
  console.log(ex);
  const unicNumber = (n: number) => {
    if (n < 10) return n;
    
    let gt = `${n}`.split('').map(e => +e);
    return gt.reduce((a, b) => a+b);
  }
  for (let i = 0; i < ex.length; i++) {
      const start = ex[i];
      const next = ex[i + 1];
      if (next) {
        result.push(unicNumber(start + next));
      } else {
        if (result.length > 0) {
          calculer(result);
        }
      }
  }
}
calculer([ 5, 1, 1, 2, 6])

  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between bg-white dark:bg-slate-900 overflow-x-hidden">
      <div className="header flex items-center justify-between fixed w-full px-4 md:px-8 lg:px-10 py-2 md:py-3 z-50
       bg-white/30 dark:bg-slate-950/30 border-b border-slate-300 dark:border-slate-700/80 backdrop-blur-md">
        <div className="logo p-1">
          <FaCode className="w-8 h-8 md:w-12 md:h-12 text-cyan-600"/>
        </div>
        <div className="menu hidden sm:flex">
          <LinkScroll to="home" smooth={true} spy={true} offset={-100} duration={500} className="menu-item">
            Home
          </LinkScroll>
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
        <div className="hidden sm:inline">
          <ThemeSwitcherButton />
        </div>
      </div>
      <div className={`menu-layout fixed top-0 ${isOpen ? 'left-0 sm:left-[-100%]' : 'left-[-100%]'} transition-all ease-in duration-300 z-50
      bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg h-screen w-full shadow-2xl border-r-2 border-slate-800`}>
        <div className="py-4 px-4 mb-2 flex items-start justify-between">
          <div className="logo p-1">
            <FaCode className="w-8 h-8 md:w-12 md:h-12 text-cyan-600"/>
          </div>
          <ThemeSwitcherButton />
          <button className="close p-2 text-slate-300 hover:text-slate-50 hover:bg-slate-800/60" onClick={handleNav}>
            <FaTimes className="w-6 h-6 " />
          </button>
        </div>
        <div className="w-full relative px-8 flex flex-col h-[90%] justify-between overflow-y-auto">
          <div>
            <div className="border-b border-slate-700">
              <h2 className="text-xl px-4 py-3 text-slate-900 dark:text-slate-300">Let's build a beautiful website</h2>
            </div>
            <div className="flex flex-col gap-5 px-4 py-6">
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
            <h2 className="text-xl py-3 text-cyan-700 uppercase font-semibold">Let's connect</h2>
            <SocialMediaLink />
          </div>
        </div>
      </div>
      {/* Header section */}
      <div id="home" className="section w-full min-h-[850px] h-screen flex items-center justify-center" style={bgImageStyle}>
        <div className="flex items-center flex-col justify-center mt-6">
          <p className="text-slate-500 dark:text-slate-300 text-xl sm:text-2xl lg:text-3xl mb-3 font-thin">Hello, I am <span className="text-cyan-700 font-semibold">Njatotiana</span></p>
          <h1 className="text-center text-4xl sm:text-5xl xl:text-6xl text-slate-700 dark:text-slate-100 px-10">A Full stack Web Developer</h1>
          <p className="text-center text-lg md:text-xl text-slate-500 italic my-3 md:my-8 px-3">I design and code beautifully simple things, I am passionate about my work.</p>
          <Image alt="profile" src={image} className="my-6 rounded-full border-[3px] border-cyan-900/50 w-44 h-w-44 md:w-60 md:h-60 lg:w-72 lg:h-72"  />
          <div className="social flex items-center justify-center gap-4 sm:gap-6 my-4">
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
      {/* ABOUT */}
      <fieldset id='about' className="section w-full min-h-[50vh] bg-slate-200 dark:bg-[#102236] pb-16">
        <legend className="text-center w-full">
          <div className="w-full flex flex-col items-center justify-center relative">
            <div className="section-tag bg-white dark:bg-slate-200 border-slate-200 dark:border-[#102236]">
              <IdentificationIcon className="w-8 h-8 lg:w-10 lg:h-10 text-cyan-800" />
            </div>
          </div>
        </legend>
        <div className="px-4 md:px-12">
            <h1 className="text-cyan-800 dark:text-cyan-200/50 text-center mx-auto italic text-xl lg:text-2xl">About</h1>
            <div className="my-12 lg:my-14 text-slate-800 dark:text-slate-300 text-justify text-sm md:text-lg lg:text-xl flex flex-col gap-4">
              <p>I started coding at 19 years old and I became a web developer with 2 years of experience. I specialize in full stack developer and have worked on building web-based plateforms for data entry, and for task planning.</p>
              <p>I have a strong understanding of HTML & CSS, Javascript, Nodejs, React, SQL, and PHP, and I am always eager to learn more. In my portfolio, you will find examples of my work including a Quiz game application and an example of a portfolio.</p>
              <p>In my free time, I enjoy exploring new technologies and working on personal projects. I am passionate about web development and am dedicated to writing clean, efficient, and maintainable code. Thank you for taking the time to review my portfolio, and I look forward to discussing any potential opportunities with you.</p>
            </div>
        </div>
      </fieldset>

      {/* SKILL */}
      <fieldset id="skill" className="section w-full">
        <legend className="text-center bg-gradient-to-b from-slate-200 dark:from-[#102236] from-50% to-transparent to-50% w-full">
          <div className="w-full flex flex-col items-center justify-center relative">
            <div className="section-tag border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-200">
              <BookOpenIcon className="w-8 h-8 lg:w-10 lg:h-10 text-cyan-800" />
            </div>
          </div>
        </legend>
        <div className="px-1 md:px-12" style={bgImageSkill}>
            <h1 className="text-cyan-800 dark:text-cyan-200/50 text-center mx-auto italic text-xl lg:text-2xl">Skill</h1>
            <div className="flex flex-wrap justify-center mx-auto py-12 lg:text-lg">
              <div className="skill-card">
                <div className="w-full text-center">
                  <div className="w-fit mx-auto p-3 bg-cyan-700 text-slate-100 rounded-full">
                    <PencilIcon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl text-cyan-700 font-bold mb-2">Frontend</h2>
                  <p className="text-slate-600 dark:text-slate-300 italic">I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                </div>
                <div className="text-center">
                  <h3 className="text-cyan-600/70 font-semibold">Things i like to design</h3>
                  <p className="text-slate-800 dark:text-slate-200">Logos, Web, UI, UX</p>
                </div>
                <div className="text-center">
                  <h3 className="text-cyan-600/70 font-semibold">Dev tools:</h3>
                  <ul className="text-slate-800 dark:text-slate-200">
                      <li>PHOTOSHOP CC & CS6</li>
                      <li>Visual Studio Code</li>
                      <li>Pen & paper</li>
                      <li>Bootstrap</li>
                      <li>Tailwind</li>
                      <li>Fontawesome</li>
                      <li>Heroicons</li>
                  </ul>
                </div>
              </div>
              <div className="skill-card">
                <div className="w-full text-center">
                  <div className="w-fit mx-auto p-3 bg-cyan-700 text-slate-100 rounded-full">
                    <CodeBracketIcon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl text-cyan-700 font-bold mb-2">Backend</h2>
                  <p className="text-slate-600 dark:text-slate-300 italic">I like to code things from scratch, and enjoy bringing ideas to life in the browser</p>
                </div>
                <div className="text-center">
                  <h3 className="text-cyan-600/70 font-semibold">Languages i use</h3>
                  <p className="text-slate-800 dark:text-slate-200">
                    HTML, CSS, <br />
                    Javascript (Nodejs, ReactJS, Nextjs), <br />
                    PHP (Codeigniter 4), <br />
                    MySQL, MongoDB
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-cyan-600/70 font-semibold">Design tools:</h3>
                  <ul className="text-slate-800 dark:text-slate-200">
                      <li>PHOTOSHOP CC & CS6</li>
                      <li>Visual Studio Code</li>
                      <li>Pen & paper</li>
                      <li>Bootstrap</li>
                      <li>Fontawesome</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </fieldset>
      
      {/* WORK */}
      <fieldset id="work" className="section w-full min-h-screen bg-slate-200 dark:bg-[#102236]">
        <legend className="text-center w-full">
          <div className="w-full flex flex-col items-center justify-center relative">
            <div className="section-tag border-slate-200 dark:border-[#102236] bg-white dark:bg-slate-200">
              <BriefcaseIcon className="w-8 h-8 lg:w-10 lg:h-10 text-cyan-800" />
            </div>
          </div>
        </legend>
        <div className="px-3 md:px-12">
          <h1 className="text-cyan-800 dark:text-cyan-200/50 text-center mx-auto italic text-xl lg:text-2xl">Work</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-14">
            <div className="w-full px-2 py-1">
              <div className="title">
                <h1 className="text-cyan-600 text-xl">QUIZ game</h1>
                <div className="link flex justify-between gap-4">
                  <Link href="#" className="text-slate-500 hover:text-cyan-700">
                    <GlobeAltIcon className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="text-slate-500 hover:text-cyan-700">
                    <CodeBracketIcon className="w-6 h-6" />
                  </Link>
                </div>
              </div>
              <div className="paragraph">
                <p>
                  A simple web application where an user can play by answering questions on various topics.
                  The user select an answer from a list of options in order to move on to the next question.
                  However, there is a countdown for each question, if the user doesn't select any answer within 15 seconds,
                  the next question will show up until the app gives the feedback on the topic chosen by the user.
                </p>
                <p>This application is built by using <b>React</b>.</p>
              </div>
              <WorkItem demo="" github="" img={pl} />
            </div>
            
            <div className="w-full px-2 py-1">
                <div className="title">
                  <h1 className="text-cyan-600 text-xl">Quiz game</h1>
                  <div className="link flex justify-between gap-4">
                    <Link href="#" className="text-slate-500 hover:text-cyan-700">
                      <GlobeAltIcon className="w-6 h-6" />
                    </Link>
                    <Link href="#" className="text-slate-500 hover:text-cyan-700">
                      <CodeBracketIcon className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
                <div className="paragraph">
                  <p>
                    A simple web application where an user can play by answering questions on various topics.
                    The user select an answer from a list of options in order to move on to the next question.
                    However, there is a countdown for each question, if the user doesn't select any answer within 15 seconds,
                    the next question will show up until the app gives the feedback on the topic chosen by the user.
                  </p>
                  <p>This application is built by using <b>React</b>.</p>
                </div>
                <WorkItem demo="" github="" img={pl} />
              </div>
          </div>
        </div>
      </fieldset>
      
      {/* CONTACT */}
      <fieldset id="contact" className="section w-full bg-transparent pb-16">
        <legend className="text-center bg-gradient-to-b from-slate-200 dark:from-[#102236] from-50% to-transparent to-50% w-full">
          <div className="w-full flex flex-col items-center justify-center relative">
            <div className="section-tag bg-slate-200 border-white dark:border-[#102236]">
              <PhoneIcon className="w-8 h-8 lg:w-10 lg:h-10 text-cyan-900" />
            </div>
          </div>
        </legend>
        <div className="px-1 md:px-12" style={bgImageSkill}>
            <h1 className="text-cyan-800 dark:text-cyan-200/50 text-center mx-auto italic text-xl lg:text-2xl">Contact</h1>
            <div className="py-16">
              <div className="flex flex-col items-center gap-0">
                <div className=" box w-full text-center">
                  <h1 className="text-2xl text-cyan-600 uppercase">Get in touch</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
                  <div className="flex items-center justify-center">
                    <div className="box"> 
                      <div className="img p-6 flex items-center justify-center">
                        <Image src={cimage} alt="" className="" width={250} height={200}/>
                      </div>
                      <h3 className="text-slate-800 dark:text-slate-300 text-center md:text-left">ANDRIAMANIRISOA Njatotiana Fiononana</h3>
                      <p className="text-slate-500 dark:text-slate-300 font-thin mb-6 text-center md:text-left">I am available to do freelance or work in full-time, so let's talk by connecting with: </p>
                      <div className="flex items-center md:justify-normal justify-center w-full">
                        <SocialMediaLink />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="box">
                        <h1 className="text-cyan-600 text-xl px-2">Send me a message</h1>
                        <Form />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </fieldset>
      {/* footer */}
      <footer className=" bg-slate-100 dark:bg-slate-900 py-4 lg:py-8 border-t border-slate-200 dark:border-slate-700/60 w-full text-slate-00 dark:text-slate-200 text-center">
        Copyright&copy; 2023
      </footer>
    </main>
  )
}
