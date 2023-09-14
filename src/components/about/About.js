import React, { useEffect } from 'react'
import './about.css'
import abtimg from '../../assets/Photo.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {

  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])

  return (
    <div id='about-section'>
      <div className='container'>
        <div className="row">
          <p id='abt-me' data-aos='zoom-in'>About Me</p>
          <div className='col-lg-4 col-md-12 img-box'>
            <img src={abtimg} alt="..." id='abt-img' data-aos='fade-right'/>
          </div>
          <div className='col-lg-8 col-md-12' data-aos='fade-left'>
            <p id='abt-details'>My Name is <b style={{ color: '#BBFF00' }}>MAHESH BANDU UIKE</b>. <br />
              I have completed my Post-Graduation in Master of Computer Application. <br />
              I have 3 Months of Experience as Fullstack Developer Intern in Innomatics Research Labs, Hyderabad. <br /> <br />
              I am Fullstack developer in ReactJS for front-end development, Node.js and Express.js for server-side programming, and MongoDB for database management. With knowledge of REST API design and utilization, I leverage Git for efficient version control to deliver comprehensive and robust web applications.</p>
            <a href='https://drive.google.com/file/d/166-Du8l5vJsU9H7JdAhXj1x7jlo8JyUQ/view?usp=drive_link'>
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
