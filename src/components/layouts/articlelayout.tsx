import React from "react"
import ArticleContainer from "../articlecontainer"
import FlHdDiv from "../flhddiv"
import Layout from "./layout"

type LayoutProps = {
  title?: string
  description?: string
  page?: string
  path?: string
  isIndexed?: boolean
}

const ArticleLayout: React.FC<LayoutProps> = ({
  title = "",
  description = "",
  page = "",
  path = "",
  isIndexed = true,
  children,
}) => {
  return (
    <Layout
      title={title}
      description={description}
      page={page}
      path={path}
      isIndexed={isIndexed}
    >
      <FlHdDiv>
        <ArticleContainer>{children}</ArticleContainer>
      </FlHdDiv>
    </Layout>
  )
}

export default ArticleLayout
