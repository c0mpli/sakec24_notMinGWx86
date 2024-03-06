import React from "react";
import Cards from "../Cards/Cards";
import Programs from "../Jobs/Jobs";

const MainDash = () => {
  return (
    <div className="MainDash mt-8 mx-4 text-2xl">
      <h2 className="pb-2 text-gray-700 font-semibold">Overview</h2>
      <Cards />
      <div className="maindash-heading-wrapper mt-8">
        <h2 className="text-gray-700 font-semibold">Job Listings</h2>
      </div>
      <Programs />
    </div>
  );
};

export default MainDash;