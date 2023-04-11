import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blog from "./components/Blog/Blog";
import Banner from "./components/Banner/Banner";
import Details from "./components/Details/Details";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "details/:id",
        element: <Details>,</Details>,
        loader: ({ params }) => fetch(`/featuredJob.json`),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "AppliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch(`/featuredJob.json`),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
