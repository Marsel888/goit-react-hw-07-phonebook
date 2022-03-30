import { createSlice } from '@reduxjs/toolkit'

export const Myslise = createSlice({
  name: 'user',
  initialState: {
    filter: '',
  },
  reducers: {
    changeinput(state, action) {
      return { ...state, filter: action.payload }
    },
  },
})

export const { changeinput } = Myslise.actions
