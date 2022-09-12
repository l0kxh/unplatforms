import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const inProgListApi = createApi({
    reducerPath: 'inProgListApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    tagTypes: ["inprogress"],
    endpoints: (builder) => ({
        inProgList: builder.query({
            query: () => "/inprogress",
            providesTags: ['inprogress'],
        }),
        addInProg: builder.mutation({
            query: (inprog) => ({
                url: "/inprogress",
                method: 'POST',
                body: inprog,
            }),
            invalidatesTags: ['inprogress'],
        }),
        deleteInProg: builder.mutation({
            query: (id) => ({
                url: `/inprogress/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['inprogress'],
        }),
    }),
})


export const { useInProgListQuery, useAddInProgMutation, useDeleteInProgMutation } = inProgListApi;