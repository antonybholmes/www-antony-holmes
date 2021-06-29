import React from "react"
import Footer from "./footer"
import Header from "./header/header"
import SEO from "./seo"

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faCalculator,
  faChevronRight,
  faTags,
} from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { PageProps } from "gatsby"

library.add(faCalculator, faChevronRight, faTags)

const Main = styled.main`
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
    height: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    z-index: 100;
  }
`

type LayoutProps = {
  title: string
  path: string
}

const Layout: React.FC<LayoutProps> = ({ title, path, children }) => {
  return (
    <div className="relative">
      <SEO title={title} path={path} />
      <Header title={title} />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
