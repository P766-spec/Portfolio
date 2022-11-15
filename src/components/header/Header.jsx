import React from 'react'
import "./header.css";
import CTA from './CTA'
import ME from '../../assets/me11.png'

import HeaderSocials from './HeaderSocials';
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
   <header>
    <div className="container header_container">
      <h3>Hello I'm</h3>
      <h1>Palak Mantri</h1>
      <h3 className="text-light">
        <span>And I'm a</span>
        <Typewriter
        options={{
          autoStart: true,
          loop: true,
          delay: 80,
          strings: [
            "Frontend Developer",
            "Learner",
            "Student"
          ]
        }}


        />
      </h3>
      <CTA />
      
      < HeaderSocials />

      <div className="me">
      
        <img src ={ME} alt="me" />
       
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>
      
    </div>
    
   </header>
  )
}

export default Header
