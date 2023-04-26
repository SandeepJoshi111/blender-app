// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage';
import 'firebase/compat/firestore'



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCACtoF-WXPJ3BgFSBby1WvlYJ_jWpE7PI",
    authDomain: "blender-app-6153d.firebaseapp.com",
    projectId: "blender-app-6153d",
    storageBucket: "blender-app-6153d.appspot.com",
    messagingSenderId: "449208915744",
    appId: "1:449208915744:web:4574917f5dd21eeb0ba945"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export{projectStorage,projectFirestore ,timeStamp};