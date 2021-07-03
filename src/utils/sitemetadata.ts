import { useStaticQuery, graphql } from "gatsby"

const getSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle
            siteName
            siteUrl
            siteDescription
            email
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
