import { useState, useRef, useContext, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import PollInput from "../subComponents/Pollinput";
import PollOption from "../subComponents/Polloption";
import { PollContext } from "../Context/PollContext";
import { databases } from "../../Appwrite/AppWrite";
import { ID } from "appwrite";
export default function PollCreation() {
  const navigate = useNavigate();

  // Access the context
  const pollContext = useContext(PollContext);

  if (!pollContext) {
    throw new Error("PollContext must be used within a PollProvider");
  }

  const { setPollData } = pollContext;

  const [userDetails, setUserDetails] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const [polls, setPolls] = useState([{ question: "", options: ["", ""] }]);

  const questionRefs = useRef([]);
  const optionRefs = useRef([]);

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddPoll = () => {
    setPolls([...polls, { question: "", options: ["", ""] }]);
  };

  const handleAddOption = (pollIndex) => {
    const newPolls = [...polls];
    newPolls[pollIndex].options.push("");
    setPolls(newPolls);
  };

  const validateForm = () => {
    const { name, mobile, email } = userDetails;

    if (!name || !mobile || !email) {
      alert("Please fill out all user details.");
      return false;
    }
    if (mobile.length !== 10) {
      alert("Please enter a valid phone number.");
      return false;
    }

    for (let i = 0; i < polls.length; i++) {
      const question = questionRefs.current[i]?.getValueP() || "";
      const options =
        optionRefs.current[i]?.map((ref) => ref?.getValueO() || "") || [];

      if (!question || options.some((option) => !option)) {
        alert(`Please fill out all fields for Poll-${i + 1}.`);
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        // Create a new user document
        const userDoc = await databases.createDocument(
          "6713bf65000170eae0d3", // Replace with your database ID
          "6713c03200175a8b4d8e", // Replace with your User Details collection ID
          ID.unique(), // Automatically generate a unique ID for the document
          userDetails // Pass user details object (name, email, mobile)
        );
  
        // Now map through polls and create documents in Polls collection
        const pollData = polls.map((_, pollIndex) => ({
          question: questionRefs.current[pollIndex]?.getValueP() || "",
          options:
            optionRefs.current[pollIndex]?.map((ref) => ref?.getValueO() || "") ||
            [],
        }));
  
        for (const poll of pollData) {
          await databases.createDocument(
            "6713bf65000170eae0d3", // Replace with your database ID
            "6713c1420021beabc9b3", // Replace with your Polls collection ID
            ID.unique(), // Generate a unique ID for the poll document
            {
              question: poll.question,
              user: userDoc.$id,
              options: poll.options
               // Store the user document ID for the relationship
            }
          );
        }
  
        // Redirect to success page
        navigate("/Success");
      } catch (error) {
        console.error("Error uploading poll data:", error);
        alert("An error occurred while submitting the poll data.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen tracking-wide">
      <div className="w-3/4 mx-[2rem] md:mx-[6rem] my-[3rem] md:my-[4rem] max-w-[100vw] p-10 bg-black bg-opacity-10 rounded-[2rem] border-2 border-zinc-800 backdrop-filter backdrop-blur-sm shadow-xl">
        <h1 className="text-4xl font-bold text-white mb-8">
          <span>Create a New Poll</span>
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <PollInput
            pollText="Name"
            placeholder="Himanshu Singh"
            type="text"
            value={userDetails.name}
            onChange={handleUserChange}
            name="name"
          />
          <PollInput
            pollText="Mobile No."
            placeholder="9818377959"
            type="number"
            value={userDetails.mobile}
            onChange={handleUserChange}
            name="mobile"
          />
          <PollInput
            pollText="Email"
            placeholder="Himanshu.singh@gmail.com"
            type="email"
            value={userDetails.email}
            onChange={handleUserChange}
            name="email"
          />
          {polls.map((poll, pollIndex) => (
            <div key={pollIndex}>
              <div className="w-full h-[0.1rem] bg-zinc-700 my-4"></div>
              <PollInput
                pollNumber={pollIndex + 1}
                placeholder="Enter poll question"
                ref={(el) => (questionRefs.current[pollIndex] = el)}
              />
              {poll.options.map((_, optionIndex) => (
                <PollOption
                  key={optionIndex}
                  option={` ${String.fromCharCode(65 + optionIndex)}`}
                  ref={(el) => {
                    if (!optionRefs.current[pollIndex])
                      optionRefs.current[pollIndex] = [];
                    optionRefs.current[pollIndex][optionIndex] = el;
                  }}
                />
              ))}
              <button
                type="button"
                className="text-xs md:text-sm px-4 py-2 bg-transparent text-white rounded-lg mt-2 border-2 border-zinc-700 hover:bg-white hover:text-black transition-all"
                onClick={() => handleAddOption(pollIndex)}
              >
                Add Option
              </button>
            </div>
          ))}
          <button
            type="button"
            className="text-xs md:text-lg px-4 py-2 bg-transparent text-white rounded-lg mt-4 border-2 border-zinc-700 hover:bg-white hover:text-black transition-all"
            onClick={handleAddPoll}
          >
            Add Poll Question
          </button>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-white text-black font-bold rounded-lg shadow-md hover:bg-opacity-35 transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
