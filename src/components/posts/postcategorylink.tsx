import React from "react"
import BlueLink from "../links/bluelink"
import getCategoryUrl from "../../utils/categoryurl"

type PostProps = {
  post: any
}

const PostCategoryLink: React.FC<PostProps> = ({ post }) => (
  <div className="mb-4">
    <BlueLink
      to={getCategoryUrl(post.frontmatter.tags[0])}
      className="uppercase tracking-widest text-sm`"
    >
      {post.frontmatter.tags[0]}
    </BlueLink>
  </div>
)

export default PostCategoryLink
