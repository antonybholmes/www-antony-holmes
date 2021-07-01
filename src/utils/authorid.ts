import dayjs from "dayjs"

const getAuthorId = (author: any) => {
  return author.frontmatter.id
}

export default getAuthorId
