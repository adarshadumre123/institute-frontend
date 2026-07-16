import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { User, Phone, Mail, ShieldAlert, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    role: "",
  });

  const navigate = useNavigate()



  const [loading, setLoading] = useState(false);

  // Fetch Profile
  const token = localStorage.getItem("token");
  const getProfile = async () => {
    try {

      const res = await axios.get(
        "http://localhost:8000/api/v1/users/get-user",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        setProfile({
          firstName: res.data.user.firstName || "",
          lastName: res.data.user.lastName || "",
          phone: res.data.user.phone || "",
          email: res.data.user.email || "",
          role: res.data.user.role || "",
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load profile");
    }
  };

  

  useEffect(() => {
    getProfile();
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  // Update Profile
  const updateProfile = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const res = await axios.put(
        "http://localhost:8000/api/v1/users/update-profile",
        {
          firstName: profile.firstName,
          lastName: profile.lastName,
          phone: profile.phone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        getProfile();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  // Create a stylish initial for the avatar
  const userInitial = profile.firstName ? profile.firstName.charAt(0).toUpperCase() : "U";

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#2E1A11] flex justify-center items-center p-6">
      <div className="bg-white w-full max-w-xl rounded-2xl border border-[#EFE9DF] shadow-md p-6 sm:p-10 relative overflow-hidden">
        
        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#8C3E1A]"></div>

        {/* Profile Card Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FAF6F0] border-2 border-[#8C3E1A]/20 text-[#8C3E1A] font-black text-3xl shadow-xs mb-4">
            {userInitial}
          </div>
          <h2 className="text-3xl font-black tracking-tight text-[#2E1A11]">
            My Profile
          </h2>
          <p className="text-[#65534A] text-sm mt-1">
            Manage your personal credentials and settings.
          </p>
        </div>

        <form onSubmit={updateProfile} className="space-y-6">
          
          {/* First & Last Name row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#65534A]">
                First Name
              </label>
              <div className="relative mt-1.5">
                <input
                  type="text"
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleChange}
                  className="w-full border border-[#EFE9DF] rounded-xl p-3 pl-4 bg-white text-[#2E1A11] font-medium outline-none focus:ring-2 focus:ring-[#8C3E1A]/20 focus:border-[#8C3E1A] transition"
                  placeholder="First Name"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#65534A]">
                Last Name
              </label>
              <div className="relative mt-1.5">
                <input
                  type="text"
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleChange}
                  className="w-full border border-[#EFE9DF] rounded-xl p-3 pl-4 bg-white text-[#2E1A11] font-medium outline-none focus:ring-2 focus:ring-[#8C3E1A]/20 focus:border-[#8C3E1A] transition"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>

          {/* Phone Input */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#65534A]">
              Phone Number
            </label>
            <div className="relative mt-1.5 flex items-center">
              <Phone size={18} className="absolute left-4 text-[#65534A]/60" />
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full border border-[#EFE9DF] rounded-xl p-3 pl-11 bg-white text-[#2E1A11] font-medium outline-none focus:ring-2 focus:ring-[#8C3E1A]/20 focus:border-[#8C3E1A] transition"
                placeholder="Phone Number"
              />
            </div>
          </div>

          {/* Disabled Email Field */}
          <div>
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold uppercase tracking-wider text-[#65534A]">
                Email Address
              </label>
              <span className="text-[10px] bg-[#EFE9DF]/50 text-[#65534A] px-2 py-0.5 rounded-md font-mono">
                System Log
              </span>
            </div>
            <div className="relative mt-1.5 flex items-center">
              <Mail size={18} className="absolute left-4 text-[#65534A]/40" />
              <input
                type="email"
                value={profile.email}
                disabled
                className="w-full border border-[#EFE9DF]/60 rounded-xl p-3 pl-11 bg-[#FAF9F6] text-[#65534A]/80 cursor-not-allowed font-medium select-none"
              />
            </div>
          </div>

          {/* Disabled Role Field */}
          <div>
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold uppercase tracking-wider text-[#65534A]">
                Assigned Role
              </label>
              <span className="text-[10px] bg-[#EFE9DF]/50 text-[#65534A] px-2 py-0.5 rounded-md font-mono">
                Read-Only
              </span>
            </div>
            <div className="relative mt-1.5 flex items-center">
              <ShieldAlert size={18} className="absolute left-4 text-[#65534A]/40" />
              <input
                type="text"
                value={profile.role}
                disabled
                className="w-full border border-[#EFE9DF]/60 rounded-xl p-3 pl-11 bg-[#FAF9F6] text-[#65534A]/80 cursor-not-allowed capitalize font-bold tracking-wide select-none"
              />
            </div>
          </div>

          {/* Submission Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#8C3E1A] hover:bg-[#733214] text-white py-3.5 rounded-xl font-bold transition shadow-md shadow-orange-950/10 flex items-center justify-center gap-2 mt-4 disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Updating Profile...</span>
              </>
            ) : (
              <span>Update Profile</span>
            )}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Profile;

