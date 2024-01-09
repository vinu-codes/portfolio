import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { config as firebaseConfig } from './config'

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const fireStore = getFirestore(app)

export { auth, fireStore }
