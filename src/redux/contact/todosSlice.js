import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://622a3476be12fc4538b54aa9.mockapi.io/contacts/',
  }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getfetchTodos: builder.query({
      query: () => '/contacts',
      providesTags: ['Todo'],
    }),
    createTodo: builder.mutation({
      query: (name) => ({
        url: '/contacts',
        method: 'POST',
        body: name,
      }),
      invalidatesTags: ['Todo'],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
})

export const {
  useGetfetchTodosQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
} = todoApi
