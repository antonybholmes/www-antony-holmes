import dayjs from "dayjs"
import { Link } from "gatsby"
import React from "react"
import usePostUrl from "../../hooks/posturl"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

type PostProps = {
  post: any
  imageMap: any
}

const SubHeadingPost: React.FC<PostProps> = ({ post, imageMap }) => {
  const date = dayjs(post.frontmatter.date)
  return (
    <Link to={usePostUrl(post)}>
      <div className="text-gray-500 uppercase tracking-widest">
        {date.format("MMM DD")} / {post.frontmatter.tags[0]}
      </div>
      <h2 className="my-3 truncate">{post.frontmatter.title}</h2>

      <GatsbyImage
        image={getImage(imageMap[post.frontmatter.id])}
        className={`trans-ani w-full`}
        alt={post.frontmatter.title}
      />
    </Link>
  )
}

export default SubHeadingPost
