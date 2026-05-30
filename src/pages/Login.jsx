
import React, { useState } from "react";
import { Mail, Lock, GraduationCap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user)); 

        const role = res.data.user?.role?.toLowerCase();
        localStorage.setItem("role",role)


        toast.success(res.data.message || "Login successfully");


        if (role === "student") return navigate("/student/dashboard");
        if (role === "teacher") return navigate("/teacher/dashboard");
        if (role === "admin")   return navigate("/admin/dashboard");

        navigate("/"); 
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-950 via-slate-900 to-indigo-950 px-4">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* ── Left Panel ── */}
        <div className="hidden md:flex flex-col justify-center bg-linear-to-br bg-gray-700  text-white p-10">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap size={40} />
            <h1 className="text-3xl font-bold">EduNova</h1>
          </div>
          <h2 className="text-2xl font-bold mb-3">Welcome Back 👋</h2>
          <p className="text-blue-100 mb-8">
            Login to continue learning, attending exams, and managing your account.
          </p>

          {/* Role redirect cards */}
          <div className="space-y-2">
            {[
              { role: "Student", path: "/student/dashboard" },
              { role: "Teacher", path: "/teacher/dashboard" },
              { role: "Admin",   path: "/admin/dashboard" },
            ].map((r) => (
              <div key={r.role} className="bg-white/15 rounded-xl px-4 py-2.5 flex items-center justify-between">
                <span className="text-sm font-semibold">{r.role}</span>
                <span className="text-xs text-blue-200">{r.path}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Panel ── */}
        <div className="bg-white p-8 md:p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Login</h2>
          <p className="text-gray-500 mb-6">Enter your credentials to continue</p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-gray-700">Email</label>
              <div className="relative mt-2">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full pl-11 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-semibold text-gray-700">Password</label>
              <div className="relative mt-2">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full pl-11 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-linear-to-r bg-gray-700  text-white font-bold rounded-xl hover:opacity-90 transition"
            >
              Login
            </button>

            <p className="text-center text-gray-500 text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
                Sign up
              </Link>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;