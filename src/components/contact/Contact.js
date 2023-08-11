import React, { useEffect } from 'react'
import './contact.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Contact() {

  useEffect(() => {
    AOS.init({duration: 2000})
  })

  return (
    <div id='Contact-Sec'>
      <div className="container">
        <div className="row">
          <p id='contact-us-head' className='mb-5' data-aos='zoom-in'>Contact us</p>
          <div className='col-lg-7 col-sm-12' id='con-form' data-aos='fade-right'>
            <form action="submit">
              <div className='d-flex mb-3'>
                <input type="text" className='form-control w-75 me-3' name="name" id="txt-box" placeholder='Name'  />
                <input type="email" className='form-control w-75' name="email" id="txt-box" placeholder='Email' />
              </div>
              <input type="text" className='form-control mb-3' name="subject" id="txt-box" placeholder='Subject' />
              <textarea name="message" className='w-100' id="txt-box" placeholder='Message' cols="10" rows="10"></textarea>
              <button type='submit' className='btn' id='btn-send'>Send Now!</button>
            </form>
          </div>
          <div className='col-lg-5 col-sm-12 ps-lg-5 ps-sm-0' id='con-details'>
            <div data-aos='fade-left'>
              <i className="bi bi-geo-alt-fill icon"></i>
              <p className='cus-txt mt-3'>263, Vivekanand Ward, Near Hanuman Mandir <br />
                Ballarpur, Dist. Chandrapur (Maharashtra) - 442 701.
              </p>
            </div>

            <div className='' style={{margin:'40px 0px'}} data-aos='fade-left'>
              <i className="bi bi-phone mb-2 icon"></i>
              <p className='cus-txt mt-3'>+91 84468 56876</p>
              <p className='cus-txt'>+91 70200 46022</p>
            </div>

            <div className='mb-4' data-aos='fade-left'>
              <i className="bi bi-envelope-at icon"></i>
              <p className='cus-txt mt-3'>maheshuike23@gmail.com</p>
              <p className='cus-txt'>mah526840@gmail.com</p>
            </div>

            <div id='footer-icon' data-aos='fade-left'>
              <a href="https://github.com/MaheshUike43/"><i className='bi bi-github'></i></a>
              <a href="https://www.linkedin.com/in/mahesh-uike-0345/"><i className='bi bi-linkedin'></i></a>
              <a href="https://www.facebook.com/maheshuike30/"><i className='bi bi-facebook'></i></a>
              <a href="https://instagram.com/_mahesh.3_/"><i className='bi bi-instagram'></i></a>
              <a href="https://twitter.com/"><i className='bi bi-twitter'></i></a>
              <a href="https://t.me/Mah123U/"><i className='bi bi-telegram'></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
