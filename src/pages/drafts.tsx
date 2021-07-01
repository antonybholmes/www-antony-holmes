import React from "react"
import { graphql, PageProps } from "gatsby"

import Row from "../components/row"
import Post from "../components/posts/post"
import useImageMap from "../utils/imagemap"
import { useState } from "react"
import BlueButton from "../components/links/bluebutton"
import PageLayout from "../components/layouts/pagelayout"
import Container from "../components/container"

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

const DraftsPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const [records, setRecords] = useState(25)

  const posts = data.posts.nodes

  const imageMap = useImageMap(data)

  const handleMoreArticles = () => {
    setRecords(records * 2)
  }

  return (
    <PageLayout title="Articles" isIndexed={false}>
      <Container>
        {/* <MainSideCol>
        <> */}

        <ul>
          {posts.slice(0, records).map((post: any, index: number) => {
            return (
              <Post
                post={post}
                imageMap={imageMap}
                key={index}
                baseUrl="/drafts"
              />
            )
          })}
        </ul>

        {posts.length > records && (
          <Row isCentered={true} className="mt-32">
            <BlueButton onClick={handleMoreArticles}>
              Load More Articles
            </BlueButton>
          </Row>
        )}

        {/*</> <></>
      </MainSideCol> */}
      </Container>
    </PageLayout>
  )
}

export default DraftsPage

export const pageQuery = graphql`
  query DraftsQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/drafts/" } }
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
