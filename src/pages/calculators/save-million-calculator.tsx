import { graphql, PageProps } from "gatsby"
import React, { useEffect, useState } from "react"
import MillionGraph from "../../components/dashboard/milliongraph"
import PageLayout from "../../components/layouts/pagelayout"
import MainSideCol from "../../components/mainsidecol"
import Slider from "../../components/slider"
import TextBox from "../../components/textbox"

const heading = (text: string) => {
  return <div className="font-semibold text-sm mb-1">{text}</div>
}

const Page: React.FC<PageProps> = ({ path }) => {
  const [startAge, setStartAge] = useState(30)
  const [targetAge, setTargetAge] = useState(65)
  const [startingBalance, setStartingBalance] = useState(100000)
  const [savings, setSavings] = useState(2000)
  const [arr, setARR] = useState(7)
  const [inflation, setInflation] = useState(2.9)
  const [minAge, setMinAge] = useState(-1)

  const [data1, setData1] = useState<Array<number>>([])
  const [data2, setData2] = useState<Array<number>>([])

  const createData = () => {
    const d1: Array<number> = []
    const d2: Array<number> = []
    let b1 = startingBalance
    let b2 = b1

    const years = targetAge - startAge + 1

    const inc = savings * 12
    let age = startAge

    let mAge = -1

    for (var i = 0; i < years; ++i) {
      d1.push(b1)

      if (b1 >= 1000000 && mAge === -1) {
        mAge = age
      }

      b1 = b1 * (1 + arr / 100) + inc
      d2.push(b2)
      b2 = b2 * (1 + (arr - inflation) / 100) + inc

      ++age
    }

    setData1(
      d1.map(x => {
        return x / 1000000
      })
    )
    setData2(
      d2.map(x => {
        return x / 1000000
      })
    )
    setMinAge(mAge)
  }

  // useEffect(() => {
  //   createData()
  // },
  // [])

  useEffect(() => {
    createData()
  }, [startAge, targetAge, startingBalance, savings, arr, inflation])

  const handleARRChange = (text: string) => {
    let v = parseFloat(text)

    if (!isNaN(v)) {
      setARR(v)
    }
  }

  const handleInflationChange = (text: string) => {
    let v = parseFloat(text)

    if (!isNaN(v)) {
      setInflation(v)
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

  const handleAgeChange = (text: string) => {
    let v = parseInt(text)

    if (!isNaN(v)) {
      setStartAge(v)
    }
  }

  const handleTargetAgeChange = (text: string) => {
    let v = parseInt(text)

    if (!isNaN(v)) {
      setTargetAge(v)
    }
  }

  return (
    <PageLayout title="Save A Million Calculator">
      <MainSideCol>
        <div>
          <h2>Save A Million Dollars Calculator</h2>
          <div className="mb-8">
            See out how long it will take you to save a million dollars with
            this simple calculator.
            {minAge != -1 && (
              <h3 className="text-center mt-8">
                You could be a millionaire by age {minAge}!
              </h3>
            )}
          </div>
          <MillionGraph age={startAge} data1={data1} data2={data2} />
        </div>

        <div className="ml-8 border-solid border-gray-200 p-4 bg-gray-100 rounded-md">
          <div>
            {heading("Age")}
            <TextBox
              value={startAge}
              prefix="years"
              prefixLeft={false}
              alignLeft={false}
              onChange={handleAgeChange}
            />
            <Slider
              min={1}
              max={100}
              step={1}
              value={startAge}
              onChange={(v: number) => setStartAge(v)}
              className="mt-2"
            />
          </div>
          <div className="mt-8">
            {heading("Target Age")}
            <TextBox
              value={targetAge}
              prefix="years"
              prefixLeft={false}
              alignLeft={false}
              onChange={handleAgeChange}
            />
            <Slider
              min={1}
              max={100}
              step={1}
              value={targetAge}
              onChange={(v: number) => setTargetAge(v)}
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
            {heading("Savings Per Month")}
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
            {heading("Inflation")}
            <TextBox
              value={inflation}
              prefix="%"
              prefixLeft={false}
              alignLeft={false}
              onChange={handleInflationChange}
            />
            <Slider
              value={arr}
              onChange={(v: number) => setInflation(v)}
              className="mt-2"
            />
          </div>
        </div>
      </MainSideCol>
    </PageLayout>
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
