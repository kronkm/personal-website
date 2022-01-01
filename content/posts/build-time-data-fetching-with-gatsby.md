---
path: build-time-data-fetching-with-gatsby
date: 2022-01-01T21:29:51.451Z
title: Build Time Data Fetching with Gatsby
description: A post showing how to fetch data during build time with Gatsby.
---


*Note - this article assumes working knowledge of the Gatsby framework. If you're new
to Gatsby, check out the awesome <a href="https://www.gatsbyjs.com/docs/tutorial/" target="__blank" rel="noopener noreferrer">Gatsby tutorial</a> first.*

For front end apps built with Gatsby, there are 3 specific times in which you can request data:

  1. Build time - while the production Gatsby app is building / before it is served
  2. Client Runtime - in the user's browser while they are navigating the app
  3. Server Runtime - when a user sends in a new page request (this is a new feature using the <a href="https://www.gatsbyjs.com/docs/how-to/rendering-options/using-server-side-rendering/" target="__blank" rel="noopener noreferrer">getServerData</a> function in Gastby 4 and requires a Node server to be running and serving the page)

This article will cover fetching data during build time (#1), which is one of the primary
benefits of building front end apps with Gatsby since it was designed with this strategy in mind.

### Benefits of Build Time Data Fetching

Data fetching during build time enables Gatsby to generate pages that are
pre-populated with data that is retrieved from various data sources.

This provides a huge performance benefit since the data retrievals can occur
ahead of time and stored as static content embedded within the page's HTML, ideally served over a CDN.

When a user eventually requests this HTML, their browser won't have to make those data requests when the app is being loaded, resulting in
a faster time to interactive (<a href="https://web.dev/interactive/" target="__blank" rel="noopener noreferrer">TTI</a>) compared
to loading the data on demand via client or server runtime data fetching.

### Use Cases for Build Time Data Fetching

While there is a great performance benefit to be had when fetching data during build time,
it's important to understand what the use cases are for this strategy.

Since the data fetching will occur during the build phase, good candidates for data to retrieve at build time include data
that isn't likely to change much over time. This is because if the data changes, it will only be updated in your app if
you complete another build. Here are some examples:

* blog posts
* product pages for long-standing products
* permanent (or semi-permanent) attributes for entities, such as names or other static metadata

This means that data that is more dynamic, or could be fetched as a response to a user action,
should most likely be retrieved at runtime (either via the client or server). Below are some examples of more
dynamic data that might need to be retrieved at run time:

* search results (with keywords, filters, etc.)
* profile information for a specific user
* up to date stock information

Essentially, any data that will either never change or won't change very often are good use cases for fetching during
build time. Data that changes often or could change in real time in response to a user should be fetched during runtime.

### Sourcing Data During Build Time

To source (or retrieve) your data at build time, there are two 
strategies that Gatsby offers - integrating with a Gatsby source plugin or
manually sourcing the data yourself. Using a source plugin is a faster
integration, while the manual approach involves using specific Gatsby APIs
to integrate with the GraphQL data layer in your `gatsby-node.js` file.

#### Sourcing the Data With a Source Plugin (Option 1)

To integrate a source plugin, you first need to add the plugin to your `plugins`
array in the main export of the `gatsby-config.js` file. By convention, these
plugins will be prepended with `gatsby-source-` in their names, such as
`gatsby-source-filesystem` or `gatsby-source-hacker-news`.

For a simple example, we'd define the `gatsby-source-hackers-news` plugin
in our config like so:

```jsx
// gatsby-config.js
module.exports = {
  plugins: [
    `gatsby-source-hacker-news`,
    ...
  ]
}
```

However, it's far more common for data source plugins to have a set of options,
in order to do things like authenticating with the external service and
defining what specific data should be sourced.

For example, this blog uses specific configurations of the `gatsby-source-filesystem` plugin to source blog posts
and assets from the `content/posts` and `static/img` directories.

These directories are where the integrated <a href="https://www.netlifycms.org/docs/intro/" target="__blank" rel="noopener noreferrer">NetlifyCMS</a> publishes blog posts and images to, respectively. Gastby
will then include these resources in dynamically generated blog post pages during the build phase for this blog,
such as the page you're on now.

To get this specific data sourced, here's what the `gastby-config.js` configuration looks like to specify those directory names - note that
in this case there is a separate `gatsby-source-filesystem` plugin instance defined for each:

```jsx
`gastby-config.js`
module.exports = {
  plugins: [
    ...
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: `uploads`,
      },
    },
  ],
  ...
}
```

A Gastby source plugin will ideally have information in the README about how to integrate and configure it
in your `gastby-config.js` file - so refer to the specific documentation that you need when using one.

#### Sourcing the Data Manually (Option 2)

To source data on your own, you can manually request data yourself and then direct Gatsby to
insert it into a new GraphQL node in your `gatsby-node.js` file.

You can do this via the `sourceNodes` hook, which represents actions
that take place when Gatsby is sourcing nodes in your app's
GraphQL data layer during bootstrapping.

Anything defined within the `sourceNodes` hook will execute just one time after all of your
installed source plugins create their nodes first.

This custom node will then be available in the GraphQL data layer during build time
and queryable by your app.

Here's an example of creating a new node in the `gatsby-node.js` file:

```jsx
// gatsby-node.js

const axios = require('axios');

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
  createNodeId,
}) => {
  // Manually request the data
  const dinosaur = await axios.get("/dinosaurs/1").data;

  const dinosaurData = {
    name: dinosaur.name,
    description: dinosaur.description,
    era: dinosaur.era
  };

  // Create metadata for node, including some defaults
  const nodeMeta = {
    id: createNodeId(`example-dinosaur-data`),
    parent: null,
    children: [],
    internal: {
      type: `Dinosaur Example`,
      contentDigest: createContentDigest(dinosaurData),
    }
  };

  const customNode = Object.assign({}, dinosaurData, nodeMeta);
  createNode(customNode);
}
```

### Querying Data During Build Time

Once your data has been sourced via source plugins and custom nodes (if needed),
you can now query this data in your pages and components.

#### Querying the Data In a Page (Option 1)

To fetch data during build time in a page, you can use a Page Query.
A Page Query is an exported const that uses the `graphql` tag imported from Gatsby,
and it should include the query for the data you want:

```jsx
// src/pages/dino.js

import React from "react";
import { graphql } from "gatsby";

export const DinoPageQuery = graphql`
  query DinoQuery {
    dinosaurExample {
      name
      description
      era
    }
  }
`

const DinoPage = ({ data }) => {
  const dinoName = data.dinosaurExample.name;
  const dinoEra = data.dinosaurExample.era;
  const dinoDescription = data.dinosaurExample.description;


  return (
    <main>
      <h1>{dinoName} - {dinoEra} Era</h1>
      <p>{dinoDescription}</p>
    </main>
  )
}

export default DinoPage;
```

#### Querying the Data in a Component (Option 2)

To fetch data during build time in a component, you can use the `useStaticQuery` hook.
`useStaticQuery` is built into Gatsby and works just like any other <a href="https://reactjs.org/docs/hooks-intro.html" target="__blank" rel="noopener noreferrer">React hook</a>
would.

Then, the query within the hook can look exactly the same as it would in a Page Query:

```jsx
// src/components/main.js

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function Main() {
  const data = useStaticQuery(graphql`
    query MainQuery {
      dinosaurExample {
        name
        description
        era
      }
    }
  `)

  return (
    <main>
      <h1>{data.dinosaurExample.name} - {data.dinosaurExample.era} Era</h1>
      <p>{data.dinosaurExample.description}</p>
    </main>
  )
}
```

There is also an older <a href="https://www.gatsbyjs.com/docs/how-to/querying-data/static-query/" target="__blank" rel="noopener noreferrer">StaticQuery component</a>
that you can use for querying data in a component.

However you query your data, remember that you can always use the <a href="https://www.gatsbyjs.com/docs/how-to/querying-data/running-queries-with-graphiql/" target="__blank" rel="noopener noreferrer">GraphiQL IDE</a> that's built into Gatsby
to reference your data schema in your local environment. This will help you ensure that you're constructing
your queries correctly.

### Review

Build time data fetching is the ideal strategy for retrieving any data that
doesn't change very often - mainly for performance reasons.

In Gatsby, two things must happen to enable build time data fetching:

* Sourcing the data so that it's available during build time
* Querying the data in your pages and/or components

For sourcing the data, you can either use a source plugin or manually retrieve the
data and insert it into a custom node in your `gatsby-node.js` file. Either
option makes the data available in your GraphQL data layer.

For querying the data, you can use page queries in your pages and the `useStaticQuery` hook
(or the older `StaticQuery` component) in your components.

***Further Reading:***

* <a href="https://www.gatsbyjs.com/docs/conceptual/react-hydration/" target="__blank" rel="noopener noreferrer">Understanding React Hydration</a>
* <a href="https://www.gatsbyjs.com/docs/conceptual/data-fetching/" target="__blank" rel="noopener noreferrer">Build Time and Client Runtime Data Fetching</a>
* <a href="https://www.gatsbyjs.com/docs/recipes/querying-data/" target="__blank" rel="noopener noreferrer">Recipes: Querying Data</a>  - to reference page queries, the <code>useStaticQuery</code> hook, and the <code>StaticQuery</code> component
* <a href="https://www.gatsbyjs.com/docs/reference/config-files/node-api-helpers" target="__blank" rel="noopener noreferrer">Node API Helpers</a> - to reference <code>createNodeId</code> and <code>createContentDigest</code>
* <a href ="https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/" target="__blank" rel="noopener noreferrer">Gatsby Server-Side Rendering API</a> - for more info about fetching data during server runtime

