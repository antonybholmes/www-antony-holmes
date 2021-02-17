import { Link } from "gatsby"
import React from "react"
import useSiteMetadata from "../../hooks/sitemetadata"
import Row from "../row"

const HeaderLinks = ({ title }) => {
  const { header } = useSiteMetadata()
  const { links } = header

  return (
    <ul className="inline-block pl-8">
      {links.map((link: [string, string], index: number) => {
        return (
          <li className="inline-block pl-8" key={index}>
            <Link
              to={link[1]}
              className={`inline-block border-b-4 border-solid py-6 trans-ani ${
                title == link[0]
                  ? "text-black border-blue-700"
                  : "text-gray-500 hover:text-black border-transparent"
              }`}
            >
              {link[0]}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default HeaderLinks
