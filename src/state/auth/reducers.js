import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { auth, fireStore } from '@services/firebase'
import { signInAnonymously } from 'firebase/auth'
import { doc, getDoc, updateDoc, increment, setDoc } from 'firebase/firestore'

const initialState = {
  loading: false,
  error: null,
  count: 0,
  uid: null,
  isAuthenticated: false,
  hasLiked: null,
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

const getUserData = async (uid) => {
  try {
    // get the doc reference {userDoc: {hasLiked: false}}
    const userDocumentRef = doc(fireStore, 'users', uid)
    const docSnapshot = await getDoc(userDocumentRef)

    if (docSnapshot.exists()) {
      const data = docSnapshot.data()
      return data ? data.hasLiked : null
    } else {
      return null
    }
  } catch (error) {
    console.log('error getting user data', error)
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
  async (uid, { rejectWithValue, fulfillWithValue, dispatch }) => {
    try {
      const likesDocumentRef = doc(fireStore, 'data', 'likes')
      // increment count property by 1
      await updateDoc(likesDocumentRef, {
        count: increment(1),
      })
      dispatch(updateUserPreferences(uid))
      const updatedCount = await getCount()
      return fulfillWithValue(updatedCount)
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)
//
export const anonymousSignIn = createAsyncThunk(
  'auth/anoymousSignIn',
  async (payload, { rejectWithValue, fulfillWithValue, dispatch }) => {
    try {
      const userCredential = await signInAnonymously(auth)
      const uid = userCredential.user.uid
      return fulfillWithValue(uid)
    } catch (error) {
      console.log('error getting user', error)
      return rejectWithValue(error)
    }
  },
)

export const addUserToFiretore = createAsyncThunk(
  'auth/addUserToFirestore',
  async (uid, { rejectWithValue, fulfillWithValue }) => {
    try {
      const userDocumentRef = doc(fireStore, 'users', uid)
      const docSnapshot = await getDoc(userDocumentRef)
      if (docSnapshot.exists()) {
        console.log('user already exists')
        return fulfillWithValue()
      } else {
        console.log('user does not exist - i will create one')
        // create a doc under this user in firestore
        await setDoc(userDocumentRef, {
          hasLiked: false,
        })
        return fulfillWithValue()
      }
    } catch (error) {
      rejectWithValue()
    }
  },
)

export const fetchPreferences = createAsyncThunk(
  'auth/fetchPreferences',
  async (uid, { fulfillWithValue, rejectWithValue }) => {
    try {
      const preference = await getUserData(uid)
      return fulfillWithValue(preference)
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const updateUserPreferences = createAsyncThunk(
  'auth/updateUserPreferences',
  async (uid, { fulfillWithValue, rejectWithValue }) => {
    try {
      const userDocumentRef = doc(fireStore, 'users', uid)
      const docSnapshot = await getDoc(userDocumentRef)

      if (docSnapshot.exists()) {
        console.log('doc exists for user')
        await updateDoc(userDocumentRef, {
          hasLiked: true,
        })
        fulfillWithValue(true)
      } else {
        console.log('error updating user doc')
      }
    } catch (error) {
      rejectWithValue(error)
    }
  },
)

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
      state.uid = payload
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
    builder.addCase(addUserToFiretore.pending, (state, { payload }) => {
      state.loading = true
    })
    builder.addCase(addUserToFiretore.fulfilled, (state, { payload }) => {
      state.loading = false
      state.error = null
    })
    builder.addCase(addUserToFiretore.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
    })
    builder.addCase(fetchPreferences.pending, (state, { payload }) => {
      state.loading = true
    })
    builder.addCase(fetchPreferences.fulfilled, (state, { payload }) => {
      state.loading = false
      state.hasLiked = payload
      state.error = null
    })
    builder.addCase(fetchPreferences.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
    })
    builder.addCase(updateUserPreferences.pending, (state, { payload }) => {
      state.loading = true
    })
    builder.addCase(updateUserPreferences.fulfilled, (state, { payload }) => {
      state.loading = false
      state.hasLiked = payload
      state.error = null
    })
    builder.addCase(updateUserPreferences.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
    })
  },
})

export default authSlice.reducer
export const { initialiseApp } = authSlice.actions
