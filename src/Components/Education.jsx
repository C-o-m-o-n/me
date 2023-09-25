import React from 'react'
import { BiMap } from "react-icons/bi";

import image from "../images/me1.jpg";

function Education() {
  const imageAltText = 'education'

    const projectList = [
        {
          title: "The Kisumu National Polytechnic",
          description:
            "i'm currently taking a diploma in applied boilogy at The Kisumu National Polytechnic.",
          url: "https://kisumupoly.ac.ke",
          location: "Kisumu, Kenya",
        },
        {
          title: "East Africa Vision Institute",
          description:"Took a course in python programming and web development in HTML/CSS and javascript.",
          url: "https://eastafricavisioninstitute.ac.ke",
          location: "Eldoret, Kenya",
        },
        {
          title: "Kojwach High School",
          description:
            "Completed my secondary education at the Kojwach High School.",
          url: "https://github.com/C-o-m-o-n",
          location: "Homabay, Kenya",
        },
        {
          title: "Race-course Primary School Eldoret",
          description: "Completed my  primary education at the Race-course primary school.",
          url: "https://github.com/C-o-m-o-n/fileSearchCli",
          location: "Eldoret, Kenya",
        },
      ];
  return (
    <section className='padding' id='education'>
        <h2 style={{textAlign:'center'}}>Education</h2>
        <div style={{display: 'flex', flexDirection:  'row', paddingTop: '3rem'}}>
        
        <div className="container" >
          {projectList.map((project) => (
            <div className="box" key={project.title} style={{backgroundColor: '#4e567e', color: 'white'}}>
              <a href={project.url} target="_blank" className='education-a' rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
              <p className="small">
                <BiMap size={15} /> {project.location}</p>
            </div>
            
          ))}
        </div>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideIn", borderRadius: 20}}
            alt={imageAltText}
          />
        </div>
        
        </div>
    </section>

  )
}

export default Education