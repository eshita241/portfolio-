import React from 'react';
import { motion } from "framer-motion";
import logo from "./logo.png";


const Header = () => {
  return (
    <section className='z-[999] flex items-center justify-center relative'>
          <motion.div
        initial={{ opacity:0}}
        animate= {{ opacity:2}}
        transition={{
            delay: 1}}
        >
            <img src={logo} href="#home" alt="logo" className=" h-0 fixed sm:bottom-[1.5rem] sm:right-[2.5rem] sm:h-10 cursor-pointer"></img>
        </motion.div>
        <nav className=" flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 -translate-y-2 sm:top-[1.7rem]  sm:h-[initial] py-0 ">
          <ul className='flex justify-center items-center gap-9 border-white border-[1.2px] px-10 py-3  bg-grey bg-opacity-50 rounded-full border-opacity-25 '>
            <li className='text-white cursor-pointer flex justify-center items-center'><a href="#home" >
            Home
            </a> 
            </li>
            <li className='text-white cursor-pointer flex justify-center items-center'><a href="#about" >
            About
            </a> 
            </li>
            <li className='text-white cursor-pointer flex justify-center items-center'><a href="#experience" >
            Organizatons
            </a> 
            </li>
           
            <li className='text-white cursor-pointer flex justify-center items-center'><a href="#projects" >
            Projects
            </a> 
            </li>
            <li className='text-white cursor-pointer flex justify-center items-center'><a href="#contact" >
            Contact
            </a> 
            </li>
        </ul>
</nav>
        
    </section>
  )
}

export default Header