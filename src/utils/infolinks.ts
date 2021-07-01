import { useStaticQuery, graphql } from "gatsby"

const getInfoLinks = () => {
  const data = useStaticQuery(graphql`
    query {
      allInfolinksJson {
        nodes {
          name
          url
        }
      }
    }
  `)

  return data.allInfolinksJson.nodes
}

export default getInfoLinks
