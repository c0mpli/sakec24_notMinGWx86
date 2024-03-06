import React, { useEffect, useState } from "react";
import ProfileImage from "../imgs/img1.png";
import { useTheme } from "../context/ThemeContext";
import { useAuthContext } from "../hooks/useAuthContext";
const SunIcon = "/sun.svg";
const MoonIcon = "/moon.svg";

function ProfileHeader({ title, subText }) {
	const { theme, toggleTheme } = useTheme();
	const { user } = useAuthContext();
	const [checked, setChecked] = useState(theme === "dark");

	useEffect(() => {
		setChecked(theme === "dark");
	}, [theme]);

	const handleThemeChange = () => {
		setChecked(!checked);
		toggleTheme();
	};

	return (
		<div className="AppGlass bg-white shadow-md rounded p-4 py-8 flex justify-between items-center">
			<div>
				<h1 className="text-4xl font-bold">{title}</h1>
				{subText && <p className="text-xl text-gray-500">{subText}</p>}
			</div>
			<button
				onClick={handleThemeChange}
				className={`relative w-16 h-8 transition duration-200 ease-linear rounded-full overflow-hidden focus:outline-none ${
					checked ? "bg-blue-300" : "bg-yellow-500"
				}`}
			>
				<img
					src={checked ? MoonIcon : SunIcon}
					className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4"
					alt="Theme icon"
				/>
			</button>
			<div className="flex items-center gap-4">
				<img
					src={ProfileImage}
					className="h-10 w-10 rounded-full"
					alt="Profile"
				/>
				<div className="AppGlass text-2xl font-medium text-gray-500">
					{user?.name}
				</div>
			</div>
		</div>
	);
}

export default ProfileHeader;
