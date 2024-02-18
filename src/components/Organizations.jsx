import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = [
  {
    id: 1,
    title: "ACM-VIT",
    description: "Proud ACM-VIT member, pivotal in Carpoolit app development. Orchestrated Gravitas 23 events, featuring the innovative Hybrid Cryptic Hunt 2.0 and Codex Cryptum. Passionate about merging technology and creativity to craft unforgettable experiences. Committed to advancing the intersection of innovation and human engagement.Dedicated to advancing technology and creativity for unforgettable, impactful experiences.",
    image: "/images/acmf.png",
    date:"2023"
  },
  {
    id: 2,
    title: "Vinnovate-IT",
    description: "At VinnovateIT, I am a dedicated team member adeptly navigating the intersections of technology and management. Playing an integral role in the LinkedIn department, I actively craft impactful posts to enhance our online presence, foster collaboration, and share valuable insights. My commitment spans both technical and strategic dimensions, ensuring a comprehensive contribution to our organization's success.",
    image: "/images/gjd.ico",
    date:"2023"
  }
];

const Organizations = () => {
  

  return (
    <section id="experience" className='flex justify-center items-center flex-col py-20 text-white'>
      <h2 className='text-white sm:mb-[3.4rem] sm:text-5xl lg:text-6xl font-bold mt-10 font-sans xsm:text-4xl'>Organizations</h2>
            <VerticalTimeline>
              {Experience.map((project) => (
          (<React.Fragment key={project.id} title={project.title} description={project.description} icon={project.image} date={project.date}>
              <VerticalTimelineElement contentStyle={{background:'#0d1117',boxShadow:"none",border:"4px dashed darkgreen",padding:"1.3rem 2rem"}}
              contentArrowStyle={{borderRight:'1rem solid darkgreen'}}
              date={project.date}
              iconStyle={{background: 'url(' + project.image + ') center/cover no-repeat' }}>
              <h2 className="text-white"><span>Volunteer experience: </span>{project.title}</h2>
              <p className="text-green">{project.description}</p>
              </VerticalTimelineElement>
             </React.Fragment>
          )
        ))}
        </VerticalTimeline>
    </section>
  )
}

export default Organizations;
