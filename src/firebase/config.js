import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Initialize Firebase only once
let app
let db

try {
  const firebaseConfig = {
    apiKey: "AIzaSyDZNliAfVjyADe1YhfuadLoB3ouy0JyZsM",
    authDomain: "bixbybot-405c8.firebaseapp.com",
    projectId: "bixbybot-405c8",
    storageBucket: "bixbybot-405c8.firebasestorage.app",
    messagingSenderId: "75230838593",
    appId: "1:75230838593:web:b683ecb6c601f422e92bc0",
    measurementId: "G-DKTC9EC3QW"
  }

  app = initializeApp(firebaseConfig)
  db = getFirestore(app)
} catch (error) {
  if (!/already exists/.test(error.message)) {
    console.error('Firebase initialization error', error.stack)
  }
}

export { db }