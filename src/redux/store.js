import { configureStore } from '@reduxjs/toolkit'

import { Myslise } from './slice'
import { todoApi } from './todos/todosSlice'

export const store = configureStore({
  reducer: {
    user: Myslise.reducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),

    todoApi.middleware,
  ],
})
