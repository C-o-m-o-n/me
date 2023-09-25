
import React from "react";


 
import image from "../images/me1.jpg";

const imageAltText = "desktop with books and laptop";


const projectList = [
  {
    title: "online Blood donation webapp",
    description:
      "Welcome to the Kisumu National Polytechnic Blood Bank project! This is an open-source initiative aimed at promoting blood donation and saving lives through a user-friendly website.",
    url: "https://tknpbloodbank.com",
  },
  {
    title: "VoteKe",
    description:"An election management mobile application using react-native.",
    url: "https://github.com/C-o-m-o-n/voteKE",
  },
  {
    title: "Gephok",
    description:
      "Created website for a company called gephok, based in Kisumu, using python flask.",
    url: "https://github.com/C-o-m-o-n/Gephok"
  },
  {
    title: "Online flower shop",
    description:
      "Created an online flower shop for a friend using pythoon django.",
    url: "https://github.com/C-o-m-o-n/flowerGirl"
  },
  {
    title: "BizConnect",
    description:
      "Created a mobile app that allows people from a local area to work on simple time-sensitive tasks that does not require any formal qualifications.",
    url: "https://github.com/C-o-m-o-n"
  },
  {
    title: "fileSearchCli",
    description: "a python script that helps you search files and directories in the terminal.",
    url: "https://github.com/C-o-m-o-n/fileSearchCli",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideIn"}}
            alt={imageAltText}
          />
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

export default Portfolio;
