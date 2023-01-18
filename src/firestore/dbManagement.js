import firestore from "@react-native-firebase/firestore";

export const getLocations = () => {
  return firestore()
    .collection("users")
    .get()
    .then((collectionSnapshot) => {
      console.log("Total users: ", collectionSnapshot.size);
      collectionSnapshot.forEach((documentSnapshot) => {
        console.log("User ID: ", documentSnapshot.id, documentSnapshot.data());
      });
    });
};
