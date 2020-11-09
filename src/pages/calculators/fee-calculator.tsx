import { graphql, PageProps } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React, { useEffect, useState } from "react"
import Column from "../../components/column"
import Container from "../../components/container"
import LineGraph from "../../components/dashboard/linegraph"
import FlatCard from "../../components/flatcard"
import FullDiv from "../../components/fulldiv"
import Layout from "../../components/layout"
import MainColumn from "../../components/maincolumn"
import RangeSlider from "../../components/rangeslider"
import SideColumn from "../../components/sidecolumn"
import Img from "gatsby-image"
import Row from "../../components/row"
import TextBox from "../../components/textbox"

type DataProps = {
  hero: any
}

const heading = (text: string) => {
  return <div className="font-semibold text-sm mb-1">{text}</div>
}

const Page: React.FC<PageProps<DataProps>> = ({ data }) => {
  const [arr, setARR] = useState(8)
  const [er, setER] = useState(20)
  const [frontLoad, setFrontLoad] = useState(5)
  const [startingBalance, setStartingBalance] = useState(10000)
  const [years, setYears] = useState(40)
  const [savings, setSavings] = useState(10000)
  const [data1, setData1] = useState<Array<number>>([])
  const [data2, setData2] = useState<Array<number>>([])

  const createData = () => {
    const d1: Array<number> = []
    const d2: Array<number> = []
    let b1 = startingBalance
    let b2 = startingBalance * (1 - frontLoad / 100)

    for (var i = 0; i < years; ++i) {
      d1.push(b1)
      d2.push(b2)
      b1 = b1 * (1 + arr / 100) + savings
      b2 = b2 * (1 + arr / 100) * (1 - er / 2000) + savings
    }

    setData1(d1)
    setData2(d2)
  }

  // useEffect(() => {
  //   createData()
  // },
  // [])

  useEffect(() => {
    createData()
  }, [arr, er, startingBalance, frontLoad, savings, years])

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

  const handleFrontEndChange = (text: string) => {
    let v = parseInt(text)

    if (!isNaN(v)) {
      setFrontLoad(v)
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

  const handleYearsChange = (text: string) => {
    let v = parseInt(text)

    if (!isNaN(v)) {
      setYears(v)
    }
  }

  return (
    <Layout title="Fee Calculator">
      <BackgroundImage
        Tag="section"
        fluid={data.hero.childImageSharp.fluid}
        className="w-full h-60"
      />

      <Container className="mt-8">
        <h2>Retirement Fee Calculator</h2>
        <div className="text-lg">
          Want to understand how fees affect your retirement savings? Play
          around with our interactive tool to see just how much can you lose
          over your investment lifetime, even when the fees seem small.
        </div>

        <Column className="mt-8">
          <SideColumn className="mr-8" w="w-3/20">
            <FullDiv>
              <div>
                {heading("Annual Rate Of Return")}
                <TextBox
                  value={arr}
                  prefix="%"
                  prefixLeft={false}
                  alignLeft={false}
                  onChange={handleARRChange}
                />
                <RangeSlider
                  value={arr}
                  onChange={(v: number) => setARR(v)}
                  className="mt-4"
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
                <RangeSlider
                  min={0}
                  max={2000}
                  value={er}
                  onChange={(v: number) => setER(v)}
                  className="mt-4"
                />
              </div>
              <div className="mt-8">
                {heading("Front-End Load")}
                <TextBox
                  value={frontLoad}
                  prefix="%"
                  prefixLeft={false}
                  alignLeft={false}
                  onChange={handleFrontEndChange}
                />
                <RangeSlider
                  value={frontLoad}
                  onChange={(v: number) => setFrontLoad(v)}
                  className="mt-4"
                />
              </div>
              <div className="mt-8">
                {heading("Starting Balance")}
                <TextBox
                  value={startingBalance}
                  prefix="$"
                  onChange={handleStartingBalanceChange}
                />
                <RangeSlider
                  value={startingBalance}
                  min={10000}
                  max={1000000}
                  step={10000}
                  onChange={(v: number) => setStartingBalance(v)}
                  className="mt-4"
                />
              </div>
              <div className="mt-8">
                {heading("Savings Per Year")}
                <TextBox
                  value={savings}
                  prefix="$"
                  onChange={handleSavingsChange}
                />
                <RangeSlider
                  value={savings}
                  min={0}
                  max={100000}
                  step={1000}
                  onChange={(v: number) => setSavings(v)}
                  className="mt-4"
                />
              </div>
              <div className="mt-8">
                {heading("Years")}
                <TextBox
                  value={years}
                  prefix="years"
                  prefixLeft={false}
                  alignLeft={false}
                  onChange={handleYearsChange}
                />
                <RangeSlider
                  value={years}
                  min={1}
                  max={100}
                  onChange={(v: number) => setYears(v)}
                  className="mt-4"
                />
              </div>
            </FullDiv>
          </SideColumn>
          <MainColumn w="w-17/20">
            <FullDiv>
              <FlatCard className="w-full">
                <LineGraph data1={data1} data2={data2} />
              </FlatCard>
              <div className="mt-8 text-center">
                <h4>
                  Fees could cost you $
                  {Math.round(
                    data1[data1.length - 1] - data2[data2.length - 1]
                  ).toLocaleString()}{" "}
                  over a ${years} year period.
                </h4>
              </div>
            </FullDiv>
          </MainColumn>
        </Column>
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
