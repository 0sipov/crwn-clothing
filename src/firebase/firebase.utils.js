import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBsDhYpROqPfgZkRIVyEBtEtOa7WOOKuto",
  authDomain: "crwn-clothing-dbdc1.firebaseapp.com",
  projectId: "crwn-clothing-dbdc1",
  storageBucket: "crwn-clothing-dbdc1.appspot.com",
  messagingSenderId: "548354856084",
  appId: "1:548354856084:web:a95f30c10dfe674ea71081",
  measurementId: "G-4XBJZD5XMJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
