import dayjs from "dayjs"
import { Link } from "gatsby"
import React from "react"
import usePostId from "../../hooks/postid"
import usePostUrl from "../../hooks/posturl"
import Img from "gatsby-image"
import Row from "../row"
import BlueIndexLink from "../links/blueindexlink"

type PostProps = {
  post: any
  imageMap: any
}

const SubHeadingPost: React.FC<PostProps> = ({ post, imageMap }) => {
  const date = dayjs(post.frontmatter.date)
  return (
    <Link to={usePostUrl(post)}>
      <div className="text-gray-500 uppercase tracking-widest">
        {date.format("MMM DD")} / {post.frontmatter.categories[0]}
      </div>
      <h2 className="my-3 truncate">{post.frontmatter.title}</h2>

      <Img
        fluid={imageMap[post.frontmatter.id].childImageSharp.fluid}
        className={`trans-ani w-full`}
        alt={post.frontmatter.title}
      />
    </Link>
  )
}

export default SubHeadingPost
