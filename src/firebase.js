
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBw_OxQ0OQqtXXKlUbthmQP832dBmE3vpk",
  authDomain: "authenticate-9d7e3.firebaseapp.com",
  projectId: "authenticate-9d7e3",
  storageBucket: "authenticate-9d7e3.appspot.com",
  messagingSenderId: "71606427404",
  appId: "1:71606427404:web:521f5d6539f9e05fff3329",
    measurementId: "G-F3V47VWDB7",
  databaseURL:"https://authenticate-9d7e3-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
