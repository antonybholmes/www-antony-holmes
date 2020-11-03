import { PageProps } from "gatsby"
import React from "react"
import Container from "../components/container"
import FlatCard from "../components/flatcard"
import Layout from "../components/layout"

const Page: React.FC<PageProps> = () => {
  return (
    <Layout title="Web Sites">
      <Container>
        <p>
          These are some of my favorite places on the web for financial
          information. If you don’t know who the good guys in investing and
          personal finance are, start with these.
        </p>
      </Container>
    </Layout>
  )
}

export default Page
