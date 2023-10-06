
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCEJODBA3WRpavHUpZHC6449vs6M4TAPjo",
  authDomain: "event-management-assignment.firebaseapp.com",
  projectId: "event-management-assignment",
  storageBucket: "event-management-assignment.appspot.com",
  messagingSenderId: "932852683837",
  appId: "1:932852683837:web:cc36514e98ed27430a0654"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app