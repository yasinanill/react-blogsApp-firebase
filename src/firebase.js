import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCqfb0LR272nrjm894TSCEfXD3MSzxdDc0",
    authDomain: "react-blogs-app-1cff3.firebaseapp.com",
    projectId: "react-blogs-app-1cff3",
    storageBucket: "react-blogs-app-1cff3.appspot.com",
    messagingSenderId: "88571565290",
    appId: "1:88571565290:web:48aa04c0bdf114a5187393"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);
  export { auth, db,storage}