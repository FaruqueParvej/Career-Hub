import React from "react";
import { Link } from "react-router-dom";

const FeaturedJob = ({ featuredJob }) => {
  const {
    id,
    title,
    companyName,
    companyLogo,
    jobType1,
    jobType2,
    location,
    salaryRange,
    details,
  } = featuredJob;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-2xl m-20 p-10 ">
        <figure>
          <img className="w-32" src={companyLogo} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            <span className="border-2 p-2 m-2 rounded"> {jobType1}</span>
            <span className="border-2 p-2 m-2 rounded"> {jobType2}</span>
          </p>
          <p>
            <span>{location}</span>
            <span>{salaryRange}</span>
          </p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">
              <Link to="/details">View details</Link>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;
