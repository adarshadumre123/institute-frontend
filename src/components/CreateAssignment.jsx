import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { FileText, BookOpen, Hash, ArrowLeft, Loader2 } from "lucide-react";
import { useParams, useNavigate } from 'react-router-dom';

const CreateAssignment = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [assignment, setAssignment] = useState({
    title: "",
    subject: "",
    course: "",
    description: "",
    totalQuestions: "",
  });

  const handleChange = (e) => {
    setAssignment((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const createAssignment = async () => {
    // Basic validation check
    if (!assignment.title || !assignment.subject || !assignment.totalQuestions) {
      toast.error("Please fill in all mandatory fields.");
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `http://localhost:8000/api/v1/assignment/generate-assignment/${courseId}`, 
        assignment, 
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );

      if (res.data.success) {
        toast.success("Assignment created successfully");
        setAssignment({
          title: "",
          subject: "",
          course: "",
          description: "",
          totalQuestions: "",
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong structuralizing the task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2E1A11] p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl border border-[#EFE9DF] p-6 sm:p-8 shadow-sm">
        
        {/* Back Button & Header */}
        <div className="mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 text-xs font-bold text-[#65534A] hover:text-[#8C3E1A] mb-4 transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to Dashboard
          </button>
          
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#2E1A11]">
            Create Assignment
          </h1>
          <p className="text-[#65534A] text-sm mt-1 font-medium">
            Generate customized academic assessments and reviews for your course tracks.
          </p>
        </div>

        {/* Input Configuration Grid */}
        <div className="space-y-5">

          {/* Title input */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#65534A] mb-2">
              Assignment Title <span className="text-[#8C3E1A]">*</span>
            </label>
            <div className="relative">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#65534A]/50">
                <FileText size={18} />
              </div>
              <input
                type="text"
                name="title"
                value={assignment.title}
                onChange={handleChange}
                placeholder="e.g., JavaScript DOM Manipulation Basics"
                className="w-full pl-11 pr-4 py-3 bg-[#FAF6F0]/30 border border-[#EFE9DF] rounded-xl text-sm text-[#2E1A11] placeholder-[#65534A]/40 focus:outline-none focus:border-[#8C3E1A]/60 focus:bg-white transition"
              />
            </div>
          </div>

          {/* Subject & Questions Twin Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#65534A] mb-2">
                Subject Stream <span className="text-[#8C3E1A]">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#65534A]/50">
                  <BookOpen size={18} />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={assignment.subject}
                  onChange={handleChange}
                  placeholder="e.g., Web Development"
                  className="w-full pl-11 pr-4 py-3 bg-[#FAF6F0]/30 border border-[#EFE9DF] rounded-xl text-sm text-[#2E1A11] placeholder-[#65534A]/40 focus:outline-none focus:border-[#8C3E1A]/60 focus:bg-white transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#65534A] mb-2">
                Total Questions <span className="text-[#8C3E1A]">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#65534A]/50">
                  <Hash size={18} />
                </div>
                <input
                  type="number"
                  name="totalQuestions"
                  value={assignment.totalQuestions}
                  onChange={handleChange}
                  placeholder="e.g., 10"
                  min="1"
                  className="w-full pl-11 pr-4 py-3 bg-[#FAF6F0]/30 border border-[#EFE9DF] rounded-xl text-sm text-[#2E1A11] placeholder-[#65534A]/40 focus:outline-none focus:border-[#8C3E1A]/60 focus:bg-white transition"
                />
              </div>
            </div>
          </div>

          {/* Description Textarea */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#65534A] mb-2">
              Assignment Guidelines & Scope
            </label>
            <textarea
              rows="5"
              name="description"
              value={assignment.description}
              onChange={handleChange}
              placeholder="Provide clean execution metrics, grading matrices, or context guidelines for this batch submission..."
              className="w-full p-4 bg-[#FAF6F0]/30 border border-[#EFE9DF] rounded-xl text-sm text-[#2E1A11] placeholder-[#65534A]/40 focus:outline-none focus:border-[#8C3E1A]/60 focus:bg-white transition resize-none leading-relaxed"
            />
          </div>

          {/* Bottom Submit Trigger */}
          <div className="pt-2">
            <button
              onClick={createAssignment}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-[#8C3E1A] hover:bg-[#733214] text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-sm transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Generating Structural Assignment...
                </>
              ) : (
                "Deploy Assignment"
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreateAssignment;