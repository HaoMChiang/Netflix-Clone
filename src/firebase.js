import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPrUCZY936YVPNsuukRn2mP4AtszLGDS4",
  authDomain: "netflix-web-clone-a51cd.firebaseapp.com",
  projectId: "netflix-web-clone-a51cd",
  storageBucket: "netflix-web-clone-a51cd.appspot.com",
  messagingSenderId: "184532484110",
  appId: "1:184532484110:web:5f82c71dc324c86ac53c5f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
