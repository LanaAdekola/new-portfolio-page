import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>React js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>APIs</h4>
                <small className='text-light'>Professional</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>Responsive Web Design</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>UI Design</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>Git & Github</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>Product Management</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__frontend">
          <h3>Content Editor</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>Script Writing</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>Technical writing</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>ScreenWriting</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>Blog Writing Services</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>Video Editing</h4>
                <small className='text-light'>Professional</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>Project Management</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>Social media engagement services</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>Critical Thinking</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' /> 
              <div>
                <h4>Product Marketing Services</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience