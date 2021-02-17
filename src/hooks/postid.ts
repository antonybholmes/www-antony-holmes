import dayjs from "dayjs"

const usePostId = (post: any) => {
  // const name = post.frontmatter.title
  //   .toLowerCase()
  //   .replaceAll(" ", "-")
  //   .replace(/[^0-9a-z_\-]/g, "")
  // const date = dayjs(post.frontmatter.date)

  return `${post.frontmatter.id}`
}

export default usePostId
