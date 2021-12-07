import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <Container>
            <p>
              working at the intersection of design and data. <a href="/blog/about-me">whoami</a>.
            </p>
          </Container>
        );
      }}
    />
  );
}

const bioQuery = graphql`query BioQuery {
  site {
    siteMetadata {
      author
    }
  }
}
`

const Container = styled.div`
  display: flex;
  margin-bottom: 24px;
  align-items: center;
  p {
    font-style: italic;
    margin-bottom: 0;
  }
`

export default Bio
