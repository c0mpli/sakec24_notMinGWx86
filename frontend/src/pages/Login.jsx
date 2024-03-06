import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../imgs/logo.png";
import useLogin from "../hooks/useLogin";

function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const { login, isLoading } = useLogin();
	let errorMessage = "";

	async function handleSubmit(e) {
		e.preventDefault();
		await login(email, password);
	}

	return (
		<div className="flex items-center justify-center h-screen bg-gray-200">
			<div className="bg-white p-8 rounded shadow-md w-96">
				<div className="flex justify-between items-center mb-6">
					<h1 className="text-2xl font-bold text-gray-700">UDAAN</h1>
					<img
						src={logo}
						onClick={() => navigate("../")}
						alt="Logo"
						className="h-8 cursor-pointer"
					/>
				</div>
				<form onSubmit={handleSubmit} className="space-y-6">
					<input
						type="email"
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
						required
						className="w-full p-2 border border-gray-300 rounded"
					/>
					<input
						type="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
						required
						className="w-full p-2 border border-gray-300 rounded"
					/>
					<p
						className={`text-sm ${
							errorMessage === "ok" ? "text-green-500" : "text-red-500"
						}`}
					>
						{errorMessage === "ok" ? "Login Successful" : errorMessage}
					</p>
					<button
						type="submit"
						className="w-full p-2 bg-blue-500 text-white rounded"
						disabled={isLoading}
					>
						{isLoading ? "Logging In..." : "Log In"}
					</button>
					<div className="flex justify-between items-center">
						<p>Don't have an account?</p>
						<Link to={"../signup"} className="text-blue-500">
							Sign Up
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
