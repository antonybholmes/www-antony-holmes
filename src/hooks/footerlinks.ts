import { useStaticQuery, graphql } from "gatsby"
import useFlattenEdges from "./flattenedges"

const useFooterLinks = () => {
  const data = useStaticQuery(graphql`
    query {
      allFooterlinksJson {
        edges {
          node {
            title
            links {
              name
              url
            }
          }
        }
      }
    }
  `)

  return useFlattenEdges(data.allFooterlinksJson.edges)
}

export default useFooterLinks
