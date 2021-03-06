import React from "react"
import { graphql } from "gatsby"
import { PageProps } from "gatsby"
import Post from "../components/posts/post"
import getImageMap from "../utils/imagemap"
import ArticleLayout from "../components/layouts/articleLayout"

type CategoryTemplateProps = { tag: string }

type DataProps = {
  author: {
    excerpt: string
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
  tag: {
    name: string
    info: string
  }
}

const PostTagTemplate: React.FC<PageProps<DataProps, CategoryTemplateProps>> =
  ({ pageContext, data }) => {
    const posts = data.posts.nodes

    const tag = data.tag

    const imageMap = getImageMap(data)

    return (
      <ArticleLayout title={tag.name}>
        {/* <MainSideCol>
          <> */}

        <h1>{tag.name}</h1>

        <h3>{tag.info}</h3>

        <ul className="mt-16">
          {posts.map((post: any, index: number) => {
            return (
              <Post
                post={post}
                imageMap={imageMap}
                key={index}
                showMainTagLink={false}
              />
            )
          })}
        </ul>
        {/* </>

          <></>
        </MainSideCol> */}
      </ArticleLayout>
    )
  }

export default PostTagTemplate

export const pageQuery = graphql`
  query ($tag: String) {
    posts: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { tags: { eq: $tag } }
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
          gatsbyImageData
        }
      }
    }

    tag: posttagsJson(name: { eq: $tag }) {
      name
      info
    }
  }
`
