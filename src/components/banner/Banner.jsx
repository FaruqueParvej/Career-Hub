import React from "react";
import JobCategories from "../JobCategories/JobCategories";
import FeaturedJobs from "../featuredJobs/FeaturedJobs";

const Banner = () => {
  return (
    <div>
      <div className=" flex flex-col m-4 p-4 md:flex-row">
        <div>
          <h1 className="text-7xl flex flex-col mb-5">
            One step <span>closer to your </span>{" "}
            <span className="text-green-700 pb-2">Dream job</span>
          </h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            error iusto tenetur eligendi laborum, praesentium obcaecati commodi
            tempora dignissimos aliquam.
          </p>
          <button className="bg-purple-600 rounded-lg p-2 text-white my-2">
            Get Started
          </button>
        </div>
        <div>
          <img
            src={
              "https://img.freepik.com/premium-photo/confident-businessman-portrait_220507-11529.jpg"
            }
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center text-center my-4">
        <JobCategories></JobCategories>
      </div>
      <div className="flex justify-center text-center my-4">
        <FeaturedJobs></FeaturedJobs>
      </div>
    </div>
  );
};

export default Banner;
