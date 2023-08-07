import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/IMG1.jpeg";
import IMG2 from "../../assets/IMG2.jpeg";
import IMG3 from "../../assets/IMG3.jpeg";
import IMG4 from "../../assets/IMG4.png";
import IMG5 from "../../assets/IMG5.jpeg";
import IMG6 from "../../assets/IMG6.jpeg";
import IMG7 from "../../assets/IMG7.png";

const data = [
  {
    id: 1,
    image: IMG7,
    title: "NotesAdda - Nodejs, EJS, MongoDB Project",
    github: "https://github.com/P766-spec/NotesAdda",
    demo: "https://p766-spec.github.io/NotesAdda/",
  },

  {
    id: 2,
    image: IMG1,
    title: "Uber-Clone - Nextjs Project",
    github: "https://github.com/P766-spec/Uber-clone",
    demo: "https://p766-spec.github.io/Uber-clone/",
  },
  {
    id: 3,
    image: IMG2,
    title: "Disney-Clone - Reacjs Project",
    github: "https://github.com/P766-spec/disney-clone",
    demo: "https://disneyplus-clone-20209.web.app/",
  },
  {
    id: 4,
    image: IMG3,
    title: "Mutlipage Responsive Grocery Website",
    github: "https://github.com/P766-spec/Responsive-",
    demo: "https://gregarious-wisp-0f1ee2.netlify.app/",
  },
  {
    id: 5,
    image: IMG4,
    title: "Recreated classic 2048 Game in Java with Java Swing",
    github: "https://github.com/P766-spec/2048",
    demo: "https://p766-spec.github.io/2048/",
  },

  {
    id: 6,
    image: IMG6,
    title: "The 2D Shooting Game - Javascripte Project",
    github: "https://github.com/P766-spec/Shooting-game",
    demo: "https://p766-spec.github.io/Shooting-game/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
