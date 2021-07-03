import React from "react"
import getCategoryUrl from "../../utils/categoryurl"
import ColorLink from "../links/colorlink"

type PostProps = {
  post: any
}

const PostCategoryLink: React.FC<PostProps> = ({ post }) => (
  <div>
    <ColorLink
      to={getCategoryUrl(post.frontmatter.tags[0])}
      className="uppercase tracking-wider text-sm`"
    >
      {post.frontmatter.tags[0]}
    </ColorLink>
  </div>
)

export default PostCategoryLink
