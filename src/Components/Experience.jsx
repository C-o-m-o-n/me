import React from "react";
import { BiMap } from "react-icons/bi";

import image from "../images/me2.jpeg";

function Experience() {
  const imageAltText = 'education'

    const projectList = [
        {
          title: "The Uamuzi Foundation",
          description: "Android dveloper using react native",
          url: "https://uamuzi.org/",
          location: "Nairobi, Kenya",
          company_image: require('../images/U.png')
        },
        {
          title: "East Africa Vision Institute",
          description:"Took a course in python programming and web development in HTML/CSS and javascript.",
          url: "https://eastafricavisioninstitute.ac.ke",
          location: "Eldoret, Kenya",
          company_image: require('../images/U.png')
        },
        {
          title: "Kojwach High School",
          description:
            "Completed my secondary education at the Kojwach High School.",
          url: "https://github.com/C-o-m-o-n",
          location: "Homabay, Kenya",
          company_image: require('../images/U.png')
        },
        {
          title: "Race-course Primary School Eldoret",
          description: "Completed my  primary education at the Race-course primary school.",
          url: "https://github.com/C-o-m-o-n/fileSearchCli",
          location: "Eldoret, Kenya",
          company_image: require('../images/U.png')
        },
      ];

  return (
    <section className='padding' style={{color: "white", backgroundColor: "#727d84",}} id='experience'>
        <h2 style={{textAlign:'center'}}>Experience</h2>
        <div style={{display: 'flex', flexDirection:  'row', paddingTop: '3rem'}}>
        
        <div className="container" >
          {projectList.map((project) => (
            <div className="box" key={project.title} >
              <img src={project.company_image} style={{ height: "50%", width: "100%" }} alt={imageAltText}/>

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
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideIn",}}
            alt={imageAltText}
          />
        </div>
        
        </div>
    </section>

  )
}

export default Experience