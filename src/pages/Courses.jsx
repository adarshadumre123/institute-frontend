import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BookOpen,
  FileText,
  GraduationCap,
  Plus,
  Loader2,
  User,
  Mail,
  ArrowRight,
  Sparkles,
  Settings,
  Edit3,
  Filter
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Courses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Retrieve auth details from localStorage
  const role = localStorage.getItem("role")?.trim().toLowerCase();
  const currentUserId = JSON.parse((localStorage.getItem("user")));
  

  const getAllCourses = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "http://localhost:8000/api/v1/course/get-course",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCourses(res.data.course || []);
      // console.log(res.data.course)
    } catch (error) {
      console.error("Error fetching courses:", error);
      toast.error("Failed to load courses");
    } finally {
      setLoading(false);
    }
  };





  useEffect(() => {
    getAllCourses();
  }, []);

  const enrollChange = async (course) => {
    try {
      const token = localStorage.getItem("token");
      const coursePrice = Number(course.price) || 0 ;

      // Free Course Enrollment
      if (coursePrice === 0) {
        const { data } = await axios.post(
          "http://localhost:8000/api/v1/enrollment/enrolled",
          { courseId: course._id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        toast.success(data.message || "Enrolled successfully!");
        navigate(`/main-course/${course._id}`);
        return;
      }

      // Paid Course - eSewa Integration
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/payment/create-payment",
        { courseId: course._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const paymentData = data.paymentData;
      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";

      Object.keys(paymentData).forEach((key) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = paymentData[key];
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Something went wrong during enrollment"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] py-12 px-4 sm:px-6 lg:px-8 text-[#2E1A11]">
      {/* Top Header Section */}
      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-[#EFE9DF] pb-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#2E1A11] tracking-tight flex items-center gap-2">
            Explore Courses <Sparkles className="text-[#8C3E1A] fill-[#8C3E1A] w-6 h-6" />
          </h1>
          <p className="text-[#65534A] mt-2 text-base sm:text-lg font-medium">
            Discover premium learning materials to accelerate your career path.
          </p>
        </div>

        {(role === "admin" || role === "teacher") && (
          <Link
            to="/create-course"
            className="inline-flex items-center justify-center gap-2 bg-[#8C3E1A] hover:bg-[#733214] text-white font-semibold px-5 py-3 rounded-xl transition duration-200 shadow-md shadow-orange-950/10 self-start md:self-auto"
          >
            <Plus size={20} />
            <span>Add New Course</span>
          </Link>
        )}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <Loader2 className="animate-spin h-12 w-12 text-[#8C3E1A]" />
          <p className="text-lg font-semibold text-[#65534A]">
            Gathering courses for you...
          </p>
        </div>
      )}

      {/* Empty State */}
      {!loading && courses.length === 0 && (
        <div className="max-w-md mx-auto text-center py-16 bg-white rounded-2xl shadow-sm border border-[#EFE9DF] p-8">
          <GraduationCap className="mx-auto h-16 w-16 text-[#65534A]/40 mb-4" />
          <h3 className="text-xl font-bold text-[#2E1A11] mb-1">No Courses Available</h3>
          <p className="text-[#65534A]">Check back later or contact your instructor.</p>
        </div>
      )}

      {/* Courses Grid */}
      {!loading && courses.length > 0 && (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const isFree = Number(course.price) === 0;

            return (
              <div
                key={course._id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#EFE9DF] flex flex-col group"
              >
                {/* Visual Banner */}
                <div className="bg-linear-to-br from-[#FAF6F0] via-[#F3EDE2] to-[#EFE9DF] h-36 flex items-center justify-center relative px-6 text-center border-b border-[#EFE9DF]/60">
                  <div className="absolute inset-0 bg-[#8C3E1A]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <GraduationCap
                    size={48}
                    className="text-[#8C3E1A] drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Dynamic Pricing Badge */}
                  <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm text-white ${isFree ? 'bg-emerald-700' : 'bg-[#2E1A11]'
                    }`}>
                    {isFree ? 'FREE' : `Rs. ${course.price}`}
                  </span>
                </div>

                {/* Content Wrapper */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Subject Tag */}
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8C3E1A] mb-2">
                    <FileText size={14} />
                    {course.subject || "General"}
                  </span>

                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-[#2E1A11] line-clamp-1 mb-2 group-hover:text-[#8C3E1A] transition-colors">
                    {course.course}
                  </h3>

                  {/* Description */}
                  <p className="text-[#65534A] text-sm line-clamp-2 mb-6">
                    {course.description || "No description provided for this course details setup."}
                  </p>

                  {/* Instructor Info Footer */}
                  {course.createdBy && (
                    <div className="mt-auto pt-4 border-t border-[#EFE9DF]/60 mb-5 text-xs text-[#65534A] space-y-1.5">
                      <div className="flex items-center gap-2 font-medium text-[#2E1A11]">
                        <User size={14} className="text-[#8C3E1A]" />
                        <span>
                          {course.createdBy.firstName} {course.createdBy.lastName}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={14} className="text-[#65534A]/70" />
                        <span className="truncate">{course.createdBy.email}</span>
                      </div>
                    </div>
                  )}

                  {/* Interactive Conditional Buttons Action Grid */}
                  <div className="grid grid-cols-2 gap-3 mt-auto">

                    {/* 1. STUDENT BUTTON LOGIC */}
                    {role === "student" && (
                      course.isEnrolled ? (
                        <button
                          onClick={() => navigate(`/main-course/${course._id}`)}
                          className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold py-2.5 px-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-1"
                        >
                          <BookOpen size={16} />
                          Go To Course
                        </button>
                      ) : (
                        <button
                          onClick={() => enrollChange(course)}
                          className={`font-bold py-2.5 px-4 rounded-xl text-sm transition-colors text-white ${isFree
                            ? 'bg-emerald-700 hover:bg-emerald-800'
                            : 'bg-[#8C3E1A] hover:bg-[#733214]'
                            }`}
                        >
                          {isFree ? 'Enroll Now' : 'Buy Now'}
                        </button>
                      )
                    )}

                    {/* 2. TEACHER BUTTON LOGIC (Verifies course creator ID matching current logged user) */}
                    {
                      role === "teacher" && course.createdBy?._id === currentUserId?(
                        <button
                          onClick={() => navigate(`/main-course/${course._id}`)}
                          className="bg-[#8C3E1A] hover:bg-[#733214] text-white font-bold py-2.5 px-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-1"
                        >
                          <Edit3 size={16} />
                          Edit Course
                        </button>
                      ) :null
                    }

                    {/* anuradha paudwal */}

                    {/* 3. ADMIN BUTTON LOGIC */}
                    {role === "admin" && (
                      <button
                        onClick={() => navigate(`/main-course/${course._id}`)}
                        className="bg-[#2E1A11] hover:bg-black text-white font-bold py-2.5 px-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-1"
                      >
                        <Settings size={16} />
                        Manage Course
                      </button>
                    )}

                    {/* Default Details Action Element on right side */}

                    {
                      role === "student" && course?.isEnrolled ? (
                        <Link
                          to={`/main-course/${course._id}`}
                          className="bg-[#FAF6F0] hover:bg-[#EFE9DF] text-[#2E1A11] font-bold py-2.5 px-4 rounded-xl text-sm transition-colors text-center inline-flex items-center justify-center gap-1 border border-[#EFE9DF]"
                        >
                          Details
                          <ArrowRight size={14} />
                        </Link>
                      ) : (
                        <Link
                          to={`/course-details/${course._id}`}
                          className="bg-[#FAF6F0] hover:bg-[#EFE9DF] text-[#2E1A11] font-bold py-2.5 px-4 rounded-xl text-sm transition-colors text-center inline-flex items-center justify-center gap-1 border border-[#EFE9DF]"
                        >
                          Details
                          <ArrowRight size={14} />
                        </Link>
                      )
                    }


                  </div>

                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Courses;