import React from "react"
import { graphql, PageProps } from "gatsby"
import Row from "../components/row"
import Post from "../components/posts/post"
import useImageMap from "../hooks/imagemap"
import HeadPost from "../components/posts/headpost"
import SubHeadingPost from "../components/posts/subheadingpost"
import PageLayout from "../components/layouts/pagelayout"

type DataProps = {
  posts: {
    nodes: Array<{
      excerpt: string
      fields: {
        slug: string
      }
      frontmatter: {
        date: Date
        title: string
        description: string
        tags: Array<string>
      }
    }>
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ path, data }) => {
  const posts = data.posts.nodes
  const imageMap = useImageMap(data)

  return (
    <PageLayout title="Home">
      <div>
        <HeadPost post={posts[0]} imageMap={imageMap} />
      </div>

      <Row className="mt-16" isVCentered={false}>
        <div className="w-1/3 pr-4">
          <SubHeadingPost post={posts[1]} imageMap={imageMap} />
        </div>
        <div className="w-1/3 px-2">
          <SubHeadingPost post={posts[2]} imageMap={imageMap} />
        </div>
        <div className="w-1/3 pl-4">
          <SubHeadingPost post={posts[3]} imageMap={imageMap} />
        </div>
      </Row>

      <ul className="mt-16">
        {posts.slice(4, 14).map((post: any, index: number) => {
          return <Post post={posts[0]} imageMap={imageMap} key={index} />
        })}
      </ul>
    </PageLayout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
    ) {
      nodes {
        excerpt
        frontmatter {
          id
          author
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
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`
