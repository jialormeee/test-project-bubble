import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCFvUicwUGAO_y6NBYCaLHLkHVy6bYKx-c",
    authDomain: "vuechartjs-150de.firebaseapp.com",
    databaseURL: "https://vuechartjs-150de.firebaseio.com",
    projectId: "vuechartjs-150de",
    storageBucket: "vuechartjs-150de.appspot.com",
    messagingSenderId: "883778560580",
    appId: "1:883778560580:web:5fd36c78f036ebb538d211",
    measurementId: "G-BY899GC2TG"
  };
  
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;