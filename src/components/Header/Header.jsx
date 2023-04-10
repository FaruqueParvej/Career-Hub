import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="flex justify-between m-3">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="flex justify-between nav-item">
        <Link to="/">Home</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/jobs">Applied Jobs</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div>
        <button className="btn">Start Applying</button>
      </div>
    </nav>
  );
};

export default Header;
