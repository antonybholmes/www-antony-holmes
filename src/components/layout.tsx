import React from "react"
import Footer from "./footer"
import Header from "./header/header"
import SEO from "./seo"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faCalculator } from "@fortawesome/free-solid-svg-icons"

library.add(faCalculator)

type LayoutProps = {
  title: string
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <SEO title={title} />
      <Header title={title} />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
