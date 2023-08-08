import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <div id='Contact-Sec'>
      <div className="container">
        <div className="row">
          <p id='contact-us-head' className='mb-5'>Contact us</p>
          <div className='col-lg-6'>
            <form action="submit">
              <div className='d-flex mb-3'>
                <input type="text" className='form-control w-75 me-3' name="name" id="txt-box" placeholder='Name' />
                <input type="email" className='form-control w-75' name="email" id="txt-box" placeholder='Email' />
              </div>
              <input type="text" className='form-control mb-3' name="subject" id="txt-box" placeholder='Subject' />
              <textarea name="message" className='w-100' id="txt-box" placeholder='Message' cols="10" rows="10"></textarea>
              <button className='' id='btn-send'>Send Now!</button>
            </form>
          </div>
          <div className='col-lg-5 ms-5'>
            <div>
              <i className="bi bi-geo-alt-fill" id='icon'></i>
              <p id='cus-txt'>263, Vivekanand Ward, Near Hanuman Mandir <br />
                Ballarpur, Dist. Chandrapur (Maharashtra) - 442 701.
              </p>
            </div>

            <div className='my-4'>
              <i className="bi bi-phone mt-4" id='icon'></i>
              <p id='cus-txt'>+91 84468 56876</p>
              <p id='cus-txt'>+91 70200 46022</p>
            </div>

            <div>
              <i className="bi bi-envelope-at mt-4" id='icon'></i>
              <p id='cus-txt'>maheshuike23@gmail.com</p>
              <p id='cus-txt'>mah526840@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
