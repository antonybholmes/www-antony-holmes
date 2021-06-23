import React from "react"
import Container from "../components/container"
import FlHdDiv from "../components/flhddiv"
import Row from "../components/row"
import PageLayout from "../components/pagelayout"
import BlueLink from "../components/links/bluelink"
import useHeaderLinks from "../hooks/headerlinks"

const SiteMapPage = () => {
  const headerLinks = useHeaderLinks()

  return (
    <PageLayout title="Site Map">
      <FlHdDiv>
          <div className="font-medium">
            <Row isVCentered={false} wrap={true}>
              <div className="w-full md:w-1/3">
                <h4 className="mt-4">About Us</h4>

                <div className="mt-2">
                  <BlueLink to="/about">About</BlueLink>
                </div>

                <div className="mt-2">
                  <BlueLink to="/help">Help</BlueLink>
                </div>

                <div className="mt-2">
                  <BlueLink to="/privacy">Privacy Policy</BlueLink>
                </div>
                <div className="mt-2">
                  <BlueLink to="/terms">Terms of Use</BlueLink>
                </div>

                <div className="mt-2">
                  <BlueLink to="/contact">Contact Us</BlueLink>
                </div>
              </div>

              <div className="w-full md:w-1/3">
                <h4 className="mt-4">Learn More</h4>
                {headerLinks.map((link: any, i: number) => {
                  return (
                    <div className="mt-2" key={i}>
                      <BlueLink aria-label={`Goto ${link.name}`} to={link.link}>
                        {link.name}
                      </BlueLink>
                    </div>
                  )
                })}
              </div>
            </Row>
          </div>
      </FlHdDiv>
    </PageLayout>
  )
}

export default SiteMapPage