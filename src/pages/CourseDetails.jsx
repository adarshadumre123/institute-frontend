import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { toast } from "sonner";
import {
  BookOpen,
  User,
  DollarSign,
  Clock,
  Award,
  CheckCircle,
} from "lucide-react";
import api from "../utils/api";


const CourseDetails = () => {
  const [courseDetails, setCourseDetails] = useState(null);

  const { courseId } = useParams();

  const getCourseDetails = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get(
        `/api/v1/course/get-course-id/${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCourseDetails(res.data.course);
    } catch (error) {
      toast.error(error.response?.data?.message || "Server error");
    }
  };



  useEffect(() => {
    if (courseId) {
      getCourseDetails();
    }
  }, [courseId]);

  if (!courseDetails) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#F8F6F2]">
        <div className="w-12 h-12 border-4 border-[#8C3E1A] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }



  return (
    <div className="h-fit bg-[#F8F6F2] text-[#2E1A11]">
      {/* Hero */}
      <div className="bg-[#f7f5f5] text-[#2E1A11] rounded-b-3xl shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <span className="bg-[#8C3E1A] text-[#f7f5f5] px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
            {courseDetails.subject}
          </span>

          <h1 className="text-5xl font-bold mt-4 text-[#8C3E1A]">
            {courseDetails.course}
          </h1>

          <p className="mt-5 text-lg text-[#9ea1a1] max-w-3xl">
            {courseDetails.shortDescription}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 py-10 px-6">

        {/* Left */}
        <div className="lg:col-span-2 space-y-8">

          <div className="bg-white rounded-2xl shadow-xs border border-[#EFE9DF] p-8">
            <h2 className="text-2xl font-bold mb-5 text-[#2E1A11]">
              Course Description
            </h2>

            <p className="text-[#65534A] leading-8">
              {courseDetails.longDescription}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xs border border-[#EFE9DF] p-8">
            <h2 className="text-2xl font-bold mb-5 text-[#2E1A11]">
              Course Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <p className="text-[#65534A]/70 text-sm">Course Name</p>
                <h3 className="font-semibold text-lg text-[#2E1A11]">
                  {courseDetails.course}
                </h3>
              </div>

              <div>
                <p className="text-[#65534A]/70 text-sm">Subject</p>
                <h3 className="font-semibold text-lg text-[#2E1A11]">
                  {courseDetails.subject}
                </h3>
              </div>

              <div>
                <p className="text-[#65534A]/70 text-sm">Instructor</p>
                <h3 className="font-semibold text-lg text-[#2E1A11]">
                  {courseDetails.createdBy?.firstName}{" "}
                  {courseDetails.createdBy?.lastName}
                </h3>
              </div>

              <div>
                <p className="text-[#65534A]/70 text-sm">Students</p>
                <h3 className="font-semibold text-lg text-[#2E1A11]">
                  {courseDetails.enrolledStudents?.length || 0}
                </h3>
              </div>

            </div>
          </div>

        </div>

        {/* Right Sidebar */}

        <div>

          <div className="bg-white rounded-2xl shadow-md border border-[#EFE9DF] sticky top-6 p-8">

            <h2 className="text-4xl font-black text-[#8C3E1A]">
              Rs. {courseDetails.price}
            </h2>
            {
              courseDetails?.isEnrolled ? (
                null
              ) :
                <button className="mt-6 w-full bg-[#8C3E1A] hover:bg-[#733214] text-white py-3 rounded-xl font-semibold transition shadow-sm">
                  Enroll Now
                </button>
            }

            <div className="border-t border-[#EFE9DF] mt-8 pt-8 space-y-5">

              <div className="flex justify-between">
                <span className="text-[#65534A]">Subject</span>
                <span className="font-medium text-[#2E1A11]">
                  {courseDetails.subject}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#65534A]">Instructor</span>
                <span className="font-medium text-[#2E1A11]">
                  {courseDetails.createdBy?.firstName}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#65534A]">Students</span>
                <span className="font-medium text-[#2E1A11]">
                  {courseDetails.enrolledStudents?.length || 0}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#65534A]">Created</span>
                <span className="font-medium text-[#2E1A11]">
                  {new Date(courseDetails.createdAt).toLocaleDateString()}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>

  )
};

export default CourseDetails;