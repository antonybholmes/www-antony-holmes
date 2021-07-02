import React from "react"
import { graphql, PageProps } from "gatsby"
import Post from "../components/posts/post"
import useImageMap from "../utils/imagemap"
import PageLayout from "../components/layouts/pagelayout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
  image: any
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const posts = data.posts.nodes
  const image = data.image

  const imageMap = useImageMap(data)

  return (
    <PageLayout title="Home">
      <GatsbyImage
        image={getImage(image)}
        alt="Antony Holmes"
        className={`w-64`}
      />

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
    image: file(
      absolutePath: { regex: "/antony-holmes/" }
      ext: { regex: "/jpg/" }
    ) {
      name
      ext
      relativePath
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }

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
