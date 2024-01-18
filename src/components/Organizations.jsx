import React, { useState } from 'react';
import OrganizationsCard from './OrganizationsCard';
import TabButton from './TabButton';
import { Element } from 'react-scroll';

const Experience = [
  {
    id: 1,
    title: "ACM-VIT",
    description: "Implemented a robust library management system backend in GoLang with PostgreSQL. Developed distinct views for librarians and users, ensuring efficient book tracking and member management. Optimized database interactions for seamless performance. Functionalities which will track return due date.",
    image: "/images/libMan.png",
  },
  {
    id: 2,
    title: "Vinnovate-IT",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste officiis autem, aliquam ipsum a culpa, architecto optio veniam deserunt nobis ut at provident repellendus voluptas repudiandae sit corrupti voluptatum reprehenderit temporibus qui hic. Porro, sapiente unde. Quibusdam excepturi praesentium in ipsam voluptatem perferendis, vero distinctio a ducimus quia dolorum reiciendis dignissimos ratione alias fuga facilis. Rerum consequatur eos consectetur perspiciatis fugit beatae quae impedit error veritatis quas ea a, vel amet officiis reprehenderit voluptatem inventore.",
    image: "/images/Carpoolit.png"
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
      <h2 className='text-white sm:mb-[1rem] text-4xl sm:text-5xl lg:text-6xl font-extrabold'>Organizations</h2>
      <h5 className='text-white opacity-45 mb-4 sm:mb-4 text-xl sm:text-2xl lg:text-4xl font-bold'>Volunteer Experience</h5>
      <div className='text-white flex flex-row justify-center items-center gap-10 py-6 '>
        {Experience.map((item) => (
          <TabButton key={item.id} selectTab={() => handleTabChange(item.id)} active={tab === item.id} className="border-2 px-7 py-3 bg-opacity-5 border-green bg-green rounded-full font:medium hover:bg-opacity-20">
            {item.title}
          </TabButton>
        ))}
      </div>
      <div className='grid grid-cols-1 px-44 mt-11 gap-8 md:gap-12'>
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
