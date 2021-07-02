const getTagUrl = (category: string) => {
  return `/posts/tag/${category.toLowerCase()}`
}

export default getTagUrl
