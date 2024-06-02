// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD169-MVbG7q8MAb1C_z1SendQrygoETv4",
  authDomain: "assignment-12-supremacy.firebaseapp.com",
  projectId: "assignment-12-supremacy",
  storageBucket: "assignment-12-supremacy.appspot.com",
  messagingSenderId: "1042364364932",
  appId: "1:1042364364932:web:66f60725197af8f626aad1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =  getAuth(app)
export default auth