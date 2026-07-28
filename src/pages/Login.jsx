import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import api from "../utils/api";
import logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading(true);

    try {
      const res = await api.post("/api/v1/users/login", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user._id));

        const role = res.data.user?.role?.toLowerCase();
        localStorage.setItem("role", role);

        toast.success(res.data.message || "Login successful!");

        if (role === "student") return navigate("/student/dashboard");
        if (role === "teacher") return navigate("/teacher/dashboard");
        if (role === "admin") return navigate("/admin/dashboard");

        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F5] flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans text-[#2D2D2D] selection:bg-[#B34E17] selection:text-white">
      {/* Container Card */}
      <div className="w-full max-w-4xl bg-white border border-[#F3E7DE] rounded-3xl sm:rounded-[2.5rem] shadow-2xl shadow-[#8C3E1A]/10 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
        
        {/* ── Left Decorative Panel ── */}
        <div className="hidden md:flex md:col-span-5 lg:col-span-5 bg-linear-to-br from-[#8C3E1A] via-[#823816] to-[#6F2F11] text-white p-8 lg:p-10 flex-col justify-between relative overflow-hidden">
          {/* Ambient Lighting FX */}
          <div className="absolute -top-12 -right-12 w-56 h-56 bg-orange-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Top Brand Identity */}
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 shadow-inner">
                <img
                  src={logo}
                  alt="Kanva Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-extrabold tracking-tight leading-none text-white">
                  KANVA
                </h1>
                <span className="text-[10px] text-orange-200 uppercase font-semibold tracking-wider">
                  Digital Academy
                </span>
              </div>
            </div>

            <div className="mt-12 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[11px] font-medium text-orange-200">
                <Sparkles size={13} className="text-orange-300" />
                <span>Empowering Education</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                Welcome Back 👋
              </h2>
              <p className="text-xs lg:text-sm text-orange-100/85 leading-relaxed">
                Log in to continue your learning journey, access interactive assignments, and track your progress in real time.
              </p>
            </div>
          </div>

          {/* Clean Feature List Showcase */}
          <div className="relative z-10 my-8 space-y-3">
            {[
              "Interactive Live Classes",
              "AI-Generated Study Aids",
              "Secure Exam Portal",
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs text-orange-100/90 font-medium">
                <CheckCircle2 size={16} className="text-orange-300 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Bottom Copyright Notice */}
          <p className="relative z-10 text-[11px] text-orange-200/60">
            © {new Date().getFullYear()} Kanva Digital Academy
          </p>
        </div>

        {/* ── Right Login Form Panel ── */}
        <div className="md:col-span-7 lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
          
          {/* Mobile Header Logo Banner */}
          <div className="flex md:hidden items-center gap-3 mb-6 pb-4 border-b border-[#F5EBE4]">
            <img src={logo} alt="Kanva Logo" className="w-10 h-10 object-contain" />
            <div>
              <h1 className="text-lg font-bold text-[#2D2D2D] tracking-tight leading-none">
                KANVA
              </h1>
              <span className="text-xs text-gray-500 font-medium">Digital Academy</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
              Sign In
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Please enter your registered credentials to access your account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                Email Address
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
                  placeholder="name@example.com"
                  className={`w-full pl-10 pr-4 py-3 bg-[#FFF9F5]/50 border rounded-xl outline-none text-xs sm:text-sm transition duration-200 ${
                    errors.email
                      ? "border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-[#E6D9CF] focus:border-[#8C3E1A] focus:ring-1 focus:ring-[#8C3E1A]"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                Password
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
                  className={`w-full pl-10 pr-10 py-3 bg-[#FFF9F5]/50 border rounded-xl outline-none text-xs sm:text-sm transition duration-200 ${
                    errors.password
                      ? "border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-[#E6D9CF] focus:border-[#8C3E1A] focus:ring-1 focus:ring-[#8C3E1A]"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1.5">{errors.password}</p>
              )}
            </div>

            {/* Remember & Forgot Password Link */}
            {/* <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-[#E6D9CF] text-[#8C3E1A] focus:ring-[#8C3E1A] w-4 h-4"
                />
                Remember me
              </label>
              <Link to={'/forget-password'}
                
                className="text-[#B34E17] font-semibold hover:underline"
              >
                Forgot Password?
              </Link>
            </div> */}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-[#8C3E1A] hover:bg-[#6E2E12] text-white font-semibold rounded-xl transition duration-300 shadow-md shadow-orange-950/10 flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer disabled:opacity-70 active:scale-[0.99]"
            >
              {isLoading ? (
                <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                <>
                  <span>Login to Account</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>

            {/* Signup Prompt */}
            <p className="text-center text-gray-500 text-xs sm:text-sm pt-2">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-[#B34E17] font-bold hover:underline ml-1"
              >
                Sign up for free
              </Link>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;