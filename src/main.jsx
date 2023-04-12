import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Banner from "./components/Banner/Banner";
import Blog from "./components/Blog/Blog";
import Details from "./components/Details/Details";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import "./index.css";

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
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
