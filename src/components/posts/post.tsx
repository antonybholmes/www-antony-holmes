import dayjs from "dayjs"
import { Link } from "gatsby"
import React from "react"
import usePostUrl from "../../hooks/posturl"
import Img from "gatsby-image"
import Row from "../row"
import { useState } from "react"
import CategoryList from "./categorylist"

type PostProps = {
  post: any
  imageMap: any
}

const Post: React.FC<PostProps> = ({ post, imageMap }) => {
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
      className="inline-block mt-16 w-full"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <Link to={usePostUrl(post)}>
        <div className="mt-4">
          <Row isVCentered={false} className="w-full">
            <div className="w-3/4 mr-8">
              <div className="text-blue-500 uppercase tracking-widest text-sm">
                {date.format("MMM DD")} / {post.frontmatter.categories[0]}
              </div>
              <h2
                className={`mt-3 font-semibold trans-ani ${
                  hover ? "text-blue-500" : "text-black"
                }`}
              >
                {post.frontmatter.title}
              </h2>

              <CategoryList post={post} />

              <div className="mt-4">{post.excerpt}</div>
            </div>

            <div className="w-1/4">
              <Img
                fluid={imageMap[post.frontmatter.id].childImageSharp.fluid}
                className={`trans-ani w-full`}
                alt={post.frontmatter.title}
              />
            </div>
          </Row>
        </div>
      </Link>
    </li>
  )
}

export default Post
