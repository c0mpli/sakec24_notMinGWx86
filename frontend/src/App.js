import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useAuthContext } from "./hooks/useAuthContext";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Calendar from "./pages/Calendar";
import Resources from "./pages/Resources";
import Applications from "./pages/Applications";
import Application from "./pages/Application";
import HrBot from "./pages/HrBot";

function App() {
	const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")));
	const toggleTheme = () => {
		const temp = theme === "light" ? "dark" : "light";
		setTheme(theme === "light" ? "dark" : "light");
		localStorage.setItem("theme", JSON.stringify(temp));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div className="App" id={theme}>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/calendar" element={<Calendar />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/resources" element={<Resources />} />
					<Route path="/company" element={<Applications />} />
					<Route path="/hr" element={<HrBot />} />

					<Route
						path="/companyapplications/:companyID"
						element={<Application />}
					/>
					{/* <Route
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div className="App" id={theme}>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/calendar" element={<Calendar />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/company" element={<Applications />} />
					<Route
						path="/companyapplications/:companyID"
						element={<Application />}
					/>
					{/* <Route
						path="/joblistings/:jobId"
						element={user ? <JobListings /> : <Login />}
					/>
					<Route path="/newJob" element={user ? <Settings /> : <Login />} />
					<Route path="/dashboard" element={user ? <Dashboard /> : <Login />} />
					<Route path="/signup" element={user ? <Dashboard /> : <Signup />} />
					<Route path="/login" element={user ? <Dashboard /> : <Login />} />
					<Route
						path="/user/:userId"
						element={user ? <UserData /> : <Login />}
					/>
					<Route path="/meet/:name" element={user ? <Meet /> : <Login />} /> */}
				</Routes>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
