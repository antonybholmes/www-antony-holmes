import { graphql, PageProps } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React, { useState } from "react"
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

const Page: React.FC<PageProps<DataProps>> = ({ data }) => {
  const [arr, setARR] = useState(8)
  const [er, setER] = useState(20)
  const [frontLoad, setFrontLoad] = useState(5)
  const [startingBalance, setStartingBalance] = useState(10000)
  const [years, setYears] = useState(40)

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

  const handleYearsChange = (text: string) => {
    let v = parseInt(text)

    if (!isNaN(v)) {
      setYears(v)
    }
  }

  return (
    <Layout title="Retirement Fee Calculator">
      <BackgroundImage
        Tag="section"
        fluid={data.hero.childImageSharp.fluid}
        className="w-full h-60"
      />

      <Container className="mt-8">
        <div className="text-3xl font-semibold">Retirement Fee Calculator</div>
        <div className="text-lg">
          Want to understand how fees affect your retirement savings? Play
          around with our interactive tool to see just how much can you lose
          over your investment lifetime, even when the fees seem small.
        </div>

        <Column className="mt-8">
          <SideColumn className="mr-8" w="w-3/20">
            <FullDiv>
              <div>
                <div className="font-semibold text-sm mb-1">
                  Annual Rate Of Return
                </div>
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
                  className="mt-2"
                />
              </div>
              <div className="mt-6">
                <div className="font-semibold text-sm mb-1">Expense Ratio</div>
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
                  className="mt-2"
                />
              </div>
              <div className="mt-6">
                <div className="font-semibold text-sm mb-1">Front-End Load</div>
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
                  className="mt-2"
                />
              </div>
              <div className="mt-6">
                <div className="font-semibold text-sm mb-1">
                  Starting Balance
                </div>
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
                  className="mt-2"
                />
              </div>
              <div className="mt-6">
                <div className="font-semibold text-sm mb-1">Years</div>
                <TextBox
                  value={years}
                  prefix="years"
                  prefixLeft={false}
                  alignLeft={false}
                  onChange={handleYears}
                />
                <RangeSlider
                  value={years}
                  min={1}
                  max={100}
                  onChange={(v: number) => setYears(v)}
                  className="mt-2"
                />
              </div>
            </FullDiv>
          </SideColumn>
          <MainColumn w="w-17/20">
            <FlatCard className="w-full">
              <LineGraph
                arr={arr / 100}
                er={er / 2000}
                frontLoad={frontLoad / 100}
                startingBalance={startingBalance}
                years={years}
              />
            </FlatCard>
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
