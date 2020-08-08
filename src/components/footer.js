import React from "react";

const Footer = () => (
    <footer>
        <div className="footer-content">
            <div>
                <span className="footer-item">© Mike Kronk 2020. </span>
                <span className="footer-item"><a href="https://github.com/kronkm/personal-website" target="_blank" rel="noreferrer">View Source. </a></span>
                <span className="footer-item">Powered by <a href="https://www.gatsbyjs.org/" target="_blank" rel="noreferrer">Gatsby.</a></span>
            </div>
            <div className="footer-icons">
                <a aria-label="GitHub" className="footer-link link-github" href="https://github.com/kronkm" target="_blank" rel="noreferrer">GitHub</a>
                <a aria-label="LinkedIn" className="footer-link link-li" href="https://www.linkedin.com/in/michaelrkronk/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a aria-label="Email" className="footer-link link-email" href="mailto:mkronk7@gmail.com">Email</a>
            </div>
        </div>
    </footer>
);

export default Footer;