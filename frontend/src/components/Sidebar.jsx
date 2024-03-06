import React from "react";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { SidebarData } from "../Data/Data";
import Logo from "../imgs/logo.png";
import "./styles/Sidebar.css";

const Sidebar = () => {
	const navigate = useNavigate();
	const { dispatch } = useAuthContext();

	const handleLogout = () => {
		localStorage.removeItem("user");
		dispatch({ type: "LOGOUT" });
	};

	const handleNavigate = (link) => {
		navigate("../" + link);
	};
	const { user } = useAuthContext();

	return (
		<aside className="sidebar bg-white w-64 h-full fixed top-0 flex flex-col">
			<div className="logo p-4">
				<img src={Logo} alt="logo" onClick={() => navigate("/")} />
			</div>
			<nav className="menu p-4 space-y-4 pb-16">
				{user &&
					SidebarData.filter((el) => el.roles?.includes(user?.type)).map(
						(item, index) => (
							<button
								className={`flex items-center space-x-2 pl-4 ${
									window.location.pathname === item.link ? "text-blue-500" : ""
								}`}
								key={index}
								onClick={() => handleNavigate(item.link)}
							>
								<item.icon />
								<span>{item.heading}</span>
							</button>
						)
					)}
			</nav>
			<button
				className="flex items-center space-x-2 text-red-500 ml-6 mt-80"
				onClick={handleLogout}
			>
				<UilSignOutAlt />
				<span>Logout</span>
			</button>
		</aside>
	);
};

export default Sidebar;
