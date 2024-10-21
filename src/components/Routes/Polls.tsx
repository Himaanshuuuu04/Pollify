import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { databases } from "../../Appwrite/AppWrite.ts";

interface Poll {
  $id: string; // Poll document ID
  question: string;
  options: string[];
  vote: number[]; // Votes array, one vote count per option
}

type databases = any;
type SelectedOptions = Record<string, number>; // Record pollId to option index

export default function Polls() {
  const navigate = useNavigate();
  const [polls, setPolls] = useState<Poll[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({});

  useEffect(() => {
    // Fetch polls from Appwrite database
    const fetchPolls = async () => {
      try {
        const response = await databases.listDocuments(
          import.meta.env.VITE_DATABASE_ID, // Replace with your database ID
          import.meta.env.VITE_POLLS_COLLECTION_ID // Replace with your Polls collection ID
        );
        
        // Ensure the documents match the Poll structure
        const validPolls = response.documents.map((doc: any) => {
          if (doc.question && doc.options && doc.vote) {
            return {
              $id: doc.$id,
              question: doc.question,
              options: doc.options,
              vote: doc.vote
            } as Poll;
          } else {
            console.error("Invalid poll data:", doc);
            return null; // Skip invalid poll
          }
        }).filter(Boolean); // Remove nulls

        setPolls(validPolls as Poll[]); // Update state with valid polls
      } catch (error) {
        console.error("Error fetching polls:", error);
      }
    };

    fetchPolls();
  }, []);

  const handleOptionClick = (pollId: string, optionIndex: number) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [pollId]: optionIndex, // Store selected option index
    }));
  };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      // Validation: Ensure all polls have a selected option
      const allPollsAnswered = polls.every((poll) => selectedOptions[poll.$id] !== undefined);

      if (!allPollsAnswered) {
        alert("Please make sure all polls have a selected option.");
        return;
      }

      try {
        // Update votes in the Appwrite database
        for (const poll of polls) {
          const selectedOptionIndex = selectedOptions[poll.$id];
      
          if (selectedOptionIndex !== undefined) {
            // Increment vote for the selected option
            const updatedVotes = [...poll.vote];
            updatedVotes[selectedOptionIndex] += 1;
      
            // Update the poll document with the new votes array
            await databases.updateDocument(
              import.meta.env.VITE_DATABASE_ID, // Database ID
              import.meta.env.VITE_POLLS_COLLECTION_ID, // Collection ID
              poll.$id,               // Document ID
              { vote: updatedVotes }   // Update the votes array
            );
          } else {
            console.error(`No option selected for poll ${poll.$id}`);
          }
        }
      
        // Redirect to the success page
        navigate("/PollSubmitted");
      } catch (error) {
        if (error instanceof Error) {
          // If the error is an instance of Error, we can safely access its message
          console.error("Error submitting votes:", error.message);
        } else {
          // Handle cases where the error is not an instance of Error (if any)
          console.error("An unknown error occurred:", error);
        }
        alert("An error occurred while submitting your votes.");
      }
      
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen tracking-wider text-white">
      <div className="w-3/4 mx-[2rem] md:mx-[6rem] my-[3rem] md:my-[4rem] max-w-[100vw] p-10 bg-black bg-opacity-10 rounded-[2rem] border-2 border-zinc-800 backdrop-filter backdrop-blur-sm shadow-xl">
        <form onSubmit={handleSubmit}>
          {polls.map((poll) => (
            <div key={poll.$id} className="mb-6">
              <h2 className="text-2xl font-bold mb-4">{poll.question}</h2>
              <div className="flex flex-col space-y-2">
                {poll.options.map((option, index) => (
                  <div
                    key={`${poll.$id}-${index}`}  // Ensures unique keys
                    onClick={() => handleOptionClick(poll.$id, index)}
                    className={`w-full sm:w-64 md:min-w-96 p-2 bg-zinc-700 text-sm text-white bg-opacity-50 rounded-lg hover:bg-opacity-100 transition-all duration-300 ease-in-out cursor-pointer ${
                      selectedOptions[poll.$id] === index
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
