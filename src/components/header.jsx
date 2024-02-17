import React, {useState} from 'react';
import { motion } from "framer-motion";
import logo from "./logo.png";


const Header = () => {
  const [tab, setTab] = useState("home");
  return (
    
    <section className='z-[999] flex items-center justify-center relative xsm:mb-8'>
          <motion.div
        initial={{ opacity:0}}
        animate= {{ opacity:2}}
        transition={{
            delay: 1}}
        >
            <a href="#home"><img src={logo} alt="logo" className=" h-0 fixed sm:bottom-[1.5rem] sm:right-[2.5rem] sm:h-10 cursor-pointer"></img></a>
        </motion.div>
        <motion.nav className=" flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 -translate-y-2 sm:top-[1.7rem] sm:h-[initial] xsm:py-0 xsm:h-20"
         initial={{ x:'-50%',y:'100%',opacity:0}}
         animate= {{x:'-50%', y:'0%',opacity:2}}
         transition={{
             delay: 1}}>
          <ul className='flex justify-center items-center gap-10 px-14 py-3  bg-white bg-opacity-15 rounded-full border-opacity-25 xsm:gap-7  '>
            <li className='font-mono text-white cursor-pointer flex  hover:text-white hover:bg-opacity-30 hover:bg-text2 hover:rounded-full transition xsm:text-[15.4px] xsm:top-0'><a href="#home" >
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