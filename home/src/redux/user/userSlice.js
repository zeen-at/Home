import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  loading: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SignInStart: (state) => {
     state.loading =  true;
    },
    SignInSuccess: (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
    },
    SignInFailure: (state) => { 
        state.loading = false;
    }
  },
})

export const { SignInStart, SignInSuccess, SignInFailure } = userSlice.actions

export default userSlice.reducer