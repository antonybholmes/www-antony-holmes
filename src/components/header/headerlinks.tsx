import { Link } from "gatsby"
import React from "react"
import useSiteMetadata from "../../hooks/sitemetadata"
import Row from "../row"

const HeaderLinks = ({ title }) => {
  const { header } = useSiteMetadata()
  const { links } = header

  return (
    <Row className="pl-8">
      {links.map((link: [string, string], index: number) => {
        return (
          <div className="pl-8" key={index}>
            <Link to={link[1]}>
              <a className={`${title == link[0] ? "text-blue-400" : ""}`}>
                {link[0]}
              </a>
            </Link>
          </div>
        )
      })}
    </Row>
  )
}

export default HeaderLinks
