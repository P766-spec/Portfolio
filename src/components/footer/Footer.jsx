import React from 'react'
import './footer.css';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';


const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'>PALAK</a>
        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Achievements</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#testimonials">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://linkedin.com"><FaLinkedin /></a>
          <a href="https://twitter.com"><FaTwitter /></a>
          <a href="https//github.com"><FaGithub /></a>
          <a href="https://hashnode.com"><SiHashnode /></a>
        </div> 

        <div className="footer__copyright">
          <small> Created by <strong>Palak Mantri </strong>| &copy; 2022 All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer
