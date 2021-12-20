---
path: update-favicon
date: 2021-12-19T00:16:47.314Z
title: Three Ways to Update the Favicon for a Gatsby App
description: The options for configuring a favicon in Gatsby and the order of
  priority for each.
---


Whether you're building a Gatsby app from scratch or using a starter,
there are several different ways to set the favicon.

For a beginner this can feel non-intuitive, especially if you're using a starter and not sure about how all of the settings and plugins work.

This definitely confused me at first, so I explored a few different approaches via local testing on my own.

I've added three examples below so you can set your favicon, or in the case of using a starter, have a few places to look to figure out where your favicon is defined.

### #1 - Adding a Favicon to the Static Folder (Not Recommended)

The first approach is to store the favicon in `static/favicon.ico`.

For a Gatsby app, every file in the <a href="https://www.gatsbyjs.com/docs/how-to/images-and-media/static-folder/#adding-assets-outside-of-the-module-system" target="__blank" rel="noopener noreferrer" >static folder</a> is automatically added to the `public` directory when Gatsby builds (in all environments), and will be accessible by the client.

If you're using a starter, this is the first place you should look to see if it's defined there - or even just to see if there's a static folder present in the first place.

While this approach is possible, it isn't recommended - the Gatsby documentation
recommends <a href="https://www.gatsbyjs.com/docs/how-to/images-and-media/importing-assets-into-files/" target="__blank" rel="noopener noreferrer">importing assets directly into JS files</a> in most cases, unless there's a <a href="https://www.gatsbyjs.com/docs/how-to/images-and-media/static-folder/#when-to-use-the-static-folder" target="__blank" rel="noopener noreferrer">specific edge case</a> that you're solving for.



### #2 - Defining the Favicon Using gatsby-plugin-manifest

The second approach is to set the favicon using <a href="https://www.gatsbyjs.com/docs/how-to/performance/add-a-manifest-file/" target="__blank" rel="noopener noreferrer">gatsby-plugin-manifest</a>, which is a recommended plugin for generating a <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest" target="__blank" rel="noopener noreferrer">web app manifest</a> for your app.

The `icon` attribute in the `gatsby-config.js` definition controls the source image(s) that's used for the PWA icons and favicon:

```jsx
// gatsby-config.js
module.exports = {
    // ...
    plugins: [
        // ...
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
            name: `Mike Kronk`,
            short_name: `MK`,
            start_url: `/`,
            background_color: `#ffffff`,
            theme_color: `#663399`,
            display: `minimal-ui`,
            // Generate PWA icons and a favicon
            icon: `src/images/super-icon.png`,
        },
        // ...
```

The code sample above shows the <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest#configure-icons-and-their-generations---required" target="__blank" rel="noopener noreferrer">"automatic configuration"</a> that's defined in the `gatsby-plugin-manifest` docs, which generates a set of icons from a single source image. 

There are <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest#configure-icons-and-their-generations---required" target="__blank" rel="noopener noreferrer">other icon generation modes</a> available as well, and an <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest#disable-favicon" target="__blank" rel="noopener noreferrer">option to disable favicon support</a>.

### #3 - Defining the Favicon Using react-helmet

Another approach is to define your favicon
using <a href="https://github.com/nfl/react-helmet" target="__blank" rel="noopener noreferrer">`react-helmet`</a>. Note that you'll need to install <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/" target="__blank" rel="noopener noreferrer">`gatsby-plugin-react-helmet`</a> as well and configure it in `gatsby-config.js`:

```jsx
// gatsby-config.js
module.exports = {
    // ...
    plugins: [
    // ...
    `gatsby-plugin-react-helmet`,
    // ...
```

Then, for your pages you can include the `<Helmet>` component with the favicon defined in the `link` attribute:

```jsx
import dinoFavicon from "../images/sauropod.png"
...
<Helmet
    defer={false}
    htmlAttributes={{
        lang,
    }}
    link={[
        { rel: "icon", type: "image/png", href: dinoFavicon }
    ]}
    ...
/>
```

You can also nest a `<link>` inside the `<Helmet>` component instead of using the `link` attribute:
```jsx
import dinoFavicon from "../images/sauropod.png"
...
<Helmet>
    ...
    <link rel="icon" type="image/png" href={dinoFavicon} />
    ...
</Helmet>
```

### Order of Priority for Setting the Favicon

There may be cases where the favicon is defined in multiple places in your app.

An example of this could be if your app has a `favicon.ico` set in the static folder and an icon set using `gatsby-plugin-manifest`.

Through local testing, I found that both `gatsby-plugin-manifest` and the `gatsby-plugin-react-helmet` approach will override what is set in the static folder.

If you happen to be using both `gatsby-plugin-manifest` *and* `gastby-plugin-react-helmet`, the favicon will resolve to what's set in `gatsby-plugin-manifest`.

So in order of priority:

`gatsby-plugin-manifest (#2) > gastby-plugin-react-helmet (#3) > static folder (#1)`

And there you have it! Three ways that you can define a favicon in a Gatsby app. In most cases, the preferred approach would be to include
`gatsby-plugin-manifest` in your app and define it there, since you also get the PWA icons generated. Otherwise, the other two approaches could be considered.

