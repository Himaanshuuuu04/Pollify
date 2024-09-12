import { Link } from 'react-router-dom';
export default function Success(){
    return(<>
        
      
            <div className="flex items-center justify-center min-h-screen  ">
              <div className="text-center z-10">
                {/* Checkmark Icon */}
                <div className="flex justify-center mb-8">
                  <div className="bg-white rounded-full p-4 animate-bounce">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
        
                {/* Success Message */}
                <div className='border-2  p-8 rounded-lg  border-zinc-700 backdrop-filter backdrop-blur-sm shadow-xl my-7 mt-[-50px] mx-8'>
                <h1 className="text-2xl md:text-4xl text-white font-semibold tracking-wide">
                  Your Poll has been submitted successfully
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
        
        </>);
}