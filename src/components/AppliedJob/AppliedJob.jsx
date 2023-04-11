import React from "react";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
  const {
    id,
    companyLogo,
    title,
    companyName,
    jobPlace,
    jobType,
    location,
    salaryRange,
  } = job;
  return (
    <div className="m-10 p-10 border-2 flex items-center justify-between rounded-xl">
      <div>
        <img className="w-48 h-48" src={companyLogo} alt="" />
      </div>
      <div className="grow mx-10">
        <h1 className="text-2xl font-bold ">{title}</h1>
        <h2 className="mb-4">{companyName}</h2>
        <p>
          <span className="border-2 p-2 me-2 mb-3 rounded text-purple-800">
            {jobPlace}
          </span>
          <span className="border-2 p-2 me-2 mb-3 rounded  text-purple-800">
            {jobType}
          </span>
        </p>

        <p className="mt-4">
          <span className="me-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            {location}
          </span>
          <span>Salary: {salaryRange}</span>
        </p>
      </div>
      <div>
        <button className="bg-purple-500 rounded-lg p-2 text-white my-2">
          <Link to={`/details/${id}`}> View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default AppliedJob;
