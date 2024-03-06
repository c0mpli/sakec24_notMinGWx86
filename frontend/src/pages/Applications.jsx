import React from "react";
import Sidebar from "../components/Sidebar";
import ProfileHeader from "../components/ProfileHeader";
import { useNavigate } from "react-router-dom";

function Applications() {
	const [isModal, setIsModal] = React.useState(false);

	function handleModal() {
		setIsModal(!isModal);
	}
	return (
		<>
			{isModal && <div></div>}
			<div className="flex h-screen bg-gray-200 AppGlass">
				<Sidebar />
				<div className="flex flex-col w-full overflow-auto">
					<ProfileHeader title={"Company Openings"} />
					<div className="text-right mx-8 p-5">
						<button
							className="bg-blue-200 rounded-xl p-3"
							onClick={handleModal}
						>
							+ Create new
						</button>
					</div>
					<ApplicationCard
						img="https://media.glassdoor.com/sql/145/j-p-morgan-squarelogo-1479932535271.png"
						name="JP Morgan"
						applications="2"
						round="OA"
						id="2"
					/>
				</div>
			</div>
		</>
	);
}

export default Applications;

function ApplicationCard({ img, name, applications, round, id }) {
	const navigate = useNavigate();
	return (
		<div className="flex mx-8 bg-white px-4 py-2 rounded-xl items-center justify-between">
			<div className="flex items-center gap-4">
				<img src={img} className="w-12 h-12 rounded-[100%]" />
				<p className="font-medium text-xl">{name}</p>
			</div>
			<div>Number of applications: {applications}</div>
			<div>Upcoming Round: {round}</div>

			<div
				className="bg-blue-500 p-2 rounded-2xl cursor-pointer"
				onClick={() => {
					navigate(`/companyapplications/${id}`);
				}}
			>
				View Applications {"->"}
			</div>
		</div>
	);
}
