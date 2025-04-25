import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";  // Import storage

const firebaseConfig = {
  apiKey: "AIzaSyAXQf4zy1OaHg7N9L6UBFkhApr7eFrInpU",
  authDomain: "tci-admin-14fab.firebaseapp.com",
  projectId: "tci-admin-14fab",
  storageBucket: "tci-admin-14fab.appspot.com",
  messagingSenderId: "243277107078",
  appId: "1:243277107078:web:037979799c0c3bc0f36607",
  measurementId: "G-BFXZVKF57E"
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore and Authentication
const db = getFirestore(app);
const auth = getAuth(app);

// Initialize Firebase Storage
const storage = getStorage(app);

export { db, auth, storage };  // Export storage along with others
