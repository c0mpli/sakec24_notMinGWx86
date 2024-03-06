import React from "react";
import Sidebar from "../components/Sidebar";
import ProfileHeader from "../components/ProfileHeader";
import Dashboard1 from "../components/Dashboard/Dashboard.js";
import 'remixicon/fonts/remixicon.css'
import ProgressBarSemi from "../components/Dashboard/ProgressBarSemi.js";
import TableDemo from "../components/Dashboard/Table.js";
function Dashboard() {
	return (
		<div className="flex h-screen bg-gray-200 AppGlass">
			<Sidebar />
			<div className="flex flex-col w-full overflow-auto">
				<ProfileHeader title={"Dashboard"} />
				{/* <div className="p-10">
					<MainDash />
				</div> */}

				<div className="grid grid-cols-2 gap-4 m-2 border border-2 border-sky-500 ">
					<div className="border border-2 border-black bg-white rounded-lg h-[300px]">
						<div>
							<TableDemo />
						</div>
					</div>
					<div className="border border-2 border-black bg-white rounded-lg flex flex-col items-center justify-center ">
						
						<span className="font-bold text-sm ">
							<i class="ri-bar-chart-fill mr-2 h-4"></i>
							Avg. Evaluation Score
						</span>
						<div className="flex items-center justify-center"><ProgressBarSemi /></div>
					</div>
					<div className="border border-2 border-black bg-white rounded-lg">3</div>
					<div className="border border-2 border-black bg-white rounded-lg">
						4	
					</div>
				</div>
				

			</div>
		</div>
	);
}

export default Dashboard;
