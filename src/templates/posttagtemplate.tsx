import React from "react"
import { graphql } from "gatsby"
import MainSideCol from "../components/mainsidecol"
import { PageProps } from "gatsby"
import Post from "../components/posts/post"
import useImageMap from "../hooks/imagemap"
import PageLayout from "../components/layouts/pagelayout"
import Row from "../components/row"
import Container from "../components/container"

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

    const imageMap = useImageMap(data)

    return (
      <PageLayout title={tag.name}>
        <Container>
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
        </Container>
      </PageLayout>
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
      edges {
        node {
          name
          ext
          relativePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }

    tag: posttagsJson(name: { eq: $tag }) {
      name
      info
    }
  }
`
