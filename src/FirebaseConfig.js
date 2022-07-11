// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  onSnapshot,
  doc,
  getDocs
} from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

const firebaseConfig = {
  apiKey: "AIzaSyCKiz_vi0OhfiLrefnZp5fVONUf2-XQfRQ",
  authDomain: "whatsap-clone-8fa8f.firebaseapp.com",
  projectId: "whatsap-clone-8fa8f",
  storageBucket: "whatsap-clone-8fa8f.appspot.com",
  messagingSenderId: "771149065881",
  appId: "1:771149065881:web:dbead7ffa6c69ee50e5208"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const DB = getFirestore();
const Auth = getAuth();
const Provider = new GoogleAuthProvider();

// const getRooms = getDocs(collection(DB,"Rooms"),async (snapshot)=>{
//   let rooms = []
//   await snapshot.docs.map(doc=>{
//     books.push({...doc.data(), id:doc.id})
//   })
//   console.log(rooms)
// })

// const roomsRef = collection(DB, "Rooms");
// const getRooms = () => {
//   getDocs(roomsRef).then((snapshot) => {
//     let rooms = [];
//     snapshot.docs.map((doc) => {
//       rooms.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(rooms);
//   });
// };
// const unsub = () => {
//   onSnapshot(collection(DB, "Rooms"), (doc) => {
//     console.log("Current data: ", doc.docs);
//   });
// };
const q = query(collection(DB, "Rooms"));
const getRooms = (callback) => onSnapshot(q, callback);

export { Auth, Provider, getRooms };
