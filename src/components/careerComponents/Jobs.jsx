import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";

const Jobs = () => {
  const navigate = useNavigate()
  const jobList = [
    {
      name:"Full Stack Developer",
      url:"https://docs.google.com/forms/d/e/1FAIpQLSdqCluIPM41VOr7gkyrCbfhXPIAb3Kb5GUDAne6oMhOTsEsow/viewform?usp=sf_link"
    },{
      name:"Android Developer",
      url:"https://docs.google.com/forms/d/e/1FAIpQLSfrv5UPvXT0kKZY2Rxq1I_-vNr65VpzZ4pCtMKdUYz_R-MQVw/viewform?usp=sf_link"
    },
    {
      name:"Ui/Ux Designer",
      url:"https://docs.google.com/forms/d/e/1FAIpQLSd36BsFTHBMOnGxzRFn_1k4pTprk0ZrhziVaa3b_46-ajxVCg/viewform?usp=sf_link"
    },
    {
      name:"Data Scientist",
      url:"https://docs.google.com/forms/d/e/1FAIpQLScFYiSTfKLSOJzec3jZgckqKZCNEO7XXcQG8-zoj-D-15zALA/viewform?usp=sf_link"
    },
    {
      name:"Data Analytics",
      url:"https://docs.google.com/forms/d/e/1FAIpQLSdVrBoAbiC0EJYdKP0hSCoiMFO3cBlKTDmBmc6Nxm4pOwmAhA/viewform?usp=sf_link"
    },
    {
      name:"Project Manager",
      url:"https://docs.google.com/forms/d/e/1FAIpQLSfVSKJ5IYwkUlNEVnlhVO4kOVTnC34HogATiI3wx8tkbMTOdQ/viewform?usp=sf_link"
    },
    {
      name:"Human Resource",
      url:"https://docs.google.com/forms/d/e/1FAIpQLScrXRAxb9I-9vcv1slxs96ZVcO80HYQ3sQSJ-IZNFLFoNjPHA/viewform?usp=sf_link"
    },
    {
      name:"Java Developer",
      url:"https://docs.google.com/forms/d/e/1FAIpQLSekRXtdF2NR4kIkSyRT1tRdBCzAv1Jz9B1RCPmY6o0zXVYzUA/viewform?usp=sf_link"
    },
    {
      name:"Python developer",
      url:"https://docs.google.com/forms/d/e/1FAIpQLSeXHASt-zmCNkiwVC17ciWTFQFA2iCQCTpLAWExISz0Y1Csiw/viewform?usp=sf_link"
    },
  ];
  const [jobs, setJobs] = useState(jobList);
  const [searchVal, setSearchVal] = useState("");

  const handleSearchHandler = (e) => {
	e.preventDefault();
    if (searchVal == "") {
      setJobs(jobList);
      return;
    }
    const filterBySearch = jobList.filter((item) => {
      if (item.toLowerCase().includes(searchVal.toLowerCase())) {
        return item;
      }
    });
    setJobs(filterBySearch);
  };

  return (
    <div>
      <div class=" bg-gray-100">
        <div class="container mx-auto  rounded-lg p-14">
          <form>
            <h1 class="text-center text-black font-bold  text-4xl">
              Find Perfect Job For you
            </h1>
            <p class="mx-auto font-normal text-sm my-6 max-w-lg text-center">
              Enter your desired internship domain here
            </p>
            <div class="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-2 justify-between">
              <input
                class="text-base text-gray-400 flex-grow outline-none px-2 mb-3 w-full"
                type="text"
                placeholder="Search your domain name here"
                onChange={(e) => setSearchVal(e.target.value)}
              />
              <div class="ms:flex items-center px-2 flex justify-center rounded-lg space-x-4 mx-auto ">
                <button
                  class="bg-purple-800  text-white font-bold text-base rounded-lg px-4 py-2"
                  onClick={handleSearchHandler}
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* first card start*/}
      {jobs.map((jobs) => {
        return (
          <div className="relative flex flex-col jus items-center justify-center overflow-hidden bg-gray-100 p-6 sm:py-12">
            <div className="bg-white  shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4 rounded-md">
              <div>
                <span className="text-purple-800 text-sm">Engineering</span>
                <h3 className="font-bold mt-px">{jobs.name}</h3>
                <div className="flex items-center gap-3 mt-2">
                  <span className="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">
                    Internship
                  </span>
                  <span className="text-slate-600 text-sm flex gap-1 items-center">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>{" "}
                    Remote, India
                  </span>
                </div>
              </div>
              <div>
                <Link className="bg-purple-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center" to={jobs.url} target="_blank">
                  Apply Now{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
      {/* first card end*/}
    </div>
  );
};

export default Jobs;
