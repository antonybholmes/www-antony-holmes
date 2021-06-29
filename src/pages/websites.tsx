import { PageProps } from "gatsby"
import React from "react"
import PageLayout from "../components/pagelayout"

const WebsitesPage: React.FC<PageProps> = ({ path }) => {
  return (
    <PageLayout title="Web Sites" path={path}>
      <p>
        These are some of my favorite places on the web for financial
        information. If you don’t know who the good guys in investing and
        personal finance are, start with these.
      </p>
    </PageLayout>
  )
}

export default WebsitesPage
