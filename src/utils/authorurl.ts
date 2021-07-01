import getAuthorId from "./authorid"

const getAuthorUrl = (author: any) => {
  return `/authors/${getAuthorId(author)}`
}

export default getAuthorUrl
