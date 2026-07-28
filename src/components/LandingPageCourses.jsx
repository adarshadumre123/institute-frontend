import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Loader2,
  Tag,
  User,
  Mail,
  GraduationCap,
  Sparkles,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import api from "../utils/api";

const LandingPageCourse = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getAllCourses = async () => {
    setLoading(true);
    try {
      const res = await api.get("/api/v1/course/landing-page-course");
      setCourses(res.data.course || []);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-[#FFF9F5] min-h-screen">
        <Loader2 className="h-10 w-10 animate-spin text-[#B34E17]" />
        <p className="mt-4 text-gray-600 font-medium">Loading courses...</p>
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="text-center py-20 bg-[#FFF9F5] min-h-screen flex flex-col justify-center items-center">
        <BookOpen className="w-12 h-12 text-[#8C3E1A]/40 mb-3" />
        <p className="text-gray-600 text-lg font-medium">
          No courses available right now.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#FFF9F5] min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#8C3E1A] selection:text-white">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6D9CF] text-xs font-semibold text-[#8C3E1A] mb-4 shadow-xs">
          <Sparkles className="w-4 h-4 fill-[#8C3E1A] text-[#8C3E1A]" />
          <span>Featured Educational Programs</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
          Explore Courses
        </h1>
        <p className="text-[#65534A] mt-3 text-base sm:text-lg max-w-2xl mx-auto font-normal">
          Discover premium learning materials to accelerate your career path and expand your skill set.
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course._id}
              className="group bg-white rounded-3xl shadow-md hover:shadow-xl hover:shadow-[#8C3E1A]/10 border border-[#E6D9CF] overflow-hidden flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5"
            >
              {/* Top Banner Area */}
              <div className="bg-linear-to-br from-[#F8EFEA] to-[#EFE6DC] h-44 flex items-center justify-center relative px-6 overflow-hidden">
                {/* Background Pattern Elements */}
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#8C3E1A]/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-[#B34E17]/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />

                {/* Price Tag Badge */}
                <div className="absolute top-4 right-4 bg-[#1A1A1A]/90 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-full border border-white/10 shadow-sm group-hover:bg-[#8C3E1A] transition-colors duration-300">
                  {course.price === 0 ? "Free" : `Rs. ${course.price}`}
                </div>

                {/* Center Graphic */}
                <div className="p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/60 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap
                    className="w-12 h-12 text-[#8C3E1A]"
                    strokeWidth={1.75}
                  />
                </div>
              </div>

              {/* Details Content Area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Subject Tag */}
                  <div className="inline-flex items-center gap-1.5 text-[#B34E17] font-bold text-xs uppercase tracking-wider mb-2 bg-[#FFF9F5] px-2.5 py-1 rounded-md border border-[#E6D9CF]/60">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{course.subject || "General"}</span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 leading-snug line-clamp-2 group-hover:text-[#8C3E1A] transition-colors">
                    {course.course || course.subject}
                  </h3>

                  {/* Course Short Description */}
                  <p className="text-gray-600 text-sm mb-6 font-normal leading-relaxed line-clamp-3">
                    {course.shortDescription}
                  </p>
                </div>

                <div>
                  {/* Instructor / User Info Block */}
                  <div className="border-t border-[#F3E7DE] pt-4 space-y-2 text-xs text-[#4A4A4A]">
                    <div className="flex items-center gap-2 font-semibold text-[#1A1A1A]">
                      <User className="w-4 h-4 text-[#8C3E1A]" />
                      <span className="truncate">
                        {course.createdBy?.name || "Instructor"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 font-normal">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="truncate">
                        {course.createdBy?.email || "contact@platform.com"}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-5">
                    <button
                      onClick={() => navigate(`/login`)}
                      className="w-full bg-[#8C3E1A] hover:bg-[#6E2E12] text-white font-semibold text-xs sm:text-sm py-3 px-4 rounded-xl transition-all duration-200 shadow-md shadow-orange-950/10 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                    >
                      <span>Enroll Now</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPageCourse;