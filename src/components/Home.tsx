import Button from "./Social";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="tracking-wide">
      {/* Title Section */}
      <div className="text-4xl md:text-6xl text-white font-bold text-center my-10 md:my-1 mx-3">
        Shape the Future with Your Vote!
        <div className="text-xl md:text-3xl font-bold my-3 ">
          Your Voice, Your Choice!
        </div>
      </div>

      {/* Subtitle Section */}
      <div className="text-sm md:text-lg text-center font-normal md:mt-[50px] mt-[5rem] mb-[0px] text-white">
        <p>Get Started in Just a Few Clicks!</p>
      </div>

      {/* Poll Creation Box */}
      <div className="flex flex-col items-center justify-center md:my-4 mt-3">
        {/* Box Container */}
        <div className="border-[0.1rem]  h-54 md:h-52 w-[18rem] md:w-[25rem] rounded-3xl bg-black bg-opacity-25  border-zinc-500 backdrop-filter backdrop-blur-sm shadow-xl p-8 text-center  shadow-black ">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 tracking-wider">
            Create a Poll
            <br />
            Make an Impact!
          </h2>
          <div className="flex justify-center space-x-6">
          <Link to="/Polls">
            <button className="text-lg text-center tracking-wider font-bold border-2 border-white text-white py-2 px-6 w-[6.5rem] rounded-[5rem] hover:bg-white hover:text-black transition">
              Cast
            </button>
            </Link>
            <Link to="/PollCreation">
            <button className="text-lg text-center tracking-wider font-bold border-2 border-white text-white py-2 px-6 rounded-[5rem] w-[6.5rem] hover:bg-white hover:text-black transition">
              Create
            </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-white text-center mx-6 my-[5rem] md:my[3rem] mb-0" >
      <h2 className="text-[1.5rem] tracking-wider font-bold ">The ballot is stronger than the bullet.</h2>
      <p className="text-lg">Abraham Lincoln</p>
      </div>
      <Button />
    </div>
  );
}
