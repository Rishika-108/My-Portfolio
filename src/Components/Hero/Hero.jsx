import React from 'react'
import './Hero.css'
import webDeveloper from '../../assets/Web-Developer.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src= {webDeveloper} alt="" />
      <h1><span>I'm Rishika Thakur,</span> a Web Developer</h1>
      <p>Front-end developer specializing in React, JavaScript, and HTML5. I love creating Creating engaging websites with clean code and user-centric design.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
         {/*<div className="hero-resume">My Resume</div>*/ }
      </div>
    </div>
  )
}

export default Hero
