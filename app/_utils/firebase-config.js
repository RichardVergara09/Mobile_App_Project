// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firestore from '@react-native-firebase/firestore';

const db = firestore();
export { db };

const firebaseConfig = {
  // Replace with your Firebase config object
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
