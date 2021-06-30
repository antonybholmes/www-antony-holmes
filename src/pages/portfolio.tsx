import { PageProps } from "gatsby"
import React from "react"
import PageLayout from "../components/layouts/pagelayout"

const PortfolioPage: React.FC<PageProps> = ({ path }) => {
  return (
    <PageLayout title="Portfolio" path={path}>
      <h1 className="text-center mb-8">Portfolio</h1>
      <p>
        Since I am offering my perspective on managing your finances and
        retirement savings, you rightfully might want to know how I choose to
        invest my money to see if I put my money where my mouth is so below are
        the details of the Polite Investor's portfolio. Whilst I am sure some
        people will levy criticism at what I do, as one can with any portfolio I
        might add, I do not have a crystal ball to tell me what the optimal
        portfolio should be, but I think this is a reasonable, nay more than
        reasonable, portfolio that will likely outperform two thirds of all
        portfolios and strategies you might encounter.
      </p>
      <p className="pt-4">
        Welcome to my little community. I hope you feel welcome here. Take what
        you find useful and leave the rest. Pass on what you’ve learned to your
        friends. May you find the financial success you deserve.
      </p>
      <p className="pt-8">
        Below is a table summarizing funds. I try to maintain a 60-70% equity
        allocation using balanced funds. Many people choose a three fund or
        greater portfolio by claiming it offers better performance. I prefer the
        simplicity of balanced funds and if you backtest portfolios with more
        funds, you'll likely find that they don't really perform much better if
        at all for the added complexity.
      </p>
    </PageLayout>
  )
}

export default PortfolioPage
