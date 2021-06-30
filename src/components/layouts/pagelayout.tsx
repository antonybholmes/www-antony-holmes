import React from "react"
import Container from "../container"
import FlHdDiv from "../flhddiv"
import Layout from "./layout"

type LayoutProps = {
  title?: string
  description?: string
  path?: string
  isIndexed?: boolean
}

const PageLayout: React.FC<LayoutProps> = ({
  title = "",
  description = "",
  path = "",
  isIndexed = true,
  children,
}) => {
  return (
    <Layout
      title={title}
      description={description}
      path={path}
      isIndexed={isIndexed}
    >
      <FlHdDiv>
        <Container>{children}</Container>
      </FlHdDiv>
    </Layout>
  )
}

export default PageLayout
