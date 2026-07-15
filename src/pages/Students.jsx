


import React, { useState, useEffect } from "react";
import axios from "axios";
import { 
  Loader2, 
  Phone, 
  Mail, 
  Users, 
  GraduationCap, 
  Search,
  CheckCircle2
} from 'lucide-react';
import { toast } from "sonner";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const getStudents = async () => {
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

      const studentUsers = (res.data.users || []).filter(
        (user) => user.role?.toLowerCase() === "student"
      );

      setStudents(studentUsers);
    } catch (error) {
      console.error("Error fetching students:", error);
      toast.error("Failed to load students data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  const filteredStudents = students.filter(student => {
    const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase()) || 
           student.email?.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      
      {/* Upper Header Section */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            Students Directory
          </h1>
          <p className="text-slate-500 mt-1 font-medium">
            Manage, verify, and view all registered student records.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-white border border-slate-200 px-5 py-3 rounded-xl shadow-xs self-start md:self-auto">
          <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
            <Users size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Total Enrolled</p>
            <h2 className="text-xl font-bold text-slate-800">{students.length}</h2>
          </div>
        </div>
      </div>

      {/* Control Panel (Search Bar) */}
      {!loading && students.length > 0 && (
        <div className="max-w-7xl mx-auto mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by student name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm shadow-xs placeholder-slate-400"
            />
          </div>
        </div>
      )}

      {/* Loading Block */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <Loader2 className="animate-spin h-12 w-12 text-indigo-600" />
          <p className="text-lg font-semibold text-slate-600">
            Retrieving student records...
          </p>
        </div>
      )}

      {/* Cards Display Grid */}
      {!loading && filteredStudents.length > 0 && (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudents.map((student) => (
            <div
              key={student._id}
              className="bg-white rounded-2xl shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-200/80 overflow-hidden flex flex-col group"
            >
              {/* Graphic Banner Element */}
              <div className="bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-600 p-6 flex flex-col items-center text-center relative">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-white text-indigo-700 flex items-center justify-center text-2xl font-extrabold shadow-md uppercase tracking-wider border-4 border-white/40 group-hover:scale-105 transition-transform duration-300">
                  {student.firstName?.charAt(0) || ""}
                  {student.lastName?.charAt(0) || ""}
                </div>

                <h3 className="text-xl font-bold text-white mt-4 tracking-tight">
                  {student.firstName} {student.lastName}
                </h3>

                <span className="inline-flex items-center gap-1 mt-1 bg-white/20 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-0.5 rounded-full capitalize">
                  <GraduationCap size={12} />
                  {student.role || "Student"}
                </span>
              </div>

              {/* Data Content Block */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="text-slate-400">
                      <Phone size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Phone</p>
                      <p className="text-sm font-semibold text-slate-700 truncate">
                        {student.phone || "Not provided"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="text-slate-400">
                      <Mail size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Email Address</p>
                      <p className="text-sm font-semibold text-slate-700 truncate" title={student.email}>
                        {student.email}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">
                    <CheckCircle2 size={14} />
                    Active Account
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Missing/Empty State Handler */}
      {!loading && filteredStudents.length === 0 && (
        <div className="max-w-md mx-auto text-center py-16 bg-white rounded-2xl shadow-xs border border-slate-200 p-8">
          <Users className="mx-auto h-14 w-14 text-slate-300 mb-4" />
          <h3 className="text-xl font-bold text-slate-800 mb-1">
            {students.length === 0 ? "No Students Registered" : "No Matches Found"}
          </h3>
          <p className="text-slate-500 text-sm">
            {students.length === 0 
              ? "When new student profiles are created, they will populate here dynamically." 
              : "Try verifying the spelling or clearing out your search input text criteria."}
          </p>
        </div>
      )}
    </div>
  );
};

export default Students;