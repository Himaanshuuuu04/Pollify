import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu on hamburger clickable button
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="py-10 px-10 flex justify-between items-center relative z-50">
      {/* Logo or Brand Name */}
      <div className="text-white font-bold text-3xl md:text-4xl">Pollify</div>

      {/* Hamburger Icon (Visible on Mobile) */}
      {!isOpen && (
        <button
          className="text-white text-2xl md:hidden transition-transform duration-300 ease-in-out"
          onClick={toggleMenu}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      )}

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-9 text-white text-xl absolute right-10 top-10 transition-opacity duration-300 ease-in-out">
        <li>
          <Link to="About"
            className="hover:text-gray-400 transition-colors duration-300 ease-in-out"
          >
            About
          </Link>
        </li>
        <li>
          <Link to="PollCreation"
            className="hover:text-gray-400 transition-colors duration-300 ease-in-out"
          >
            Poll Creation
            </Link>
        </li>
        <li>
          <Link to="results"
            className="hover:text-gray-400 transition-colors duration-300 ease-in-out"
          >
            Results
            </Link>
        </li>
        <li>
          <Link to="https://linktr.ee/himaansh_uu"
            className="hover:text-gray-400 transition-colors duration-300 ease-in-out"
          >
            Links
          </Link>
        </li>
        {/* <li className="relative group">
          <Link to="#"
            className="hover:text-gray-400 transition-colors duration-300 ease-in-out"
          >
            Links
            </Link>
          <ul className="absolute left-0 hidden mt-2 space-y-2 text-white group-hover:block transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
            <li>
              <a
                href="#link1"
                className="block px-4 py-2 hover:bg-zinc-700 transition-colors duration-300 ease-in-out rounded-lg"
              >
                Link 1
              </a>
            </li>
            <li>
              <a
                href="#link2"
                className="block px-4 py-2 hover:bg-zinc-700 transition-colors duration-300 ease-in-out rounded-lg"
              >
                Link 2
              </a>
            </li>
            <li>
              <a
                href="#link3"
                className="block px-4 py-2 hover:bg-zinc-700 transition-colors duration-300 ease-in-out rounded-lg"
              >
                Link 3
              </a>
            </li>
          </ul> */}
        {/* </li> */}
      </ul>

      {/* Mobile Menu */}
      <ul
        className={`fixed inset-0 bg-zinc-950 bg-opacity-70  backdrop-filter backdrop-blur-sm text-white font-bold text-2xl flex flex-col space-y-6 items-center justify-center transition-transform duration-500 ease-in-out  ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } md:hidden`}
      >
        {/* Hamburger Icon (Inside Mobile Menu to Close it) */}
        {isOpen && (
          <button
            className="absolute top-8 right-10 text-white text-4xl transition-transform duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        )}

        {/* Menu Links */}
        <li>
          <a
            href="#About"
            className="hover:text-gray-400 transition-colors duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#PollCreation"
            className="hover:text-gray-400 transition-colors duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Poll Creation
          </a>
        </li>
        <li>
          <a
            href="#Results"
            className="hover:text-gray-400 transition-colors duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Results
          </a>
        </li>
        <li>
          <a
            href="https://linktr.ee/himaansh_uu"
            className="hover:text-gray-400 transition-colors duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Links
          </a>
        </li>
      </ul>
    </nav>
  );
}
