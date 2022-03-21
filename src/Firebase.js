import { initializeApp, } from 'firebase/app';
import {getAuth, } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjeW1KpyJ6NkL4BHBFioQs38wxNGJ5PmA",
  authDomain: "instagram-clone-e789d.firebaseapp.com",
  projectId: "instagram-clone-e789d",
  storageBucket: "instagram-clone-e789d.appspot.com",
  messagingSenderId: "393313873678",
  appId: "1:393313873678:web:b38295d598e47f8020315f",
  measurementId: "G-2TYQ0YVS81"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { db, auth, storage }
