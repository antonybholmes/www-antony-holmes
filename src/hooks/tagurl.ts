const useTagUrl = (category: string) => {
  return `/articles/tag/${category.toLowerCase()}`
}

export default useTagUrl
