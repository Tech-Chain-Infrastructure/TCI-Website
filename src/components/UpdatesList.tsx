import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

type Update = {
  id: string;
  title: string;
  content: string;
  date: string;
};

const UpdatesList = () => {
  const [updates, setUpdates] = useState<Update[]>([]);

  useEffect(() => {
    const fetchUpdates = async () => {
      const querySnapshot = await getDocs(collection(db, "updates"));
      const updatesData: Update[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Update, "id">),
      }));
      setUpdates(updatesData);
    };

    fetchUpdates();
  }, []);

  return (
    <div className="updates-container">
      {updates.map((update) => (
        <div key={update.id} className="bg-white shadow-md rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold">{update.title}</h2>
          <p className="text-gray-700 mt-2">{update.content}</p>
          <p className="text-sm text-gray-500 mt-1">{update.date}</p>
        </div>
      ))}
    </div>
  );
};

export default UpdatesList;
