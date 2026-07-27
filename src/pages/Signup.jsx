import React, { useState } from "react";
import {
  Mail,
  Lock,
  Phone,
  User,
  Shield,
  Eye,
  EyeOff,
  Loader2,
  ArrowRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import api from "../utils/api";

import logo from "../assets/logo.png";

const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.role) {
      toast.error("Please select a role to continue");
      return;
    }

    setLoading(true);

    try {
      const res = await api.post("/api/v1/users/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.data?.success) {
        toast.success(res.data.message || "Account registered successfully!");

        const userRole = res.data?.user?.role || formData.role;
        if (userRole === "student") return navigate("/student/dashboard");
        if (userRole === "teacher") return navigate("/teacher/dashboard");
        if (userRole === "admin") return navigate("/admin/dashboard");

        navigate("/login");
      } else {
        toast.error(res.data?.message || "Registration failed");
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.message || "Something went wrong during registration"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F5] flex items-center justify-center p-4 sm:p-6 lg:p-10 font-sans text-[#2D2D2D] selection:bg-[#B34E17] selection:text-white">
      <div className="w-full max-w-5xl bg-white border border-[#F3E7DE] rounded-3xl sm:rounded-[2.5rem] shadow-2xl shadow-[#8C3E1A]/10 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        
        {/* ── LEFT SIDE (BRAND PANEL) ── */}
        <div className="hidden lg:flex flex-col justify-between bg-linear-to-br from-[#8e411e] via-[#793c1f] to-[#6F2F11] text-white p-10 sm:p-12 relative overflow-hidden">
          {/* Ambient Lighting FX */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Desktop Brand Header */}
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/20">
              <img src={logo} alt="Kanva Logo" className="w-10 h-10 object-contain" />
              <div>
                <h1 className="text-xl font-bold text-white tracking-tight leading-none">
                  KANVA
                </h1>
                <span className="text-xs text-orange-200/90 font-medium">Digital Academy</span>
              </div>
            </div>

            {/* Tagline & Copy */}
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4 text-white">
              Start Your Learning Journey Today
            </h2>
            <p className="text-orange-100/90 text-base leading-relaxed max-w-md">
              Join our educational portal to access courses, live exams,
              collaborative dashboards, and modern learning tools.
            </p>

            {/* Features List */}
            <div className="mt-10 space-y-4 text-sm font-medium">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-orange-300 rounded-full" />
                <p className="text-orange-100">Professional Learning Environment</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-orange-300 rounded-full" />
                <p className="text-orange-100">Student & Teacher Management</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-orange-300 rounded-full" />
                <p className="text-orange-100">Interactive Exam & Assessment System</p>
              </div>
            </div>
          </div>

          {/* Footer note in left panel */}
          <div className="relative z-10 pt-8 border-t border-white/15 text-xs text-orange-200/80">
            © {new Date().getFullYear()} EduInstitute. All rights reserved.
          </div>
        </div>

        {/* ── RIGHT SIDE (FORM PANEL) ── */}
        <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center bg-white">
          
          {/* Mobile Header (Shows logo on smaller screens) */}
          <div className="flex lg:hidden items-center gap-3 mb-6 pb-4 border-b border-[#F5EBE4]">
            <img src={logo} alt="Kanva Logo" className="w-10 h-10 object-contain" />
            <div>
              <h1 className="text-lg font-bold text-[#2D2D2D] tracking-tight leading-none">
                KANVA
              </h1>
              <span className="text-xs text-gray-500 font-medium">Digital Academy</span>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] tracking-tight">
              Create Account
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Fill in your details below to register your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  First Name *
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-[#FFF9F5] border border-[#E6D9CF] rounded-xl text-xs sm:text-sm text-[#1A1A1A] placeholder-gray-400 outline-none focus:border-[#8C3E1A] focus:ring-2 focus:ring-[#8C3E1A]/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Last Name *
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-[#FFF9F5] border border-[#E6D9CF] rounded-xl text-xs sm:text-sm text-[#1A1A1A] placeholder-gray-400 outline-none focus:border-[#8C3E1A] focus:ring-2 focus:ring-[#8C3E1A]/20 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                Email Address *
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john.doe@example.com"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-[#FFF9F5] border border-[#E6D9CF] rounded-xl text-xs sm:text-sm text-[#1A1A1A] placeholder-gray-400 outline-none focus:border-[#8C3E1A] focus:ring-2 focus:ring-[#8C3E1A]/20 transition-all"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                Phone Number *
              </label>
              <div className="relative">
                <Phone
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-[#FFF9F5] border border-[#E6D9CF] rounded-xl text-xs sm:text-sm text-[#1A1A1A] placeholder-gray-400 outline-none focus:border-[#8C3E1A] focus:ring-2 focus:ring-[#8C3E1A]/20 transition-all"
                />
              </div>
            </div>

            {/* Select Role */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                Select Role *
              </label>
              <div className="relative">
                <Shield
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-[#FFF9F5] border border-[#E6D9CF] rounded-xl text-xs sm:text-sm text-[#1A1A1A] outline-none focus:border-[#8C3E1A] focus:ring-2 focus:ring-[#8C3E1A]/20 transition-all cursor-pointer"
                >
                  <option value="">Choose Role</option>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                </select>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                Password *
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-11 py-3 bg-[#FFF9F5] border border-[#E6D9CF] rounded-xl text-xs sm:text-sm text-[#1A1A1A] placeholder-gray-400 outline-none focus:border-[#8C3E1A] focus:ring-2 focus:ring-[#8C3E1A]/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-[#8C3E1A] hover:bg-[#6E2E12] text-white font-semibold rounded-xl transition duration-300 shadow-md shadow-orange-950/10 flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5 text-white" />
                    <span>Registering...</span>
                  </>
                ) : (
                  <>
                    <span>Create Account</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center pt-2">
              <p className="text-xs sm:text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-[#8C3E1A] font-bold hover:underline"
                >
                  Log in
                </Link>
              </p>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default SignupPage;