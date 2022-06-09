import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfsIA85bw3nCIbLMpO9YJx55KnY3cBvwo",
  authDomain: "auth-skateflix-dev-567e4.firebaseapp.com",
  projectId: "auth-skateflix-dev-567e4",
  storageBucket: "auth-skateflix-dev-567e4.appspot.com",
  messagingSenderId: "962406135610",
  appId: "1:962406135610:web:4ae7664433e035c8a80203"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
