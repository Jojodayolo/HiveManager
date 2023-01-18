# HiveManager
An React Native App to manage Bee Hives that uses Firebase for Authetication and Backend.

https://github.com/Jojodayolo/HiveManager

It should be noted that it could come to problems while Testing due to the Fremium concept of firebase and the max allowed number of read calls per day(50k). 

For development we used the firebase emulators(Autheticaton, Firestore, Storage). To use that the according config in the firebaseConfig.js file needs to be changed accordingly.
When using the emulator the ip's in firebase.json and firebaseConfig.js should be changed to the one of the hosting device.


For the use with the limited online service following lines in firebase.Config.js hafe to be changed:
```
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
connectAuthEmulator(auth, "http://192.168.178.55:9099");
const db = getFirestore(app);
connectFirestoreEmulator(db, "192.168.178.55", 8080);
const storage = getStorage(app);
connectStorageEmulator(storage, "192.168.178.55", 9199);
```

to

```
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//connectAuthEmulator(auth, "http://192.168.178.55:9099");
const db = getFirestore(app);
//connectFirestoreEmulator(db, "192.168.178.55", 8080);
const storage = getStorage(app);
//connectStorageEmulator(storage, "192.168.178.55", 9199);
```
