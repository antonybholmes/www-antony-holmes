import dayjs from "dayjs"
import { Link } from "gatsby"
import React from "react"
import usePostUrl from "../../hooks/posturl"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import BlueLink from "../links/bluelink"
import useCategoryUrl from "../../hooks/categoryurl"

type PostProps = {
  post: any
  imageMap: any
}

const SubHeadingPost: React.FC<PostProps> = ({ post, imageMap }) => {
  const date = dayjs(post.frontmatter.date)
  return (
    <Link to={usePostUrl(post)}>
      <BlueLink
        to={useCategoryUrl(post.frontmatter.tags[0])}
        className="uppercase tracking-widest text-sm`"
      >
        {post.frontmatter.tags[0]}
      </BlueLink>
      <h2 className="my-3 truncate">{post.frontmatter.title}</h2>

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
