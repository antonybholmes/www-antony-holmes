import { Link } from "gatsby"
import React from "react"
import useCopyright from "../hooks/copyright"
import useFooterLinks from "../hooks/footerlinks"
import useInfoLinks from "../hooks/infolinks"
import Container from "./container"
import Row from "./row"

const Footer = () => {
  const links = useFooterLinks()
  const infoLinks = useInfoLinks()

  return (
    <footer className="py-16">
      <Container>
        <div className="text-gray-600 text-sm border-t border-solid border-gray-200 pt-16">
          <Row isVCentered={false} className="justify-between">
            {links.map((linkGroup: {title:string, links:Array<{name:string,url:string}>}, linkGroupIndex: number) => {
              return (
                <div key={linkGroupIndex}>
                  <h6 className="font-semibold mb-2">{linkGroup.title}</h6>
                  <ul>
                    {linkGroup.links.map(
                      (link: {name:string,url:string}, linkIndex: number) => {
                        return (
                          <li key={linkIndex} className="mb-2">
                            <Link to={link.url}>
                              <a className="hover:text-blue-500 ">{link.name}</a>
                            </Link>
                          </li>
                        )
                      }
                    )}
                  </ul>
                </div>
              )
            })}
          </Row>

          <Row isCentered={true} className="text-xs mt-16 py-4 px-6 rounded-md bg-gray-100">
            {/* <div>{useCopyright()}</div> */}
            <div>
              <ul className="inline-block">
                {infoLinks.map((link: {name:string, url:string}, index: number) => {
                  return (
                    <li
                      key={index}
                      className={`inline-block ${index > 0 ? "ml-8" : ""}`}
                    >
                      <Link to={link.url}>{link.name}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Row>

          <Row isCentered={true} className="pt-8 text-xs">
          <div>{useCopyright()}</div>
          </Row>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
