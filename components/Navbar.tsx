"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from "framer-motion"


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <motion.nav className='flexBetween max-container padding-container relative z-30 py-7' animate={{opacity:1,y:0}} initial={{opacity:0,y:'-100vw'}}>
      <Link href='/'>
          <Image src='/hilink-logo.svg' alt='logo' width={74} height={29}/>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
            <li className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
              <a href='/'>Home</a>
            </li>
            <li className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
              <a href='/'>Services</a>
            </li>
            <li className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
              <a href='/'>Projects</a>
            </li>
            <li className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
              <a href='/'>About Me</a>
            </li>
            <li className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
              <a href='/'>Contact Us</a>
            </li>
      </ul>
      {/* ..................... */}
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      >
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            
            
            <motion.ul className="flex flex-col items-center justify-between min-h-[250px]"  >
              {/* but your link here */}
                <li className='regular-16  my-8 uppercase   text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
                  <a href='/'>Home</a>
                  </li>
                <li className='regular-16 my-8 uppercase text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
                  <a href='/'>Services</a>
                </li>
                <li className='regular-16 my-8 uppercase text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
                  <a href='/'>Projects</a>
                </li>
                <li className='regular-16 my-8 uppercase text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
                  <a href='/'>About Me</a>
                </li>
                <li className='regular-16 my-8 uppercase text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
                  <a href='/'>Contact Us</a>
                </li>
            </motion.ul>
          </div>
        </section>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </motion.div>
    </motion.nav>
  )
}

export default Navbar