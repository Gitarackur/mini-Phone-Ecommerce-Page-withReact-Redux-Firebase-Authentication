import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCZjFaN-S7bn-JmdnDaNzOJSyq3tHotqa4",
    authDomain: "react-ecommerce-site-386bc.firebaseapp.com",
    databaseURL: "https://react-ecommerce-site-386bc.firebaseio.com",
    projectId: "react-ecommerce-site-386bc",
    storageBucket: "react-ecommerce-site-386bc.appspot.com",
    messagingSenderId: "1051169554176",
    appId: "1:1051169554176:web:1975af9fe7fbb5fcdbbde5",
    measurementId: "G-WSV9S4B888"
  };

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();



  export default firebase;