import React, { useState } from "react";
import { employeesList } from "./data";

const SearchBar = () => {
  const [unityToken, setUnityToken] = useState(false);
  const [jobs, setJobs] = useState(employeesList);
  const [searchVal, setSearchVal] = useState("");

  const handleSearchHandler = (e) => {
    e.preventDefault();
    if (searchVal === "") {
      // If searchVal is empty, reset the jobs list and unityToken
      setJobs(employeesList);
      setUnityToken(false);
      return;
    }
    const matchingTokenJobs = employeesList.filter((item) =>
    item.unityToken.toLowerCase().includes(searchVal.toLowerCase())
  );

  if (matchingTokenJobs.length > 0) {
    setJobs(matchingTokenJobs); 
    setUnityToken(true); 
  } else {
    setJobs([]); 
    setUnityToken(false); 
  }
};

  return (
    <>
   <div class="bg-gray-100 w-full h-auto border-r-4">
   <div class="container mx-auto rounded-lg p-14">
   <form>
   <h1 class="text-center text-black font-bold text-4xl">
          Unlocking Trust: Verify Your Achievements
          </h1>
          <p class="mx-auto font-normal text-sm my-6 max-w-lg text-center">
          Enter your UnityToken in the search bar for instant verification.
          </p>
  <label
    htmlFor="default-search"
    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
  >
    Search
  </label>
  <div className="relative">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>
    <input
      type="search"
      id="default-search"
      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="nDAdkGllAd"
      onChange={(e) => setSearchVal(e.target.value)}
    />
    <button
      type="submit"
      onClick={handleSearchHandler}
      className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Search
    </button>
  </div>
</form>
</div>

         {/* card starts here */}
         {jobs.map((job) => {
  if (unityToken) { // Check if unityToken is true
    return (
      <div key={job.unityToken} className="flex justify-center">
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mt-5 mb-10">
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className="text-lg font-bold">UnityToken :</span>{" "}
            {job.unityToken}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className="text-lg font-bold">Name :</span>{" "}
            {job.name}
          </p>
    
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className="text-lg font-bold">Internship Domain :</span>{" "}
            {job.internshipDomain}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className="text-lg font-bold">Internship duration :</span>{" "}
            {job.internshipDuration}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className="text-lg font-bold">verified :</span>{" "}
            {job.verified}
          </p>
         
        </div>
        
      </div>
      
    );
  } else {
    return null

  }
})}
          {/* card ends here */}
      </div>
      
    </>
  );
};

export default SearchBar;
