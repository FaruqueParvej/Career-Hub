import React, { useEffect, useState } from "react";
import JobCategory from "../jobCatagory/JobCategory";

const JobCategories = () => {
  const [jobCategories, setJobCategories] = useState([]);

  useEffect(() => {
    fetch("jobCategory.json")
      .then((res) => res.json())
      .then((data) => setJobCategories(data));
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-4xl">Job category list</h1>
        <p>there are thousands of opportunity</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between">
        {jobCategories.map((jobCategory) => (
          <JobCategory
            key={jobCategory.id}
            jobCategory={jobCategory}
          ></JobCategory>
        ))}
      </div>
    </div>
  );
};

export default JobCategories;
