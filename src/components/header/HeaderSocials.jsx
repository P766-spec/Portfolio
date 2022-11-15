import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {SiHashnode} from 'react-icons/si';
import {BsTwitter} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/mantri123" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
        <a href="https://github.com/P766-spec" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://mantri.hashnode.dev/" target="_blank" rel="noreferrer"><SiHashnode /></a>
        <a href="https://twitter.com/PalakMantri1?s=08" target="_blank" rel="noreferrer"><BsTwitter /></a>
      
    </div>
  )
}

export default HeaderSocials
