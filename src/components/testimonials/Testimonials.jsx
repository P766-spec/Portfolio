import React from 'react'
import './testimonials.css';


// import Swiper core and required modules
import {  Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';




const Testimonials = () => {
  return (
    <section id="testimonials">
     <h5>Education</h5>
     <h2>Grades Till Date</h2>

     <Swiper className="container testimonials__container"
     // install Swiper modules
     modules={[ Pagination, Navigation]} 
     spaceBetween={40}
     slidesPerView={1}
     navigation
     pagination={{ clickable: true }}
     >
      
      
        <SwiperSlide className="testimonial">
        <div >
          <h3>BE - Computer Engineering (2021-2024)</h3>
          <h4>(First Year) SGPA: 9.84</h4>
          <h5>DR.D.Y. Patil Institute Of Technoloy, Pimpri, Pune</h5>
        </div> 
        </SwiperSlide>
        <SwiperSlide className="testimonial">
        <div >
          <h3>12th - Science (2019-2020)</h3>
          <h4>Percentage: 92.24</h4>
          <h5>Mother Mary Junior College, Mumbai</h5>
        </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
        <div >
          <h3>10th- School (2017-2018)</h3>
          <h4>Percentage: 94.46</h4>
          <h5>Father Joseph's English High School, Mumbai</h5>
        </div>
        </SwiperSlide>
      
        
        
        
       
       
     </Swiper>
    
    </section>
  )
}

export default Testimonials
