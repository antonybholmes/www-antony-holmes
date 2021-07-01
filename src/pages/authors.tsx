import React from "react"
import { graphql, PageProps } from "gatsby"

import Row from "../components/row"
import Post from "../components/posts/post"
import useImageMap from "../utils/imagemap"
import { useState } from "react"
import BlueButton from "../components/links/bluebutton"
import PageLayout from "../components/layouts/pagelayout"
import Container from "../components/container"
import Author from "../components/author"

type DataProps = {
  authors: {
    nodes: Array<{
      html: string
      frontmatter: {
        id: string
        firstName: string
        lastName: string
        title: string
        email: string
      }
    }>
  }
}

const AuthorsPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const authors = data.authors.nodes

  const imageMap = useImageMap(data, "authorImages")

  return (
    <PageLayout title="Authors">
      <Container>
        {/* <MainSideCol>
        <> */}

        <h1>Authors</h1>

        <h2>Profiles of the people who contribute to this site.</h2>

        <ul>
          {authors.map((author: any, index: number) => {
            return (
              <Author
                author={author}
                image={imageMap[author.frontmatter.id]}
                key={index}
              />
            )
          })}
        </ul>

        {/*</> <></>
      </MainSideCol> */}
      </Container>
    </PageLayout>
  )
}

export default AuthorsPage

export const pageQuery = graphql`
  query AuthorsQuery {
    authors: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/authors/" } }
      sort: {
        fields: [frontmatter___lastName, frontmatter___firstName]
        order: [DESC, ASC]
      }
    ) {
      nodes {
        html
        frontmatter {
          id
          firstName
          lastName
          title
          email
        }
      }
    }

    authorImages: allFile(
      filter: { absolutePath: { regex: "/authors/" }, ext: { regex: "/jpg/" } }
    ) {
      nodes {
        name
        ext
        relativePath
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, width: 400, aspectRatio: 1)
        }
      }
    }
  }
`
