import usePostId from "./postid"

const usePostUrl = (post: any) => {
  return `/posts/${usePostId(post)}`
}

export default usePostUrl
