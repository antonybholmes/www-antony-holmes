import dayjs from "dayjs"
import { Link } from "gatsby"
import React from "react"
import getPostUrl from "../../utils/posturl"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Row from "../row"
import BlueIndexLink from "../links/blueindexlink"
import BlueLink from "../links/bluelink"
import getCategoryUrl from "../../utils/categoryurl"
import ColorLink from "../links/colorlink"
import PostCategoryLink from "./postcategorylink"

type PostProps = {
  post: any
  imageMap: any
}

const HeadPost: React.FC<PostProps> = ({ post, imageMap }) => {
  const date = dayjs(post.frontmatter.date)

  return (
    <>
      <Row isVCentered={false} className="w-full">
        <div className="w-6/10">
          <GatsbyImage
            image={getImage(imageMap[post.frontmatter.id])}
            className={`trans-ani w-full`}
            alt={post.frontmatter.title}
          />
        </div>

        <div className="pl-8 w-4/10">
          <PostCategoryLink post={post} />

          <h1 className="mt-3">
            <ColorLink to={getPostUrl(post)}>
              {post.frontmatter.title}
            </ColorLink>
          </h1>

          <p className="text-gray-500">{date.format("MMM DD, YYYY")}</p>

          <div className="mt-4">{post.excerpt}</div>
          <div className="mt-8">
            <BlueIndexLink to={getPostUrl(post)}>Read Article</BlueIndexLink>
          </div>
        </div>
      </Row>
    </>
  )
}

export default HeadPost
