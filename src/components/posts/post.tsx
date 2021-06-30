import dayjs from "dayjs"
import { Link } from "gatsby"
import React from "react"
import usePostUrl from "../../hooks/posturl"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Row from "../row"
import { useState } from "react"
import PostTagList from "./posttaglist"
import ColorLink from "../links/colorlink"
import BlueLink from "../links/bluelink"
import useCategoryUrl from "../../hooks/categoryurl"

type PostProps = {
  post: any
  imageMap: any
  baseUrl?: string
  showMainTagLink?: boolean
}

const Post: React.FC<PostProps> = ({
  post,
  imageMap,
  baseUrl = "/posts",
  showMainTagLink = true,
}) => {
  const [hover, setHover] = useState(false)

  const date = dayjs(post.frontmatter.date)

  const mouseEnterHandler = (e: any) => {
    setHover(true)
  }

  const mouseLeaveHandler = (e: any) => {
    setHover(false)
  }

  return (
    <li
      className="inline-block w-full mb-16"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <Row isVCentered={false} className="w-full">
        <div className="w-3/4 mr-8">
          {showMainTagLink && (
            <div className="mb-4">
              <BlueLink
                to={useCategoryUrl(post.frontmatter.tags[0])}
                className="uppercase tracking-widest text-sm`"
              >
                {post.frontmatter.tags[0]}
              </BlueLink>
            </div>
          )}
          <h2>
            <ColorLink to={usePostUrl(post, baseUrl)}>
              {post.frontmatter.title}
            </ColorLink>
          </h2>
          <p className="text-sm text-gray-500">{date.format("MMM DD, YYYY")}</p>

          <p className="mt-4 font-light">{post.excerpt}</p>

          <PostTagList post={post} />
        </div>

        <div className="w-1/4">
          <Link to={usePostUrl(post, baseUrl)}>
            <GatsbyImage
              image={getImage(imageMap[post.frontmatter.id])}
              className={`trans-ani w-full`}
              alt={post.frontmatter.title}
            />
          </Link>
        </div>
      </Row>
    </li>
  )
}

export default Post
