import React from "react"
import { graphql, PageProps } from "gatsby"

import MainSideCol from "../components/mainsidecol"
import Row from "../components/row"
import Post from "../components/posts/post"
import useImageMap from "../hooks/imagemap"
import { useState } from "react"
import BlueButton from "../components/links/bluebutton"
import PageLayout from "../components/layouts/pagelayout"

type DataProps = {
  posts: {
    nodes: Array<{
      excerpt: string
      frontmatter: {
        date: string
        title: string
        description: string
        tags: Array<string>
      }
    }>
  }
}

const PostsPage: React.FC<PageProps<DataProps>> = ({ path, data }) => {
  const [records, setRecords] = useState(25)

  const posts = data.posts.nodes

  const imageMap = useImageMap(data)

  const handleMoreArticles = () => {
    setRecords(records * 2)
  }

  return (
    <PageLayout title="Articles" path={path}>
      <MainSideCol>
        <>
          <Row>
            <div className="text-gray-600 text-sm border rounded-full px-8 py-2">
              {posts.length} Articles
            </div>
          </Row>

          <ul className="mt-8">
            {posts.slice(0, records).map((post: any, index: number) => {
              return <Post post={post} imageMap={imageMap} key={index} />
            })}
          </ul>

          {posts.length > records && (
            <Row isCentered={true} className="mt-32">
              <BlueButton onClick={handleMoreArticles}>
                Load More Articles
              </BlueButton>
            </Row>
          )}
        </>
        <></>
      </MainSideCol>
    </PageLayout>
  )
}

export default PostsPage

export const pageQuery = graphql`
  query PostsQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
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
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`
