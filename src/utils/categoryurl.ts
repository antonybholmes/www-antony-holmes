const getCategoryUrl = (category: string) => {
  return `/posts/tags/${category.toLowerCase().replace(" ", "-")}`
}

export default getCategoryUrl
