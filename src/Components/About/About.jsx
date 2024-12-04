import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import programmer from '../../assets/programmer.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src= {theme_pattern} alt="" />
      </div>
     <div className="about-section">
        <div className="about-left">
            <img src= {programmer} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>My expertise lies in front-end development, where I blend creativity with technical precision to build user centric and responsive webistes</p>
            <p>I'm constantly fascinated by the power of code to transform ideas into reality.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML and CSS</p><hr style={ {width:"50%"}}/></div>
            <div className="about-skill"><p>React JS</p><hr style={ {width:"70%"}}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={ {width:"60%"}}/></div>
             {/*<div className="about-skill"><p>Next JS</p><hr style={ {width:"50%"}}/></div>*/}
          </div>
        </div>
     </div>
      {/*<div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
     </div>*/ }
    </div>
  )
}

export default About
