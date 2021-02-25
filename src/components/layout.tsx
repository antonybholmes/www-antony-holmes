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
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <div className="relative">
      <SEO title={title} />
      <Header title={title} />
      <Main className="min-h-screen">{children}</Main>
      <Footer />
    </div>
  )
}

export default Layout
