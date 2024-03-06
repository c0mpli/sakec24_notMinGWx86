import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function useLogin() {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const { dispatch } = useAuthContext();
	const navigate = useNavigate();

	const login = async (email, password) => {
		setIsLoading(true);
		setError(null);

		try {
			const response = await axios.post(
				`${process.env.REACT_APP_BACKEND_URL}/login`,
				{
					email: email,
					password: password,
				}
			);

			const json = response.data.data;
			console.log(json);
			localStorage.setItem("user", JSON.stringify(json));
			dispatch({ type: "LOGIN", payload: json });
			navigate("./dashboard");
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			if (error.response && error.response.data) {
				alert(error.response.data.error);
			} else {
				alert("An error occurred. Please try again.");
			}
		}
	};

	return { login, isLoading, error };
}

export default useLogin;
