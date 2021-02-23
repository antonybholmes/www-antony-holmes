import React from "react"
import PageLayout from "../../components/pagelayout"
import useSiteMetadata from "../../hooks/sitemetadata"

const ArticlePage = (props: any) => {
  const { siteTitle } = useSiteMetadata()

  return (
    <PageLayout title="404: Not Found">
      <h1>404: Not Found</h1>
      <p>Article {props.name} does not exist... the sadness.</p>
    </PageLayout>
  )
}

export default ArticlePage
