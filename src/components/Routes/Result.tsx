import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { databases } from "../../Appwrite/AppWrite.js"; // Assuming this is your Appwrite setup

interface Poll {
  $id: string;
  question: string;
  options: string[];
  vote: number[]; // Assuming 'vote' array holds the vote count for each option
}

export default function PollResults() {
  const [polls, setPolls] = useState<Poll[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch poll results from the Appwrite database
    const fetchPollResults = async () => {
      try {
        const response = await databases.listDocuments(
          import.meta.env.VITE_DATABASE_ID, // Replace with your database ID
          import.meta.env.VITE_POLLS_COLLECTION_ID // Replace with your Polls collection ID
        );
        setPolls(response.documents as Poll[]); // Typecasting response to Poll[]
      } catch (error) {
        console.error("Error fetching poll results:", error);
      }
    };

    fetchPollResults();
  }, []);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen tracking-wider text-white">
      <div className="w-3/4 mx-[2rem] md:mx-[6rem] my-[3rem] md:my-[4rem] max-w-[100vw] p-10 bg-black bg-opacity-10 rounded-[2rem] border-2 border-zinc-800 backdrop-filter backdrop-blur-sm shadow-xl">
        <h1 className="text-4xl font-bold mb-8">Poll Results</h1>
        {polls.length === 0 ? (
          <p className="text-lg text-gray-400">No poll results available.</p>
        ) : (
          polls.map((poll) => (
            <div key={poll.$id} className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{poll.question}</h2>
              <div className="flex flex-col space-y-2">
                {poll.options.map((option, index) => (
                  <div
                    key={index}
                    className="p-2 bg-zinc-700 text-sm text-white bg-opacity-50 rounded-lg"
                  >
                    <div className="flex justify-between">
                      <span>{option}</span>
                      <span>{poll.vote[index]} votes</span> {/* Display vote count */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
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
