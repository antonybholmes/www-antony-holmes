import React from "react"
import { graphql } from "gatsby"
import MainSideCol from "../components/mainsidecol"
import dayjs from "dayjs"
import Img from "gatsby-image"
import Row from "../components/row"
import ColorLink from "../components/links/colorlink"
import useTagUrl from "../hooks/tagurl"
import useAuthorUrl from "../hooks/authorurl"
import CategoryList from "../components/posts/categorylist"
import PageLayout from "../components/pagelayout"

type PostTemplateProps = {
  data: any
}

const PostTemplate: React.FC<PostTemplateProps> = ({ data }) => {
  const post = data.post
  const { previous, next } = data
  const date = dayjs(post.frontmatter.date)
  const author = data.author
  const name = `${author.frontmatter.firstName} ${author.frontmatter.lastName}`

  return (
    <PageLayout title={post.frontmatter.title}>
      <MainSideCol>
        <>
          <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header className="mb-8">
              <div className="text-gray-600 uppercase tracking-widest">
                <ColorLink
                  color="blue"
                  color2="dark-blue"
                  underline={false}
                  to={useTagUrl(post.frontmatter.categories[0])}
                >
                  {post.frontmatter.categories[0]}
                </ColorLink>
              </div>

              <h1 className="mt-4">{post.frontmatter.title}</h1>

              <Img
                fluid={data.postImage.childImageSharp.fluid}
                className="mt-8"
              />
            </header>

            <Row className="mb-16">
              <div>
                <Img
                  fluid={data.authorImage.childImageSharp.fluid}
                  className="w-32 rounded-full"
                />
              </div>
              <div className="ml-8">
                <p className="text-sm font-medium mt-4">
                  By{" "}
                  <ColorLink
                    color="black"
                    color2="blue"
                    to={useAuthorUrl(author)}
                  >
                    {name}
                  </ColorLink>
                </p>
                {/* <p className="text-sm mt-1">{data.author.title}</p> */}
                <p className="mt-1 text-sm text-gray-500">
                  Published {date.format("MMM DD, YYYY")}
                </p>

                <CategoryList post={post} />
              </div>
            </Row>

            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />

            {/* <Row className="mt-8 font-medium">
                  <div className="uppercase mr-2">Posted In:</div>

                  <ul className="inline-block">
                    {post.frontmatter.categories.map(
                      (category: string, index: number) => {
                        return (
                          <li key={index} className="inline-block uppercase">
                            {index > 0 && ", "}
                            <BlueLink to={useCategoryUrl(category)}>
                              {category}
                            </BlueLink>
                          </li>
                        )
                      }
                    )}
                  </ul>
                </Row> */}

            {/* <nav className="mt-16 pt-8 border-t border-solid border-gray-200">
                  <Row className="justify-between">
                    {previous && (
                      <Link to={usePostUrl(previous)}>
                        <div className="border border-solid border-gray-200 rounded-md px-4 py-3 hover:shadow trans-ani">
                          {previous.frontmatter.title}
                        </div>
                      </Link>
                    )}

                    {next && (
                      <Link to={usePostUrl(next)}>
                        <div className="border border-solid border-gray-200 rounded-md px-4 py-3 hover:shadow trans-ani">
                          {next.frontmatter.title}
                        </div>
                      </Link>
                    )}
                  </Row>
                </nav> */}
          </article>
        </>

        <></>
      </MainSideCol>
    </PageLayout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query PostQuery(
    $id: String!
    $authorId: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: markdownRemark(frontmatter: { id: { eq: $id } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date
        description
        categories
      }
    }

    author: markdownRemark(
      frontmatter: { id: { eq: $authorId } }
      fileAbsolutePath: { regex: "/authors/" }
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

    previous: markdownRemark(
      fileAbsolutePath: { regex: "/posts/" }
      frontmatter: { id: { eq: $previousPostId } }
    ) {
      frontmatter {
        id
        title
      }
    }

    next: markdownRemark(
      fileAbsolutePath: { regex: "/posts/" }
      frontmatter: { id: { eq: $nextPostId } }
    ) {
      frontmatter {
        id
        title
      }
    }

    postImage: file(
      name: { eq: $id }
      absolutePath: { regex: "/posts/" }
      ext: { regex: "/jpg/" }
    ) {
      name
      ext
      relativePath
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    authorImage: file(
      name: { eq: $authorId }
      absolutePath: { regex: "/authors/" }
      ext: { regex: "/jpg/" }
    ) {
      name
      ext
      relativePath
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
