import { useStaticQuery, graphql } from "gatsby"
import useFlattenEdges from "./flattenedges"

const useCreditCards = () => {
  const data = useStaticQuery(graphql`
    query {
      allCreditcardsJson {
        edges {
          node {
            name
            description
            cards {
              name
              description
              url
              pros
              cons
            }
          }
        }
      }
    }
  `)

  return useFlattenEdges(data.allCreditcardsJson.edges)
}

export default useCreditCards
