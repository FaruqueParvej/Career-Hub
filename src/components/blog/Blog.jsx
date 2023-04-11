import React from "react";

const Blog = () => {
  return (
    <div>
      <section>
        <h2 className="text-center text-4xl underline decoration-2">
          Questions & Answers{" "}
        </h2>
        <div className="m-4 p-4 bg-indigo-200 rounded-xl">
          <h3 className="font-bold text-xl">
            1. When should you use context API?
          </h3>
          <p>
            You should use Context API when you have data that needs to be
            accessed by multiple components at different levels in your
            component tree. Instead of passing data through props at each level,
            you can simply provide the data to a parent component using Context
            API and have child components consume it using the useContext hook.
          </p>
        </div>
        <div className="m-4 p-4 bg-indigo-200 rounded-xl">
          <h3 className="font-bold text-xl">2. What is a custom hook?</h3>
          <p>
            A Custom Hook is a reusable piece of logic that can be shared across
            multiple components in your application. Custom Hooks are created
            using the use prefix and can be used to encapsulate any kind of
            logic, such as fetching data from an API, handling form validation,
            or managing component state.
          </p>
        </div>
        <div className="m-4 p-4 bg-indigo-200 rounded-xl">
          <h3 className="font-bold text-xl">
            3. What is useRef? How does it work?
          </h3>
          <p>
            useRef is a hook that returns a mutable ref object. useRef can be
            used to store a reference to a DOM element or a value that needs to
            persist across re-renders of a component. The ref object returned by
            useRef can be passed to a component's ref attribute to access the
            underlying DOM node or can be used to store any other mutable value.
          </p>
        </div>
        <div className="m-4 p-4 bg-indigo-200 rounded-xl">
          <h3 className="font-bold text-xl">
            4. What is useMemo? How does it work?
          </h3>
          <p>
            useMemo is a hook that memoizes a function's result and only
            recomputes the result when its dependencies change. useMemo is
            useful for optimizing expensive computations or preventing
            unnecessary re-renders of a component. To use useMemo, simply pass
            in a function and an array of dependencies. The function will only
            be re-executed when one of the dependencies changes.
          </p>
        </div>
      </section>
    </div>
  );
};
export default Blog;
