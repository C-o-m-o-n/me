
import React from "react";
import image from "../images/award-image.jpg";

const imageAltText = "desktop with books and laptop";


const projectList = [
  {
    title: "STEM,CODING and ROBOTICS",
    description:
      "",
    image_url: "https://raw.githubusercontent.com/C-o-m-o-n/me/main/src/images/click4tech.png",
  },
  {
    title: "Google serverless web development",
    description:"",
    image_url: "https://developers.google.com/static/profile/badges/playlists/solutions/ecommerce-serverless-django/badge.svg",
  },
  {

    title: "Hacktoberfest completion awards 2023.",
    description:
      "",
    image_url: "https://holopin.me/comon"
  },
  {
    title: "Code week Kenya 2023",
    description:
      "",
    image_url: "https://raw.githubusercontent.com/C-o-m-o-n/me/main/src/images/code-jika.png"
  },
  {
    title: "GDSC core team member",
    description:
      "",

    image_url: "https://developers.google.com/static/profile/badges/community/gdsc/2023/core-member/badge.svg"
  },
  {
    title: "Google Cloud Innovator",
    description: "",
    image_url: "https://developers.google.com/static/profile/badges/community/innovators/cloud/2021_member/badge.svg",
  },
];

const Awards = () => {
  return (
    <section className="padding" id="awards">
      <h2 style={{ textAlign: "center" }}>Awards</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "100%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideIn"}}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <img src={project.image_url} style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideIn"}} >
              </img>
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
