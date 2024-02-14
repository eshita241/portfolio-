import React, { useState } from 'react';
import OrganizationsCard from './OrganizationsCard';
import TabButton from './TabButton';
import { Element } from 'react-scroll';

const Experience = [
  {
    id: 1,
    title: "ACM-VIT",
    description: "Proud ACM-VIT member, pivotal in Carpoolit app development. Orchestrated Gravitas 23 events, featuring the innovative Hybrid Cryptic Hunt 2.0 and Codex Cryptum. Passionate about merging technology and creativity to craft unforgettable experiences. Committed to advancing the intersection of innovation and human engagement.Dedicated to advancing technology and creativity for unforgettable, impactful experiences.",
    image: "/images/acm.png",
  },
  {
    id: 2,
    title: "Vinnovate-IT",
    description: "At VinnovateIT, I am a dedicated team member adeptly navigating the intersections of technology and management. Playing an integral role in the LinkedIn department, I actively craft impactful posts to enhance our online presence, foster collaboration, and share valuable insights. My commitment spans both technical and strategic dimensions, ensuring a comprehensive contribution to our organization's success.",
    image: "/images/viit.png"
  }
];

const Organizations = () => {
  const [tab, setTab] = useState(1);

  const handleTabChange = (selectedTab) => {
    // If the selected tab is already open and there's only one section open, don't close it
    if (tab === selectedTab && Experience.filter(item => tab === item.id).length === 1) {
      return;
    }
    setTab((prevTab) => (prevTab === selectedTab ? "" : selectedTab));
  };

  return (
    <section id="experience" className='flex justify-center items-center flex-col py-20'>
      <h2 className='text-white sm:mb-[1.4rem] text-4xl sm:text-5xl lg:text-6xl font-bold mt-10 font-sans'>Organizations</h2>
      
      <div className='text-white font-mono flex flex-row justify-center items-center gap-10 py-6 '>
        {Experience.map((item) => (
          <TabButton key={item.id} selectTab={() => handleTabChange(item.id)} active={tab === item.id} className="border-2 px-7 py-3 bg-opacity-5 border-green bg-green rounded-full font:medium hover:bg-opacity-20">
            {item.title}
          </TabButton>
        ))}
      </div>
      <div className='grid grid-cols-1 px-72 mt-11 gap-8 font-mono md:gap-12'>
        {Experience.map((project) => (
          tab === project.id && (
            <OrganizationsCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} />
          )
        ))}
      </div>
    </section>
  )
}

export default Organizations;
