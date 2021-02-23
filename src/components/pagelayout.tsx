import React from "react"
import Container from "./container"
import FlHdDiv from "./flhddiv"
import Layout from "./layout"

type LayoutProps = {
  title: string
}

const PageLayout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <Layout title={title}>
      <FlHdDiv>
        <Container>{children}</Container>
      </FlHdDiv>
    </Layout>
  )
}

export default PageLayout
