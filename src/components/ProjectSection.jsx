import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectSection = () => {
    const ProjectsData =[
        {
            id:1,
            title:"Library Management Backend",
            image:"/images/libMan.png",
            gitUrl:"https://github.com/eshita241/librarymng-backend-eshita.git",
        },
        {
            id:3,
            title:"Carpoolit",
            image:"/images/Carpoolit.png",
            gitUrl:"https://github.com/eshita241/carpoolit-app-eshita.git",
        },
        {
            id:4,
            title:"Public Code Bases",
            image:"/images/publicCodeBase.png",
            gitUrl:"https://www.figma.com/file/2ZEvzUaPciiWtQZoYu64XH/Concept-Crafters?type=design&node-id=1%3A32&mode=design&t=WM8KRPi7JBBBSqfb-1",
        },
        {
            id:5,
            title:"Concept Crafters",
            image:"/images/ConceptCrafters.png",
            gitUrl:"https://www.figma.com/file/2ZEvzUaPciiWtQZoYu64XH/Concept-Crafters?type=design&node-id=1%3A32&mode=design&t=WM8KRPi7JBBBSqfb-1",
        },

    ]
  return (
    <><section id="projects" className='flex justify-center items-center flex-col py-20'>
        <h2 className='text-white xsm:mb-9 sm:mb-14 xsm:text-4xl sm:text-5xl lg:text-6xl font-bold mt-10 font-sans'>My Projects</h2>
    <div className='sm:grid grid-cols-2 gap-24 xsm:flex xsm:flex-col'>
        {
            ProjectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl}/>)
        }
    </div>
        
    </section>
    
    </>
  )
}

export default ProjectSection;