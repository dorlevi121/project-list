import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig: any = {
  apiKey: "AIzaSyC9L9jpErHt9-k0cJuZILB-2oC4TE-Zv8M",
  authDomain: "project-log-5c5f7.firebaseapp.com",
  databaseURL: "https://project-log-5c5f7.firebaseio.com",
  projectId: "project-log-5c5f7",
  storageBucket: "project-log-5c5f7.appspot.com",
  messagingSenderId: "721945942450",
  appId: "1:721945942450:web:057621b1d68ad286916cab",
  measurementId: "G-6S6B6M71N8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
