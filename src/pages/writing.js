import React from 'react';
import Layout from '../components/layout'

const Blog = () => (
    <Layout>
        <section className='section-box'>
            <h1 className='section-heading margin-bottom-lg'>Selected Blog Posts</h1>
            <ul className='post-list'>
                <li className='post-list--item'>
                    <a href='http://cordialcoder.com/increasing-your-value-as-a-software-developer/' target='_blank'>
                        Increasing Your Value as a Software Developer
                    </a>
                </li>
                <li className='post-list--item'>
                    <a href='http://cordialcoder.com/7-smart-strategies-for-communicating-with-non-technical-coworkers/' target='_blank'>
                        7 Smart Strategies for Communicating with Non-Technical Coworkers
                    </a>
                </li>
                <li className='post-list--item'>
                    <a href='http://cordialcoder.com/5-steps-for-becoming-a-better-technical-communicator-as-a-software-developer/' target='_blank'>
                        5 Steps for Becoming a Better Technical Communicator as a Software Developer
                    </a>
                </li>
            </ul>
        </section>
    </Layout>
);

export default Blog;