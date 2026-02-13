import { useState } from "react";

export default function TaskForm({ onCreate }: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = (e: any) => {
    e.preventDefault();
    onCreate({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={submit} className="mb-4">
      <input
        placeholder="Title"
        className="border p-2 mr-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Description"
        className="border p-2 mr-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
}
