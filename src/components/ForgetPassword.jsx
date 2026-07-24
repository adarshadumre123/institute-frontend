import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import { Mail, ArrowLeft, KeyRound, Loader2, GraduationCap } from "lucide-react";
import api from "../utils/api";
import axios from "axios";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      setLoading(true);

      console.log("Sending Email:", email);

      const res = await api.post(`/api/v1/users/recover-password`, {
        email: email.trim(),
      });

      console.log("Response:", res.data);

      if (res.data.success) {
        toast.success(res.data.message);

        navigate("/verify-otp", {
          state: {
            email: email.trim(),
          },
        });
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log("Frontend Error:", error);

      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Data:", error.response.data);

        toast.error(error.response.data.message);
      } else if (error.request) {
        console.log("No response received");
        toast.error("Cannot connect to server.");
      } else {
        console.log(error.message);
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF9F5] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <GraduationCap className="mx-auto w-12 h-12 text-[#8C3E1A]" />
          <h1 className="text-2xl font-bold mt-2">Forgot Password</h1>
          <p className="text-gray-500 text-sm">
            Enter your registered email.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border rounded-lg pl-10 pr-3 py-3 outline-none focus:ring-2 focus:ring-[#8C3E1A]"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full bg-[#8C3E1A] text-white rounded-lg py-3 flex justify-center items-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" />
                Sending...
              </>
            ) : (
              <>
                <KeyRound className="w-5 h-5" />
                Send OTP
              </>
            )}
          </button>
        </form>

        <Link
          to="/login"
          className="flex items-center justify-center mt-6 text-sm text-gray-600"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgetPassword;