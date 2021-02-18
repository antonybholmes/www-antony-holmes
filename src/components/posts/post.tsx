import dayjs from "dayjs"
import { Link } from "gatsby"
import React from "react"
import usePostId from "../../hooks/postid"
import usePostUrl from "../../hooks/posturl"
import FlatCard from "../flatcard"
import Img from "gatsby-image"
import Row from "../row"

type PostProps = {
  post: any
  imageMap: any
}

const Post: React.FC<PostProps> = ({ post, imageMap }) => {
  const date = dayjs(post.frontmatter.date)
  return (
    <li className="inline-block mt-8 border-t border-solid border-gray-200 w-full">
      <Link to={usePostUrl(post)}>
        <div className="mt-4">
          <Row isVCentered={false} className="w-full">
            <div className="w-3/4">
              <div className="text-gray-500 uppercase tracking-widest">
                {date.format("MMM DD")} / {post.frontmatter.categories[0]}
              </div>
              <h2 className="mt-3">{post.frontmatter.title}</h2>

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
