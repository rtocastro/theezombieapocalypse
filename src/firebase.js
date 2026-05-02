import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVoDFwKzCYztMY_v62urGyxBtafrRaKKQ",
  authDomain: "thee-zombie-apocalypse.firebaseapp.com",
  projectId: "thee-zombie-apocalypse",
  storageBucket: "thee-zombie-apocalypse.firebasestorage.app",
  messagingSenderId: "764015404547",
  appId: "1:764015404547:web:b345d0c0591525c9aa9036"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);