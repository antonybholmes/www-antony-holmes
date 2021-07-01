const getCategoryUrl = (category: string) => {
  return `/articles/tags/${category.toLowerCase().replace(" ", "-")}`
}

export default getCategoryUrl
