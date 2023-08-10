import React from 'react'
import './about.css'
import abtimg from '../../assets/Photo.jpg'

export default function About() {
  return (
    <div id='about-section'>
      <div className='container'>
        <div className="row">
          <p id='abt-me'>About Me</p>
          <div className='col-lg-4 col-md-12 img-box'>
            <img src={abtimg} alt="..." id='abt-img' />
          </div>
          <div className='col-lg-8 col-md-12'>
            <p id='abt-details'>My Name is <b style={{ color: '#BBFF00' }}>MAHESH BANDU UIKE</b>. <br />
              I have completed my Post-Graduation in Master of Computer Application. <br />
              I have 3 Months of Experience as Fullstack Developer Intern in Innomatics Research Labs, Hyderabad. <br /> <br />
              I am Fullstack developer in ReactJS for front-end development, Node.js and Express.js for server-side programming, and MongoDB for database management. With knowledge of REST API design and utilization, I leverage Git for efficient version control to deliver comprehensive and robust web applications.</p>
            <a href='https://drive.google.com/file/d/1AtO2oo2lOiweSxXT5PTwMhpOI4bnbbpI/view?usp=drive_link'>
              <button className='' id='abt-btn-cv'>
                Download CV
              </button>
            </a>
            <a href="#skills">
            <button className='' id='abt-btn-pf'>See more</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
