const getPortfolioTagUrl = (tag: string) => {
  return `/portfolios/tags/${tag.toLowerCase().replace(" ", "-")}`
}

export default getPortfolioTagUrl
