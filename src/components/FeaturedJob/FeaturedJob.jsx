import React from "react";
import { Link } from "react-router-dom";

const FeaturedJob = ({ featuredJob }) => {
  const {
    id,
    title,
    companyName,
    companyLogo,
    jobType,
    jobPlace,
    location,
    salaryRange,
    details,
  } = featuredJob;
  return (
    <div className="">
      <div className="card w-96 h-96 bg-base-100 shadow-2xl m-5">
        <div className="p-5">
          <figure>
            <img
              className="w-48 h-48 object-cover object-center rounded-xl"
              src={companyLogo}
              alt="Album"
            />
          </figure>
          <div className="card-body text-start">
            <h2 className="card-title my-2">{title}</h2>
            <p>
              <span className="border-2 p-2 me-2 mb-3 rounded"> {jobType}</span>
              <span className="border-2 p-2 me-2 mb-3 rounded">
                {" "}
                {jobPlace}
              </span>
            </p>
            <p className="my-2">
              <span>{location}</span>
              <span>{salaryRange}</span>
            </p>
            <div className="card-actions justify-start">
              <button className="bg-slate-600 rounded-lg p-2 text-white my-2">
                <Link to={`/details/${id}`}>View details</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;
