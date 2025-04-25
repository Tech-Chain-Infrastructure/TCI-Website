import React, { useState } from "react";
import UpdateForm from "@/components/UpdateForm";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Admin = () => {
  const [updates, setUpdates] = useState([]);

  const handleUpdateSubmit = async (update: {
    title: string;
    content: string;
    date: string;
  }) => {
    try {
      // Add document to Firestore
      const docRef = await addDoc(collection(db, "updates"), {
        title: update.title,
        content: update.content,
        date: update.date,
      });
      console.log("Update added to Firestore with ID: ", docRef.id);
      alert("Update successfully added to database!");
    } catch (error) {
      console.error("Error adding update: ", error);
      alert("Error adding update. Check console for details.");
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/"); // or show a "Not authorized" message
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  return (
    <section>
      <div className="my-[15px] pl-4">
        <UpdateForm onSubmit={handleUpdateSubmit}></UpdateForm>
      </div>
    </section>
  );
};

export default Admin;
