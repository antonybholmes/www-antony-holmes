import { graphql, PageProps } from "gatsby"
import React, { useEffect, useState } from "react"
import Container from "../../components/container"
import FeeGraph from "../../components/dashboard/feegraph"
import FlHdDiv from "../../components/flhddiv"
import Layout from "../../components/layout"
import MainSideCol from "../../components/mainsidecol"
import RangeSlider from "../../components/rangeslider"
import TextBox from "../../components/textbox"

type DataProps = {
  hero: any
}

const heading = (text: string) => {
  return <div className="font-semibold text-sm mb-1">{text}</div>
}

const Page: React.FC<PageProps<DataProps>> = ({ data }) => {
  const [arr, setARR] = useState(8)
  const [er, setER] = useState(1)
  const [frontLoad, setFrontLoad] = useState(5)
  const [startingBalance, setStartingBalance] = useState(10000)
  const [years, setYears] = useState(40)
  const [savings, setSavings] = useState(1000)
  const [data1, setData1] = useState<Array<number>>([])
  const [data2, setData2] = useState<Array<number>>([])

  const createData = () => {
    const d1: Array<number> = []
    const d2: Array<number> = []
    let b1 = startingBalance
    let b2 = startingBalance * (1 - frontLoad / 100)

    const inc = savings * 12

    console.log(arr, er)

    for (var i = 0; i < years; ++i) {
      d1.push(b1)
      d2.push(b2)
      b1 = b1 * (1 + arr / 100) + inc
      b2 = b2 * (1 + (arr - er) / 100) + inc
    }

    setData1(
      d1.map(x => {
        return x / 1000
      })
    )
    setData2(
      d2.map(x => {
        return x / 1000
      })
    )
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
      setER(v)
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
      {/* <BackgroundImage
        Tag="section"
        fluid={data.hero.childImageSharp.fluid}
        className="w-full h-60"
      /> */}

      <FlHdDiv>
        <Container>
          <MainSideCol>
            <div>
              <h2>Retirement Fee Calculator</h2>
              <div className="text-lg">
                Want to understand how fees affect your retirement savings? Play
                around with our interactive tool to see just how much can you
                lose over your investment lifetime, even when the fees seem
                small.
              </div>

              <h4 className="my-8 text-center">
                Fees could cost you $
                {Math.round(
                  (data1[data1.length - 1] - data2[data2.length - 1]) * 1000
                ).toLocaleString()}{" "}
                over a {years} year period!
              </h4>

              <FeeGraph data1={data1} data2={data2} />
            </div>

            <div className="ml-8 border-solid border-gray-200 p-4 bg-gray-100 rounded-md">
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
                  value={er}
                  onChange={handleERChange}
                  prefix="%"
                  prefixLeft={false}
                  alignLeft={false}
                />
                <RangeSlider
                  min={0}
                  max={100}
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
                {heading("Savings Per Month")}
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
        gatsbyImageData
      }
    }
  }
`
