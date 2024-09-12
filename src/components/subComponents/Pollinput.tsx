import { useState, forwardRef, useImperativeHandle } from "react";

const PollInput = forwardRef(({ pollNumber, pollText, placeholder, type, value, onChange, name }, ref) => {
  const [inputP, setInput] = useState("");

  useImperativeHandle(ref, () => ({
    getValueP: () => inputP, // Exposing this function to the parent
  }));

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <label className="block text-gray-100 text-sm">
        {pollText || `Poll-${pollNumber}`}
      </label>
      <input
        type={type || "text"}
        placeholder={placeholder || "Enter the Question"}
        value={value !== undefined ? value : inputP} // Use value prop for user details
        onChange={onChange || handleInputChange} // Use onChange prop for user details
        name={name}
        className="w-full sm:w-64 md:min-w-96 p-2 bg-zinc-700 text-lg text-white opacity-50 rounded-lg focus:border-2 focus:border-blue-500 hover:opacity-80"
        required
      />
    </div>
  );
});

export default PollInput;
