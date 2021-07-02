import { Link } from "gatsby"
import React from "react"
import getHeaderLinks from "../../utils/headerlinks"

type HeaderLinksProps = {
  title: string
  rowMode?: boolean
}

const HeaderLinks: React.FC<HeaderLinksProps> = ({
  title = "",
  rowMode = true,
}) => {
  const links = getHeaderLinks()

  return (
    <ul
      className={`${
        rowMode ? "inline-block" : "border-t border-solid border-white-50"
      }`}
    >
      {links.map((link: { name: string; url: string }, index: number) => {
        return (
          <li
            className={`font-medium ${
              rowMode
                ? "inline-block pl-4"
                : "py-4 border-b border-solid border-white-50"
            } `}
            key={index}
          >
            <Link
              to={link.url}
              className={`inline-block text-sm text-white trans-ani rounded-md ${
                rowMode
                  ? `px-3 py-2 ${
                      title == link.name
                        ? "bg-white-10"
                        : "hover:text-white-60 border-transparent"
                    }`
                  : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default HeaderLinks
