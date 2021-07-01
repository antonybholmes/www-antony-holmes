import { useStaticQuery, graphql } from "gatsby"

const getHeaderLinks = () => {
  const data = useStaticQuery(graphql`
    query {
      allHeaderlinksJson {
        nodes {
          name
          url
        }
      }
    }
  `)

  return data.allHeaderlinksJson.nodes
}

export default getHeaderLinks
