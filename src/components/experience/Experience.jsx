import React from "react";
import "./experience.css";
import css3 from "../../assets/css3.png";
import html from "../../assets/html-5.png";
import bootstrap from "../../assets/bootstrap.png";
import js from "../../assets/javascript.png";
import react from "../../assets/react.png";
import three from "../../assets/threejs.png";
import node from "../../assets/nodejs.png";
import tailwind from "../../assets/tailwind.svg";
import sanity from "../../assets/sanity.svg";
import mysql from "../../assets/mysql.svg";
import mongodb from "../../assets/mongodb.svg";
import java from "../../assets/java.svg";
import firebase from "../../assets/firebase.svg";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <img
                src={html}
                className="experience_details-icon icon"
                alt="html"
              />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <img
                src={css3}
                className="experience_details-icon icon"
                alt="html"
              />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <img
                src={js}
                className="experience_details-icon icon"
                alt="html"
              />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <img
                src={bootstrap}
                className="experience_details-icon icon"
                alt="html"
              />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <img
                src={tailwind}
                className="experience_details-icon icon"
                alt="html"
              />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <img
                src={react}
                className="experience_details-icon icon"
                alt="html"
              />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <img
                src={three}
                className="experience_details-icon icon"
                alt="html"
              />
              <div>
                <h4>Three.js</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <img
                src={java}
                className="experience_details-icon icon"
                alt="html"
              />
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <img
                src={node}
                className="experience_details-icon icon"
                alt="html"
              />
              <div>
                <h4>Nodejs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <img
                src={mongodb}
                className="experience_details-icon icon"
                alt="html"
              />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <img
                src={firebase}
                className="experience_details-icon icon"
                alt="html"
              />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <img
                src={mysql}
                className="experience_details-icon icon"
                alt="html"
              />
              <div>
                <h4>MYSQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
