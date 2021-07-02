import React from "react"
import getCopyright from "../utils/copyright"
import getFooterLinks from "../utils/footerlinks"
import getInfoLinks from "../utils/infolinks"
import Container from "./container"
import BlueLink from "./links/bluelink"
import ColorLink from "./links/colorlink"
import Row from "./row"

const Footer = () => {
  const links = getFooterLinks()
  const infoLinks = getInfoLinks()

  return (
    <footer>
      <Container>
        <div className="text-gray-600 text-sm border-t border-solid border-gray-200 py-16">
          {/* <Row isVCentered={false}>
            {links.map(
              (
                linkGroup: {
                  title: string
                  links: Array<{ name: string; url: string }>
                },
                linkGroupIndex: number
              ) => {
                return (
                  <div key={linkGroupIndex} className="w-1/5">
                    <h6 className="font-semibold mb-2">{linkGroup.title}</h6>
                    <ul>
                      {linkGroup.links.map(
                        (
                          link: { name: string; url: string },
                          linkIndex: number
                        ) => {
                          return (
                            <li key={linkIndex} className="mb-2">
                              <ColorLink to={link.url}>{link.name}</ColorLink>
                            </li>
                          )
                        }
                      )}
                    </ul>
                  </div>
                )
              }
            )}
          </Row> */}

          <Row className="text-xs rounded-md justify-between">
            <div>{getCopyright()}</div>
            <div>
              <ul className="inline-block">
                {infoLinks.map(
                  (link: { name: string; url: string }, index: number) => {
                    return (
                      <li
                        key={index}
                        className={`inline-block ${index > 0 ? "ml-8" : ""}`}
                      >
                        <BlueLink to={link.url}>{link.name}</BlueLink>
                      </li>
                    )
                  }
                )}
              </ul>
            </div>
          </Row>

          {/*           <Row isCentered={true} className="pt-8 text-xs">
            <div>{getCopyright()}</div>
          </Row> */}
        </div>
      </Container>
    </footer>
  )
}

export default Footer
