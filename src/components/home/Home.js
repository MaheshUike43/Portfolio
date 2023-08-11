import React, { useEffect, useState } from 'react';
import './home.css';
import Homebg from '../../assets/Home-bg.jpg';

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const dynamicTexts = ['MAHESH UIKE', 'FULLSTACK DEVELOPER', 'UI/UX DESIGNER'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length);
    }, 2000);
    
    return () => clearInterval(interval);

  }, []);
  
  return (
    <div id='home-section'>
      <div className='black-bg'>
        <div className='container'>
          <div className="row text-center">
            <div className='col-lg-7 mx-auto' id='home-content'>
              <p id='text-1'>HELLO I'M</p>
              <ul id='dynamic-text'>
                <li>
                  <span className={textIndex === 0 ? 'visible' : 'hidden'}>
                    {dynamicTexts[0]}
                  </span>
                </li>
                <li>
                  <span className={textIndex === 1 ? 'visible' : 'hidden'}>
                    {dynamicTexts[1]}
                  </span>
                </li>
                <li>
                  <span className={textIndex === 2 ? 'visible' : 'hidden'}>
                    {dynamicTexts[2]}
                  </span>
                </li>
              </ul>
              <p id='text-2'>
                ASPIRING SOFTWARE DEVELOPER
              </p>
              <a className='' href='https://drive.google.com/file/d/1AtO2oo2lOiweSxXT5PTwMhpOI4bnbbpI/view?usp=drive_link' id='btn-cv'>Download CV</a>
            </div>
          </div>
        </div>
      </div>
      <img className='img-fluid' id='home-bg' src={Homebg} alt="..." />
    </div>
  );
}
