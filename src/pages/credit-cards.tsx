import { PageProps } from "gatsby"
import React from "react"
import PageLayout from "../components/pagelayout"

const Page: React.FC<PageProps> = ({ path }) => {
  return (
    <PageLayout title="Credit Cards" path={path}>
      <h1 className="text-center mb-8">Credit Cards</h1>
    </PageLayout>
  )
}

export default Page
