import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a className="mr-5 cursor-pointer hover:text-white">Home</a>
          <a className="mr-5 cursor-pointer hover:text-white">Store</a>
          <a className="mr-5 cursor-pointer hover:text-white">Reviews</a>
          <a className= "cursor-pointer hover:text-white">Contact</a>
        </nav>
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 cursor-pointer text-xl xl:block lg:hidden">GAMING HUB</span>
        </a>
        <div className="lg:w-2/5 inline-flex justify-center items-center gap-5 lg:justify-end ml-5 lg:ml-0">
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Search
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <Link to={"/login"} className="rounded-lg bg-purple-900 text-white px-3 py-2">
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
