import React from 'react'

// import Header from somewhere
// import Footer from somewhere
// import base styles from somewhere

import Layout from '../components/layout'
// import '../styles.css'
import mk from '../images/mk.jpg';

const IndexPage = () => (
    <Layout>
        <section className='section-box'>
            <h1 className='section-heading'>Hi, I'm Mike Kronk!</h1>
            <img className='sweet-portrait' src={mk} alt="Mike Kronk" />
            <h2 className='section-subheading'>I'm a Front-End Engineer Lead based in Austin, TX
                <span className='emoji' role='img' aria-label='cactus'>🌵</span>
                <span className='emoji' role='img' aria-label='sun'>☀️</span>
                <span className='emoji' role='img' aria-label='taco'>🌮</span>
            </h2>
        </section>
    </Layout>
)

export default IndexPage
