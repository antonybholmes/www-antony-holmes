import React from "react"
import { Link, graphql, PageProps } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import useSiteMetadata from "../hooks/sitemetadata"
import Container from "../components/container"
import FlatCard from "../components/flatcard"
import usePostUrl from "../hooks/posturl"
import FlHdDiv from "../components/flhddiv"
import MainSideCol from "../components/mainsidecol"

type DataProps = {
  allMarkdownRemark: {
    nodes: Array<{
      excerpt: string
      fields: {
        slug: string
      }
      frontmatter: {
        date: string
        title: string
        description: string
      }
    }>
  }
}

const Page: React.FC<PageProps<DataProps>> = ({ data }) => {
  const { siteTitle } = useSiteMetadata()

  const posts = data.allMarkdownRemark.nodes

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
              <Bio />
              <ol style={{ listStyle: `none` }}>
                {posts.map((post: any, index: number) => {
                  const title = post.frontmatter.title

                  return (
                    <li key={index} className="mt-8">
                      <article
                        className="post-list-item"
                        itemScope
                        itemType="http://schema.org/Article"
                      >
                        <header>
                          <h2>
                            <Link to={usePostUrl(post)} itemProp="url">
                              <span itemProp="headline">{title}</span>
                            </Link>
                          </h2>
                          <small>{post.frontmatter.date}</small>
                        </header>
                        <section>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                post.frontmatter.description || post.excerpt,
                            }}
                            itemProp="description"
                          />
                        </section>
                      </article>
                    </li>
                  )
                })}
              </ol>
            </>
            <></>
          </MainSideCol>
        </Container>
      </FlHdDiv>
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        frontmatter {
          id
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
