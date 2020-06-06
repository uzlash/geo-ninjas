import firebase from "@firebase/app";
import "@firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDNIZgFClxhdxdDfBSV8BisRr2DhKOWzLE",
  authDomain: "geo-ninjas-1d2b3.firebaseapp.com",
  databaseURL: "https://geo-ninjas-1d2b3.firebaseio.com",
  projectId: "geo-ninjas-1d2b3",
  storageBucket: "geo-ninjas-1d2b3.appspot.com",
  messagingSenderId: "594612300642",
  appId: "1:594612300642:web:a2f327c8fdc06c37d75a3b"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore.settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
