const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const dayjs = require("dayjs")

// Define a template for blog post
const postTemplate = path.resolve(`./src/templates/posttemplate.tsx`)
const authorTemplate = path.resolve(`./src/templates/authortemplate.tsx`)
const categoryTemplate = path.resolve(`./src/templates/categorytemplate.tsx`)

const RECORDS_PER_PAGE = 10

const usePostId = post => {
  const name = post.frontmatter.title
    .toLowerCase()
    .replace(" ", "-")
    .replace(/[^0-9a-z_\-]/g, "")
  const date = dayjs(post.frontmatter.date)

  return `${date.format("YYYY-MM-DD")}-${name}`
}

const usePostUrl = post => {
  return `/articles/${post.frontmatter.id}`
}

const useAuthorUrl = author => {
  return `/authors/${author.frontmatter.id}`
}

const useCategoryUrl = category => {
  return `/articles/tags/${category.toLowerCase().replace(" ", "-")}`
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        posts: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/posts/" } }
          sort: { fields: [frontmatter___date], order: ASC }
        ) {
          nodes {
            frontmatter {
              id
              title
              author
              date
              description
              categories
            }
          }
        }

        authors: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/authors/" } }
          sort: {
            fields: [frontmatter___lastName, frontmatter___firstName]
            order: [ASC, ASC]
          }
        ) {
          nodes {
            excerpt
            frontmatter {
              id
              firstName
              lastName
              title
              email
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.posts.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  const categories = new Set()

  posts.forEach((post, index) => {
    const previousPostId = index === 0 ? null : posts[index - 1].frontmatter.id
    const nextPostId =
      index === posts.length - 1 ? null : posts[index + 1].frontmatter.id

    createPage({
      path: usePostUrl(post),
      component: postTemplate,
      context: {
        id: post.frontmatter.id,
        authorId: post.frontmatter.author,
        previousPostId,
        nextPostId,
      },
    })

    post.frontmatter.categories.forEach(item => categories.add(item))
  })

  categories.forEach((category, index) => {
    createPage({
      path: useCategoryUrl(category),
      component: categoryTemplate,
      context: {
        category: category,
      },
    })
  })

  const authors = result.data.authors.nodes

  authors.forEach((author, index) => {
    createPage({
      path: useAuthorUrl(author),
      component: authorTemplate,
      context: {
        id: author.frontmatter.id,
      },
    })
  })

  // const pages = Math.floor(
  //   (posts.length + RECORDS_PER_PAGE - 1) / RECORDS_PER_PAGE
  // )

  // let start = 0

  // for (let page = 0; page < pages; ++page) {
  //   createPage({
  //     path: `/article/page/${page + 1}`,
  //     component: postsTemplate,
  //     context: {
  //       page: page,
  //       start: start,
  //       limit: RECORDS_PER_PAGE,
  //       pages: pages,
  //     },
  //   })

  //   start += RECORDS_PER_PAGE
  // }
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const path = createFilePath({ node, getNode })

//     createNodeField({
//       name: `slug`,
//       node,
//       value: `/posts${path}`,
//     })
//   }
// }

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      author: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
