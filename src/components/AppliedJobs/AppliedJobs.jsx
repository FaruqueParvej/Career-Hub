import React from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const storedId = JSON.parse(localStorage.getItem("appliedJobs")) || [];
  console.log(storedId);

  const appliedJobs = jobs.filter((item) => storedId.includes(item.id));
  console.log(appliedJobs);
  if (storedId.length === 0) {
    return (
      <div className="text-yellow-700 text-2xl flex justify-center items-center h-48">
        <h1>No applied jobs</h1>
      </div>
    );
  }
  return (
    <div className="md:m-10 p-10">
      {appliedJobs.map((job) => (
        <AppliedJob key={job.id} job={job}></AppliedJob>
      ))}
    </div>
  );
};

export default AppliedJobs;
