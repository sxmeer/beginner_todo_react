import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD43zyiqlXcgAO9qBv-kROIsayk2OeKMTc",
  authDomain: "todo-app-c6cc1.firebaseapp.com",
  projectId: "todo-app-c6cc1",
  storageBucket: "todo-app-c6cc1.appspot.com",
  messagingSenderId: "139896466804",
  appId: "1:139896466804:web:a209b7fd6167c6c36a5021",
  measurementId: "G-FNSRCND2DR"
})
const db = firebaseApp.firestore();
export default db;