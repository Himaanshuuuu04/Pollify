import { Link } from 'react-router-dom';

export default function PollSubmitted() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center z-10">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full  animate-bounce">
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Success Message */}
          <div className="border-2 p-8 rounded-lg border-zinc-700 backdrop-filter backdrop-blur-sm shadow-xl my-7 mx-8 -mt-12">
            <h1 className="text-2xl md:text-4xl text-white font-semibold tracking-wide">
              Your poll is submitted successfully
            </h1>
          </div>

          {/* Button Group */}
          <div className="space-x-8 text-xl">
            {/* Home Button */}
            <Link to="/" className="transition-transform transform hover:scale-105">
              <button className="px-6 py-2 bg-white text-black font-bold rounded-lg shadow-md hover:bg-opacity-50 transition-all">
                Home
              </button>
            </Link>

            {/* Results Button */}
            <Link to="/results" className="transition-transform transform hover:scale-105">
              <button className="px-6 py-2 bg-white text-black font-bold rounded-lg shadow-md hover:bg-opacity-50 transition-all">
                Results
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
