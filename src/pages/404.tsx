import { PageProps } from "gatsby"
import React from "react"
import ArticleLayout from "../components/layouts/articleLayout"

const ErrorPage = () => {
  return (
    <ArticleLayout title="404: Not Found">
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </ArticleLayout>
  )
}

export default ErrorPage
