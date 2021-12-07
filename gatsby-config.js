module.exports = {
  siteMetadata: {
    // edit below
    title: `Mike Kronk`,
    author: `Mike Kronk`,
    description: `Personal Website.`,
    siteUrl: `https://mikekronk.com/`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "blog",
        engine: "flexsearch",
        engineOptions: {
          encode: "icase",
          tokenize: "forward",
          async: false,
        },
        query: `
          {
            allMdx {
              nodes {
                id
                fields { slug }
                excerpt
                rawBody
                frontmatter {
                  title
                  description
                  date(formatString: "MMMM DD, YYYY")
                }
              }
            }
          }
        `,
        ref: "id",
        index: ["title", "rawBody"],
        store: ["id", "slug", "date", "title", "excerpt", "description"],
        normalizer: ({ data }) =>
          data.allMdx.nodes.map(node => ({
            id: node.id,
            slug: node.fields.slug,
            rawBody: node.rawBody,
            excerpt: node.excerpt,
            title: node.frontmatter.title,
            description: node.frontmatter.description,
            date: node.frontmatter.date,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
      name: `Mike Kronk`,
      short_name: `MK`,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      // Generate icons for PWA and a favicon
      icon: `src/images/sauropod.png`,
      },
    },
    `gatsby-plugin-feed-mdx`,
    `gatsby-plugin-root-import`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: `uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    /*{
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // edit below
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },*/
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
