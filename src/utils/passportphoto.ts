import { useStaticQuery, graphql } from "gatsby"

const getPassportPhoto = () => {
  const data = useStaticQuery(graphql`
    query {
      file(
        relativePath: { regex: "/authors/antony-holmes/" }
        ext: { regex: "/jpg/" }
      ) {
        name
        ext
        relativePath
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `)

  return data.file
}

export default getPassportPhoto
