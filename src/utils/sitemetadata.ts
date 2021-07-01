import { useStaticQuery, graphql } from "gatsby"

const getSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle
            siteUrl
            siteDescription
            author {
              name
              summary
            }
            social {
              twitter
            }
            version
          }
        }
      }
    `
  )

  return site.siteMetadata
}

export default getSiteMetadata
