import React, { useState } from "react";
import { toast } from "sonner";
import {
  BookOpen,
  Tag,
  FileText,
  AlignLeft,
  DollarSign,
  PlusCircle,
  Loader2,
  Sparkles,
} from "lucide-react";
import api from "../utils/api";

const CreateCourses = () => {
  const [courses, setCourses] = useState({
    course: "",
    subject: "",
    shortDescription: "",
    longDescription: "",
    price: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCourses((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      const res = await api.post("/api/v1/course/create-course", courses, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (res.data.success) {
        toast.success("Course created successfully!");
        setCourses({
          course: "",
          subject: "",
          shortDescription: "",
          longDescription: "",
          price: "",
        });
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F5] flex items-center justify-center p-4 sm:p-6 lg:p-10 font-sans text-[#2D2D2D] selection:bg-[#8C3E1A] selection:text-white">
      <div className="w-full max-w-2xl bg-white border border-[#F3E7DE] rounded-3xl sm:rounded-[2.5rem] shadow-2xl shadow-[#8C3E1A]/10 p-6 sm:p-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF9F5] border border-[#E6D9CF] text-xs font-semibold text-[#8C3E1A] mb-3">
            <Sparkles size={14} /> Course Management
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Create New Course
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Build and publish your next amazing course for students.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          
          {/* Course Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Course Name *
            </label>
            <div className="relative">
              <BookOpen
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                name="course"
                value={courses.course}
                onChange={handleChange}
                placeholder="e.g. Full-Stack MERN Web Development"
                required
                className="w-full pl-10 pr-4 py-3 bg-[#FFF9F5] border border-[#E6D9CF] rounded-xl text-xs sm:text-sm text-[#1A1A1A] placeholder-gray-400 outline-none focus:border-[#8C3E1A] focus:ring-2 focus:ring-[#8C3E1A]/20 transition-all"
              />
            </div>
          </div>

          {/* Subject & Price */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Subject */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                Subject / Category *
              </label>
              <div className="relative">
                <Tag
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  name="subject"
                  value={courses.subject}
                  onChange={handleChange}
                  placeholder="e.g. Web Development"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-[#FFF9F5] border border-[#E6D9CF] rounded-xl text-xs sm:text-sm text-[#1A1A1A] placeholder-gray-400 outline-none focus:border-[#8C3E1A] focus:ring-2 focus:ring-[#8C3E1A]/20 transition-all"
                />
              </div>
            </div>

            {/* Price */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                Price*
              </label>
              <div className="relative">
                <p
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                >Rs</p>
                <input
                  type="number"
                  min="0"
                  name="price"
                  value={courses.price}
                  onChange={handleChange}
                  // placeholder="e.g. 99"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-[#FFF9F5] border border-[#E6D9CF] rounded-xl text-xs sm:text-sm text-[#1A1A1A] placeholder-gray-400 outline-none focus:border-[#8C3E1A] focus:ring-2 focus:ring-[#8C3E1A]/20 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Short Summary *
            </label>
            <div className="relative">
              <FileText
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                name="shortDescription"
                value={courses.shortDescription}
                onChange={handleChange}
                placeholder="A brief 1-line overview of what students will learn"
                required
                className="w-full pl-10 pr-4 py-3 bg-[#FFF9F5] border border-[#E6D9CF] rounded-xl text-xs sm:text-sm text-[#1A1A1A] placeholder-gray-400 outline-none focus:border-[#8C3E1A] focus:ring-2 focus:ring-[#8C3E1A]/20 transition-all"
              />
            </div>
          </div>
// this is a long description 
          {/* Long Description */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Detailed Description *
            </label>
            <div className="relative">
              <AlignLeft
                className="absolute left-3.5 top-3.5 text-gray-400"
                size={18}
              />
              <textarea
                rows="5"
                name="longDescription"
                value={courses.longDescription}
                onChange={handleChange}
                placeholder="Write a detailed syllabus, prerequisites, and key outcomes..."
                required
                className="w-full pl-10 pr-4 py-3 bg-[#FFF9F5] border border-[#E6D9CF] rounded-xl text-xs sm:text-sm text-[#1A1A1A] placeholder-gray-400 outline-none focus:border-[#8C3E1A] focus:ring-2 focus:ring-[#8C3E1A]/20 transition-all resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-3">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-[#8C3E1A] hover:bg-[#6E2E12] text-white font-semibold rounded-xl transition duration-300 shadow-md shadow-orange-950/10 flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5 text-white" />
                  <span>Creating Course...</span>
                </>
              ) : (
                <>
                  <PlusCircle size={18} />
                  <span>Publish Course</span>
                </>
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateCourses;