import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";
import { useAuthContext } from "../../../hooks/useAuthContext";

const Cards = () => {
  const [applicants, setApplicants] = useState("loading...");
  const [listingNum, setListingNum] = useState("loading...");
  const { user } = useAuthContext();

  function getListingNum() {
    axios
      .get(
        `https://udaan-vur0.onrender.com/company/${user?.data}/jobs`
      )
      .then((response) => {
        setListingNum(response.data.data.length)
      })
      .catch((error) => {
        setListingNum("-"); // Set state to "-" if an error occurs
        console.log(error);
      });
  }

  function getTotalJobs() {
    axios
      .get(
        `https://udaan-vur0.onrender.com/company/${user?.data}/applications`
      )
      .then((response) => {
        // console.log(response.data.count)
        setApplicants(response.data.count);
      })
      .catch((error) => {
        setApplicants("-"); // Set state to "-" if an error occurs
        console.log(error);
      });
  }

  useEffect(() => {
    getListingNum();
    getTotalJobs();

    const intervalCall = setInterval(async () => {
      getListingNum();
      getTotalJobs();
    }, 2000);

    return () => {
      // clean up
      clearInterval(intervalCall);
    };
  }, []);
  
  return (
    <div className="flex justify-between items-center">
      <div className="w-1/2 p-4 ">
        <Card title="Total Applicants" value={applicants} />
      </div>
      <div className="w-1/2 p-4">
        <Card title="Total Job Openings" value={listingNum} />
      </div>
    </div>
  );
};

export default Cards;