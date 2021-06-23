import { useStaticQuery, graphql } from "gatsby"

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle
            author {
              name
              summary
            }
            social {
              twitter
            }
          }
        }
      }
    `
  )

  return site.siteMetadata
}

export default useSiteMetadata
