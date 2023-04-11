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
    <div className="p-4 my-4 md:m-10 md:p-10 border-2 md:flex items-center justify-between rounded-xl">
      <div>
        <img
          className="md:w-48 md:h-48 rounded-xl mx-auto"
          src={companyLogo}
          alt=""
        />
      </div>
      <div className="grow md:mx-10">
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
          <span className="me-3">{location}</span>
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
