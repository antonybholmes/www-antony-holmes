const getTagUrl = (category: string) => {
  return `/articles/tag/${category.toLowerCase()}`
}

export default getTagUrl
