// HeroSection.js
"use client";
import React, { useState } from 'react';
import TabButton from './TabButton';
import { TiArrowForward } from "react-icons/ti";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import { Element } from 'react-scroll';

const data = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='max-w-[265px] text-sm grid grid-cols-2 text-white '>
        <li className='flex items-center gap-[0.45rem] text-[1rem]'><span className='text-green text-xl'><TiArrowForward /></span> abcd</li>
          <li className='flex items-center gap-[0.45rem] text-[1rem]'><span className='text-green text-xl'><TiArrowForward />
          </span> abcd</li>
          <li className='flex items-center gap-[0.45rem] text-[1rem]'><span className='text-green text-xl'><TiArrowForward />
          </span> abcd</li>
          <li className='flex items-center gap-[0.45rem] text-[1rem]'><span className='text-green text-xl'><TiArrowForward />
          </span> abcd</li>
          <li className='flex items-center gap-[0.45rem] text-[1rem]'><span className='text-green text-xl'><TiArrowForward />
          </span> abcd</li>
          <li className='flex items-center gap-[0.45rem] text-[1rem]'><span className='text-green text-xl'><TiArrowForward />
          </span> abcd</li>
          <li className='flex items-center gap-[0.45rem] text-[1rem]'><span className='text-green text-xl'><TiArrowForward />
          </span> abcd</li>
          <li className='flex items-center gap-[0.45rem] text-[1rem]'><span className='text-green text-xl'><TiArrowForward />
          </span> abcd</li>
          <li className='flex items-center gap-[0.45rem] text-[1rem]'><span className='text-green text-xl'><TiArrowForward />
          </span> abcd</li>
          <li className='flex items-center gap-[0.45rem] text-[1rem]'><span className='text-green text-xl'><TiArrowForward />
          </span> abcd</li>

      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div>
        <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, beatae dicta veniam est ducimus laudantium ipsam! Soluta harum assumenda quo dolor, quae earum rem pariatur nulla, sit ratione amet excepturi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, officia!rdrtxjycj.</p>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certification",
    content: (
      <div>
        <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, beatae dicta veniam est ducimus laudantium ipsam! Soluta harum assumenda quo dolor, quae earum rem pariatur nulla, sit ratione amet excepturi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, officia!rdrtxjycj.</p>
      </div>
    ),
  },
];

const HeroSection = () => {
  const [tab, setTab] = useState("skills"); // State to manage the active tab
  const [animationComplete] = useState(false);

  const handleTabChange = (selectedTab) => {
    // If the selected tab is already open and there's only one section open, don't close it
    if (tab === selectedTab && data.filter(item => tab === item.id).length === 1) {
      return;
    }

    // Toggle the selected tab
    setTab((prevTab) => (prevTab === selectedTab ? "" : selectedTab));
  };

  

  return (
    <section className='mx-auto px-12 py-20' id="about">
      <div className='grid grid-cols-1 sm:grid-cols-12' initial={{opacity:0, scale:0}}
      animate={{ opacity: 1, scale:1}}
      transition={{delay: 1}}>
      <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-grey w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative border-4 border-green '>
            <img
              src="/images/my_image.jpg"
              alt="my image"
              className='absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 hover:opacity-25  '
              width={275}
            ></img>
          </div>
        </div>
        <div className='mt-4 md:mt-0 flex flex-col h-full col-span-7 place-self-center text-center sm:text-left mx-auto px-20 py-4'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>About Me </h1>
          <TypeAnimation className='text-white text-base lg:text-lg'
      sequence={[
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum minima voluptatem nam tempora excepturi. Accusantium nobis est quisquam commodi animi a aspernatur asperiores eligendi ex vel totam nostrum voluptatem, incidunt suscipit quos ipsum, tempora sunt soluta non voluptatibus ullam consequuntur illum consequatur? Alias vero quia, sapiente temporibus perferendis officiis quas.',
        1000,
      ]}
      wrapper="span"
      speed={85}
      repeat={Infinity}
    />
          <div className="flex flex-row mt-8">
            {data.map((item) => (
              <TabButton key={item.id} selectTab={() => handleTabChange(item.id)} active={tab === item.id}>
                {item.title}
              </TabButton>
            ))}
          </div>
          {data.map((item) => (
        tab === item.id && (
          <div key={item.id} className='mt-4'>
            {item.content}
          </div>
        )
      ))}
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
