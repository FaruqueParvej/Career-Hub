import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  // console.log(details);
  const { id } = useParams();

  const [jobListing, setJobListing] = useState({});
  useEffect(() => {
    const jobData = details.find((job) => job.id == id);
    // console.log(jobData);
    setJobListing(jobData);
  }, []);
  console.log(jobListing);
  return (
    <div className="flex flex-col sm:flex-row justify-center m-4 py-10">
      <div className="px-20">
        <div>
          <p>
            <strong>Job description: </strong> {jobListing.jobDescription}
          </p>
        </div>
        <div>
          <p>
            <strong>Job responsibilities:</strong>
            {jobListing.jobResponsibilities.map((jobResponsibility) => (
              <p>{jobResponsibility}</p>
            ))}
          </p>
        </div>
        <div>
          <p>
            <strong>Educational requirements: </strong>
            {jobListing.educationalRequirements}
          </p>
        </div>
        <div>
          <p>
            <strong>experiences: </strong>
          </p>
          <ul className="list-none">
            {jobListing.experiences.map((experience) => (
              <li>{experience}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div>
          <h1>Job Details</h1>
          <p>Salary</p>
          <p>Job title</p>
        </div>
        <div>
          <h1>Contact Information</h1>
          <p>phone</p>
          <p>Email</p>
        </div>
        <div>
          <button className="btn">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
