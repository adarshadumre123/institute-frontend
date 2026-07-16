import React, { useState, useEffect } from "react";
import axios from "axios";
import { 
  Loader2, 
  Phone, 
  Mail, 
  Users, 
  Briefcase, 
  Search,
  CheckCircle2
} from 'lucide-react';
import { toast } from "sonner";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const getTeachers = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:8000/api/v1/users/get",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      const teacherUsers = (res.data.users || []).filter(
        (user) => user.role?.toLowerCase() === "teacher"
      );

      setTeachers(teacherUsers);
    } catch (error) {
      console.error("Error fetching teachers:", error);
      toast.error("Failed to load teachers data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTeachers();
  }, []);

  // Real-time local client-side filter matching the student dashboard style
  const filteredTeachers = teachers.filter(teacher => {
    const fullName = `${teacher.firstName} ${teacher.lastName}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase()) || 
           teacher.email?.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-[#FAF9F6] py-10 px-4 sm:px-6 lg:px-8 text-[#2E1A11]">
      
      {/* Upper Header Section */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-[#EFE9DF] pb-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight flex items-center gap-2">
            Teachers Directory
          </h1>
          <p className="text-[#65534A] mt-1 font-bold">
            Manage, verify, and view all registered teacher records.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-white border border-[#EFE9DF] px-5 py-3 rounded-xl shadow-xs self-start md:self-auto">
          <div className="p-2 bg-[#FAF6F0] rounded-lg text-[#8C3E1A]">
            <Users size={20} />
          </div>
          <div>
            <p className="text-[10px] text-[#65534A] font-black uppercase tracking-wider">Total Faculty</p>
            <h2 className="text-xl font-black">{teachers.length}</h2>
          </div>
        </div>
      </div>

      {/* Control Panel (Search Bar) */}
      {!loading && teachers.length > 0 && (
        <div className="max-w-7xl mx-auto mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-[#65534A]/60" />
            <input
              type="text"
              placeholder="Search by teacher name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-[#EFE9DF] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#8C3E1A] focus:border-[#8C3E1A] transition-all text-sm shadow-xs placeholder-[#65534A]/50 font-medium"
            />
          </div>
        </div>
      )}

      {/* Loading Block */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <Loader2 className="animate-spin h-12 w-12 text-[#8C3E1A]" />
          <p className="text-lg font-black text-[#65534A]">
            Retrieving teacher records...
          </p>
        </div>
      )}

      {/* Cards Display Grid */}
      {!loading && filteredTeachers.length > 0 && (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher._id}
              className="bg-white rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 border border-[#EFE9DF] overflow-hidden flex flex-col group"
            >
              {/* Premium Warm Banner Element */}
              <div className="bg-[#2E1A11] p-6 flex flex-col items-center text-center relative">
                
                {/* Avatar with Signature Accent border */}
                <div className="w-20 h-20 rounded-full bg-[#FAF9F6] text-[#2E1A11] flex items-center justify-center text-2xl font-black shadow-md uppercase tracking-wider border-4 border-[#8C3E1A] group-hover:scale-105 transition-transform duration-300">
                  {teacher.firstName?.charAt(0) || ""}
                  {teacher.lastName?.charAt(0) || ""}
                </div>

                <h3 className="text-xl font-black text-white mt-4 tracking-tight">
                  {teacher.firstName} {teacher.lastName}
                </h3>

                <span className="inline-flex items-center gap-1 mt-1 bg-white/10 backdrop-blur-xs text-white text-[10px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full">
                  <Briefcase size={12} className="text-[#8C3E1A]" />
                  {teacher.role || "Teacher"}
                </span>
              </div>

              {/* Data Content Block */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-[#FAF9F6] p-3 rounded-xl border border-[#FAF6F0]">
                    <div className="text-[#8C3E1A]">
                      <Phone size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase font-black tracking-wider text-[#65534A]/60">Phone</p>
                      <p className="text-sm font-bold text-[#2E1A11] truncate">
                        {teacher.phone || "Not provided"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-[#FAF9F6] p-3 rounded-xl border border-[#FAF6F0]">
                    <div className="text-[#8C3E1A]">
                      <Mail size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase font-black tracking-wider text-[#65534A]/60">Email Address</p>
                      <p className="text-sm font-bold text-[#2E1A11] truncate" title={teacher.email}>
                        {teacher.email}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#FAF6F0] flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 bg-[#FAF6F0] text-[#8C3E1A] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wide">
                    <CheckCircle2 size={14} />
                    Active Faculty
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Missing/Empty State Handler */}
      {!loading && filteredTeachers.length === 0 && (
        <div className="max-w-md mx-auto text-center py-16 bg-white rounded-2xl border border-[#EFE9DF] p-8 shadow-xs">
          <Briefcase className="mx-auto h-14 w-14 text-[#65534A]/40 mb-4" />
          <h3 className="text-xl font-black mb-1">
            {teachers.length === 0 ? "No Teachers Registered" : "No Matches Found"}
          </h3>
          <p className="text-[#65534A] text-sm font-medium">
            {teachers.length === 0 
              ? "When new teacher profiles are created, they will populate here dynamically." 
              : "Try verifying the spelling or clearing out your search input text criteria."}
          </p>
        </div>
      )}
    </div>
  );
};

export default Teachers;