import React, { useState } from 'react'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import './menu.css'
import logo from '../../assets/Mahesh_logo1.png'
import Home from '../home/Home'
import About from '../about/About'
import Skills from '../skills/Skills'
import Portfolio from '../portfolio/Portfolio'
import Contact from '../contact/Contact'

export default function Menu() {

  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <div>
      <div className='container-fluid' id='menu-bar'>
        <div className='container'>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <img src={logo} alt="..." id='logo' className='navbar-brand' />
            </div>
            {!toggle ?
              <div className="col-lg-9 col-sm-6">
                <div id='menu-list'>
                  <a className="nav-link" href='#home'>Home</a>
                  <a className="nav-link" href='#about'>About</a>
                  <a className="nav-link" href='#skills'>Skills</a>
                  <a className="nav-link" href='#portfolio'>Portfolio</a>
                  <a className="nav-link" href='#contact'>Contact</a>
                </div>
                <i className="bi bi-list" onClick={handleClick} id='menu-icon'></i>
              </div>
              :
              // <></>
              <div className="col-lg-9 col-sm-6">
                <div id='menu-list2'>
                  <a className="nav-link" href='#home'>Home</a>
                  <a className="nav-link" href='#about'>About</a>
                  <a className="nav-link" href='#skills'>Skills</a>
                  <a className="nav-link" href='#portfolio'>Portfolio</a>
                  <a className="nav-link" href='#contact'>Contact</a>
                </div>
                <i className="bi bi-x-lg" onClick={handleClick} id='menu-icon'></i>
              </div>
            }
          </div>
        </div>
      </div>
      <div id='home'>
        <Home />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='skills'>
        <Skills />
      </div>
      <div id='portfolio'>
        <Portfolio />
      </div>
      <div id='contact'>
        <Contact />
      </div>
    </div>
  )
}
