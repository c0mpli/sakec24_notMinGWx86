// Sidebar imports
import {
	UilEstate,
	UilUsersAlt,
	UilPackage,
	UilSetting,
	UilUser,
} from "@iconscout/react-unicons";

const jobId = localStorage.getItem("jobId");
// Sidebar Data
export const SidebarData = [
	{
		key: 1,
		icon: UilEstate,
		heading: "Dashboard",
		link: "/dashboard",
		roles: ["user"],
	},

	{
		key: 2,
		icon: UilUsersAlt,
		heading: "Calendar",
		link: `/calendar`,
		roles: ["user"],
	},
	{
		key: 3,
		icon: UilSetting,
		heading: "Create New Job",
		link: "/newJob",
		roles: ["user"],
	},
	{
		key: 4,
		icon: UilUsersAlt,
		heading: "Companies",
		link: `/company`,
		roles: ["tpo"],
	},
	{
		key: 5,
		icon: UilUsersAlt,
		heading: "Mock HR Interview",
		link: `/hr`,
		roles: ["user"],
	},
];
