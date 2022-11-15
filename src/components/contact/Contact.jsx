import React from 'react'
import './contact.css';
import {MdEmail} from 'react-icons/md';
import {BsLinkedin} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pjxsbzi', 'template_kvn95xr', form.current, 'iVg_vcK7oSwa1cQSk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);

      });
      e.target.reset();
    };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mantripalak1712@gmail.com</h5>
            <a href="mailto:mantripalak1712@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>palakmantri</h5>
            <a href="https://linkedin.com/in/mantri123">Send a message</a>
          </article>
          <article className="contact__option">
            <BsTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>@PalakMantri1</h5>
            <a href="https://twitter.com/PalakMantri1?s=08">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )

}

export default Contact