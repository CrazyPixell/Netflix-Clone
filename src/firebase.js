import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAyuccfQZbkXnGfm4vurrCcRxOQJ8qB6IQ',
  authDomain: 'netflix-clone-a5aa8.firebaseapp.com',
  projectId: 'netflix-clone-a5aa8',
  storageBucket: 'netflix-clone-a5aa8.appspot.com',
  messagingSenderId: '421478349770',
  appId: '1:421478349770:web:fbc7a95b822779150d6d33',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const database = firebaseApp.firestore();
export const auth = firebase.auth();
