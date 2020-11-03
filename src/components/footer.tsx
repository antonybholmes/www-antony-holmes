import { Link } from "gatsby"
import React from "react"
import { Props } from "."
import useCopyright from "../hooks/copyright"
import useSiteMetadata from "../hooks/sitemetadata"
import Container from "./container"
import Row from "./row"

const Footer = () => {
  const { footer } = useSiteMetadata()
  const { links } = footer

  return (
    <footer>
      <Container>
        <div className="mt-8 py-8 border-t border-solid border-black-8 text-sm text-gray-600">
          <Row isVCentered={false}>
            {links.map((linkGroup: any, linkGroupIndex: number) => {
              return (
                <div className="w-4/12" key={linkGroupIndex}>
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

          <div className="pt-16">{useCopyright()}</div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
