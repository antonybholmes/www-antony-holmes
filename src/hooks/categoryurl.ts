const useCategoryUrl = (category: string) => {
  return `/posts/categories/${category.toLowerCase()}`
}

export default useCategoryUrl
