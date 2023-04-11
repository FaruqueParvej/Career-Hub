import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center text-center h-96 bg-red-300 text-2xl">
      <h1>Error: 404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>Go back to</p>
      <Link className="text-blue-500 underline decoration-2" to="/">
        Home
      </Link>
    </div>
  );
};

export default ErrorPage;
