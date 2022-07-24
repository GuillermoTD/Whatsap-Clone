import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, signOut } from "firebase/auth";





const firebaseConfig = {
  apiKey: "AIzaSyCiDxZq319x3zbxg7NbBMmIbjCgl34fq9Y",
  authDomain: "whatsapp-clone-edf8b.firebaseapp.com",
  projectId: "whatsapp-clone-edf8b",
  storageBucket: "whatsapp-clone-edf8b.appspot.com",
  messagingSenderId: "645669058049",
  appId: "1:645669058049:web:d4eb75f93ad5418198f200"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);






