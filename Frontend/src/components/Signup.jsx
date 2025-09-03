import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:4001/user/signup", data);
      toast.success("Signup successful");
      localStorage.setItem("Users", JSON.stringify(res.data.user));
      navigate("/", { replace: true });
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    // 🌟 Full screen center wrapper
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[350px] relative">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <h3 className="text-xl font-semibold">Signup</h3>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="name"
              {...register("fullname", { required: true })}
              className="w-full px-3 py-2 mt-1 bg-blue-50 rounded-md outline-none border border-gray-300 focus:ring focus:ring-pink-200"
            />
            {errors.fullname && (
              <p className="text-xs text-red-500 mt-1">Name is required</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              {...register("email", { required: true })}
              className="w-full px-3 py-2 mt-1 bg-blue-50 rounded-md outline-none border border-gray-300 focus:ring focus:ring-pink-200"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">Email is required</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("password", { required: true })}
              className="w-full px-3 py-2 mt-1 bg-blue-50 rounded-md outline-none border border-gray-300 focus:ring focus:ring-pink-200"
            />
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">Password is required</p>
            )}
          </div>

          {/* Button + Login */}
          <div className="flex justify-between items-center mt-4">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md"
            >
              Signup
            </button>
            <p className="text-sm text-gray-600">
              Already have account?{" "}
              <span className="text-blue-500 underline cursor-pointer">
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
