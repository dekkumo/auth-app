import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: JSON.parse(localStorage.getItem('email')),
    token: null,
    id: null
  },
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
    },
    removeUser(state, action) {
      state.email = null
      state.token = null
      state.id = null
    }
  }
})

export const {setUser, removeUser} = userSlice.actions
export default userSlice.reducer