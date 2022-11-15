import React from 'react'
import './services.css';

import Hacktoberfest from '../../assets/Hacktoberfest_icon_2022.svg';
import Hack1 from '../../assets/hack1.png';
import  Gcp from '../../assets/gcp.png';
import  Industry from '../../assets/industry.png.png';
import  Raptors from '../../assets/Raptors_logo.jpg';
import  EDSI from '../../assets/edsi.png';

const Services = () => {
  return (
    <section id="services">
      <h5>Journey</h5>
      <h2>Acievements and Responsibilties</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>What I Achieve</h3>
          </div>
          <ul className="service__list">
            <li>
              <img src={Industry} alt="Industry" className='logo2' />
              <p>Me, along with my robotics team had won the FIRST RANK among the 55 other teams in Ranjhangaon Industries Association for the invention <em>"Smart wheel Chair"</em>.
              </p>
            </li>
            </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>What I Achieve</h3>
          </div>
          <ul className="service__list">
            <li>
              <a href="https://hacktoberfest.com/profile/" target="_blank" rel="noreferrer"><img src={Hacktoberfest} alt="Hacktoberfest" className='logo' /></a>
              <p>4+ contribution to <strong>HACKTOBERFEST </strong> and had win a swags! 
              </p>
            </li>
            <li>
              <a href="https://www.hackerrank.com/mantripalak1712?hr_r=1" target="_blank" rel="noreferrer"><img src={Hack1} alt="Hackerrank" className='logo1' /></a>
              <p>Gold Badge(5 ⭐) on Hackerrank in java , SQL, 10 days of JS</p>
            </li>
            <li>
              <a href="https://www.cloudskillsboost.google/public_profiles/a45a80df-58c7-46e6-9d1e-74d6d80ac1a4" target="_blank" rel="noreferrer"><img src={Gcp} alt="GCP" className='logo1'  /></a>
              <p>Certificate, Badges: Google cloud Program (Training on Qwicklabs)</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB-DEVELOPEMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Positions</h3>
          </div>
          <ul className="service__list">
            <li>
              <img src={Raptors} alt="Raptors" srcSet="" className='logo'/>
              <p>
                <strong>TEAM RAPTORS - Robotics Club Of DIT </strong>
                Worked as a Part of software team as a <em>coder</em> in implementing path algorithms to find correct path and directions for a bot.</p>
            </li>
            <li>
              <img src={EDSI} alt="EDSI" className='logo' />
              <p>
                 Student Coordinator - Enterpreneurship Developemnt Startup and Innovation Club
                Helped in organizing sessions related with startups along with other members.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
