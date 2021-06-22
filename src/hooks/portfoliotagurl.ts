const usePortfolioTagUrl = (tag: string) => {
  return `/portfolios/tags/${tag.toLowerCase().replace(" ", "-")}`
}

export default usePortfolioTagUrl
