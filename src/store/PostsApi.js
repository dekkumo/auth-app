import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://console.firebase.google.com/project/my-app-chat-e2619/firestore/data/'}),
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => ``,
    })
  })
})

export const {useGetPostsQuery} = postsApi