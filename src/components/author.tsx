import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Row from "./row"
import getAuthorUrl from "../utils/authorurl"
import BlueIndexLink from "./links/blueindexlink"

type AuthorProps = {
  author: any
  image: any
  imageSize?: string
  showAuthorLink?: boolean
}

const Author: React.FC<AuthorProps> = ({
  author,
  image,
  imageSize = "w-32",
  showAuthorLink = true,
}) => {
  const name = `${author.frontmatter.firstName} ${author.frontmatter.lastName}`

  return (
    <Row className="mb-16">
      <div>
        <GatsbyImage
          image={getImage(image)}
          alt={name}
          className={`${imageSize} rounded-full`}
        />
      </div>
      <div className="ml-8">
        <h4 className="font-medium m-0">{name}</h4>
        <h6>{author.frontmatter.title}</h6>
        <section
          className="font-light"
          dangerouslySetInnerHTML={{ __html: author.html }}
        />

        {showAuthorLink && (
          <BlueIndexLink to={getAuthorUrl(author)}>Read More</BlueIndexLink>
        )}
      </div>
    </Row>
  )
}

export default Author
