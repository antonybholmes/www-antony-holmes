import { useStaticQuery, graphql } from "gatsby"

const getCreditCards = () => {
  const data = useStaticQuery(graphql`
    query {
      allCreditcardsJson {
        nodes {
          name
          description
          cards {
            name
            description
            url
            rating
            fee
            pros
            cons
          }
        }
      }
    }
  `)

  return data.allCreditcardsJson.nodes
}

export default getCreditCards
