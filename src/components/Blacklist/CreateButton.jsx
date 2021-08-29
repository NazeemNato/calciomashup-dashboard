import React from "react";

function CreateButton({onClick}) {
  return (
    <div className=" justify-end md:flex items-end">
      <div className="md:pt-0 pt-4">
        <button
        onClick={onClick}
          className="font-bold uppercase px-4 py-2 border mx-1 border-transparent rounded bg-blue-800 text-white hover:bg-blue-600 focus:outline-none focus:border-blue-500 focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out inline-flex items-center"
        >
          Create Blacklist
        </button>
      </div>
    </div>
  );
}

export default CreateButton;
