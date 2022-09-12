import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const todoListApi = createApi({
    reducerPath: 'todoListApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    tagTypes: ['todo'],
    endpoints: (builder) => ({
        todoList: builder.query({
            query: () => "/todos",
            providesTags: ['todo'],
        }),
        addTodo: builder.mutation({
            query: (todo) => ({
                url: "/todos",
                method: 'POST',
                body: todo,
            }),
            invalidatesTags: ['todo'],
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `/todos/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['todo'],
        }),
    }),
})


export const { useTodoListQuery, useAddTodoMutation, useDeleteTodoMutation } = todoListApi;