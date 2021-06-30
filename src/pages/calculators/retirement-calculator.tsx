import { graphql, PageProps } from "gatsby"
import React, { useEffect, useState } from "react"
import Container from "../../components/container"
import RetirementGraph from "../../components/dashboard/retirementgraph"
import FlHdDiv from "../../components/flhddiv"
import Layout from "../../components/layouts/layout"
import MainSideCol from "../../components/mainsidecol"
import RangeSlider from "../../components/rangeslider"
import Slider from "../../components/slider"
import TextBox from "../../components/textbox"

const heading = (text: string) => {
  return <div className="font-semibold text-sm mb-1">{text}</div>
}

const Page: React.FC<PageProps> = ({ path }) => {
  const [arr, setARR] = useState(8)
  const [spendingRate, setSpendingRate] = useState(4)
  const [er, setER] = useState(2)
  const [startingBalance, setStartingBalance] = useState(10000)
  const [contributionYears, setContributionYears] = useState(40)
  const [drawDownYears, setDrawDownYears] = useState(30)
  const [savings, setSavings] = useState(10000)
  const [data1, setData1] = useState<Array<number>>([])

  const createData = () => {
    const d1: Array<number> = []
    let b1 = startingBalance / 1000000

    for (var i = 0; i < contributionYears; ++i) {
      d1.push(b1)
      b1 = b1 * (1 + arr / 100) * (1 - er / 2000) + savings / 1000000
    }

    for (var i = 0; i < drawDownYears; ++i) {
      d1.push(b1)
      b1 = b1 * (1 - spendingRate / 100) * (1 + arr / 100) * (1 - er / 2000)
    }

    setData1(d1)
  }

  // useEffect(() => {
  //   createData()
  // },
  // [])

  useEffect(() => {
    createData()
  }, [
    arr,
    er,
    startingBalance,
    savings,
    contributionYears,
    drawDownYears,
    spendingRate,
  ])

  const handleARRChange = (text: string) => {
    let v = parseInt(text)

    if (!isNaN(v)) {
      setARR(v)
    }
  }

  const handleERChange = (text: string) => {
    let v = parseFloat(text)

    if (!isNaN(v)) {
      setER((v / 100) * 2000)
    }
  }

  const handleStartingBalanceChange = (text: string) => {
    let v = parseInt(text)

    if (!isNaN(v)) {
      setStartingBalance(v)
    }
  }

  const handleSavingsChange = (text: string) => {
    let v = parseInt(text)

    if (!isNaN(v)) {
      setSavings(v)
    }
  }

  const handleContributionYearsChange = (text: string) => {
    let v = parseInt(text)

    if (!isNaN(v)) {
      setContributionYears(v)
    }
  }

  const handleDrawDownYearsChange = (text: string) => {
    let v = parseInt(text)

    if (!isNaN(v)) {
      setDrawDownYears(v)
    }
  }

  const handleSpendingRate = (text: string) => {
    let v = parseFloat(text)

    if (!isNaN(v)) {
      setSpendingRate(v)
    }
  }

  return (
    <Layout title="Retirement Calculator" path={path}>
      {/* <BackgroundImage
        Tag="section"
        fluid={data.hero.childImageSharp.fluid}
        className="w-full h-60"
      /> */}

      <FlHdDiv>
        <Container>
          <MainSideCol>
            <div>
              <h2>Retirement Calculator</h2>
              <div className="mb-8">
                This simple calculator yets you easily plot if you are on target
                for retirement and shows you on an interactive graph how long
                your money is likely to last. We built this because similar
                calculators on other sites are often cumbersome and ask for too
                much information. This calculator does not store any information
                about you.
              </div>
              <RetirementGraph data1={data1} />
            </div>

            <div className="ml-8 border border-solid border-gray-200 p-4 bg-gray-100 rounded-md">
              <div>
                {heading("Annual Rate Of Return")}
                <TextBox
                  value={arr}
                  prefix="%"
                  prefixLeft={false}
                  alignLeft={false}
                  onChange={handleARRChange}
                />
                <Slider
                  value={arr}
                  onChange={(v: number) => setARR(v)}
                  className="mt-2"
                />
              </div>
              <div className="mt-8">
                {heading("Expense Ratio")}
                <TextBox
                  value={((er / 2000) * 100).toFixed(2)}
                  onChange={handleERChange}
                  prefix="%"
                  prefixLeft={false}
                  alignLeft={false}
                />
                <Slider
                  min={0}
                  max={2000}
                  value={er}
                  onChange={(v: number) => setER(v)}
                  className="mt-2"
                />
              </div>
              <div className="mt-8">
                {heading("Starting Balance")}
                <TextBox
                  value={startingBalance}
                  prefix="$"
                  onChange={handleStartingBalanceChange}
                />
                <Slider
                  value={startingBalance}
                  min={10000}
                  max={1000000}
                  step={10000}
                  onChange={(v: number) => setStartingBalance(v)}
                  className="mt-2"
                />
              </div>
              <div className="mt-8">
                {heading("Savings Per Year")}
                <TextBox
                  value={savings}
                  prefix="$"
                  onChange={handleSavingsChange}
                />
                <Slider
                  value={savings}
                  min={0}
                  max={100000}
                  step={1000}
                  onChange={(v: number) => setSavings(v)}
                  className="mt-2"
                />
              </div>
              <div className="mt-8">
                {heading("Contribution Years")}
                <TextBox
                  value={contributionYears}
                  prefix="years"
                  prefixLeft={false}
                  alignLeft={false}
                  onChange={handleContributionYearsChange}
                />
                <Slider
                  value={contributionYears}
                  min={1}
                  max={100}
                  onChange={(v: number) => setContributionYears(v)}
                  className="mt-2"
                />
              </div>
              <div className="mt-8">
                {heading("Draw Down Years")}
                <TextBox
                  value={drawDownYears}
                  prefix="years"
                  prefixLeft={false}
                  alignLeft={false}
                  onChange={handleDrawDownYearsChange}
                />
                <Slider
                  value={drawDownYears}
                  min={1}
                  max={100}
                  onChange={(v: number) => setDrawDownYears(v)}
                  className="mt-2"
                />
              </div>
              <div className="mt-8">
                {heading("Spending Rate")}
                <TextBox
                  value={spendingRate}
                  onChange={handleSpendingRate}
                  prefix="%"
                  prefixLeft={false}
                  alignLeft={false}
                />
                <Slider
                  min={0}
                  max={100}
                  value={spendingRate}
                  onChange={(v: number) => setSpendingRate(v)}
                  className="mt-2"
                />
              </div>
            </div>
          </MainSideCol>
        </Container>
      </FlHdDiv>
    </Layout>
  )
}

export default Page

export const query = graphql`
  query {
    hero: file(relativePath: { regex: "/calculator.jpg/" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`
