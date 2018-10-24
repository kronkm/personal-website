import React from 'react'

import Layout from '../components/layout'
import '../styles.css'

const IndexPage = () => (
  <Layout>
    <div className="content-container">
      <div className="translucent-overlay"></div>
      <div style={{position: 'relative'}}>
        {/*<div style={{textAlign: 'center'}}>
          <h1 style={{
          }}>Mike Kronk</h1>
          <p>🎮😎👨🏼‍💻🐾🍻</p>
          <h2>Front-End Developer</h2>
        </div>*/}
        <div style={{textAlign: 'center'}}>
          <h1>Hey! I'm Mike Kronk.</h1>
          <h2>I'm a Front-End Engineer in Austin, TX.</h2>
          <p>🎮😎👨🏼‍💻🐾🍻</p>
        </div>
        <section className='content-section'>
          <p>
            Working on the Front-End is where it's at! I truly enjoy working at the intersection of people and technology that building user-friendly, data-rich interfaces requires.
          </p>
        </section>

        <section className='content-section'>
          <p>
            My technical skillset has a solid foundation behind it - HTML5, CSS3, and ES6+. Beyond this, my current favorite tools for building user interfaces are React, Sass, and Webpack.
          </p>
        </section>

        <section className='content-section'>
          <p>
            Besides coding, I believe that soft skills matter just as much as technical ability. Software development is a team sport, after all. To this end, I excel in organizing information from multiple sources and communicating with both technical and non-technical audiences.
          </p>
        </section>

        <section style={{textAlign: 'center'}}>
          <p>
            Feel free to <a class="contact-me__link" style={{color: '#fff'}} href="mailto:email@mrkronk.com">say hi!</a>
          </p>
        </section>
      </div>
    </div>
  </Layout>
)

export default IndexPage
