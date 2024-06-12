"use client";
import React, {useState} from 'react';
import { motion } from "framer-motion";
import logo from "./logo.png";

const Header = () => {
  let Links =[ {name:"Home",link:"#home"},
    {name:"About",link:"#about"},
    {name:"Organizations",link:"#experience"},
    {name:"Projects",link:"#projects"},
    {name:"Contact",link:"#contact"},
  ]
  const [tab, setTab] = useState("home");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    console.log("Hello")
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
            <a href="#home"><img src={logo} alt="logo" className=" xsm:hidden sm:flex sm:fixed sm:top-[90%] xsm:top-[1rem] sm:left-[92%] xxl:left-[97.3%] sm:h-10 cursor-pointer"></img></a>
        </motion.div>
        <motion.nav className="fixed top-0 left-1/2 w-full h-[4.5rem] rounded-none sm:top-[1.7rem] sm:h-[initial] sm:w-[36rem] py-0 backdrop-blur-[0.5rem] sm:rounded-full "
         initial={{ x:'-50%',y:'100%',opacity:0}}
         animate= {{x:'-50%', y:'0%',opacity:2}}
         transition={{
             delay: 1}}>
          <ul className='flex rounded-none justify-center items-center sm:gap-9 px-14 py-3 sm:rounded-full border-opacity-25 gap-10 bg-light bg-opacity-25'>
            {
              Links.map((link) => (
                <li key={link.name} className='font-mono text-white  font- cursor-pointer xsm:flex-wrap hover:text-green transition xsm:text-[15.4px]'>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))
            }
          </ul>
</motion.nav>
        
    </section>
  )
}

export default Header