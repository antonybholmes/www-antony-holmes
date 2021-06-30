const useCategoryUrl = (category: string) => {
  return `/posts/tags/${category.toLowerCase().replace(" ", "-")}`
}

export default useCategoryUrl
