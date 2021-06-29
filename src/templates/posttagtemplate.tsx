import React from "react"
import { graphql } from "gatsby"
import MainSideCol from "../components/mainsidecol"
import { PageProps } from "gatsby"
import Post from "../components/posts/post"
import useImageMap from "../hooks/imagemap"
import PageLayout from "../components/pagelayout"
import Row from "../components/row"

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
  ({ path, pageContext, data }) => {
    const { tag } = pageContext

    const posts = data.posts.nodes
    const imageMap = useImageMap(data)

    return (
      <PageLayout title={tag} path={path}>
        <MainSideCol>
          <>
            <h1>Articles tagged {tag}</h1>
            {/* <p className="text-xl">{data.tag.info}</p> */}

            <Row className="mt-8">
              <div className="text-gray-600 text-sm border rounded-full px-8 py-2">
                {posts.length} Articles
              </div>
            </Row>

            <ul className="inline-block border-t border-solid border-gray-200 mt-16">
              {posts.map((post: any, index: number) => {
                return <Post post={post} imageMap={imageMap} key={index} />
              })}
            </ul>
          </>

          <></>
        </MainSideCol>
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
