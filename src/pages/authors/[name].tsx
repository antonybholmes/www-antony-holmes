import React from "react"
import PageLayout from "../../components/pagelayout"
import useSiteMetadata from "../../hooks/sitemetadata"

const AuthorPage = (props: any) => {
  const { siteTitle } = useSiteMetadata()

  return (
    <PageLayout title="404: Not Found">
      <h1>404: Not Found</h1>
      <p>{props.name} does not exist... the sadness.</p>
    </PageLayout>
  )
}

export default AuthorPage
