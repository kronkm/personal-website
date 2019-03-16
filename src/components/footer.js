import React from 'react';

const Footer = () => (
    <footer>
        <div className='footer-content'>
            <span className='footer-item'>© Mike Kronk 2019.</span>
            <span className='footer-item'><a href="https://github.com/kronkm/personal-website" target="_blank">View Source.</a></span>
            <span className='footer-item'>Powered by <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby.</a></span>
            <span className='footer-icons'>
                <a className="footer-link link-github" href="https://github.com/kronkm" target="_blank"></a>
                <a className="footer-link link-li" href="https://www.linkedin.com/in/michaelrkronk/" target="_blank"></a>
                <a className="footer-link link-email" href="mailto:mkronk7@gmail.com"></a>
            </span>
        </div>
    </footer>
);

export default Footer;