import axios from "axios";
import { Plus, BookOpen, Calendar, User, Mail, FileText, Loader2, X, Hash, Award, CornerDownRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../utils/api";

const Assignment = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAssignment, setSelectedAssignment] = useState(null); // Tracks the currently active/selected assignment details
  const { courseId } = useParams();

  // Safely grab role with fallback validation
  const role = (localStorage.getItem("role") || "").trim().toLowerCase();

  const getAssignment = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const res = await api.get(
        `/api/v1/assignment/get-assignment/${courseId}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      setAssignments(res.data.assignments || res.data.message || []);
    } catch (error) {
      console.error("Failed to load assignments structural data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAssignment();
  }, [courseId]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2E1A11] p-4 sm:p-6 lg:p-8 relative">
      <div className="max-w-350 mx-auto">
        
        {/* Header Section Container */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-5 border-b border-[#EFE9DF]">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-[#2E1A11]">Course Assignments</h1>
            <p className="text-[#65534A] text-sm mt-1 font-medium">
              Manage and track structured student homework milestones and assignment records.
            </p>
          </div>

          {(role === "admin" || role === "teacher") && (
            <Link 
              to={`/course/${courseId}/create-assignment`} 
              className="inline-flex items-center justify-center gap-2 bg-[#8C3E1A] hover:bg-[#733214] text-white font-bold text-sm h-11 px-5 rounded-xl transition duration-200 shadow-sm whitespace-nowrap self-start sm:self-center"
            >
              <Plus size={16} />
              <span>Add Assignment</span>
            </Link>
          )}
        </div>

        {/* Dynamic Screen States: Loading vs Empty vs Cards Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-[#65534A]">
            <Loader2 className="animate-spin mb-3 opacity-70" size={32} />
            <span className="text-sm font-bold uppercase tracking-wider">Syncing Data Streams...</span>
          </div>
        ) : assignments.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#EFE9DF] p-12 text-center max-w-md mx-auto mt-12 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#FAF6F0] border border-[#EFE9DF] flex items-center justify-center mx-auto text-[#65534A] mb-4">
              <FileText size={22} />
            </div>
            <p className="font-black text-lg text-[#2E1A11]">No assignments setup yet</p>
            <p className="text-xs text-[#65534A] mt-1 mb-6 leading-relaxed">
              Curriculum tracks are empty. Deploy a brand new assignment layout to start receiving pupil work.
            </p>
            {(role === "admin" || role === "teacher") && (
              <Link 
                to={`/course/${courseId}/create-assignment`}
                className="inline-flex text-xs font-bold text-[#8C3E1A] hover:text-[#733214] underline underline-offset-4"
              >
                Create the first task setup
              </Link>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {assignments.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-2xl border border-[#EFE9DF] p-5 sm:p-6 hover:shadow-md transition duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Badge & Meta Row */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] uppercase font-black tracking-wider text-[#8C3E1A] bg-[#FAF6F0] border border-[#EFE9DF] px-2.5 py-1 rounded-md">
                      {item.subject || "General"}
                    </span>
                    {item.totalQuestions && (
                      <span className="text-[10px] font-bold text-[#65534A] bg-[#FAF6F0] px-2 py-1 rounded border border-[#EFE9DF] flex items-center gap-1">
                        <Hash size={10} /> {item.totalQuestions} Questions
                      </span>
                    )}
                  </div>

                  {/* Title and Scope Text Description */}
                  <h2 className="text-lg font-black text-[#2E1A11] tracking-tight mb-2 line-clamp-1 group-hover:text-[#8C3E1A] transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-xs text-[#65534A] mb-5 line-clamp-3 leading-relaxed">
                    {item.description || "No description guidelines provided for this assignment."}
                  </p>

                  {/* Detail Context Section Blocks */}
                  <div className="space-y-2.5 border-t border-[#FAF6F0] pt-4 text-xs">
                    <div className="flex items-center gap-2.5 text-[#65534A]">
                      <Calendar size={14} className="text-[#65534A]/60 shrink-0" />
                      <span className="font-medium">Due Date:</span>
                      <span className="font-bold text-[#2E1A11] ml-auto">
                        {item.dueDate ? new Date(item.dueDate).toLocaleDateString(undefined, {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        }) : "N/A"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 text-[#65534A]">
                      <User size={14} className="text-[#65534A]/60 shrink-0" />
                      <span className="font-medium">Instructor:</span>
                      <span className="font-bold text-[#2E1A11] ml-auto truncate max-w-37.5">
                        {item.createdBy?.firstName ? `${item.createdBy.firstName} ${item.createdBy.lastName || ""}` : "System Admin"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Open details modal action button */}
                <button 
                  onClick={() => setSelectedAssignment(item)}
                  className="mt-6 w-full bg-white hover:bg-[#FAF6F0] text-[#2E1A11] font-bold text-xs py-3 rounded-xl border border-[#EFE9DF] hover:border-[#8C3E1A]/40 transition group-hover:shadow-sm"
                >
                  View Assignment Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Full Details Sidebar Panel Drawer */}
      {selectedAssignment && (
        <div className="fixed inset-0 bg-[#2E1A11]/30 backdrop-blur-xs flex justify-end z-50 transition-opacity">
          <div className="w-full max-w-xl bg-white h-screen border-l border-[#EFE9DF] flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-200">
            
            {/* Drawer Header Area */}
            <div className="p-6 border-b border-[#EFE9DF] bg-[#FAF9F6] flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-black tracking-wider text-[#8C3E1A] bg-white border border-[#EFE9DF] px-2.5 py-1 rounded-md inline-block mb-2">
                  {selectedAssignment.subject || "General Assignment Stream"}
                </span>
                <h2 className="text-xl font-black text-[#2E1A11] tracking-tight">
                  {selectedAssignment.title}
                </h2>
              </div>
              <button 
                onClick={() => setSelectedAssignment(null)}
                className="p-1.5 rounded-lg border border-[#EFE9DF] bg-white text-[#65534A] hover:text-[#8C3E1A] hover:bg-[#FAF6F0] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Drawer Content Area */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              
              {/* Task Metrics Meta Widgets */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl border border-[#EFE9DF] bg-[#FAF9F6]/50">
                  <div className="flex items-center gap-2 text-[#65534A] text-xs font-bold uppercase tracking-wider mb-1">
                    <Calendar size={14} className="text-[#8C3E1A]" />
                    Submission Deadline
                  </div>
                  <p className="text-sm font-black text-[#2E1A11]">
                    {selectedAssignment.dueDate ? new Date(selectedAssignment.dueDate).toLocaleDateString(undefined, {
                      weekday: 'long', month: 'short', day: 'numeric', year: 'numeric'
                    }) : "No deadline assigned"}
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-[#EFE9DF] bg-[#FAF9F6]/50">
                  <div className="flex items-center gap-2 text-[#65534A] text-xs font-bold uppercase tracking-wider mb-1">
                    <Award size={14} className="text-blue-600" />
                    Structure Scope
                  </div>
                  <p className="text-sm font-black text-[#2E1A11]">
                    {selectedAssignment.totalQuestions ? `${selectedAssignment.totalQuestions} Questions Enrolled` : "Standard Task Frame"}
                  </p>
                </div>
              </div>

              {/* Guidelines / Core Description Text Block */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider text-[#65534A] mb-2.5 flex items-center gap-1.5">
                  <FileText size={14} /> Task Guidelines & Description
                </h3>
                <div className="p-4 bg-[#FAF6F0]/40 border border-[#EFE9DF] rounded-xl text-sm leading-relaxed whitespace-pre-line text-[#2E1A11]">
                  {selectedAssignment.description || "No customized guideline rules parameters have been logged for this assignment timeline."}
                </div>
              </div>

              {/* Created By Author Info Card Block */}
              <div className="pt-4 border-t border-[#FAF6F0]">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#65534A] mb-3">
                  Instructor Assignment Meta
                </h3>
                <div className="flex items-center gap-4 p-4 rounded-xl border border-[#EFE9DF]">
                  <div className="w-10 h-10 rounded-full bg-[#FAF6F0] border border-[#EFE9DF] flex items-center justify-center font-black text-[#8C3E1A] text-sm">
                    {selectedAssignment.createdBy?.firstName ? selectedAssignment.createdBy.firstName[0].toUpperCase() : "A"}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-[#2E1A11] truncate">
                      {selectedAssignment.createdBy?.firstName ? `${selectedAssignment.createdBy.firstName} ${selectedAssignment.createdBy.lastName || ""}` : "Academic Administrator"}
                    </p>
                    {selectedAssignment.createdBy?.email && (
                      <p className="text-xs text-[#65534A] font-mono truncate flex items-center gap-1 mt-0.5">
                        <Mail size={12} className="opacity-60" />
                        {selectedAssignment.createdBy.email}
                      </p>
                    )}
                  </div>
                </div>
              </div>

            </div>

            {/* Drawer Bottom Actions Context Section */}
            <div className="p-6 border-t border-[#EFE9DF] bg-[#FAF9F6] flex gap-3">
              <button 
                onClick={() => setSelectedAssignment(null)}
                className="flex-1 bg-white hover:bg-[#FAF6F0] text-[#2E1A11] font-bold text-sm py-3 px-4 rounded-xl border border-[#EFE9DF] transition"
              >
                Close View
              </button>
              
              {role === "student" && (
                <button className="flex-1 bg-[#8C3E1A] hover:bg-[#733214] text-white font-bold text-sm py-3 px-4 rounded-xl shadow-sm transition">
                  Submit Homework Work
                </button>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Assignment;