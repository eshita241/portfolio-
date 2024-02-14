import React from 'react';
import { motion } from "framer-motion";
import { FaMedium } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";


export default function Home() {
  return (
    <section id="home">
    <div className="flex flex-col  items-center justify-center mt-2" >
        <motion.div  initial={{y:100, opacity:0}}
    animate= {{y:0, opacity:1}}
    transition={{
      delay: 0.6,
    }}>
          <p className=" text-green font-medium text-lg flex items-center justify-center pt-[7.8rem] sm:leading-loose font-mono tracking-tighter">Hi, my name is</p>
          <h1 className="font-bold text-[2.6rem] sm:text-[3.8rem] text-white tracking-normal flex flex-wrap items-center justify-center font-sans">Eshita Chokhani.</h1>
          <h2 className='font-bold text-[2rem] leading-[4.8rem] sm:text-[3.4rem] sm:leading-[5.8rem]  text-text2 opacity-45 tracking-normal flex flex-wrap items-center justify-center font-sans'>I like to explore things</h2>
          <p className='text-center px-[1.9rem] lg:px-[26rem] md:px-[9rem] sm:px-[10rem] flex flex-wrap items-center justify-center py-5 text-text2 opacity-65 font-mono'>I am a student studying Information Technology, interested in learning new things and discovering my potential, quis fugiat doloribus aperiam!</p>
          
          <div className='flex justify-center items-center gap-8 py-5'>
          <button className="bg-green justify-center font-medium rounded-full text-white px-7 py-4 flex items-center bg-opacity-5 border-2 border-green hover:bg-opacity-20 transition gap-2 font-mono tracking-tight"><FaMedium/><a href="https://medium.com/@eshitachokhani" target="_blank">My blog</a></button>
          <button className="bg-green justify-center font-medium rounded-full text-white px-7 py-4 flex items-center bg-opacity-5 border-2 border-green hover:bg-opacity-20 transition gap-2 font-mono">
  <IoDocumentTextOutline />
  <a href="/assets/EshitaResume.pdf" target="_blank" rel="noopener noreferrer">
    Resume
  </a>
</button>
          </div>
          
          </motion.div>
        
    </div>
    </section>
  )
}
