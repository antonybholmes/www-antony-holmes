import getPostId from "./postid"

const getPostUrl = (post: any, baseUrl: string = "/posts") => {
  return `${baseUrl}/${getPostId(post)}`
}

export default getPostUrl
