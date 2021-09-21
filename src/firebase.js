
import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    
 
    apiKey: "AIzaSyB0LaRvUgmtVq6NlberLCuWBf6GEMMiXC0",
    authDomain: "personal-portfolio-websi-da418.firebaseapp.com",
    projectId: "personal-portfolio-websi-da418",
    storageBucket: "personal-portfolio-websi-da418.appspot.com",
    messagingSenderId: "529444077136",
    appId: "1:529444077136:web:5e5b57e6b9cfc94097db55"

  
})

var db = firebaseApp.firestore;
export { db };

