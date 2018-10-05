import React from 'react'

import Layout from '../components/layout'
import headshot from '../images/MK2_circle.jpg';
import '../styles.css'

const IndexPage = () => (
  <Layout>
    <div className="content-container">
      <div style={{position: 'relative'}}>
        <h1 style={{
        }}>Mike Kronk</h1>
      </div>
      <p>🎮😎👨🏼‍💻🐾🍻</p>
      <h2>Front-End Developer</h2>


      <section className='content-section'>
        <p>Working Philosophy:</p>
        <p>Software development is a team sport.</p>
      </section>

      <section className='content-section'>
        <p>Technical Specialties:</p>
        <p>React - Front-End Architecture - Sass</p>
      </section>

      <section className='content-section'>
        <p>Non-Technical Skills:</p>
        <p>Workflows - Communication - Composure</p>
      </section>
    </div>
  </Layout>
)

export default IndexPage
