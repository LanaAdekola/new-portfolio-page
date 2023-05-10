import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Content Editing</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Contributes new ideas for future publications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Researching, proofreading, and publishing both traditional and online media.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Fact-check articles and ensure the use of proper spelling, grammar, and syntax in outputs..</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ensures the team’s tasks are completed in a timely manner</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Verifies information and research</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Proofreads and edits the work of content writers</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating tools that improve site interaction regardless of the browser.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services