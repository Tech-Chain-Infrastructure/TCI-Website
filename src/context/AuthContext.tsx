import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { User, onAuthStateChanged } from "firebase/auth";


interface UserContextType {
  user: User | null;
  loading: boolean;
}
// Create context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser || null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {!loading && children}
    </UserContext.Provider>
  );
};

// Custom hook
export const useUser = () => useContext(UserContext);
