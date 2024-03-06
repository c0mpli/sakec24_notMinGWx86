import React from "react";
import Loader from "./Loader";

const LoaderWithText = ({ text }) => {
  return (
    <div className="fixed inset-0 items-center justify-center">
      <div className="text-center">
        <Loader />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default LoaderWithText;