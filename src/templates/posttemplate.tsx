import React from "react"
import { graphql, PageProps } from "gatsby"
import MainSideCol from "../components/mainsidecol"
import dayjs from "dayjs"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Row from "../components/row"
import ColorLink from "../components/links/colorlink"
import getAuthorUrl from "../utils/authorurl"
import PostTagList from "../components/posts/posttaglist"
import PageLayout from "../components/layouts/pagelayout"
import getCategoryUrl from "../utils/categoryurl"
import Container from "../components/container"
import PostCategoryLink from "../components/posts/postcategorylink"

type DataProps = {
  post: any
  baseUrl: string
  next: any
  previous: any
  author: any
}

type ContextProps = {
  isIndexed: boolean
}

const PostTemplate: React.FC<PageProps<DataProps, ContextProps>> = ({
  pageContext,
  data,
}) => {
  const { isIndexed } = pageContext

  const post = data.post
  const date = dayjs(post.frontmatter.date)
  const author = data.author
  const name = `${author.frontmatter.firstName} ${author.frontmatter.lastName}`

  return (
    <PageLayout title={post.frontmatter.title} isIndexed={isIndexed}>
      <Container>
        <article>
          <header className="mb-8">
            <PostCategoryLink post={post} />

            <h1 className="mt-4">{post.frontmatter.title}</h1>

            <Row className="mt-8 text-sm text-gray-500">
              <div>{date.format("MMM DD, YYYY")}</div>
              <div className="ml-8">{post.frontmatter.readtime} read</div>
            </Row>

            <Row className="mt-8">
              <div>
                <GatsbyImage
                  image={getImage(data.authorImage)}
                  alt="Author"
                  className="w-24 rounded-full"
                />
              </div>
              <div className="ml-8">
                <div className="text-sm font-medium">
                  <ColorLink
                    color="black"
                    color2="blue"
                    to={getAuthorUrl(author)}
                  >
                    {name}
                  </ColorLink>
                </div>
                <div className="text-sm font-light mt-1">
                  {author.frontmatter.title}
                </div>
              </div>
            </Row>
          </header>

          <GatsbyImage
            image={getImage(data.postImage)}
            alt={post.frontmatter.title}
            className="mt-8"
          />

          <section
            className="mt-10"
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />

          {/* <Row className="mt-8 font-medium">
                  <div className="uppercase mr-2">Posted In:</div>

                  <ul className="inline-block">
                    {post.frontmatter.tags.map(
                      (category: string, index: number) => {
                        return (
                          <li key={index} className="inline-block uppercase">
                            {index > 0 && ", "}
                            <BlueLink to={getCategoryUrl(category)}>
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
                      <Link to={getPostUrl(previous)}>
                        <div className="border border-solid border-gray-200 rounded-md px-4 py-3 hover:shadow trans-ani">
                          {previous.frontmatter.title}
                        </div>
                      </Link>
                    )}

                    {next && (
                      <Link to={getPostUrl(next)}>
                        <div className="border border-solid border-gray-200 rounded-md px-4 py-3 hover:shadow trans-ani">
                          {next.frontmatter.title}
                        </div>
                      </Link>
                    )}
                  </Row>
                </nav> */}
          <footer className="mt-16">
            <PostTagList post={post} />
          </footer>
        </article>
      </Container>
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
        readtime
        tags
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
        gatsbyImageData
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
        gatsbyImageData
      }
    }
  }
`
