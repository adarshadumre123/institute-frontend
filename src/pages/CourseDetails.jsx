


import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation,useParams } from "react-router-dom";
import { toast } from "sonner";
import {
  BookOpen,
  User,
  DollarSign,
  Clock,
  Award,
  CheckCircle,
} from "lucide-react";


const CourseDetails = () => {
  const [courseDetails, setCourseDetails] = useState(null);

  const { courseId } = useParams();

  const getCourseDetails = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `http://localhost:8000/api/v1/course/get-course-id/${courseId}`,
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
    if (courseId){
      getCourseDetails();
    }
  }, [courseId]);

  if (!courseDetails) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }



  return (
  <div className="h-fit bg-slate-100">
    {/* Hero */}
    <div className="bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-b-3xl">
  <div className="max-w-7xl mx-auto px-6 py-14">
    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
      {courseDetails.subject}
    </span>

    <h1 className="text-5xl font-bold mt-4">
      {courseDetails.course}
    </h1>

    <p className="mt-5 text-lg text-indigo-100 max-w-3xl">
      {courseDetails.shortDescription}
    </p>
  </div>
</div>

    {/* Body */}
    <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 py-10 px-6">

  {/* Left */}
  <div className="lg:col-span-2 space-y-8">

    <div className="bg-white rounded-2xl shadow p-8">
      <h2 className="text-2xl font-bold mb-5">
        Course Description
      </h2>

      <p className="text-gray-600 leading-8">
        {courseDetails.longDescription}
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow p-8">
      <h2 className="text-2xl font-bold mb-5">
        Course Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <p className="text-gray-500">Course Name</p>
          <h3 className="font-semibold text-lg">
            {courseDetails.course}
          </h3>
        </div>

        <div>
          <p className="text-gray-500">Subject</p>
          <h3 className="font-semibold text-lg">
            {courseDetails.subject}
          </h3>
        </div>

        <div>
          <p className="text-gray-500">Instructor</p>
          <h3 className="font-semibold text-lg">
            {courseDetails.createdBy?.firstName}{" "}
            {courseDetails.createdBy?.lastName}
          </h3>
        </div>

        <div>
          <p className="text-gray-500">Students</p>
          <h3 className="font-semibold text-lg">
            {courseDetails.enrolledStudents?.length || 0}
          </h3>
        </div>

      </div>
    </div>

  </div>

  {/* Right Sidebar */}

  <div>

    <div className="bg-white rounded-2xl shadow-lg sticky top-6 p-8">

      <h2 className="text-4xl font-bold text-indigo-600">
        Rs. {courseDetails.price}
      </h2>
{
  courseDetails?.isEnrolled?(
    null
      ):
      <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition">
        Enroll Now
      </button>
}

      <div className="border-t mt-8 pt-8 space-y-5">

        <div className="flex justify-between">
          <span>Subject</span>
          <span className="font-medium">
            {courseDetails.subject}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Instructor</span>
          <span>
            {courseDetails.createdBy?.firstName}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Students</span>
          <span>
            {courseDetails.enrolledStudents?.length || 0}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Created</span>
          <span>
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