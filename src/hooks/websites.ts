import { useStaticQuery, graphql } from "gatsby"
import useFlattenEdges from "./flattenedges"

const useWebsites = () => {
  const data = useStaticQuery(graphql`
    query {
      allWebsitesJson {
        edges {
          node {
            name
            links {
              name
              description
              url
            }
          }
        }
      }
    }
  `)

  return useFlattenEdges(data.allWebsitesJson.edges)
}

export default useWebsites
