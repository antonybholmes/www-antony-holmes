import React from "react"
import { graphql, PageProps } from "gatsby"
import PageLayout from "../components/layouts/pagelayout"
import Row from "../components/row"
import BlueIndexLink from "../components/links/blueindexlink"
import BlueLink from "../components/links/bluelink"
import MainSideCol from "../components/mainsidecol"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import getPortfolioTagUrl from "../utils/portfoliotagurl"
import Container from "../components/container"

type ListProps = {
  portfolio: any
}

const PortfolioTagsList: React.FC<ListProps> = ({ portfolio }) => (
  <Row className="mt-4">
    <div className="mr-4">
      <FontAwesomeIcon icon="tags" />
    </div>

    <ul>
      {portfolio.tags.map((tag: string, index: number) => {
        return (
          <li className={`inline-block ${index > 0 ? "pl-2" : ""}`}>
            <Link
              to={getPortfolioTagUrl(tag)}
              key={index}
              className={`inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-2 rounded text-xs font-medium uppercase trans-ani`}
            >
              {tag}
            </Link>
          </li>
        )
      })}
    </ul>
  </Row>
)

type PortfolioProps = {
  portfolio: any
  index: number
}

const Portfolio: React.FC<PortfolioProps> = ({ portfolio, index }) => {
  const maxRows: number = Math.max(
    ...portfolio.brokerages.map((brokerage: any) => {
      return brokerage.stocks.length
    })
  )

  return (
    <section className="mb-8">
      <h3>
        {index + 1}. {portfolio.name}
      </h3>

      <p>{portfolio.description}</p>

      <table className="table-fixed w-full">
        <tr>
          <th className="w-7/10 bg-gray-200 border border-solid border-white py-1">
            Stock
          </th>
          <th className="w-2/10 bg-gray-200 border border-solid border-white py-1">
            Ticker
          </th>
          <th className="w-1/10 bg-gray-200 border border-solid border-white py-1">
            %
          </th>
        </tr>
      </table>

      {portfolio.brokerages.map((brokerage: any, porfolioIndex: number) => {
        return (
          <table
            key={porfolioIndex}
            className={`table-fixed w-full mt-4 ${
              porfolioIndex > 0 ? "border-t border-solid border-gray-200" : ""
            }`}
          >
            <tr>
              <td
                className={`mb-2 w-7/10 font-semibold ${
                  porfolioIndex > 0 ? "pt-4" : ""
                }`}
              >
                {brokerage.name}
              </td>
              <td
                className={`mb-2 w-2/10 ${porfolioIndex > 0 ? "pt-4" : ""}`}
              ></td>
              <td
                className={`mb-2 w-1/10 ${porfolioIndex > 0 ? "pt-4" : ""}`}
              ></td>
            </tr>
            {brokerage.stocks.map((stock: any, brokerageIndex: number) => {
              return (
                <tr>
                  <td className="mb-2 w-7/10">{stock.name}</td>
                  <td className="mb-2 w-2/10">{stock.ticker}</td>
                  <td className="mb-2 w-1/10">{stock.pc * 100}%</td>
                </tr>
              )
            })}
          </table>
        )
      })}

      <PortfolioTagsList portfolio={portfolio} />

      <div className="mt-8">
        <BlueIndexLink to={portfolio.url}>Backtest Portfolio</BlueIndexLink>
      </div>
    </section>
  )
}

type DataProps = {
  portfolios: {
    nodes: Array<{
      name: string
      description: string
      brokerages: Array<{
        name: string
        stocks: Array<{ name: string; ticker: string; pc: number }>
      }>
      url: string
      tags: Array<string>
    }>
  }
}

const PortfoliosPage: React.FC<PageProps<DataProps>> = ({ path, data }) => {
  const portfolios = data.portfolios.nodes

  return (
    <PageLayout title="Portfolios" path={path}>
      <Container>
        {/*       <MainSideCol>
        <> */}
        <h1>You've Got To Pick A Portfolio Or Two</h1>

        <p>
          Starting a porfolio might seem daunting, afterall there are thousands
          of stocks, ETFs and funds to choose from, so how do you start and what
          makes a perfect portfolio?
        </p>
        <p>
          The truth is that no one knows which portfolio is going to outperform
          in the future. You can change all the factors you want — more or less
          diversification, additional risks/factors, lower costs vs additional
          risk or diversification, more of this and less of that. Does it
          matter? Absolutely. Take a look at Madsinger's Monthly Report some
          time, where a Bogleheads poster has been tracking the returns of a
          dozen balanced portfolios for the last decade. But it doesn't matter
          that much. No diversified portfolio in that report has done better
          than 1-2% per year more than a similarly risky portfolio over the last
          15 years. Now 1-2% does matter, especially over long periods of time,
          but keep in mind the edge that a very complex portfolio might provide
          over a very simple one can easily be eaten up by advisory fees,
          behavioral errors, and poor tax management.
        </p>

        <h2 className="mt-4">Stick With It</h2>
        <p>
          I suggest you pick a portfolio you like and stick with it (for a few
          decades). Eventually, any given investment portfolio will have its day
          in the sun. Just don't continually change your portfolio in response
          to changes in the investment winds. This is the equivalent of driving
          while looking through the rearview mirror, or, as Dr. Bernstein likes
          to phrase it, "skating to where the puck was".
        </p>
        <p>
          Below is a list of some starting portfolios you can use and adapt to
          your own needs. These portfolios will often use Vanguard funds as a
          basis, but where possible I have included equivalent low cost Fidelity
          and Schwab funds. I can't say which is the best, but long term all of
          them should serve you well. I have included links to{" "}
          <BlueLink to="https://portfoliovisualizer.com">
            Portfolio Visualizer
          </BlueLink>{" "}
          so you can backtest these portfolios to see how they performed over
          time and an array of market conditions. The usual caveat is that past
          performance does not guarantee the future, but you can get an idea of
          what will happen in various scenarios such as bull or bear market.
        </p>

        <ul className="mt-16 pt-8 border-t border-solid border-gray-200">
          {portfolios.map((portfolio: any, index: number) => {
            return <Portfolio key={index} index={index} portfolio={portfolio} />
          })}
        </ul>
        {/*         </>
        <></>
      </MainSideCol> */}
      </Container>
    </PageLayout>
  )
}

export default PortfoliosPage

export const pageQuery = graphql`
  query {
    portfolios: allPortfoliosJson {
      nodes {
        name
        description
        brokerages {
          name
          stocks {
            name
            ticker
            pc
          }
        }
        url
        tags
      }
    }
  }
`
