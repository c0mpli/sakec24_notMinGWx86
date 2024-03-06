import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ProfileHeader from "../components/ProfileHeader";

function Application() {
	const { companyID } = useParams();
	const applications = [{ name: "Jash Doshi", email: "jashdoshi99@gmail.com" }];

	return (
		<div className="flex h-screen bg-gray-200 AppGlass">
			<Sidebar />
			<div className="flex flex-col w-full overflow-auto">
				<ProfileHeader title={"Applications for JP Morgan"} />
				{/* {jobData ? (
					<div className="overflow-hidden rounded shadow-xl">
						{applications && applications.length >= 0 ? (
							<table className="AppGlass2 table-auto w-full mt-4 shadow-2xl">
								<thead className="AppGlass2">
									<tr className="AppGlass2 bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
										<th className="py-3 px-6 text-left rounded-tl-2xl">Name</th>
										<th className="py-3 px-6 text-left">Email</th>
										<th className="py-3 px-6 text-center">Resume</th>
										<th className="py-3 px-6 text-center">Show Data</th>
										<th className="py-3 px-6 text-center rounded-tr-2xl">
											Send Link
										</th>
									</tr>
								</thead>
								<tbody className="AppGlass2 text-gray-600 text-center font-light">
									{applications?.map((app, index) => {
										return (
											<tr key={index}>
												<td className="py-3 pl-6 text-left rounded-bl-2xl">
													{app.name}
												</td>
												<td>{app.email}</td>
												<td>
													<button
														className="AppGlass2 border border-solid px-3 rounded-full border-black"
														onClick={() => handleDownload(app?.resumeUrl)}
													>
														<p className="AppGlass2 text-blue-700">Download</p>
													</button>
												</td>
												<td>
													<button
														className="border border-solid px-3 rounded-full border-black"
														onClick={() => handleExpand(app?._id)}
													>
														<p className="AppGlass2 text-blue-700">Expand</p>
													</button>
												</td>
												<td className="py-3 px-6 text-center rounded-br-2xl">
													<button
														className="border border-solid px-3 rounded-full border-black"
														onClick={() => handleMeet(app?.name)}
													>
														<p className="AppGlass2 text-blue-700">Call Now</p>
													</button>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						) : (
							"No Applications for this job"
						)}
					</div>
				) : (
					<h3> No Applicant Listings Yet </h3>
				)} */}
			</div>
		</div>
	);
}

export default Application;
