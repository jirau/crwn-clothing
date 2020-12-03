import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDETewOIRASpq6Tv9IgIRRB0g2CwxCxq4I",
  authDomain: "crwn-db-95ceb.firebaseapp.com",
  projectId: "crwn-db-95ceb",
  storageBucket: "crwn-db-95ceb.appspot.com",
  messagingSenderId: "396306172732",
  appId: "1:396306172732:web:e1e45a3153e120f85f6c39",
  measurementId: "G-HJ3N0XJ04P"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;