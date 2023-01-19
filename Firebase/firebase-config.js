import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4u6St87OZAMQoFPUwj6ZXO6HUzyjF9JU",
  authDomain: "user-profile-e2532.firebaseapp.com",
  projectId: "user-profile-e2532",
  storageBucket: "user-profile-e2532.appspot.com",
  messagingSenderId: "308362472188",
  appId: "1:308362472188:web:975c32275ecefd9e8d8579"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);