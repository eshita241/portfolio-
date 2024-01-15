import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectSection = () => {
    const ProjectsData =[
        {
            id:1,
            title:"react cskdvh",
            description:"gvcesvcg",
            image:"/images/my_imagee.jpg",
        },
        {
            id:2,
            title:"react cskdvh",
            description:"gvcesvcg",
            image:"/images/my_imagee.jpg",
        },
        {
            id:3,
            title:"react cskdvh",
            description:"gvcesvcg",
            image:"/images/my_imagee.jpg",
        },
        {
            id:4,
            title:"react cskdvh",
            description:"gvcesvcg",
            image:"/images/my_imagee.jpg",
        }
    ]
  return (
    <><section className='flex justify-center items-center flex-col'>
        <h2 className='text-white mb-4 sm:mb-14 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>My Projects</h2>
    <div className='grid grid-cols-2 gap-8 md:gap-12'>
        {
            ProjectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image}/>)
        }
    </div>
        
    </section>
    
    </>
  )
}

export default ProjectSection;