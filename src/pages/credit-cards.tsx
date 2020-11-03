import { PageProps } from "gatsby"
import React from "react"
import Container from "../components/container"
import FlatCard from "../components/flatcard"
import Layout from "../components/layout"

const Page = () => {
  return (
    <Layout title="Credit Cards">
      <Container>
        <FlatCard>
          <h1 className="text-center mb-8">Credit Cards</h1>
        </FlatCard>
      </Container>
    </Layout>
  )
}

export default Page
