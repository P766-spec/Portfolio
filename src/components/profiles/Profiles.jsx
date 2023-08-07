import React from "react";
import "./profiles.css";
import leetcode from "../../assets/leetcode.jpg";
import gfg from "../../assets/gfg.jpg";
import hackerrank from "../../assets/hackerrank.jpg";

const Profile = () => {
  const profiles = [
    {
      id: 1,
      title: "Leetcode",
      src: leetcode,
      href: "https://leetcode.com/mantripalak77/",
      style: "shadow-orange-300",
    },
    {
      id: 2,
      title: "GFG",
      src: gfg,
      href: "https://auth.geeksforgeeks.org/user/mantripalak1712/",
      style: "shadow-green-300",
    },
    {
      id: 3,
      title: "Hackerrank",
      src: hackerrank,
      href: "https://www.hackerrank.com/mantripalak1712?hr_r=1",
      style: "shadow-green-600",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Coding Profiles</h2>
      <div className="services__container">
        {profiles.map(({ id, src, href, style, title }) => (
          <article key={id} className={`service__item ${style}`}>
            <div className="service__item-img">
              <img src={src} alt={title} height="200" />
            </div>
            <h3>{title}</h3>
            <div className="service__item-cta">
              <a href={href} className="btn" target="_blank" rel="noreferrer">
                Visit Profile
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Profile;
