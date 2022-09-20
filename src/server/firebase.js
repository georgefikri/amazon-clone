import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyA0nsRyV62C9mMfPMqz1Ee2BiUVW_frIVs',
  authDomain: 'clone-1c8b4.firebaseapp.com',
  projectId: 'clone-1c8b4',
  storageBucket: 'clone-1c8b4.appspot.com',
  messagingSenderId: '508599254934',
  appId: '1:508599254934:web:3ca03baf9e7bd766ba67b7',
});

const db = !firebase.apps.length && firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { db, auth };
