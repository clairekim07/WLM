import firebase from 'firebase';
require('@firebase/firestore')
const firebaseConfig = {
    apiKey: "AIzaSyAkrbwrdoQ_Z6hznM4X5jGPeBErLYI5_oY",
    authDomain: "wlm-app-6da8c.firebaseapp.com",
    projectId: "wlm-app-6da8c",
    storageBucket: "wlm-app-6da8c.appspot.com",
    messagingSenderId: "226290765214",
    appId: "1:226290765214:web:2b93941541e6854347da8f"
  };

  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }
  export default firebase.firestore();