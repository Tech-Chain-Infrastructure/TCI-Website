import React, { useState, FormEvent } from "react";

type UpdateFormProps = {
  onSubmit: (update: {
    title: string;
    content: string;
    date: string;
    imageUrl?: string; // still optional for future use
  }) => void;
};

const UpdateForm: React.FC<UpdateFormProps> = ({ onSubmit }) => {
  const [showForm, setShowForm] = useState(false);
  const [inputValueTitle, setInputValueTitle] = useState("");
  const [inputValueDescription, setInputValueDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const trimmedTitle = inputValueTitle.trim();
    const trimmedContent = inputValueDescription.trim();

    if (!trimmedTitle || !trimmedContent) {
      alert("Please fill in both the title and description.");
      setLoading(false);
      return;
    }

    const newUpdate = {
      title: trimmedTitle,
      content: trimmedContent,
      date: new Date().toISOString(),
    };

    onSubmit(newUpdate);
    setInputValueTitle("");
    setInputValueDescription("");
    setShowForm(false);
    setLoading(false);
  };

  return (
    <div>
      {!showForm && (
        <button
          onClick={handleClick}
          className="bg-black px-4 py-2 rounded hover:bg-gray-800 transition duration-200"
        >
          Add Update
        </button>
      )}

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md mx-auto px-4"
        >
          <input
            type="text"
            value={inputValueTitle}
            onChange={(e) => setInputValueTitle(e.target.value)}
            placeholder="Title"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            value={inputValueDescription}
            onChange={(e) => setInputValueDescription(e.target.value)}
            placeholder="Description"
            required
            rows={5}
            className="w-full border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Your friend can later add an <input type="file" /> and handle that here */}
          <button
            type="submit"
            disabled={loading}
            className={`bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-200 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Posting..." : "Post Update"}
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateForm;
