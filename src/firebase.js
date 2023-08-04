import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA9iHLZ7ozxSfIM9ozWHrxkvaFP0EZ1FU0",
    authDomain: "netwerkedin.firebaseapp.com",
    projectId: "netwerkedin",
    storageBucket: "netwerkedin.appspot.com",
    messagingSenderId: "720422806458",
    appId: "1:720422806458:web:4fa89b9b1937d15783f383"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };