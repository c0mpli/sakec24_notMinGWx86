import React from "react";

import Sidebar from "../components/Sidebar";
import ProfileHeader from "../components/ProfileHeader";
function Resources() {
  return (
    <>
      <div className="flex h-screen bg-gray-200 AppGlass">
        <Sidebar />
        <div className="flex flex-col w-full overflow-auto">
          <ProfileHeader title={"Resources"} />
          {/* <div className="p-10">
					<MainDash />
				</div> */}
          <div className="w-[80%] justify-center">
            <h1>gubait</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resources;
