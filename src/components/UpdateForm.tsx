import React, { useState, FormEvent } from "react";

type UpdateFormProps = {
  onSubmit: (update: { title: string; content: string; date: string }) => void;
};

const UpdateForm: React.FC<UpdateFormProps> = ({ onSubmit }) => {
  const [showForm, setShowForm] = useState(false);
  const [inputValueTitle, setInputValueTitle] = useState("");
  const [inputValueDescription, setInputValueDescription] = useState("");

  const handleClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newUpdate = {
      title: inputValueTitle,
      content: inputValueDescription,
      date: new Date().toISOString(),
    };
    onSubmit(newUpdate);
    setInputValueTitle("");
    setInputValueDescription("");
    setShowForm(false); // optionally hide the form after submit
  };

  return (
    <div>
      {!showForm && <button onClick={handleClick}>Add Update</button>}

      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValueTitle}
            onChange={(e) => setInputValueTitle(e.target.value)}
            className="title"
            placeholder="Title"
            required
          />
          <input
            type="text"
            value={inputValueDescription}
            onChange={(e) => setInputValueDescription(e.target.value)}
            className="description"
            placeholder="Description"
            required
          />
          <button type="submit">Post Update</button>
        </form>
      )}
    </div>
  );
};

export default UpdateForm;
