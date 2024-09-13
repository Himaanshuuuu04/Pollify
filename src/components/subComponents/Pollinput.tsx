import { useState, forwardRef, useImperativeHandle, ForwardRefRenderFunction } from "react";

interface PollInputProps {
  pollNumber?: number;
  pollText?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

interface PollInputRef {
  getValueP: () => string;
}

const PollInput: ForwardRefRenderFunction<PollInputRef, PollInputProps> = (
  {
    pollNumber,
    pollText,
    placeholder,
    type,
    value,
    onChange,
    name,
  },
  ref
) => {
  const [inputValue, setInputValue] = useState<string>("");

  useImperativeHandle(ref, () => ({
    getValueP: () => inputValue,
  }));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <label className="block text-gray-100 text-sm">
        {pollText || `Poll-${pollNumber}`}
      </label>
      <input
        type={type || "text"}
        placeholder={placeholder || "Enter the Question"}
        value={value !== undefined ? value : inputValue}
        onChange={onChange || handleInputChange}
        name={name}
        className="w-full sm:w-64 md:min-w-96 p-2 bg-zinc-700  text-lg text-white bg-opacity-50 rounded-lg focus:border-2 focus:border-blue-500 hover:bg-opacity-100 "
        required
      />
    </div>
  );
};

export default forwardRef(PollInput);