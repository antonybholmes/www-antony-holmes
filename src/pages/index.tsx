import React from "react"
import { Link, graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import useSiteMetadata from "../hooks/sitemetadata"
import Container from "../components/container"
import Row from "../components/row"
import FlatCard from "../components/flatcard"
import Post from "../components/posts/post"
import Posts from "../components/posts/posts"

type DataProps = {
  allMarkdownRemark: {
    nodes: Array<{
      excerpt: string
      fields: {
        slug: string
      }
      frontmatter: {
        date: string
        title: string
        description: string
      }
    }>
  }
}

const BlogIndex: React.FC<PageProps<DataProps>> = ({ data }) => {
  const { siteTitle } = useSiteMetadata()

  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout title="Home">
      <Container>
        <Row isVCentered={false}>
          <div className="w-8/12 mr-8">
            <Post post={posts[0]} />
          </div>
          <div className="w-4/12">
            <FlatCard padding="p-4 mb-4">
              <Row className="justify-between">
                <div>
                  <h2>Latest</h2>
                </div>
                <div>
                  <Link to="/posts">See All Posts</Link>
                </div>
              </Row>
            </FlatCard>
            <Posts posts={posts} />
          </div>
        </Row>
      </Container>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
