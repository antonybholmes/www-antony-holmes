import { Link } from "gatsby"
import React from "react"
import useCopyright from "../hooks/copyright"
import useSiteMetadata from "../hooks/sitemetadata"
import Container from "./container"
import Row from "./row"

const Footer = () => {
  const { footer } = useSiteMetadata()
  const { links, infoLinks } = footer

  return (
    <footer className="bg-footer py-16 text-sm ">
      <Container>
        <div className="text-gray-600">
          <Row isVCentered={false} className="justify-between">
            {links.map((linkGroup: any, linkGroupIndex: number) => {
              return (
                <div key={linkGroupIndex}>
                  <p className="font-semibold">{linkGroup.name}</p>
                  <div>
                    {linkGroup.urls.map(
                      (url: [string, string], urlIndex: number) => {
                        return (
                          <div key={urlIndex}>
                            <Link to={url[1]}>
                              <a className="hover:text-blue-500 ">{url[0]}</a>
                            </Link>
                          </div>
                        )
                      }
                    )}
                  </div>
                </div>
              )
            })}
          </Row>

          <Row className="border-t border-solid border-gray-200 mt-16 pt-8 justify-between">
            <div>{useCopyright()}</div>
            <div>
              <ul className="inline-block">
                {infoLinks.map((link: any, index: number) => {
                  return (
                    <li
                      key={index}
                      className={`inline-block ${index > 0 ? "ml-8" : ""}`}
                    >
                      <Link to={link[1]}>{link[0]}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Row>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
