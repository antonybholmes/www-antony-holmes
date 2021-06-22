import { Link, PageProps } from "gatsby"
import React from "react"
import Container from "../components/container"
import Row from "../components/row"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PageLayout from "../components/pagelayout"

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

const CalculatorsPage: React.FC<PageProps<DataProps>> = () => {
  return (
    <PageLayout title="Calculators">
      <Container className="mt-16">
        <Row wrap={true}>
          {calcLink("Fees", "/calculators/fee-calculator")}
          {calcLink("Retirement", "/calculators/retirement-calculator")}
          {calcLink("Save A Million", "/calculators/save-million-calculator")}
        </Row>
      </Container>
    </PageLayout>
  )
}

export default CalculatorsPage
