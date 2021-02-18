import React from "react"
import { Link, graphql, PageProps } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import useSiteMetadata from "../hooks/sitemetadata"
import Container from "../components/container"
import usePostUrl from "../hooks/posturl"
import FlHdDiv from "../components/flhddiv"
import MainSideCol from "../components/mainsidecol"
import Pagination from "../components/pagination"
import Row from "../components/row"
import { navigate } from "gatsby"
import Post from "../components/posts/post"
import useImageMap from "../hooks/imagemap"

type DataProps = {
  allMarkdownRemark: {
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

const PostsTemplate: React.FC<PageProps<DataProps>> = ({
  pageContext,
  data,
}) => {
  const handlePageChanged = (data: any) => {
    console.log(data)

    navigate(`/posts/pages/${data.page}`)
  }

  const { siteTitle } = useSiteMetadata()

  const { page, pages } = pageContext

  const posts = data.allMarkdownRemark.nodes

  const imageMap = useImageMap(data)

  if (posts.length === 0) {
    return (
      <Layout title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout title="Posts">
      <FlHdDiv>
        <Container>
          <MainSideCol>
            <>
              <h1>All Posts</h1>
              <ol style={{ listStyle: `none` }}>
                {posts.map((post: any, index: number) => {
                  return <Post post={post} imageMap={imageMap} key={index} />
                })}
              </ol>

              <Row isCentered={true} className="mt-32">
                <Pagination
                  page={page + 1}
                  pages={pages}
                  recordsPerPage={10}
                  onPageChanged={handlePageChanged}
                />
              </Row>
            </>
            <></>
          </MainSideCol>
        </Container>
      </FlHdDiv>
    </Layout>
  )
}

export default PostsTemplate

export const pageQuery = graphql`
  query PostsQuery($start: Int!, $limit: Int!) {
    allMarkdownRemark(
      skip: $start
      limit: $limit
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
