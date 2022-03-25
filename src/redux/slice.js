import { createSlice } from '@reduxjs/toolkit'

export const Myslise = createSlice({
  name: 'user',
  initialState: {
    filter: '',
  },
  reducers: {
    Fil(state, action) {
      return { ...state, filter: action.payload }
    },
  },
})

export const { logIn, Delete, Fil } = Myslise.actions
