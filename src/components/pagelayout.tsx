import { PageProps } from "gatsby"
import React from "react"
import Container from "./container"
import FlHdDiv from "./flhddiv"
import Layout from "./layout"

type LayoutProps = {
  title: string
  path: string
}

const PageLayout: React.FC<LayoutProps> = ({ title, path, children }) => {
  return (
    <Layout title={title} path={path}>
      <FlHdDiv>
        <Container>{children}</Container>
      </FlHdDiv>
    </Layout>
  )
}

export default PageLayout
