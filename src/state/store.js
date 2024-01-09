import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/reducers'

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export { store }
