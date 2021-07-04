import React from "react"
import { graphql, PageProps } from "gatsby"

import getImageMap from "../utils/imagemap"
import ArticleLayout from "../components/layouts/articleLayout"
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

  const imageMap = getImageMap(data, "authorImages")

  return (
    <ArticleLayout title="Authors">
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
    </ArticleLayout>
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
