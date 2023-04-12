import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const details = useLoaderData();
  const navigate = useNavigate();

  const job = details.find((item) => item.id === id);
  const applyHandler = () => {
    const storedApplication =
      JSON.parse(localStorage.getItem("appliedJobs")) || [];

    const existingJob = storedApplication?.find((storedId) => storedId === id);

    if (existingJob) {
      toast.error("Already Applied");
    } else {
      toast.success("Successfully Applied");
      storedApplication.push(job.id);
      localStorage.setItem("appliedJobs", JSON.stringify(storedApplication));
    }
    navigate("/AppliedJobs");
  };

  const jobDetails = details.find((job) => job.id === id);
  const {
    jobDescription,
    jobResponsibilities,
    educationalRequirements,
    experiences,
    title,
    phone,
    salaryRange,
    address,
    email,
  } = jobDetails;
  return (
    <div className="flex flex-col sm:flex-row justify-center m-4 py-10">
      <div className="px-20">
        <div>
          <p>
            <strong>Job description: </strong> {jobDescription}
          </p>
        </div>
        <div>
          <strong>Job Responsibilities </strong> {jobResponsibilities}
        </div>
        <div>
          <p>
            <strong>Educational requirements: </strong>
            {educationalRequirements}
          </p>
        </div>
        <div>
          <p>
            <strong>experiences: </strong>
            {experiences}
          </p>
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-2xl font-bold">Job Details</h1>
          <p>{salaryRange}</p>
          <p>
            <strong>Job title: </strong>
            {title}
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Contact Information</h1>
          <p>
            <strong>phone: </strong> {phone}
          </p>
          <p>
            <strong>Email: </strong> {email}
          </p>
          <p>
            <strong>Address: </strong> {address}
          </p>
        </div>
        <div>
          <button
            onClick={applyHandler}
            className="bg-slate-600 rounded-lg p-2 text-white my-2"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
