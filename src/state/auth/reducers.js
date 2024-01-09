import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { auth, fireStore } from '@services/firebase'
import { signInAnonymously } from 'firebase/auth'
import { doc, getDoc, updateDoc, increment } from 'firebase/firestore'

const initialState = {
  loading: false,
  error: null,
  count: 0,
  user: null,
  isAuthenticated: false,
}

// returns either the value of count object or null
const getCount = async () => {
  try {
    // get reference to the likes document
    const likesDocumentRef = doc(fireStore, 'data', 'likes')
    // async function getDoc() to retrieve the document's data
    const docSnapshot = await getDoc(likesDocumentRef)

    if (docSnapshot.exists()) {
      const data = docSnapshot.data()
      return data ? data.count : null
    } else {
      console.log('no such document')
      return null
    }
  } catch (error) {
    console.log('error getting data', error)
    return null
  }
}

export const fetchCount = createAsyncThunk(
  'auth/fetchCount',
  async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
      const count = await getCount()
      return fulfillWithValue(count)
    } catch (error) {
      console.log('error fetchingCount', error)
      return rejectWithValue(error)
    }
  },
)

export const incrementCount = createAsyncThunk(
  'auth/incrementCount',
  async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
      const likesDocumentRef = doc(fireStore, 'data', 'likes')
      // increment count property by 1
      await updateDoc(likesDocumentRef, {
        count: increment(1),
      })
      const updatedCount = await getCount()
      return fulfillWithValue(updatedCount)
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const anonymousSignIn = createAsyncThunk(
  'auth/anoymousSignIn',
  async (payload, { rejectWithValue, fulfillWithValue }) => {
    const userCredential = await signInAnonymously(auth)

    try {
      const user = userCredential.user
      return fulfillWithValue(user)
    } catch (error) {
      console.log('error getting user', error)
      rejectWithValue(error)
    }
  },
)

// This is where I'm at right now
// user: 'ABC1234282882'

//  As soon as a user signs in using the anonymousSignIn action creator, - we will then add to
//  a document under the collection titled "users" and under the users id ie: 'ABC12334l55' we have a field called: hasLiked: true / false

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    initialiseApp: (state) => {
      state.loading = false
    },
  },
  extraReducers: (builder) => {
    builder.addCase(anonymousSignIn.pending, (state) => {
      state.loading = true
    })
    builder.addCase(anonymousSignIn.fulfilled, (state, { payload }) => {
      state.loading = false
      state.user = payload
      state.isAuthenticated = true
      state.error = null
    })
    builder.addCase(anonymousSignIn.rejected, (state, { payload }) => {
      state.loading = false
      state.user = null
      state.isAuthenticated = false
      state.error = payload
    })
    builder.addCase(fetchCount.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchCount.fulfilled, (state, { payload }) => {
      state.loading = false
      state.count = payload
      state.error = null
    })
    builder.addCase(fetchCount.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
    })
    builder.addCase(incrementCount.pending, (state, { payload }) => {
      state.loading = true
    })
    builder.addCase(incrementCount.fulfilled, (state, { payload }) => {
      state.loading = false
      state.count = payload
      state.error = null
    })
    builder.addCase(incrementCount.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
    })
  },
})

export default authSlice.reducer
export const { initialiseApp } = authSlice.actions
