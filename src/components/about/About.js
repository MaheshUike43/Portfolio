import React from 'react'
import './about.css'

export default function About() {
  return (
    <div id='about-section'>
      <div className='container'>
        <div className="row">
          <div className='col-lg-4 bg-info'>
            <img src={''} alt="..." />
          </div>
          <div className='col-lg-8'>
            <p id='abt-me'>About Me</p>
            <p id='abt-details'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit <br /><br />

              magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
            <button className='' id='abt-btn-cv'>Download CV</button>
            <button className='' id='abt-btn-pf'>Portfolio</button>
          </div>
        </div>
      </div>
    </div>
  )
}
