import React from "react";

const JobCategory = ({ jobCategory }) => {
  return (
    <div className="sm:m-10 my-5 ">
      <div className="details text-center ">
        <img src={jobCategory.image} alt="" />
        <h2 className="font-bold">{jobCategory.name}</h2>
        <p>{jobCategory.availability}</p>
      </div>
    </div>
  );
};

export default JobCategory;
