import React from 'react'
import CV from '../../assets/Palak__Resume.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Lets Talk</a>
      
    </div>
  )
}

export default CTA
