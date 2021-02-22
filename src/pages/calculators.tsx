import { graphql, Link, PageProps } from "gatsby"
import React from "react"
import Container from "../components/container"
import Layout from "../components/layout"
import Row from "../components/row"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BackgroundImage from "gatsby-background-image"

const calcLink = (name: string, to: string) => {
  return (
    <div className="w-1/4 bg-blue-300 hover:bg-blue-400 mx-8 p-8 text-white trans-ani">
      <Link to={to}>
        <Row isCentered={true}>
          <div>
            <FontAwesomeIcon icon="calculator" size="9x" />
          </div>
        </Row>
        <Row isCentered={true}>
          <div className="mt-8">{name}</div>
        </Row>
      </Link>
    </div>
  )
}

type DataProps = {
  hero: any
}

const Page: React.FC<PageProps<DataProps>> = ({ data }) => {
  return (
    <Layout title="Calculators">
      <BackgroundImage
        Tag="section"
        fluid={data.hero.childImageSharp.fluid}
        className="w-full h-60"
      />
      <Container className="mt-16">
        <Row wrap={true}>
          {calcLink("Fee Calculator", "/calculators/fee-calculator")}
          {calcLink(
            "Retirement Calculator",
            "/calculators/retirement-calculator"
          )}
          {calcLink(
            "Save A Million Calculator",
            "/calculators/save-million-calculator"
          )}
        </Row>
      </Container>
    </Layout>
  )
}

export default Page

export const query = graphql`
  query {
    hero: file(relativePath: { regex: "/calculator.jpg/" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
