import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userSignin: (state,action) => {
      state.currentUser = action.payload
    },
    userSignOut: (state) => {
      state.currentUser = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { userSignin, userSignOut } = counterSlice.actions

export default counterSlice.reducer