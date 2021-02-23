import { Link } from "gatsby"
import React from "react"
import useCategoryUrl from "../../hooks/categoryurl"

type CategoryListProps = {
  post: any
}

const CategoryList: React.FC<CategoryListProps> = ({ post }) => (
  <ul className="mt-4">
    {post.frontmatter.categories.map((category: string, index: number) => {
      return (
        <li className={`inline-block ${index > 0 ? "pl-2" : ""}`}>
          <Link
            to={useCategoryUrl(category)}
            key={index}
            className={`inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-2 rounded text-xs font-medium uppercase trans-ani`}
          >
            {category}
          </Link>
        </li>
      )
    })}
  </ul>
)

export default CategoryList
