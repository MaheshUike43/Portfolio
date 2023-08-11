import React from 'react'
import './projects.css'
import proj from '../../assets/portfolio-proj.jpg'
import msg_proj from '../../assets/messenger-proj.jpg'
import pet_proj from '../../assets/pet-proj.jpg'

export default function Projects() {
  return (
    <div id='Projects-Sec'>
      <div className="container">
        <div className="row justify-content-between">
          <p id='proj-head'>Projects</p>
          <div className="col-lg-6 col-sm-12 proj-box">
            <p className='proj-title'>Portfoilo Design</p>
            <img className='img-fluid mb-3' src={proj} alt="..." />
            <div className='' style={{margin:"-1rem 0 0 0"}}>
              <button className='btn-more'>More Details</button>
              <a href="https://github.com/MaheshUike43/Portfolio.git"><i className='bi bi-github'></i></a>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 proj-box">
            <p className='proj-title'>TAE Messenger</p>
            <img className='img-fluid mb-3' src={msg_proj} alt="..." />
            <div className='' style={{margin:"-1rem 0 0 0"}}>
              <button className='btn-more'>More Details</button>
              <a href="https://github.com/MaheshUike43/College-Media-Messenger.git"><i className='bi bi-github'></i></a>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 proj-box">
            <p className='proj-title'>PET Re-Adopt</p>
            <img className='img-fluid mb-3' src={pet_proj} alt="..." />
            <div className='' style={{margin:"-1rem 0 0 0"}}>
              <button className='btn-more'>More Details</button>
              <a href="https://github.com/MaheshUike43/PET-ReAdopt.git"><i className='bi bi-github'></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
