import { database } from "firebase-config";
import { set, ref } from "firebase/database";


function writeUserData (createdUser, userID) {
  set(ref(database, 'users/' +userID), {
    id : createdUser.uid,
    email : createdUser.email 
  })
  };

export default writeUserData;
