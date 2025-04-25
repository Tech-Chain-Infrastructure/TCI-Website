import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

type Update = {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
};

const UpdatesList = () => {
  const [updates, setUpdates] = useState<Update[]>([]);

  useEffect(() => {
    // This function is already async, so we can use 'await' inside it.
    const fetchUpdates = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "updates"));
        const updatesData: Update[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Update, "id">),
        }));
        setUpdates(updatesData);
      } catch (error) {
        console.error("Error fetching updates:", error);
      }
    };

    fetchUpdates();
  }, []);

  return (
    <div className="updates-container">
      {updates.map((update) => (
        <div key={update.id} className="bg-white shadow-md rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold">{update.title}</h2>
          <p className="text-gray-700 mt-2">{update.content}</p>
          {update.imageUrl && (
            <img
              src={update.imageUrl}
              alt="Update Image"
              className="w-full max-h-64 object-cover rounded mb-2"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default UpdatesList;
