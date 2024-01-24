import firebase from 'firebase/app';
//import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDoK98CbAUfKGxymwzIukj8Hw1vl8Pxx3s",
  authDomain: "ateliedochocolate-2023.firebaseapp.com",
  projectId: "ateliedochocolate-2023",
  storageBucket: "ateliedochocolate-2023.appspot.com",
  messagingSenderId: "94460651367",
  appId: "1:94460651367:web:2ca5fd01f1b7167548b1c2",
  measurementId: "G-EBRE7FCM2T"
};

  
  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

