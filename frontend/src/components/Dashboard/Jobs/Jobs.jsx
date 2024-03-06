import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Programs.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "../../../hooks/useAuthContext";
import Loader from "../../Loader";
import LoaderWithText from "../../LoaderWithText";

function Jobs() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [jobs, setJobs] = useState();

  function getJobs() {
    console.log(user);
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/company/${user?.data}/jobs`)
      .then((response) => {
        console.log(response.data.data);
        setJobs(response?.data?.data);

        if (response.data.data.length > 0) {
          const firstJobId = response.data.data[0]._id;
          // console.log(firstJobId);
          // Store the jobId in localStorage
          localStorage.setItem('jobId', firstJobId);
        }
      });
  }
  function handleDelete(jobId) {
    axios
      .delete(
        `${process.env.REACT_APP_BACKEND_URL}/company/${user?.data}/job/${jobId}`,
      )
      .then((response) => {
        alert("Delted Successfully");
        getJobs();
      });
  }
  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {!jobs && <LoaderWithText text="Loading..." />}
      {jobs?.map((item, key) => (
        <div className="AppGlass2 w-96 max-h-64 rounded overflow-hidden bg-gray-100 shadow-2xl m-4 flex flex-col" key={key}>
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">{item.name}</div>
            <p className="AppGlass2 text-gray-700 text-base">{item.description}</p>
          </div>
          <div className="space-x-6 pl-6 pb-6 flex justify-left">
            <button
              onClick={() => navigate(`/joblistings/${item?._id}`)}
              className="text-[17px] inline-block bg-blue-500 hover:bg-blue-700 text-white py-[1px] px-4 rounded-full"
            >
              View Details
            </button>
            <button
              className="text-[17px] inline-block bg-red-500 hover:bg-red-700 text-white py-[1px] px-4 rounded-full"
              onClick={(e) => handleDelete(item?._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {jobs?.length === 0 && (
        <div className="w-full text-center py-8">
          <p className="text-lg">No Jobs Found. Add some to get started</p>
        </div>
      )}
    </div>
  )};

  export default Jobs;
