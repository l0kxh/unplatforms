import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const doneListApi = createApi({
    reducerPath: 'doneListApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    tagTypes:["done"],
    endpoints: (builder) => ({
        doneList: builder.query({
            query: () => "/done",
            providesTags: ['done'],
        }),
        addDone: builder.mutation({
            query: (inprog) => ({
                url: "/done",
                method: 'POST',
                body: inprog,
            }),
            invalidatesTags: ["done"],
        }),
        deleteDone: builder.mutation({
            query: (id) => ({
                url: `/done/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["done"],
        }),
    }),
})


export const { useDoneListQuery, useAddDoneMutation, useDeleteDoneMutation } = doneListApi;