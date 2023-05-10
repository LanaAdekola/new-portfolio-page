import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='' className='footer__logo'>Adelana</a>


      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/adekola-adelana-94393b165/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/LanaAdekola' target='_blank'><BsGithub /></a>
        <a href='https://www.instagram.com/ade_flashcuts/' target='_blank'><BsInstagram/></a>
        <a href='https://twitter.com/adeboy2885' target='_blank'><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Adekola Adelana. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer