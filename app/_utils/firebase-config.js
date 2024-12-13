// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firestore from '@react-native-firebase/firestore';

const db = firestore();
export { db };

const firebaseConfig = {
  // Replace with your Firebase config object
  apiKey: "AIzaSyDL2o1ytjkhQtGYZpr3LMN0nUFly48oh98",
  authDomain: "mobile-app-project-f5bc7.firebaseapp.com",
  projectId: "mobile-app-project-f5bc7",
  storageBucket: "mobile-app-project-f5bc7.firebasestorage.app",
  messagingSenderId: "742777449407",
  appId: "1:742777449407:web:9d7649594c5a82d9b04f0a"
};

const app = initializeApp(firebaseConfig);
