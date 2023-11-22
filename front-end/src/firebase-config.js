import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getDatabase } from 'firebase/database';
import { getStorage } from "firebase/storage";

/*
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_API_ID,
  measurementId: process.env.REACT_APP_MESUREMNT_ID
};
*/

const firebaseConfig = {
  apiKey: "AIzaSyCuT78jFNK-hzAjLqPONJd0QYMTMR0B5tQ",
  authDomain: "postureflow-hallym.firebaseapp.com",
  databaseURL: "https://postureflow-hallym-default-rtdb.firebaseio.com",
  projectId: "postureflow-hallym",
  storageBucket: "postureflow-hallym.appspot.com",
  messagingSenderId: "693140317129",
  appId: "1:693140317129:web:21945666e377c07cca7e18",
  measurementId: "G-NRWY5CTGNC"
};


const firebase  = initializeApp(firebaseConfig);
const auth  = getAuth(firebase);

// realtime data base
const database = getDatabase(firebase);

const storage = getStorage(firebase);


export {firebase, auth, database, storage};
