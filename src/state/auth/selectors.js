import { createSelector } from '@reduxjs/toolkit'

const authStateSlice = (state) => state.auth

const loading = createSelector(authStateSlice, (slice) => slice.loading)
const error = createSelector(authStateSlice, (slice) => slice.error)
const count = createSelector(authStateSlice, (slice) => slice.count)
const isAuthenticated = createSelector(
  authStateSlice,
  (slice) => slice.isAuthenticated,
)

export const authSelector = {
  loading,
  error,
  count,
  isAuthenticated,
}
