import React from 'react'
import { useGetPostsQuery } from '../../store/PostsApi'
import { app, db } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'

const Posts = () => {

  // const {data} = useGetPostsQuery()
  // console.log(data)

  return (
    <div className="_container">
      Posts
    </div>
  )
}

export default Posts