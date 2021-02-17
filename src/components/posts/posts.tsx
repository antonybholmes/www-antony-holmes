import React from "react"
import Post from "./post"

type PostsProps = {
  posts: Array<any>
  imageMap: any
}

const Posts: React.FC<PostsProps> = ({ posts, imageMap }) => {
  return (
    <>
      {posts.map((post: any, index: number) => {
        return <Post post={post} key={index} imageMap={imageMap} />
      })}
    </>
  )
}

export default Posts
