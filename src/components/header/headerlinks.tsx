import { Link } from "gatsby"
import React from "react"
import useSiteMetadata from "../../hooks/sitemetadata"
import Row from "../row"

const HeaderLinks = ({ title }) => {
  const { header } = useSiteMetadata()
  const { links } = header

  return (
    <ul className="inline-block pl-4">
      {links.map((link: [string, string], index: number) => {
        return (
          <li className="inline-block pl-8" key={index}>
            <Link
              to={link[1]}
              className={`inline-block border-b-2 border-solid py-1 font-semibold text-black trans-ani ${
                title == link[0]
                  ? "border-blue-600"
                  : "hover:border-blue-600 border-transparent"
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
