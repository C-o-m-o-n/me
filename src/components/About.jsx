
import React from "react";

import image from "../assets/CollinsOmondi-nobg.png";

const imageAltText = "purple and blue abstract background";

const description =
  "I'm a backend softwere developer with experties in Python and Javascript. I'm also an Applied Biology student at The Kisumu National Polytechnic.";

const skillsList = [
  "backend (Django, Flask)",
  "front-end (react)",
  "Mobile (react-native, flutter)",
  "UI/UX Design",
  "Git",
];

const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my softwere developement experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="border-4 border-red flex flex-col md:flex-row items-center"  id="about">
      <h2 className='bold text-2xl' >About Myself</h2>
      <img className="background" src={image} alt={imageAltText} />
      <div>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;