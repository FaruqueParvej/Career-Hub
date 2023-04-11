import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="md:flex justify-center m-5 p-5 md:items-center ">
      <div className="text-center">
        <h1 className="text-2xl font-bold ">Job Platform</h1>
      </div>
      <div className="flex flex-col md:flex-row nav-item md:mx-10 md:items-center">
        <Link to="/">Home</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/AppliedJobs">Applied Jobs</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div className="flex justify-center">
        <button className="bg-slate-600 rounded-lg p-2 text-white my-2">
          Start Applying
        </button>
      </div>
    </nav>
  );
};

export default Header;
