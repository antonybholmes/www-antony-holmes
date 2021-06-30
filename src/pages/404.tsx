import { PageProps } from "gatsby"
import React from "react"
import PageLayout from "../components/layouts/pagelayout"

const ErrorPage: React.FC<PageProps> = ({ path }) => {
  return (
    <PageLayout title="404: Not Found" path={path}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </PageLayout>
  )
}

export default ErrorPage
