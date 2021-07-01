import { useStaticQuery, graphql } from "gatsby"

const useWebsites = () => {
  const data = useStaticQuery(graphql`
    query {
      allWebsitesJson {
        nodes {
          name
          links {
            name
            description
            url
          }
        }
      }
    }
  `)

  return data.allWebsitesJson.nodes
}

export default useWebsites
