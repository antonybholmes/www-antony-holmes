import dayjs from "dayjs"
import { Link } from "gatsby"
import React from "react"
import getPostUrl from "../../utils/posturl"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import BlueLink from "../links/bluelink"
import getCategoryUrl from "../../utils/categoryurl"
import PostCategoryLink from "./postcategorylink"

type PostProps = {
  post: any
  imageMap: any
}

const SubHeadingPost: React.FC<PostProps> = ({ post, imageMap }) => {
  const date = dayjs(post.frontmatter.date)
  return (
    <Link to={getPostUrl(post)}>
      <PostCategoryLink post={post} />
      <h2 className="mb-3 truncate">{post.frontmatter.title}</h2>

      <p className="text-gray-500">{date.format("MMM DD, YYYY")}</p>

      <GatsbyImage
        image={getImage(imageMap[post.frontmatter.id])}
        className={`trans-ani w-full`}
        alt={post.frontmatter.title}
      />
    </Link>
  )
}

export default SubHeadingPost
