import React from 'react';
import OrganizationsCard from './OrganizationsCard';



const Organizations = () => {
  const Experience=[
    {
      id:1,
      title:"ACM-VIT",
      description:"Implemented a robust library management system backend in GoLang with PostgreSQL. Developed distinct views for librarians and users, ensuring efficient book tracking and member management. Optimized database interactions for seamless performance. Functionalities which will track return due date.",
      image:"/images/libMan.png",
  },
  ]
  
  return (
    <section id="experience" className='flex justify-center items-center flex-col '>
        <h2 className='text-white sm:mb-[1rem] text-4xl sm:text-5xl lg:text-6xl font-extrabold'>Organizations</h2>
        <h5 className='text-white opacity-45 mb-4 sm:mb-4 text-xl sm:text-2xl lg:text-4xl font-bold'>Volunteer Experience</h5>
        <div className='text-white flex flex-row justify-center items-center gap-10 py-6 '>
          <button className='border-2 px-7 py-3 bg-opacity-5 border-green bg-green rounded-full font:medium hover:bg-opacity-20'>ACM-VIT</button>
          <button className='border-2 px-7 py-3 border-green rounded-full  bg-opacity-5 bg-green font-medium hover:bg-opacity-20'>Vinnovate-IT</button>
        </div>
        <div className='grid grid-cols-1 px-44 mt-11 gap-8 md:gap-12'>
        {
            Experience.map((project) => <OrganizationsCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} />)
        }
    </div>
    </section>
  )
}

export default Organizations