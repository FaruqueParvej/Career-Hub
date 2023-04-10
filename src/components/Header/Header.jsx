import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between m-3">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="flex justify-between">
        <Link to="/">Home</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/jobs">Applied Jobs</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div>
        <button className="btn">Start Apply</button>
      </div>
    </div>
  );
};

export default Header;
