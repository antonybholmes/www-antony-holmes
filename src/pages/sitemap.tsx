import React from "react"
import getHeaderLinks from "../utils/headerlinks"
import PageLayout from "../components/layouts/pagelayout"
import BlueLink from "../components/links/bluelink"
import Row from "../components/row"

const SiteMapPage = () => {
  const headerLinks = getHeaderLinks()

  return (
    <PageLayout title="Site Map">
      <Row className="font-medium" isVCentered={false} wrap={true}>
        <div className="w-full md:w-1/3 mb-8">
          <h4 className="mt-4">About</h4>

          <div className="mt-2">
            <BlueLink to="/help">Help</BlueLink>
          </div>

          <div className="mt-2">
            <BlueLink to="/privacy">Privacy Policy</BlueLink>
          </div>
          <div className="mt-2">
            <BlueLink to="/terms">Terms of Use</BlueLink>
          </div>
        </div>

        <div className="w-full md:w-1/3 mb-8">
          <h4 className="mt-4">Learn More</h4>
          {headerLinks.map((link: { name: string; url: string }, i: number) => {
            return (
              <div className="mt-2" key={i}>
                <BlueLink aria-label={`Goto ${link.name}`} to={link.url}>
                  {link.name}
                </BlueLink>
              </div>
            )
          })}
        </div>
      </Row>
    </PageLayout>
  )
}

export default SiteMapPage
