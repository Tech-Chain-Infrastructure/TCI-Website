import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp, doc, updateDoc } from "firebase/firestore";
import { auth } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { Button } from "./ui/button";

interface PostFormProps {
  editPostData?: any;
  onPostSuccess?: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ editPostData, onPostSuccess }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [existingImageUrl, setExistingImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const isEditMode = !!editPostData;

  useEffect(() => {
    if (editPostData) {
      setTitle(editPostData.title || "");
      setDescription(editPostData.description || "");
      setExistingImageUrl(editPostData.imageUrl || "");
    }
  }, [editPostData]);

const uploadImage = async () => {
  if (!imageFile) return null;
  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("upload_preset", "unsigned_preset_dev");

  const res = await fetch(`https://api.cloudinary.com/v1_1/dynyozcjh/image/upload`, {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  return data.secure_url;
};


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      if (!auth.currentUser) {
        throw new Error("User is not authenticated");
      }

      let imageUrl = await uploadImage();

      
      if (isEditMode) {
        // Update existing post
        const docRef = doc(db, "posts", editPostData.id);
        await updateDoc(docRef, {
          title,
          description,
          imageUrl,
          updatedAt: Timestamp.now(),
        });
        setSuccessMessage("Post updated successfully!");
      } else {
        // Create new post
        await addDoc(collection(db, "posts"), {
          title,
          description,
          imageUrl,
          createdAt: Timestamp.now(),
        });
        setSuccessMessage("Post created successfully!");
      }

      if (!isEditMode) {
        setTitle("");
        setDescription("");
        setImageFile(null);
        setExistingImageUrl("");
      }

      if (onPostSuccess) {
        onPostSuccess();
      }
    } catch (error: any) {
      console.error("Error saving document: ", error);
      setErrorMessage(error.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">
        {isEditMode ? "Edit Post" : "Create New Post"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">
            Image {isEditMode && existingImageUrl && "(optional - leave empty to keep current)"}
          </label>
          
          {existingImageUrl && !imageFile && (
            <div className="mb-3">
              <img 
                src={existingImageUrl} 
                alt="Current" 
                className="w-full h-40 object-cover rounded-md"
              />
              <p className="text-sm text-gray-500 mt-1">Current image</p>
            </div>
          )}
          
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={loading}
        >
          {loading ? (isEditMode ? "Saving..." : "Posting...") : (isEditMode ? "Save Changes" : "Create Post")}
        </Button>

        {successMessage && (
          <p className="text-green-600 text-center mt-4 font-medium">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-600 text-center mt-4 font-medium">{errorMessage}</p>
        )}
      </form>
    </div>
  );
};

export default PostForm;
