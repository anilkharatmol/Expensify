import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/user/login",
        formData
      );
      console.log("User Logged In:", response);
      alert("User logged in successfully");
      setError("");
      dispatch(login());
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("Email doesn't exists");
      } 
      else if (error.response && error.response.status === 401) {
        setError("Wrong password");
      }
      else {
        setError("Something went wrong. Please try again.");
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login
        </h2>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            minLength={8}
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
          {error.length > 0 && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors cursor-pointer"
        >
          Submit
        </button>
         <p>Don't have an account? <NavLink className="font-semibold transition-colors hover:text-blue-600 hover:underline" to="/signup">Signup</NavLink></p>
      </form>
    </div>
  );
}
