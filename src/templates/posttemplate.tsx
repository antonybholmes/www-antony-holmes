import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Container from "../components/container"
import FlHdDiv from "../components/flhddiv"
import MainSideCol from "../components/mainsidecol"
import dayjs from "dayjs"
import usePostUrl from "../hooks/posturl"
import Img from "gatsby-image"
import Row from "../components/row"
import AltView from "../components/altview"
import BlueLink from "../components/links/bluelink"
import BlueIndexLink from "../components/links/blueindexlink"
import useCategoryUrl from "../hooks/categoryurl"
import ColorLink from "../components/links/colorlink"

type PostTemplateProps = {
  pageContext: any
  data: any
}

const PostTemplate: React.FC<PostTemplateProps> = ({ pageContext, data }) => {
  const post = data.markdownRemark
  const { previous, next } = data
  const date = dayjs(post.frontmatter.date)

  return (
    <Layout title={post.frontmatter.title}>
      <FlHdDiv>
        <Container>
          <MainSideCol>
            <>
              <article
                className="blog-post"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header className="mb-16">
                  <div className="text-gray-600 uppercase tracking-widest">
                    <ColorLink
                      color="gray"
                      color2="blue"
                      underline={false}
                      to={useCategoryUrl(post.frontmatter.categories[0])}
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

                <AltView size="lg">
                  <>
                    <header>
                      <p className="text-sm font-medium mt-4">
                        {data.author.name}
                      </p>
                      <p className="text-sm mt-2">{data.author.title}</p>
                      <p className="mt-8 text-sm text-gray-500">
                        Published {date.format("MMM DD, YYYY")}
                      </p>
                    </header>
                    <section
                      dangerouslySetInnerHTML={{ __html: post.html }}
                      className="mt-8"
                    />
                  </>

                  <Row isVCentered={false}>
                    <div className="w-2/10">
                      <Img
                        fluid={data.authorImage.childImageSharp.fluid}
                        className="w-1/2"
                      />
                      <p className="text-sm font-medium mt-4">
                        {data.author.name}
                      </p>
                      <p className="text-sm mt-2">{data.author.title}</p>
                      <p className="mt-8 text-sm text-gray-500">
                        Published {date.format("MMM DD, YYYY")}
                      </p>
                    </div>

                    <div className="w-8/10">
                      <section
                        dangerouslySetInnerHTML={{ __html: post.html }}
                        itemProp="articleBody"
                      />

                      <Row className="mt-8 font-medium">
                        <div className="uppercase mr-2">Posted In:</div>

                        <ul className="inline-block">
                          {post.frontmatter.categories.map(
                            (category: string, index: number) => {
                              return (
                                <li
                                  key={index}
                                  className="inline-block uppercase"
                                >
                                  {index > 0 && ", "}
                                  <BlueLink
                                    to={`/posts/catergories/${category.toLocaleUpperCase()}`}
                                  >
                                    {category}
                                  </BlueLink>
                                </li>
                              )
                            }
                          )}
                        </ul>
                      </Row>

                      <nav className="mt-16 pt-8 border-t border-solid border-gray-200">
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
                      </nav>
                    </div>
                  </Row>
                </AltView>
              </article>
            </>

            <></>
          </MainSideCol>
        </Container>
      </FlHdDiv>
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $authorId: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(frontmatter: { id: { eq: $id } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        categories
      }
    }

    author: authorsJson(id: { eq: $authorId }) {
      name
      title
    }

    previous: markdownRemark(frontmatter: { id: { eq: $previousPostId } }) {
      frontmatter {
        id
        title
      }
    }

    next: markdownRemark(frontmatter: { id: { eq: $nextPostId } }) {
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
