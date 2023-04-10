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
      <div className="columns-1 sm:columns-2 gap-8">
        {featuredJobs.map((featuredJob) => (
          <FeaturedJob
            key={featuredJob.id}
            featuredJob={featuredJob}
          ></FeaturedJob>
        ))}
      </div>
      <button className="btn">See All Jobs</button>
    </div>
  );
};

export default FeaturedJobs;
