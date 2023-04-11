import React from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const storedId = JSON.parse(localStorage.getItem("appliedJobs"));

  const appliedJobs = jobs.filter((item) => storedId.includes(item.id));
  console.log(appliedJobs);
  return (
    <div className="md:m-10 p-10">
      {appliedJobs.map((job) => (
        <AppliedJob key={job.id} job={job}></AppliedJob>
      ))}
    </div>
  );
};

export default AppliedJobs;
