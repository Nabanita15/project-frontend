import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate ,Link} from "react-router-dom";
import signup from "../image/log.png"
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://project-backend-4rt2.onrender.com/login",
        data
      );
      alert(response.data.message);
      localStorage.setItem("token", response.data.token); // Save the token
      navigate("/page");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen p-4 md:p-8">
      {/* Left Section (Image and Text) */}
      <div className="lg:flex-1 bg-blue-600 p-8 rounded-lg flex flex-col justify-center items-center lg:block  ">
        <h1 className="text-white text-4xl font-bold text-center">Login</h1>
        <h3 className="text-white text-2xl font-semibold text-center my-4">
          Create your account if you don't have one.
        </h3>
        <p className="text-white text-center">
            If you dont have an account? 
          <Link to="/" className="underline">
            signup
          </Link>
        </p>
        <div className="flex justify-center mt-8">
          <img
            src={signup}
            alt="Signup Illustration"
            className="w-3/4 h-auto"
          />
        </div>
      </div>

      {/* Right Section (Form) */}
      <div className="lg:flex-1 bg-white shadow-lg rounded-lg p-6 md:p-8 flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("email", {
                required: "Email is required",
                pattern: /^\S+@\S+\.\S+$/,
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("password", {
                required: "Password is required",
                minLength: 6,
              })}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
       
      </div>
    </div>
  );
}

export default Login;
