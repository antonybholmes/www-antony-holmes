import React from "react"
import { graphql } from "gatsby"

import PageLayout from "../components/layouts/pagelayout"
import MainSideCol from "../components/mainsidecol"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Row from "../components/row"
import { PageProps } from "gatsby"
import Post from "../components/posts/post"
import useImageMap from "../hooks/imagemap"

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
}

const AuthorTemplate: React.FC<PageProps<DataProps>> = ({ path, data }) => {
  const posts = data.posts.nodes
  const author = data.author
  const name = `${author.frontmatter.firstName} ${author.frontmatter.lastName}`
  const imageMap = useImageMap(data)

  return (
    <PageLayout title={name} path={path}>
      <MainSideCol>
        <>
          <Row className="mb-16">
            <div>
              <GatsbyImage
                image={getImage(data.authorImage)}
                alt={name}
                className="w-32 rounded-full"
              />
            </div>
            <div className="ml-8">
              <p className="text-sm font-medium mt-4">{name}</p>
              <section
                dangerouslySetInnerHTML={{ __html: author.excerpt }}
                itemProp="articleBody"
              />
            </div>
          </Row>

          <ul>
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

export default AuthorTemplate

export const pageQuery = graphql`
  query ($id: String) {
    author: markdownRemark(
      fileAbsolutePath: { regex: "/authors/" }
      frontmatter: { id: { eq: $id } }
    ) {
      excerpt
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
