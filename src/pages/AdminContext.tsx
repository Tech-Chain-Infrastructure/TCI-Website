import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore"; // Firestore methods
import { auth, db } from "../firebase"; // Firebase config and db

// Define the shape of your context
interface AdminContextType {
  adminLoggedIn: boolean;
  user: User | null;
}

const AdminContext = createContext<AdminContextType>({
  adminLoggedIn: false,
  user: null,
});

interface AdminProviderProps {
  children: ReactNode;
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        console.log("Logged in UID:", firebaseUser.uid);
        setUser(firebaseUser);

        // Fetch admin UID from Firestore (You have a doc that holds the admin UID)
        const adminDocRef = doc(db, "admin", "uid"); // Firestore doc where admin's UID is stored
        const adminDocSnap = await getDoc(adminDocRef);

        if (adminDocSnap.exists()) {
          const adminData = adminDocSnap.data();
          const adminUID = adminData.uid; // UID stored for the admin

          // Check if the logged-in user's UID matches the admin UID
          setAdminLoggedIn(firebaseUser.uid === adminUID);
        } else {
          setAdminLoggedIn(false); // Admin UID document doesn't exist
        }
      } else {
        setUser(null);
        setAdminLoggedIn(false); // No user logged in
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AdminContext.Provider value={{ adminLoggedIn, user }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);

//for activating the button on condition. Add in adminLoggedIn && UpdateButton to dynamically render based on if admin is logged in or not.
//also import this on every page before doing this ⬆
//import { useAdmin } from "./AdminContext"; // Import the context to check admin status
