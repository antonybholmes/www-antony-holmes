---
id: "2021-07-01-new-design"
title: "New web site design!"
author: "antony-holmes"
date: "2021-07-01"
description: ""
readtime: "1 min"
tags: ["Blog"]
related: []
---

I've redesigned my web site using React and Gatsby.

If you're a developer and you are interested in how the work is done, here are some details. The site is not open source but please feel free to get in touch at antony@antonyholmes.com if you would like to view the code base.

The site is primarily developed using Gatsby, a framework for building websites in React. Gatsby is component based and takes care of the tiresome routing, transpiling, and hot-reloading that can make React annoying.

Most of the site that you see is static, rendered at build time (another Gatsby feature) and served as plain HTML for speed, SEO and accessibility. I used Tailwind to style components with purgecss to remove unused css and reduce loading times.

The site is hosted on Netlify. When I push an update to GitLab, a webhook triggers a rebuild of the site, which is then pushed to Netlify's CDN. Netlify's starter plan is free and is great for small to medium sites that do not require much rebuilding each month.

Site data is stored in a mixture of Markdown (this post, for example) and JSON and I make extensive use of Gatsby's GraphQL features to translate it into pages. This neatly separates the content from the presentation (JSX, CSS) layer which makes managing the site easier.
