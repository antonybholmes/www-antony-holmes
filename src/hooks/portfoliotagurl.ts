const useCategoryUrl = (category: string) => {
  return `/articles/tags/${category.toLowerCase().replace(" ", "-")}`
}

export default useCategoryUrl
