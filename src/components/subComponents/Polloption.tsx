import { useState, forwardRef, useImperativeHandle } from "react";

const PollOption = forwardRef(({ option }, ref) => {
  const [inputO, setInput] = useState("");

  useImperativeHandle(ref, () => ({
    getValueO: () => inputO,  // Exposing this function to the parent
  }));

  return (
    <div>
      <label className="block text-gray-100 text-sm">
        {`Option-${option}` || "Option"}
      </label>
      <input
        type="text"
        placeholder="Enter the Option"
        value={inputO}
        onChange={(e) => setInput(e.target.value)}
        className="w-full sm:w-48 md:min-w-48 p-2 bg-zinc-700 text-lg text-white opacity-50 rounded-lg focus:border-2 focus:border-blue-500 hover:opacity-80"
        required
      />
    </div>
  );
});

export default PollOption;
