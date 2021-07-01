import { useStaticQuery, graphql } from "gatsby"

const getFooterLinks = () => {
  const data = useStaticQuery(graphql`
    query {
      allFooterlinksJson {
        nodes {
          title
          links {
            name
            url
          }
        }
      }
    }
  `)

  return data.allFooterlinksJson.nodes
}

export default getFooterLinks
