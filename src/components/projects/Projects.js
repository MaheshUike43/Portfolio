import React, { useEffect, useState } from 'react'
import './projects.css'
import proj from '../../assets/portfolio-proj.jpg'
import msg_proj from '../../assets/messenger-proj.jpg'
import pet_proj from '../../assets/pet-proj.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Projects() {

  const [show, setShow] = useState(true)

  useEffect(() => {
    AOS.init({ duration: 2000 });
  })

  return (
    <div id='Projects-Sec'>
      <div className="container">
        <div className="row justify-content-between">
          <p id='proj-head' data-aos='zoom-in'>Projects</p>
          <div className="col-lg-6 col-sm-12 proj-box" data-aos='fade-right'>
            <p className='proj-title'>Portfolio Design</p>
            <img className='img-fluid mb-3' src={proj} alt="..." />
            <div id='proj-details'>
              <div className='pd-in'>
                <h6>Description</h6>
                <p className='mb-2'>This portfolio is totally design and developed by me.</p>
                <h6>Technologies</h6>
                <p>Technologies used to develop this portfolio is HTML, CSS, Bootstrap, JavaScript, ReactJS, NodeJS.</p>
              </div>
              <a href="https://github.com/MaheshUike43/Portfolio.git"><i className='bi bi-github'></i></a>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 proj-box mt-sm-2" data-aos='fade-left'>
            <p className='proj-title'>College Media Messenger</p>
            {show && <img className='img-fluid mb-3' src={msg_proj} alt="..." />}
            <div id='proj-details'>
              <div className='pd-in'>
                <h6>Description</h6>
                <p className='mb-2'>This College Media Messenger is developed for students and professors to get interact with each other
                  freely in an easy way. Student can share their innovative ideas by posting them on their feeds as a post.</p>
                <h6>Technologies</h6>
                <p>Technologies used to develop this web application is HTML, CSS, Bootstrap, JavaScript, ReactJS, NodeJS, ExpessJS, MongoDB.</p>
              </div>
              <a href="https://github.com/MaheshUike43/College-Media-Messenger.git"><i className='bi bi-github'></i></a>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 proj-box" data-aos='fade-right'>
            <p className='proj-title'>PET Re-Adopt</p>
            <img className='img-fluid mb-3' src={pet_proj} alt="..." />
            <div id='proj-details'>
              <div className='pd-in'>
                <h6>Description</h6>
                <p className='mb-2'>This Web Application is developed for PET Rescue and Adoption Organizations. This applications helps to find adopters for rescue pets. Adopters can adopt any pet freely without any problems.</p>
                <h6>Technologies</h6>
                <p>Technologies used to develop this web application is HTML, CSS, Bootstrap, JavaScript, ReactJS, NodeJS, ExpessJS, MongoDB, Firebase</p>
              </div>
              <a href="https://github.com/MaheshUike43/PET-ReAdopt.git"><i className='bi bi-github'></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
