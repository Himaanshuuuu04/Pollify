import { useState } from "react";

export default function PollInput({ pollNumber, placeholder, type }) {
  const [inputP, setInput] = useState("");

  return (
    <div>
      <label className="block text-gray-100 text-sm">
        {pollNumber || "Poll"}
      </label>
      <input
        type={type || "text"}
        placeholder={placeholder || "Enter the Question"}
        value={inputP}
        onChange={(e) => setInput(e.target.value)}
        className="md:min-w-96 p-2 bg-zinc-700 text-lg text-white opacity-50 rounded-lg focus:border-2 focus:border-blue-500 hover:opacity-80"
        required
      />
    </div>
  );
}
