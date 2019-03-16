import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby';
import Header from './Header';
import Footer from './Footer';

import './layout.css';
import '../styles.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Front-End Engineer Lead with a focus on React, CSS, architecture, team dynamics, and both technical and non-technical communication.' }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className='page-container'>
          <Header />
          {children}
          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
