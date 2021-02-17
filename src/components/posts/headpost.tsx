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

const HeadPost: React.FC<PostProps> = ({ post, imageMap }) => {
  console.log(post, imageMap)

  const date = dayjs(post.frontmatter.date)
  return (
    <>
      <Row isVCentered={false} className="w-full">
        <div className="w-6/10">
          <Img
            fluid={imageMap[post.frontmatter.id].childImageSharp.fluid}
            className={`trans-ani w-full`}
            alt={post.frontmatter.title}
          />
        </div>

        <div className="pl-8 w-4/10">
          <div className="text-gray-500 uppercase tracking-widest">
            {date.format("MMM DD")} / {post.frontmatter.categories[0]}
          </div>
          <h1 className="mt-3">
            <Link to={usePostUrl(post)}>{post.frontmatter.title}</Link>
          </h1>

          <div className="mt-4">{post.excerpt}</div>
          <div className="mt-8">
            <BlueIndexLink to={usePostUrl(post)}>Read article</BlueIndexLink>
          </div>
        </div>
      </Row>
    </>
  )
}

export default HeadPost
