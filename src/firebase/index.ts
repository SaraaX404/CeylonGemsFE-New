// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAPutVIdHm8G4cZ8oxb16S0B0vhvDgTfH0",
  authDomain: "ceylongems-7f695.firebaseapp.com",
  databaseURL: "https://ceylongems-7f695-default-rtdb.firebaseio.com",
  projectId: "ceylongems-7f695",
  storageBucket: "ceylongems-7f695.appspot.com",
  messagingSenderId: "1016288286987",
  appId: "1:1016288286987:web:fe4e3fe5616518227daa0e",
  measurementId: "G-96SFKXN2P2"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

export default firebase;
