import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAc--w7JYWoZgRbz1L32VK1qB5bvbtDI5Y",
  authDomain: "fitnessbuddy-d0de0.firebaseapp.com",
  projectId: "fitnessbuddy-d0de0",
  storageBucket: "fitnessbuddy-d0de0.firebasestorage.app",
  messagingSenderId: "374933994877",
  appId: "1:374933994877:web:7920fd7aa854a70979e014",
  measurementId: "G-R5EWYCF5ZT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)