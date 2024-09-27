import React from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const SearchInputWithButton = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="relative w-full sm:w-48 md:w-64 lg:w-80">
        {/* Icône de loupe */}
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        </div>

        {/* Champ de saisie */}
        <input
          type="text"
          placeholder="Explore"
          className="rounded-[50px] w-full bg-blue-950 text-white-900 border-gray-400 px-10 py-1 shadow-md focus:outline-none focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default SearchInputWithButton;

