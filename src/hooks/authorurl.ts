import useAuthorId from "./authorid"

const useAuthorUrl = (author: any) => {
  return `/authors/${useAuthorId(author)}`
}

export default useAuthorUrl
