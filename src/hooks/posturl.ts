import usePostId from "./postid"

const usePostUrl = (post: any, baseUrl: string = "/posts") => {
  return `${baseUrl}/${usePostId(post)}`
}

export default usePostUrl
