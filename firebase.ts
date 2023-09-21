import { getApp, getApps, initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// }

const firebaseConfig = {
  apiKey: "AIzaSyB2K76bnTk9XRhnM6HaNW-6lcPe65J347Y",
  authDomain: "joshuaedo-galleria.firebaseapp.com",
  projectId: "joshuaedo-galleria",
  storageBucket: "joshuaedo-galleria.appspot.com",
  messagingSenderId: "109130225405",
  appId: "1:109130225405:web:4ecfe308b895b1a319d094",
  measurementId: "G-5S0DTL8PM1",
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const auth = getAuth(app)

export { app, auth }
