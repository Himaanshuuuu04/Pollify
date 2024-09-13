import { useState, forwardRef, useImperativeHandle } from "react";

interface PollOptionProps {
  option: string;
}

const PollOption = forwardRef(({ option }: PollOptionProps, ref) => {
  const [inputO, setInput] = useState("");

  useImperativeHandle(ref, () => ({
    getValueO: () => inputO, 
  }));

  return (
    <div className="my-4">
      <label className="block text-gray-100 text-sm">
        {`Option-${option}` || "Option"}
      </label>
      <input
        type="text"
        placeholder="Enter the Option"
        value={inputO}
        onChange={(e) => setInput(e.target.value)}
        className="w-full sm:w-48 md:min-w-48 p-2 bg-zinc-700  text-lg text-white bg-opacity-50 rounded-lg focus:border-2 focus:border-blue-500 hover:bg-opacity-100 "
        required
      />
    </div>
  );
});

export default PollOption;