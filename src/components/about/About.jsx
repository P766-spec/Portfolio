import React from "react";
import "./about.css";
import ME from "../../assets/me1.about.png";
import { FaAward } from "react-icons/fa";
import { BiHappyAlt } from "react-icons/bi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2> About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <p>
            As a Software engineering enthusiast, I am passionate about
            exploring the latest developments in the field and applying my
            skills to create innovative solutions. A frontend developer who
            enjoys building unique interfaces with javascript and Reactjs along
            with having a cup of tea.☕ I'm open to Full-stack(remote/onsite)
            opportunities with a passion of Front-end development. If you like
            what you see and have a project you need coded, don’t hestiate to
            contact me.
          </p>
          <a href="#portfolio" className="btn btn-primary">
            See Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
