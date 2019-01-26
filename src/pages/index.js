import React from 'react'

import Layout from '../components/layout'
import '../styles.css'

const IndexPage = () => (
  <Layout>
    <div className='content-container'>
      <div className='content-overlay'></div>
      <div className='content-container-inner'>
        <div className='heading-container'>
          <h1>Hey! I'm Mike Kronk.</h1>
          <h2>I'm a Front-End Engineer in Austin, TX.</h2>
          <p>
            <span role='img' aria-label='controller'>🎮</span>
            <span role='img' aria-label='sunglasses'>😎</span>
            <span role='img' aria-label='computer guy'>👨🏼‍💻</span>
            <span role='img' aria-label='pawprints'>🐾</span>
            <span role='img' aria-label='beers'>🍻</span>
          </p>
        </div>
        <section className='content-section'>
          <p>
            Working on the Front-End is where it's at! I truly enjoy working at the intersection of people and technology that building user-friendly, data-rich interfaces requires.
          </p>
        </section>
        <section className='content-section'>
          <p>
            My technical skillset has a solid foundation behind it - HTML5, CSS3, and ES6+. Beyond this, my current favorite tools for building user interfaces are React, Sass, and Next.js.
          </p>
        </section>
        <section className='content-section'>
          <p>
            Besides coding, I believe that soft skills matter just as much as technical ability. Software development is a team sport, after all. To this end, I excel in organizing information from multiple sources and communicating with both technical and non-technical audiences.
          </p>
        </section>
        <section className='contact-me-section'>
          <p>
            Feel free to <a class='contact-me__link' style={{color: '#fff'}} href='mailto:cordialcoder@gmail.com'>say hi!</a>
          </p>
        </section>
      </div>
    </div>
  </Layout>
)

export default IndexPage
