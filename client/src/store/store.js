import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { todoListApi } from '../services/todoservice'
import { inProgListApi } from '../services/InProgressService'
import { doneListApi } from '../services/DoneService'

export const store = configureStore({
  reducer: {
    [todoListApi.reducerPath]: todoListApi.reducer,
    [inProgListApi.reducerPath]: inProgListApi.reducer,
    [doneListApi.reducerPath]: doneListApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(inProgListApi.middleware, todoListApi.middleware, doneListApi.middleware),
})

setupListeners(store.dispatch)