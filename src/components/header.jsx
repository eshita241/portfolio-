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
<motion.div className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none bg-grey bg-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[32.5rem] sm:rounded-full"
        initial={{y:-100, x:"-50%", opacity:0}}
        animate= {{y:0, x:"-50%", opacity:1}}>
        </motion.div>
        <motion.nav className=" flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 "
        initial={{ x:'-50%',y:'100%',opacity:0}}
        animate= {{x:'-50%', y:'0%',opacity:2}}
        transition={{
            delay: 1}}>
            <ul className=" flex flex-wrap  w-[22rem] items-center justify-center gap-y-1 text-[0.9rem] font-medium text-text2 sm:w-[initial] sm:flex-nowrap sm:gap-5 cursor-pointer">
            {
              Links.map((link) => (
                <motion.li key={link.name} className='font-mono h-3/4 flex  items-center justify-center px-3 py-3 hover:text-black hover:bg-text2 hover:rounded-full transition'>
                  <a href={link.link}>{link.name}</a>
                </motion.li>
              ))
            }
            </ul>
        </motion.nav>
        
    </section>
  )
}

export default Header