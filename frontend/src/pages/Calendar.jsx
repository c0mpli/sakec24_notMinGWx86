import React, { useState, useContext, useEffect } from "react";
import { getMonth } from "../util";
import CalendarHeader from "../components/Calendar/CalendarHeader";
import Sidebar from "../components/Sidebar";
import Sidebar2 from "../components/Calendar/Sidebar";
import Month from "../components/Calendar/Month";
import GlobalContext from "../context/GlobalContext";
import EventModal from "../components/Calendar/EventModal";
import ProfileHeader from "../components/ProfileHeader";

function Calendar() {
  return (
    <div className="flex h-screen bg-gray-200 AppGlass">
      <Sidebar />
      <div className="flex flex-col w-full overflow-auto">
        <ProfileHeader title={"Calendar"} />
        <div className="p-10">
          <CalendarComponent />
        </div>
      </div>
    </div>
  );
}

export default Calendar;

function CalendarComponent() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}

      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          {/* <Sidebar2 /> */}
          <Month month={currenMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}
