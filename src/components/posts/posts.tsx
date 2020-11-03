import React from "react"
import Post from "./post"

type PostsProps = {
  posts: Array<any>
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <>
      {posts.map((post: any, index: number) => {
        return <Post post={post} key={index} />
      })}
    </>
  )
}

export default Posts
