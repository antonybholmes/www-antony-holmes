import usePostId from "./postid"

const usePostUrl = (post: any) => {
  return `/articles/${usePostId(post)}`
}

export default usePostUrl
