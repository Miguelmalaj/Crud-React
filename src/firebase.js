import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAGb33AVzbvldUSlpFR9emRtuuFP8D9x08",
    authDomain: "crud-prueba-tuto-14.firebaseapp.com",
    projectId: "crud-prueba-tuto-14",
    storageBucket: "crud-prueba-tuto-14.appspot.com",
    messagingSenderId: "303967213392",
    appId: "1:303967213392:web:d09dae2068e8e71ec17e55"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);