import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';
import axios from 'axios';
import { Mail, ArrowLeft, KeyRound, Loader2, GraduationCap } from 'lucide-react';
import api from '../utils/api';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await api.post(`/api/v1/otp/recover-password`, {
        email 
      });
      toast.success(res.data.message || "OTP sent successfully!");
      navigate('/verify-otp', {
        state: { email }
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF9F5] relative overflow-hidden px-4 sm:px-6 lg:px-8">
      
      {/* Background Decorative Terracotta Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#B34E17]/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#8C3E1A]/10 rounded-full filter blur-3xl animate-pulse"></div>

      <div className="w-full max-w-md space-y-8 bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-[#8C3E1A]/10 z-10 transition-all">
        
        {/* Kanva Institute Brand Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#FFF9F5] text-[#8C3E1A] mb-2 shadow-sm border border-[#8C3E1A]/15">
            <GraduationCap className="w-8 h-8" />
          </div>
          <p className="text-xs font-bold tracking-widest text-[#B34E17] uppercase">
            Kanva Institute
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2C1810] tracking-tight">
            Forgot Password?
          </h2>
          <p className="text-sm text-stone-600 max-w-xs mx-auto">
            Enter your registered email address and we'll send you an OTP code to reset your password.
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-[#2C1810]">
              Email Address
            </label>
            <div className="relative rounded-xl shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                <Mail className="h-5 w-5" />
              </div>
              <input
                type="email"
                placeholder="name@kanva.edu"
                className="w-full pl-10 pr-4 py-3 bg-[#FFF9F5]/60 border border-stone-200 rounded-xl text-[#2C1810] text-sm placeholder:text-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B34E17] focus:border-transparent transition-all duration-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Terracotta Action Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-linear-to-r from-[#8C3E1A] to-[#B34E17] text-white font-semibold py-3 px-4 rounded-xl hover:from-[#733215] hover:to-[#964012] focus:outline-none focus:ring-2 focus:ring-[#B34E17] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 shadow-md shadow-[#8C3E1A]/20"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending OTP...
              </>
            ) : (
              <>
                <KeyRound className="w-5 h-5" />
                Send OTP Code
              </>
            )}
          </button>
        </form>

        {/* Navigation Link */}
        <div className="text-center pt-2 border-t border-stone-100">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-[#8C3E1A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Sign In
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ForgetPassword;