import React from "react";

function Card({ data, onClick }) {
  return (
    <div className="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-800 text-base font-semibold">
            {data.team1.name}
          </p>
          <p className="text-gray-800 text-base font-semibold">
            {data.team2.name}
          </p>
        </div>
        <div
          onClick={onClick}
          className="text-red-700 transition duration-500 transform-gpu hover:scale-110 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Card;
