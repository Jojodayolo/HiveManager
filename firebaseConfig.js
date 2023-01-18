// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  connectAuthEmulator,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  query,
  where,
  connectFirestoreEmulator,
  deleteDoc,
} from "firebase/firestore";
import "firebase/firestore";

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
connectAuthEmulator(auth, "http://localhost:9099");
const db = getFirestore(app);
connectFirestoreEmulator(db, "localhost", 8080);
// Initialize Firebase

export async function SignUp(eMail, password, firstName, surName) {
  createUserWithEmailAndPassword(auth, eMail, password)
    .then((userCredential) => {
      const user = userCredential.user;
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
  if (auth.currentUser !== null) {
    await addDoc(collection(db, "users"), {
      uid: auth.currentUser.uid,
      firstName: firstName,
      lastName: surName,
      email: auth.currentUser.email,
    });
  }
}
export async function getLocations() {
  const user = auth.currentUser;

  const q = query(collection(db, "users"), where("uid", "==", user.uid));
  var userDocID;
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    if (doc.data().uid === user.uid) {
      userDocID = doc.id;
    }
  });

  const colRef = collection(db, "users", userDocID, "locations");
  const locationsQuery = query(colRef);

  const locationsSnapshot = await getDocs(locationsQuery);
  var locArray = [];
  locationsSnapshot.forEach((loc) => {
    const tmp = loc.data();
    tmp.docID = loc.id;
    locArray.push(tmp);
  });

  return locArray;
}
export async function getHives(locDocID) {
  const user = auth.currentUser;

  const q = query(collection(db, "users"), where("uid", "==", user.uid));

  var userDocID;
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    if (doc.data().uid === user.uid) {
      userDocID = doc.id;
    }
  });

  const colRef = collection(
    db,
    "users",
    userDocID,
    "locations",
    locDocID,
    "hives"
  );
  const hivesQuery = query(colRef);

  const hivesSnapshot = await getDocs(hivesQuery);
  var hiveArray = [];
  hivesSnapshot.forEach((hive) => {
    const tmp = hive.data();
    tmp.hiveID = hive.id;
    tmp.locID = locDocID;
    hiveArray.push(tmp);
  });

  return hiveArray;
}
export async function getDocumentations(locDocID, hiveID) {
  const user = auth.currentUser;

  const q = query(collection(db, "users"), where("uid", "==", user.uid));

  var userDocID;
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    if (doc.data().uid === user.uid) {
      userDocID = doc.id;
    }
  });

  const colRef = collection(
    db,
    "users",
    userDocID,
    "locations",
    locDocID,
    "hives",
    hiveID,
    "documentations"
  );
  const docsQuery = query(colRef);

  const docsSnapshot = await getDocs(docsQuery);
  var docsArray = [];
  docsSnapshot.forEach((doc) => {
    const tmp = doc.data();
    tmp.docID = doc.id;
    docsArray.push(tmp);
  });
  return docsArray;
}
export async function createLocation(data) {
  const user = auth.currentUser;
  console.log(user);

  const q = query(collection(db, "users"), where("uid", "==", user.uid));

  console.log(q);
  var userDocID;
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    if (doc.data().uid === user.uid) {
      userDocID = doc.id;
    }
  });

  const colRef = collection(db, "users", userDocID, "locations");

  addDoc(colRef, {
    name: data.name,
    address: data.address,
    notes: data.notes,
  });
}
export async function createHive(locDocID, data) {
  const user = auth.currentUser;
  //Get all Users and filter by uid
  const q = query(collection(db, "users"), where("uid", "==", user.uid));
  var userDocID;
  //query the DocumentID
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    if (doc.data().uid === user.uid) {
      userDocID = doc.id;
      console.log(userDocID);
    }
  });

  const hivesRef = collection(
    db,
    "users",
    userDocID,
    "locations",
    locDocID,
    "hives"
  );
  const hivesQuery = query(hivesRef);
  const ref = await addDoc(hivesQuery, {
    name: data.name || "",
  });
}
export async function createDocumentation(locDocID, hiveID, data) {
  const user = auth.currentUser;
  //Get all Users and filter by uid
  const q = query(collection(db, "users"), where("uid", "==", user.uid));
  var userDocID;
  //query the DocumentID
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    if (doc.data().uid === user.uid) {
      userDocID = doc.id;
      console.log(userDocID);
    }
  });

  const docRef = collection(
    db,
    "users",
    userDocID,
    "locations",
    locDocID,
    "hives",
    hiveID,
    "documentations"
  );
  const docQuery = query(docRef);

  const ref = await addDoc(docQuery, {
    date: Date.now(),
    population: data.population,
    honeycombs: data.honeycombs,
    queen: data.queen,
    frame: data.frame,
    cells: data.cells,
    fed: data.fed,
    notes: data.notes,
    drugData: {
      name: data.drugData.name,
      amount: data.drugData.amount,
      supplier: data.drugData.supplier,
      receiptnumber: data.drugData.receiptnumber,
      colonyLocation: data.drugData.colonyLocation,
      colonyNumber: data.drugData.colonyNumber,
      vetInfo: data.drugData.vetInfo,
      waitingPeriod: data.drugData.waitingPeriod,
      treatmentDuration: data.drugData.treatmentDuration,
    },
  });
} //????

export async function removeLocation(locID) {
  const user = auth.currentUser;
  //Get all Users and filter by uid
  const q = query(collection(db, "users"), where("uid", "==", user.uid));
  var userDocID;

  const hives = getHives(locID);
  (await hives).forEach((hive) => {
    removeHive(locID, hive.hiveID);
  });

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    if (doc.data().uid === user.uid) {
      userDocID = doc.id;
    }
  });

  const docRef = doc(db, "users", userDocID, "locations", locID);

  await deleteDoc(docRef);
}
export async function removeHive(locID, hiveID) {
  const user = auth.currentUser;
  //Get all Users and filter by uid
  const q = query(collection(db, "users"), where("uid", "==", user.uid));
  var userDocID;
  //remove Docs from Hive
  const hives = getDocumentations(locID, hiveID);
  (await hives).forEach((doc) => {
    removeHive(locID, hiveID, doc.docID);
  });

  //query the DocumentID
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    if (doc.data().uid === user.uid) {
      userDocID = doc.id;
    }
  });

  const docRef = doc(
    db,
    "users",
    userDocID,
    "locations",
    locID,
    "hives",
    hiveID
  );

  await deleteDoc(docRef);
}
export async function removeDocumentation(uid, locid, hiveid) {
  const user = auth.currentUser;
  //Get all Users and filter by uid
  const q = query(collection(db, "users"), where("uid", "==", user.uid));
  var userDocID;
  //query the DocumentID
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    if (doc.data().uid === user.uid) {
      userDocID = doc.id;
    }
  });

  const docRef = doc(
    db,
    "users",
    userDocID,
    "locations",
    locID,
    "hives",
    hiveID,
    "documentations",
    docID
  );
  await deleteDoc(docRef);
}

export async function editLocation(uid, data) {
  const locationRef = doc(db, "locations", "BJ");
  setDoc(cityRef, { capital: true }, { merge: true });
}
export async function editHive(uid, locid, data) {} //????
export async function editDocumentation(uid, locid, hiveid, data) {} //????
