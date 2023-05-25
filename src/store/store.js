import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import { postsApi } from "./PostsApi";
import themeReducer from './slices/themeSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    [postsApi.reducerPath]: postsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware)
})