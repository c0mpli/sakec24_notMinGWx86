import dayjs from "dayjs";
import React, { useContext } from "react";
import logo from "./assets/logo.png";
import GlobalContext from "../../context/GlobalContext";
export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-2 flex items-center justify-between">
      {/* <img src={logo} alt="calendar" className="mr-2 w-12 h-12" /> */}
      {/* <h1 className="mr-10 text-xl text-gray-500 fond-bold">Calendar</h1> */}
      <div>
        <button
          onClick={handleReset}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-10"
        >
          Today
        </button>
        <button onClick={handlePrevMonth}>
          <span className="material-icons-outlined cursor-pointer text-blue-900 mx-2 ml-5 ">
            chevron_left
          </span>
        </button>
        <button onClick={handleNextMonth}>
          <span className="material-icons-outlined cursor-pointer text-blue-900 mx-2">
            chevron_right
          </span>
        </button>
      </div>
      <h2 className="ml-4 text-xl text-gray-500 font-bold align-right">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
}
