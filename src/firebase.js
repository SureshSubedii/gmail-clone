import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAeVHFhEksT0DvYoGCEflKr8gfwdsR7YpA",
    authDomain: "clone-f1e0a.firebaseapp.com",
    projectId: "clone-f1e0a",
    storageBucket: "clone-f1e0a.appspot.com",
    messagingSenderId: "213496678575",
    appId: "1:213496678575:web:4279590c9257002112ac5a"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth()
  const provider= new firebase.auth.GoogleAuthProvider();
  export{db,auth,provider}