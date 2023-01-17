// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  addCol,
} from "firebase/firestore";
import "firebase/firestore";
import { useDispatch } from "react-redux";
import { setUser } from "./src/redux/actions";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAodEAsg_aYAk7E71S_C98PGqR0JZhfOb0",
  authDomain: "hivemanager-54f22.firebaseapp.com",
  projectId: "hivemanager-54f22",
  storageBucket: "hivemanager-54f22.appspot.com",
  messagingSenderId: "1075549868049",
  appId: "1:1075549868049:web:0a0dc0b435549aaaf5a1b0",
  measurementId: "G-QYKRSZL8WE",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Initialize Firebase

export async function SignUp(eMail, password, firstName, surName) {
  createUserWithEmailAndPassword(auth, eMail, password)
    .then((userCredential) => {
      user = userCredential.user;
      createUserInDB(firstName, surName);
      return user.uid;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}

export async function SignIn(eMail, password) {
  signInWithEmailAndPassword(auth, eMail, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}
async function createUserInDB(firstName, surName) {
  if (user !== null) {
    userDocRef = await addDoc(collection(db, "users"), {
      uid: user.uid,
      firstName: firstName,
      lastName: surName,
      email: user.email,
    });

    console.log("Document written with ID: ", userDocRef.id);
  }
}

export async function getUserData() {}

async function getUserFromDB(user, db) {
  //var docRef = db.collection("Locations").getDocs(user.uid);
  //console.log(user.then.collection(app, "user"));

  if (user !== null) {
    const querySnapshot = await getDocs(collection(db, "users"));
    try {
      querySnapshot.forEach((doc) => {
        if (doc.data().uid !== null && doc.data().uid === user.uid) {
          console.log(doc);
          console.log(doc.data());
          return doc;
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
}

export async function createLocation(data) {
  const user = auth.currentUser;
  console.log(user);
  var userDocRef;

  const querySnapshot = await getDocs(collection(db, "users"));
  try {
    querySnapshot.forEach((doc) => {
      if (doc.data().uid !== null && doc.data().uid === user.uid) {
        userDocRef = doc;
        console.log(doc);
        console.log(doc.data());
      }
    });
  } catch (e) {
    console.log(e);
  }

  if (userDocRef !== null) {
    console.log(userDocRef);

    const locRef = await addDoc(
      collection(doc(db, "users", user.uid), "locations"),
      {
        name: data.name,
        address: data.address,
        notes: data.notes,
      }
    );
  }
}
export async function createHive(uid, locid, data) {} //????
export async function createDocumentation(uid, locid, hiveid, data) {} //????

export async function removeLocation(uid) {} //????
export async function removeHive(uid, locid) {} //????
export async function removeDocumentation(uid, locid, hiveid) {} //????

export async function editLocation(uid, data) {
  const locationRef = doc(db, "locations", "BJ");
  setDoc(cityRef, { capital: true }, { merge: true });
} //????
export async function editHive(uid, locid, data) {} //????
export async function editDocumentation(uid, locid, hiveid, data) {} //????
