import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const [jobPlace, setJobPlace] = useState();
  const jobs = useLoaderData();
  const storedId = JSON.parse(localStorage.getItem("appliedJobs")) || [];
  console.log(storedId);
  const appliedJobs = jobs.filter((item) => storedId.includes(item.id));
  console.log(appliedJobs);

  const handleJobPlace = (e) => {
    setJobPlace(e.target.value);
  };
  let filteredJobs = appliedJobs;

  if (jobPlace === "onsite") {
    filteredJobs = appliedJobs.filter((job) => job.jobPlace === "On-site");
  } else if (jobPlace === "remote") {
    filteredJobs = appliedJobs.filter((job) => job.jobPlace === "Remote");
  }

  console.log(filteredJobs);

  if (storedId.length === 0) {
    return (
      <div className="text-yellow-700 text-2xl flex justify-center items-center h-48">
        <h1>No applied jobs</h1>
      </div>
    );
  }
  return (
    <div>
      <div className="border border-gray-300 text-gray-800 bg-white shadow-lg">
        <select
          className="appearance-none w-full py-1 px-2 bg-white"
          name="whatever"
          id="frm-whatever"
          onChange={(e) => handleJobPlace(e)}
        >
          <option value="">Please choose&hellip;</option>
          <option value="onsite">On Site</option>
          <option value="remote">Remote</option>
        </select>
      </div>
      <div className="md:m-10 p-10">
        {filteredJobs.map((job) => (
          <AppliedJob key={job.id} job={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
