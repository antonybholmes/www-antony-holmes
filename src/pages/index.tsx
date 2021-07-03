import React from "react"
import { graphql, PageProps } from "gatsby"
import Post from "../components/posts/post"
import useImageMap from "../utils/imagemap"
import PageLayout from "../components/layouts/pagelayout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Row from "../components/row"
import BlueLink from "../components/links/bluelink"
import getPassportPhoto from "../utils/passportphoto"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ColorLink from "../components/links/colorlink"

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
  const image = getPassportPhoto()

  const imageMap = useImageMap(data)

  return (
    <PageLayout title="Home">
      <Row isVCentered={false} wrap={true}>
        <div className="mb-8 w-full md:w-2/10">
          <GatsbyImage
            image={getImage(image)}
            alt="Antony Holmes"
            className={`w-full rounded-full border border-solid border-gray-200`}
          />

          <h4 className="mt-8">Antony Holmes</h4>

          <ol className="mt-8 text-sm">
            <li className="mb-2">
              <Row>
                <div className="w-6">
                  <FontAwesomeIcon
                    icon={["far", "envelope"]}
                    className="text-gray-500"
                  />
                </div>
                <div>
                  <ColorLink color="text" to="mailto:antony@antonyholmes.com">
                    antony@antonyholmes.com
                  </ColorLink>
                </div>
              </Row>
            </li>
            <li className="mb-2">
              <Row>
                <div className="w-6">
                  <FontAwesomeIcon
                    icon={["fas", "link"]}
                    className="text-gray-500"
                  />
                </div>
                <div>
                  <ColorLink color="text" to="https://github.com/antonybholmes">
                    github.com/antonybholmes
                  </ColorLink>
                </div>
              </Row>
            </li>
            <li className="mb-2">
              <Row>
                <div className="w-6">
                  <FontAwesomeIcon
                    icon={["fab", "twitter"]}
                    className="text-gray-500"
                  />
                </div>
                <div>
                  <ColorLink
                    color="text"
                    to="https://twitter.com/antonybholmes"
                  >
                    @antonybholmes
                  </ColorLink>
                </div>
              </Row>
            </li>
          </ol>
        </div>
        <div className="w-full md:w-8/10 md:pl-8">
          <h2>Hi there!</h2>
          <p>Hello, I'm Antony Holmes, and welcome to my personal web site.</p>
          <p>
            I'm a researcher and full stack developer with experience using
            multiple technologies, which you can read about in my{" "}
            <BlueLink to="/resume">resume</BlueLink>. I have an aptly named{" "}
            <BlueLink to="/publications">publications</BlueLink> page where you
            can view all of the scientific literature I have written, primarily
            focused on cancer genetics.
          </p>

          <p>
            You can also learn a bit about this site and what I used to build it{" "}
            <BlueLink to="/posts/2021-07-01-new-design">here</BlueLink>.
          </p>

          <section className="border border-solid border-gray-200 rounded-md p-4 mt-32">
            <h5>Interested in how this website was developed?</h5>
            <p className="text-sm">
              It was made with{" "}
              <BlueLink to="https://www.gatsbyjs.com/">Gatsby</BlueLink> and the
              code is available on{" "}
              <BlueLink to="https://github.com/antonybholmes/www-antony-holmes">
                GitHub
              </BlueLink>{" "}
              if you want to look at it or get ideas. Please feel free to{" "}
              <BlueLink to="mailto:antony@antonyholmes.com">email</BlueLink> me
              to ask questions.
            </p>
          </section>

          <section className="mt-32 pt-8 border-t border-solid border-gray-200">
            <ul>
              {posts.slice(0, 10).map((post: any, index: number) => {
                return <Post post={post} imageMap={imageMap} key={index} />
              })}
            </ul>
          </section>
        </div>
      </Row>
    </PageLayout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
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
