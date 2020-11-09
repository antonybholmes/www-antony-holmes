module.exports = {
  siteMetadata: {
    siteTitle: `Polite Investor`,
    author: {
      name: `Antony Holmes`,
      summary: `who lives and works in New York building useful things.`,
    },
    description: `Polite Investor finance web site.`,
    siteUrl: `https://www.politeinvestor.com/`,
    social: {
      twitter: `politeinvestor`,
    },
    header: {
      links: [
        ["Posts", "/posts"],
        ["Credit Cards", "/credit-cards"],
        ["Calculators", "/calculators"],
        ["Portfolio", "/portfolio"],
        ["About", "/about"],
      ],
    },
    footer: {
      links: [
        {
          name: "Start Here",
          urls: [
            ["Blog", "/posts"],
            ["Calculators", "/calculators"],
          ],
        },
        {
          name: "Recommendations",
          urls: [
            ["Credit Cards", "/credit-cards"],
            ["Web Sites", "/websites"],
          ],
        },
        { name: "Resources", urls: [["Disclaimer", "/disclaimer"]] },
      ],
    },
  },
  plugins: [
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
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-background-image",
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: "/:",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingId: `UA-121311307-2`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Polite Investor`,
        short_name: `polite-investor`,
        start_url: `/`,
        background_color: `#ffffff`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: "/assets/",
        },
      },
    },
    {
      resolve: `gatsby-plugin-build-date`,
      options: {
        formatAsDateString: true, // boolean, defaults to true - if false API will return unformatted string from new Date()
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
