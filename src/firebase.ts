import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAXQf4zy1OaHg7N9L6UBFkhApr7eFrInpU",
  authDomain: "tci-admin-14fab.firebaseapp.com",
  projectId: "tci-admin-14fab",
  storageBucket: "tci-admin-14fab.firebasestorage.app",
  messagingSenderId: "243277107078",
  appId: "1:243277107078:web:037979799c0c3bc0f36607",
  measurementId: "G-BFXZVKF57E"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 
const storage = getStorage(app);

export { auth, db, storage };  
