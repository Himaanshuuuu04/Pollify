import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


interface Poll {
  id: string;
  question: string;
  options: string[];
}

type SelectedOptions = Record<string, string>; 

export default function Polls() {
  const navigate = useNavigate();
  const [polls, setPolls] = useState<Poll[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({});

  useEffect(() => {
    fetch("/polls.json")
      .then((response) => response.json())
      .then((data: Poll[]) => setPolls(data))
      .catch((error) => console.error("Error fetching polls:", error));
  }, []);

  const handleOptionClick = (pollId: string, option: string) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [pollId]: option,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Validation to ensure all polls have a selected option
    const allPollsAnswered = polls.every((poll) => !!selectedOptions[poll.id]);

    if (!allPollsAnswered) {
      alert("Please make sure all polls have a selected option.");
      return;
    }

    console.log("Selected options:", selectedOptions);
    navigate("/PollSubmitted");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen tracking-wider text-white">
      <div className="w-3/4 mx-[2rem] md:mx-[6rem] my-[3rem] md:my-[4rem] max-w-[100vw] p-10 bg-black bg-opacity-10 rounded-[2rem] border-2 border-zinc-800 backdrop-filter backdrop-blur-sm shadow-xl">
        <form onSubmit={handleSubmit}>
          {polls.map((poll) => (
            <div key={poll.id} className="mb-6">
              <h2 className="text-2xl font-bold mb-4">{poll.question}</h2>
              <div className="flex flex-col space-y-2">
                {poll.options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleOptionClick(poll.id, option)}
                    className={`w-full sm:w-64 md:min-w-96 p-2 bg-zinc-700 text-sm text-white bg-opacity-50 rounded-lg hover:bg-opacity-100 transition-all duration-300 ease-in-out cursor-pointer ${
                      selectedOptions[poll.id] === option
                        ? "bg-opacity-100 border-white border-2 text-white"
                        : ""
                    }`}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button
            type="submit"
            className="text-center border-2 border-zinc-500 p-3 py-2 text-white font-bold text-lg rounded-lg hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
