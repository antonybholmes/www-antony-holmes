import React from "react"
import { graphql } from "gatsby"
import MainSideCol from "../components/mainsidecol"
import { PageProps } from "gatsby"
import Post from "../components/posts/post"
import useImageMap from "../hooks/imagemap"
import PageLayout from "../components/pagelayout"

type CategoryTemplateProps = { category: string }

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

const CategoryTemplate: React.FC<
  PageProps<DataProps, CategoryTemplateProps>
> = ({ pageContext, data }) => {
  const { category } = pageContext

  const posts = data.posts.nodes
  const imageMap = useImageMap(data)

  return (
    <PageLayout title={category}>
      <MainSideCol>
        <>
          <p className="uppercase text-gray-400">{category}</p>

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

export default CategoryTemplate

export const pageQuery = graphql`
  query($category: String) {
    posts: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { categories: { eq: $category } }
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
