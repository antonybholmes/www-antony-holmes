import dayjs from "dayjs"
import { Link } from "gatsby"
import React from "react"
import getPostUrl from "../../utils/posturl"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Row from "../row"
import { useState } from "react"
import PostTagList from "./posttaglist"
import ColorLink from "../links/colorlink"
import BlueLink from "../links/bluelink"
import getCategoryUrl from "../../utils/categoryurl"
import PostCategoryLink from "./postcategorylink"

type PostProps = {
  post: any
  imageMap: any
  baseUrl?: string
  showMainTagLink?: boolean
}

const Post: React.FC<PostProps> = ({
  post,
  imageMap,
  baseUrl = "/articles",
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
      {/* <Row isVCentered={false} className="w-full"> */}
      {/* <div className="w-1/4">
          <Link to={getPostUrl(post, baseUrl)}>
            <GatsbyImage
              image={getImage(imageMap[post.frontmatter.id])}
              className={`trans-ani w-full`}
              alt={post.frontmatter.title}
            />
          </Link>
        </div> */}

      {/* <div className="w-3/4 ml-8"> */}
      <div>
        {showMainTagLink && (
          <div className="mb-4">
            <PostCategoryLink post={post} />
          </div>
        )}

        <Link to={getPostUrl(post, baseUrl)}>
          <GatsbyImage
            image={getImage(imageMap[post.frontmatter.id])}
            className={`trans-ani w-1/2`}
            alt={post.frontmatter.title}
          />
        </Link>

        <h2 className="mt-4">
          <ColorLink to={getPostUrl(post, baseUrl)}>
            {post.frontmatter.title}
          </ColorLink>
        </h2>
        <p className="text-sm text-gray-500">{date.format("MMM DD, YYYY")}</p>

        <p className="mt-4 font-light">{post.excerpt}</p>

        <PostTagList post={post} />
      </div>

      {/* </Row> */}
    </li>
  )
}

export default Post
