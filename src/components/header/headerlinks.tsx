import { Link } from "gatsby"
import React from "react"
import useHeaderLinks from "../../hooks/headerlinks"

type HeaderLinksProps = {
  title: String
}

const HeaderLinks: React.FC<HeaderLinksProps> = ({ title }) => {
  const links = useHeaderLinks()

  return (
    <ul className="inline-block pl-4">
      {links.map((link: { name: string; url: string }, index: number) => {
        return (
          <li className="inline-block pl-8" key={index}>
            <Link
              to={link.url}
              className={`inline-block border-b-2 border-solid py-1 font-semibold text-black trans-ani ${
                title == link.name
                  ? "border-blue-600"
                  : "hover:border-blue-600 border-transparent"
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
