"use client";
import React, {useState} from 'react';
import { motion } from "framer-motion";
import logo from "./logo.png";
import { BiAlignRight } from "react-icons/bi";


const Header = () => {
  const [tab, setTab] = useState("home");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    
    <section className='z-[999] relative xsm:mb-28 sm:mb-0'>
          <motion.div
        initial={{ opacity:0}}
        animate= {{ opacity:2}}
        transition={{
            delay: 1}}
        >
            <a href="#home"><img src={logo} alt="logo" className=" xsm:absolute sm:fixed sm:bottom-[1.5rem] xsm:top-[1rem] xsm:left-5 xsm:h-7 right-[2.5rem] sm:h-10 cursor-pointer"></img></a>
            <BiAlignRight className='absolute text-green xsm:top-[1rem] xsm:right-5 sm:hidden' size={30} onClick={toggleNav}/>
        </motion.div>
        <motion.nav className=" flex fixed left-1/2 sm:top-[1.7rem] sm:h-[initial] xsm:top-[1.3rem] py-0 xsm:h-20"
         initial={{ x:'-50%',y:'100%',opacity:0}}
         animate= {{x:'-50%', y:'0%',opacity:2}}
         transition={{
             delay: 1}}>
          <ul className='flex flex-wrap justify-center items-center w-full sm:gap-10 px-14 py-3 bg-white bg-opacity-45 rounded-full border-opacity-25 xsm:hidden'>
            <li className='font-mono text-white font- cursor-pointer xsm:flex-wrap  hover:text-white hover:bg-opacity-30 hover:bg-text2 hover:rounded-full transition xsm:text-[15.4px]'><a href="#home" >
            Home
            </a> 
            </li>
            <li className='font-mono text-white cursor-pointer flex hover:text-white hover:bg-opacity-30 hover:bg-text2 hover:rounded-full transition xsm:text-[15.4px]'><a href="#about" >
            About
            </a> 
            </li>
            <li className='text-white font-mono cursor-pointer flex hover:text-white hover:bg-opacity-30 hover:bg-text2 hover:rounded-full transition xsm:text-[15.4px]'><a href="#experience" >
            Organizatons
            </a> 
            </li>
           
            <li className='text-white font-mono cursor-pointer flex hover:text-white hover:bg-opacity-30 hover:bg-text2 hover:rounded-full transition xsm:text-[15.4px]'><a href="#projects" >
            Projects
            </a> 
            </li>
            <li className='text-white font-mono cursor-pointer flex hover:text-white hover:bg-opacity-30 hover:bg-text2 hover:rounded-full transition xsm:text-[15.4px]'><a href="#contact" >
            Contact
            </a> 
            </li>
        </ul>
</motion.nav>
        
    </section>
  )
}

export default Header