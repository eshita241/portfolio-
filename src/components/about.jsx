"use client";
import React, { useState } from 'react';
import TabButton from './TabButton';
import { TiArrowForward } from "react-icons/ti";
import { TypeAnimation } from 'react-type-animation';

const data = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='max-w-[320px] text-sm grid grid-cols-2 font-mono text-white '>
        <li className='flex items-center gap-[0.45rem] sm:text-[1.1rem] xsm:text-[14.5px]'><span className='text-green text-xl'><TiArrowForward /></span> React</li>
          <li className='flex items-center gap-[0.45rem] sm:text-[1.1rem] xsm:text-[14.5px] '><span className='text-green text-xl'><TiArrowForward />
          </span> Python</li>
          <li className='flex items-center gap-[0.45rem] sm:text-[1.1rem] xsm:text-[14.5px]'><span className='text-green text-xl'><TiArrowForward />
          </span> Next.js</li>
          <li className='flex items-center gap-[0.45rem] sm:text-[1.1rem] xsm:text-[14.5px] tracking-tight'><span className='text-green text-xl'><TiArrowForward />
          </span> React Native</li>
          <li className='flex items-center gap-[0.45rem] sm:text-[1.1rem] xsm:text-[14.5px]'><span className='text-green text-xl'><TiArrowForward />
          </span> C</li>
          <li className='flex items-center gap-[0.45rem] sm:text-[1.1rem] xsm:text-[14.5px]'><span className='text-green text-xl'><TiArrowForward />
          </span> C++</li>
          <li className='flex items-center gap-[0.45rem] sm:text-[1.1rem] xsm:text-[14.5px]'><span className='text-green text-xl'><TiArrowForward />
          </span> Java</li>
          <li className='flex items-center gap-[0.45rem] sm:text-[1.1rem] xsm:text-[14.5px]'><span className='text-green text-xl'><TiArrowForward />
          </span> Javascript</li>
          <li className='flex items-center gap-[0.45rem] sm:text-[1.1rem] xsm:text-[14.5px] tracking-tight'><span className='text-green text-xl'><TiArrowForward />
          </span> Tailwind CSS</li>
          <li className='flex items-center gap-[0.45rem] sm:text-[1.1rem] xsm:text-[14.5px]'><span className='text-green text-xl'><TiArrowForward />
          </span> SQL</li>

      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div>
        <p className='text-white font-mono'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, beatae dicta veniam est ducimus laudantium ipsam! Soluta harum assumenda quo dolor, quae earum rem pariatur nulla, sit ratione amet excepturi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, officia!rdrtxjycj.</p>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certification",
    content: (
      <div>
        <p className='text-white font-mono'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, beatae dicta veniam est ducimus laudantium ipsam! Soluta harum assumenda quo dolor, quae earum rem pariatur nulla, sit ratione amet excepturi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, officia!rdrtxjycj.</p>
      </div>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills"); // State to manage the active tab
 

  const handleTabChange = (selectedTab) => {
    // If the selected tab is already open and there's only one section open, don't close it
    if (tab === selectedTab && data.filter(item => tab === item.id).length === 1) {
      return;
    }

    // Toggle the selected tab
    setTab((prevTab) => (prevTab === selectedTab ? "" : selectedTab));
  };

  

  return (
    <section className='mx-auto sm:pr-24 py-20 xsm:px-3 ' id="about">
      <div className='grid grid-cols-1 sm:grid-cols-12' initial={{opacity:0, scale:0}}
      animate={{ opacity: 1, scale:1}}
      transition={{delay: 1}}>
      <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-grey xsm:w-[190px] xsm:h-[190px] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative border-4 border-green '>
            <img
              src="/images/my_image.jpg"
              alt="my image"
              className='absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 hover:opacity-25'
            ></img>
          </div>
        </div>
        <div className='mt-4 md:mt-0 flex flex-col h-full col-span-7 place-self-center text-center sm:text-left mx-auto px-20 py-4 xsm:flex-row xsm:px-0'>
          <div>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold font-sans xsm:text-center'>About Me </h1>
          <TypeAnimation className='text-white text-base font-mono lg:text-lg xsm:text-xs'
      sequence={[ 
        'Eshita Chokhani here, currently studying Information Technology at Vellore Institute of Technology. My world revolves around problem-solving, with a keen focus on web development and machine learning. Fun fact: I can dance on skates! Beyond the tech realm, I find joy in exploring the elegance of mathematics and am always eager to learn new things. Additionally, I have a flair for designing applications and value effective collaboration. Excited about the dynamic field of technology, I am committed to continuous learning in my sophomore year.',
        1000,
      ]}
      wrapper="span"
      speed={85}
      repeat={Infinity}
    />
    <br/>
    <div className="mt-8 font-mono xsm:text-[14.9px] sm:text-[16px] xsm:text-center">
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
        
      </div>
    </section>
  );
};

export default About;
