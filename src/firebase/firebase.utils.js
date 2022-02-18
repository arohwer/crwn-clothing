import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAfDbYCqrtwdatYGiSWMlyovKg8X4Trvi4",
    authDomain: "crwn-db-b4460.firebaseapp.com",
    projectId: "crwn-db-b4460",
    storageBucket: "crwn-db-b4460.appspot.com",
    messagingSenderId: "313859636249",
    appId: "1:313859636249:web:e35f7b6d974da7355d3e88",
    measurementId: "G-N0PL8BG49K"
  };

  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;