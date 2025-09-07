import React from "react";
import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa6";
import { Link } from "react-router";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Please Register</h2>

        {/* reg from */}
        <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid Email Address",
                },
              })}
              type="email"
              name="email"
              id="email"
              className={`w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 ring-blue-400 mb-2`}
              placeholder="Enter Your Email"
            />
            {errors.email && (
              <p className="text-red-500 italic text-sm px-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type="password"
              name="password"
              id="password"
              className={`w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 ring-blue-400 mb-2`}
              placeholder="Enter Your Password"
            />
            {errors.password && (
              <p className="text-red-500 italic text-sm px-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 p-2 mt-2 rounded-md text-white font-semibold cursor-pointer"
          >
            Sign Up
          </button>
        </form>

        {/* socila login */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">Or Sign Up With</p>
          <div className="flex items-center justify-between">
            <button className="flex items-center px-4 py-2 text-white bg-red-500 rounded shadow-md hover:bg-red-600 space-x-2 cursor-pointer">
              <FaGoogle />
              <span>Google</span>
            </button>
            <button className="flex items-center px-4 py-2 text-white bg-blue-500 rounded shadow-md hover:bg-blue-600 space-x-2 cursor-pointer">
              <FaFacebook />
              <span>Facebook</span>
            </button>
            <button className="flex items-center px-4 py-2 text-white bg-gray-700 rounded shadow-md hover:bg-gray-900 space-x-2 cursor-pointer">
              <FaGithub />
              <span>Github</span>
            </button>
          </div>
        </div>
        <p className="text-center text-gray-600 text-sm">
          Already Have An Account?{" "}
          <Link to="/login" className="hover:underline text-blue-400">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
