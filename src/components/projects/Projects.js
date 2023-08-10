import React from 'react'
import './projects.css'
import proj from '../../assets/portfolio-proj.jpg'

export default function Projects() {
  return (
    <div id='Projects-Sec'>
      <div className="container">
        <div className="row justify-content-between">
          <p id='proj-head'>Projects</p>
          <div className="col-lg-6 proj-box">
            <p className='proj-title'>Portfoilo Design</p>
            <img className='img-fluid mb-3' src={proj} alt="..." />
            <div className='' style={{margin:"-1rem 0 0 0"}}>
              <button className='btn-more'>More Details</button>
              <a href="https://github.com/MaheshUike43/Portfolio.git"><i className='bi bi-github'></i></a>

            </div>

          </div>
          <div className="col-lg-6 proj-box">

          </div>
        </div>
      </div>
    </div>
  )
}
