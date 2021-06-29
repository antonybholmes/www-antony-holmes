import { Link, PageProps } from "gatsby"
import React from "react"
import Container from "../components/container"
import Row from "../components/row"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PageLayout from "../components/pagelayout"

const calcLink = (name: string, to: string) => {
  return (
    <Link
      to={to}
      className="block w-1/3 border border-solid border-gray-200 rounded-md  mx-8  trans-ani hover:bg-gray-100 text-blue-400 my-4 py-16"
    >
      <Row isCentered={true}>
        <div>
          <FontAwesomeIcon icon="calculator" size="9x" />
        </div>
      </Row>
      <Row isCentered={true}>
        <div className="mt-8">{name}</div>
      </Row>
    </Link>
  )
}

const CalculatorsPage: React.FC<PageProps> = ({ path }) => {
  return (
    <PageLayout title="Calculators" path={path}>
      <Row wrap={true} className="justify-center">
        {calcLink("Fees", "/calculators/fee-calculator")}
        {calcLink("Retirement", "/calculators/retirement-calculator")}
        {calcLink("Save A Million", "/calculators/save-million-calculator")}
      </Row>
    </PageLayout>
  )
}

export default CalculatorsPage
