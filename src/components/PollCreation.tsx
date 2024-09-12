import Pollinput from "./subComponents/Pollinput";
import Polloption from "./subComponents/Polloption";
import { useRef } from "react";
export default function PollCreation(){
    const childRef = useRef(null);
    const PollVariable=1;
    const handleClick = () => {
        if (childRef.current) {
          console.log("Value from Child:", childRef.current.getValueO());
        }}
    return(
            <div className="flex justify-center items-center min-h-screen">
              <div className="w-3/4 mx-[2rem] md:mx-[6rem] my-[3rem] md:my-[4rem] max-w-[100vw] p-10 bg-black bg-opacity-10 rounded-[2rem] border-2 border-zinc-800 backdrop-filter backdrop-blur-sm shadow-xl">
                {/* Form Title */}
                <h1 className="text-4xl font-bold text-white mb-8">
                  <span className="">Create a New Poll</span>
                </h1>
        
                {/* Input Fields */}
                <form className="space-y-6">
                {/* Name */}
                  <Pollinput pollText="Name" placeholder="Himanshu Singh" type="text"/>
        
                {/* Mobile No */}
                  <Pollinput pollText="Mobile No." placeholder="9818377959" type="number"/>
        
                {/* Email */}
                  <Pollinput pollText="Email" placeholder="Himanshu.singh@gmail.com" type="email"/>
                  <div className="w-full h-[0.1rem]  bg-zinc-700"></div>
                {/*Poll Questions*/}
                    <Pollinput pollNumber={PollVariable} />               
                    <Polloption option="A"/>
                    <Polloption option="B"/>

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-300 transition-all"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          );
        };
        
    
