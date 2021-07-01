import getPostId from "./postid"

const getPostUrl = (post: any, baseUrl: string = "/articles") => {
  return `${baseUrl}/${getPostId(post)}`
}

export default getPostUrl
