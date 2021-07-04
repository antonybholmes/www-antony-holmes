import React from "react"
import { graphql } from "gatsby"

import ArticleLayout from "../components/layouts/articleLayout"
import { PageProps } from "gatsby"
import Post from "../components/posts/post"
import getImageMap from "../utils/imagemap"
import Author from "../components/author"

type DataProps = {
  author: {
    html: string
    frontmatter: {
      id: string
      firstName: string
      lastName: string
      title: string
      email: string
    }
  }
  authorImage: {
    childImageSharp: any
  }
  posts: {
    nodes: Array<{
      excerpt: string
      frontmatter: {
        date: string
        title: string
        description: string
      }
    }>
  }
}

const AuthorTemplate: React.FC<PageProps<DataProps>> = ({ data }) => {
  const posts = data.posts.nodes
  const author = data.author
  const name = `${author.frontmatter.firstName} ${author.frontmatter.lastName}`
  const imageMap = getImageMap(data)

  return (
    <ArticleLayout title={name}>
      {/* <MainSideCol>
        <> */}

      <Author author={author} image={data.authorImage} showAuthorLink={false} />

      <section className="border-t border-solid border-gray-200 mt-16 pt-8">
        <ul>
          {posts.map((post: any, index: number) => {
            return <Post post={post} imageMap={imageMap} key={index} />
          })}
        </ul>
      </section>
      {/*         </>

        <></>
      </MainSideCol> */}
    </ArticleLayout>
  )
}

export default AuthorTemplate

export const pageQuery = graphql`
  query ($id: String) {
    author: markdownRemark(
      fileAbsolutePath: { regex: "/authors/" }
      frontmatter: { id: { eq: $id } }
    ) {
      html
      frontmatter {
        id
        firstName
        lastName
        title
        email
      }
    }

    authorImage: file(
      name: { eq: $id }
      absolutePath: { regex: "/authors/" }
      ext: { regex: "/jpg/" }
    ) {
      name
      ext
      relativePath
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, width: 400, aspectRatio: 1)
      }
    }

    posts: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { author: { eq: $id } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
    ) {
      nodes {
        excerpt
        frontmatter {
          id
          date
          title
          description
          tags
        }
      }
    }

    postImages: allFile(
      filter: { absolutePath: { regex: "/posts/" }, ext: { regex: "/jpg/" } }
    ) {
      nodes {
        name
        ext
        relativePath
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`
