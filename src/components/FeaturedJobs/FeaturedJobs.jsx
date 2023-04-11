import React, { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  useEffect(() => {
    fetch("featuredJob.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data));
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-4xl">Featured Jobs</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
          animi!
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {featuredJobs.map((featuredJob) => (
          <FeaturedJob
            key={featuredJob.id}
            featuredJob={featuredJob}
          ></FeaturedJob>
        ))}
      </div>
      <div>
        <button className="btn">See All Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
