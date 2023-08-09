import React from 'react'
import './skills.css'
import '@fortawesome/react-fontawesome'
import html from '../../assets/icons/html-51.png'
import css from '../../assets/icons/css-3.png'
import js from '../../assets/icons/js.png'
import bs from '../../assets/icons/bootstrap.png'
import react from '../../assets/icons/React.png'
import nodejs from '../../assets/icons/Nodejs.png'
import mongodb from '../../assets/icons/mongodb.jpeg'
import sql from '../../assets/icons/sql.png'

export default function Skills() {
  return (
    <div id='Skills-Sec'>
      <div className='black-bg1'>
        <div className="container">
          <div className="row justify-content-between">
            <p id='skills'>Skills</p>
            <div className="box mb-lg-5 mb-sm-3">
              <img className='img-fluid' src={html} alt="..." /> <br />
              <div>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
            <div className="box mb-lg-5 mb-sm-3">
              <img className='img-fluid' src={css} alt="..." /> <br />
              <div>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
            <div className="box mb-lg-5 mb-sm-3">
              <img className='img-fluid' src={bs} alt="..." /> <br />
              <div>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
            <div className="box mb-lg-5 mb-sm-3">
              <img className='img-fluid' src={js} alt="..." /> <br />
              <div>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
              </div>
            </div>
            <div className="box mb-sm-3">
              <img className='img-fluid' src={react} alt="..." /> <br />
              <div>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
              </div>
            </div>
            <div className="box mb-sm-3">
              <img className='img-fluid' src={nodejs} alt="..." /> <br />
              <div>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
              </div>
            </div>
            <div className="box mb-sm-3">
              <img className='img-fluid' src={mongodb} alt="..." /> <br />
              <div>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
              </div>
            </div>
            <div className="box mb-sm-3">
              <img className='img-fluid' src={sql} alt="..." /> <br />
              <div>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
