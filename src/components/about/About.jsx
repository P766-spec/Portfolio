import React from 'react'
import './about.css';
import ME from '../../assets/me1.about.png';
import {FaAward} from 'react-icons/fa'
import {BiHappyAlt} from 'react-icons/bi'
import {VscFolderLibrary} from 'react-icons/vsc'


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
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className='about__card'>
              <BiHappyAlt className='about__icon'/>
              <h5>Certificates</h5>
              <small> 4+</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>

              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
         I'm a frontend developer who enjoys building unique interfaces with javascript and Reactjs along with having a cup of tea.☕
         I'm open to Full-stack(remote/onsite) opportunities with a passion of Front-end development. If you like what you see and have a project you need coded, don’t hestiate to contact me.
          </p>
          <a href="#portfolio" className='btn btn-primary'>See Projects</a>
        </div>
      </div>
    </section>
  )
}

export default About
