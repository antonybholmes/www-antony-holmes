import { PageProps } from "gatsby"
import React from "react"
import Column from "../components/column"
import Container from "../components/container"
import FlatCard from "../components/flatcard"
import Layout from "../components/layout"
import MainColumn from "../components/maincolumn"

const Page = () => {
  return (
    <Layout title="About">
      <Container className="mt-16">
        <Column>
          <MainColumn>
            <FlatCard>
              <h1 className="text-center mb-8">About</h1>
              <p>
                Hello, I am the The Polite Investor, a polite Englishman (what
                what) that has been living in the US for 10 years. Although I
                have always been interested in personal finance and investing,
                once my employer enrolled me in their 401(k) (we do not have
                those in the UK) I thought it was time to get serious and figure
                out how the financial system works and how to make sound
                investment choices. As something of a naive on such matters, I
                thought I would start this site to document my financial journey
                and offer my opinions. Perhaps you might learn something from my
                experiences and together we can all try to lead better financial
                lives.
              </p>
              <p className="pt-4">
                Income Does Not Automatically Equal Wealth Too many people
                confuse income and consumerism with wealth. The trappings of a
                middle class lifestyle can lead people to keep up with the Jones
                and spend everything they have on a high consumption lifestyle.
                I believe the key to building wealth is disiplined saving and
                investing coupled with a somewhat minimalist lifestyle
                regardless of income. You don't need stuff and you should have a
                healthy skepticism towards activities your peers engage in:
                mortgages, expensive cars, expensive vacations. You'll find a
                little bit of my personal philosophy peppered throughout this
                site.
              </p>
              <p className="pt-4">
                Welcome to my little community. I hope you feel welcome here.
                Take what you find useful and leave the rest. Pass on what
                you’ve learned to your friends. May you find the financial
                success you deserve.
              </p>
            </FlatCard>
          </MainColumn>
        </Column>
      </Container>
    </Layout>
  )
}

export default Page
