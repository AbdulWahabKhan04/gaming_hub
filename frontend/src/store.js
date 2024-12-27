import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./Redux/UserSlice.js"

export const store = configureStore({
  reducer: {user:userSlice},
})