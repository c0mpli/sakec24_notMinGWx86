import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function useSignup() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const navigate = useNavigate();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);
    const rawName = email.indexOf("@") !== -1 ? email.substring(0, email.indexOf("@")) : email;
    const name = rawName.charAt(0).toUpperCase() + rawName.slice(1);

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/company/signup`, {
        name: name,
        email: email,
        password: password,
      });

      const json = await response.data;

      if (json) {
        alert("Registered successfully. Please login to continue.");
        navigate("../");
        setIsLoading(false);
      }
    } catch (error) {
      // console.log(error, error.response)
      setIsLoading(false);
      if (error.response && error.response.data) {
        if (error.response.data.error === 'Failed to create company') {
          alert('User already exists. Please login.');
        } else {
          alert(error.response.data.error);
        }
      } else {
        alert('An error occurred. Please try again.');
      }
    }
  };
  return { signup, isLoading, error };
}

export default useSignup;