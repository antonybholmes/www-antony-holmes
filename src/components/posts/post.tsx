import dayjs from "dayjs"
import { Link } from "gatsby"
import React from "react"
import FlatCard from "../flatcard"

type PostProps = {
  post: any
}

const Post: React.FC<PostProps> = ({ post }) => {
  const date = dayjs(post.date)
  return (
    <FlatCard>
      <h2>
        <Link to={post.slug}>{post.title}</Link>
      </h2>
      <div className="text-gray-500">{date.format("dddd, MMMM Do YYYY")}</div>
      <div className="mt-4">{post.excerpt}</div>
    </FlatCard>
  )
}

export default Post
