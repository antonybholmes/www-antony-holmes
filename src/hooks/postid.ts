import dayjs from "dayjs"

const usePostId = (post: any) => {
  return post.frontmatter.id
}

export default usePostId
