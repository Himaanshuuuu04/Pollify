import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PollResults() {
  const [polls, setPolls] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch static data from polls.json
    fetch("/polls.json")
      .then((response) => response.json())
      .then((data) => setPolls(data))
      .catch((error) => console.error("Error fetching polls:", error));
  }, []);

  const handleBack = () => {
    navigate("/"); 
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen tracking-wider text-white">
      <div className="w-3/4 mx-[2rem] md:mx-[6rem] my-[3rem] md:my-[4rem] max-w-[100vw] p-10 bg-black bg-opacity-10 rounded-[2rem] border-2 border-zinc-800 backdrop-filter backdrop-blur-sm shadow-xl">
        <h1 className="text-4xl font-bold mb-8">Poll Results</h1>
        {polls.map((poll) => (
          <div key={poll.id} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{poll.question}</h2>
            <div className="flex flex-col space-y-2">
              {poll.options.map((option: string, index: number) => (
                <div
                  key={index}
                  className="p-2 bg-zinc-700 text-sm text-white bg-opacity-50 rounded-lg"
                >
                  <div className="flex justify-between">
                    <span>{option}</span>
                    <span>{poll.votes[index]} votes</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button
          onClick={handleBack}
          className="text-center border-2 border-zinc-500 p-3 py-2 text-white font-bold text-lg rounded-lg hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
        >
          Home
        </button>
      </div>
    </div>
  );
}
