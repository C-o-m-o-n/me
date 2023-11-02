import React from "react";

const Education = () => {
  return (
   
    
    <section className="padding" id="portfolio">
    <h2 style={{ textAlign: "center" }}>Education</h2>
    <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
    <h2>The Kisumu National Polytechnic</h2>
    <h3>Majour, Applied Biology</h3>
    <h3>Minor, Computer Science</h3>
      <div style={{ maxWidth: "40%", alignSelf: "center" }}>
       
      </div>
      <div className="container">
        {projectList.map((project) => (
          <div className="box" key={project.title}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
            </a>
            <p className="small">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>


  
 


   
   
  );
};

export default Education;
