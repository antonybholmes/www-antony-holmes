import React from "react"
import { Link, graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import useSiteMetadata from "../hooks/sitemetadata"
import Container from "../components/container"
import Row from "../components/row"
import FlatCard from "../components/flatcard"
import Post from "../components/posts/post"
import Posts from "../components/posts/posts"
import MainSideCol from "../components/mainsidecol"
import FullDiv from "../components/fulldiv"
import useImageMap from "../hooks/imagemap"
import FlHdDiv from "../components/flhddiv"
import HeadPost from "../components/posts/headpost"
import SubHeadingPost from "../components/posts/subheadingpost"

type DataProps = {
  allMarkdownRemark: {
    nodes: Array<{
      excerpt: string
      fields: {
        slug: string
      }
      frontmatter: {
        date: Date
        title: string
        description: string
        categories: Array<string>
      }
    }>
  }
}

const BlogIndex: React.FC<PageProps<DataProps>> = ({ data }) => {
  const { siteTitle } = useSiteMetadata()

  const imageMap = useImageMap(data)

  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout title="Home">
      <FlHdDiv>
        <Container>
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
        </Container>
      </FlHdDiv>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        frontmatter {
          id
          date
          title
          description
          categories
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
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
