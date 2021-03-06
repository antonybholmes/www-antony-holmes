import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import getCategoryUrl from "../../utils/categoryurl"
import Row from "../row"

type ListProps = {
  post: any
}

const PostTagList: React.FC<ListProps> = ({ post }) => (
  <Row className="mt-4">
    <div className="mr-4">
      <FontAwesomeIcon icon="tags" />
    </div>

    <ul>
      {post.frontmatter.tags.map((category: string, index: number) => {
        return (
          <li className={`inline-block mr-2 mb-2`} key={index}>
            <Link
              to={getCategoryUrl(category)}
              className={`inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-2 rounded text-xs font-medium uppercase trans-ani`}
            >
              {category}
            </Link>
          </li>
        )
      })}
    </ul>
  </Row>
)

export default PostTagList
