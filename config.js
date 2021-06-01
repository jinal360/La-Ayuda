import firebase from 'firebase';
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyBadgtXHbDOAlsZt_VvHpaB37DUd2gGNSc",
    authDomain: "la-ayuda-app.firebaseapp.com",
    projectId: "la-ayuda-app",
    storageBucket: "la-ayuda-app.appspot.com",
    messagingSenderId: "187259049892",
    appId: "1:187259049892:web:51a13c21f78519bffe9331"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
