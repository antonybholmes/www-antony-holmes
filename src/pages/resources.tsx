import { PageProps } from "gatsby"
import React from "react"
import Container from "../components/container"
import PageLayout from "../components/layouts/pagelayout"
import BlueLink from "../components/links/bluelink"
import useWebsites from "../utils/websites"

const renderWebsites = () => {
  const websites = useWebsites()

  return (
    <div className="mt-16">
      {websites.map(
        (
          section: {
            name: string
            links: Array<{ name: string; description: string; url: string }>
          },
          index: number
        ) => {
          return (
            <section key={index} className="mb-16">
              <h4>{section.name}</h4>

              <ul className="border border-solid border-gray-200 rounded-md p-4">
                {section.links.map(
                  (
                    link: { name: string; description: string; url: string },
                    linkIndex: number
                  ) => {
                    return (
                      <li key={linkIndex}>
                        <BlueLink to={link.url}>{link.name}</BlueLink>
                        <p>{link.description}</p>
                      </li>
                    )
                  }
                )}
              </ul>
            </section>
          )
        }
      )}
    </div>
  )
}

const WebsitesPage: React.FC<PageProps> = () => {
  return (
    <PageLayout title="Resources" description="Interesting web sites.">
      <Container>
        <h3>Resources</h3>
        <p>These are some of my favorite websites and resources.</p>

        {renderWebsites()}
      </Container>
    </PageLayout>
  )
}

export default WebsitesPage
