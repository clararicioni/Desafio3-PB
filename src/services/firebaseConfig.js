import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup } from "firebase/auth";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBP7LLtykSLkLs2xY1LxGsLwbgfpYzI8mI",
  authDomain: "desafio3-pb.firebaseapp.com",
  projectId: "desafio3-pb",
  storageBucket: "desafio3-pb.appspot.com",
  messagingSenderId: "906643540799",
  appId: "1:906643540799:web:dd107aef0481c1b29a218a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const providerGoogle = new GoogleAuthProvider();

export const FacebookAuth = async () => {
  const provider = new FacebookAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result.user;
};

export const GoogleAuth = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result.user;
};
