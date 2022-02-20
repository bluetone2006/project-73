import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDu-LlFbg6TEQCpLbqBBfCEOad_fYXRQ9E",
  authDomain: "e-ride-project-e7b16.firebaseapp.com",
  projectId: "e-ride-project-e7b16",
  storageBucket: "e-ride-project-e7b16.appspot.com",
  messagingSenderId: "933614318798",
  appId: "1:933614318798:web:60f701549048c6781c8c9f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
