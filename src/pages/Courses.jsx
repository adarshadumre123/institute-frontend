import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BookOpen,
  DollarSign,
  FileText,
  GraduationCap,
  Plus,
  Loader
} from "lucide-react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "sonner";


const Courses = () => {
  const navigate=useNavigate();

  const [courses, setCourses] = useState([]);

  const role = localStorage.getItem("role")?.trim().toLowerCase();


  const getAllCourses = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:8000/api/v1/course/get-course",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCourses(res.data.course);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  const enrollChange=(course)=>{
    if(course.price===0 || course.price==="free"){
      navigate(`/main-course/${course._id}`)
      toast.success("Course enrolled successfully")
    }else{
      toast.error("Pay your courses")
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-50 to-indigo-100 py-10 px-4">

      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center">
          Explore Courses
        </h1>
        {(role === "admin" || role === "teacher") && (

          <Link to={'/create-course'} className=" flex absolute top-10 right-40 font-bold bg-blue-700 w-35 h-10 items-center rounded-xl text-shadow-white justify-center cursor-pointer">
            <Plus className="text-white" />
            <p className="text-white">Add Courses</p>
          </Link>

        )}

        <p className="text-center text-gray-500 mt-3 text-lg">
          Learn new skills and grow your knowledge
        </p>
      </div>

      {/* Courses Grid */}


      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group hover:-translate-y-2"
          >

            {/* Top Banner */}
            <div className="bg-linear-to-r from-blue-600 to-indigo-600 h-32 flex items-center justify-center">
              <GraduationCap
                size={60}
                className="text-white group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6">

              {/* Course Name */}
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="text-blue-600" size={22} />
                <h2 className="text-2xl font-bold text-gray-800">
                  {course.course}
                </h2>
              </div>

              {/* Subject */}
              <div className="flex items-center gap-2 mb-3">
                <FileText className="text-indigo-500" size={18} />
                <p className="text-gray-700 font-medium">
                  {course.subject}
                </p>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <FileText className="text-indigo-500" size={18} />
                <p className="text-gray-700 font-medium">
                Created By :  {course.createdBy.firstName} { course.createdBy.lastName}
                </p>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <FileText className="text-indigo-500" size={18} />
                <p className="text-gray-700 font-medium">
                email :  {course.createdBy.email}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {course.description}
              </p>

              {/* Price */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <DollarSign className="text-green-600" size={20} />
                  <span className="text-2xl font-bold text-green-600">
                     {course.price}
                  </span>
                </div>

                <button onClick={()=>enrollChange(course)} className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-semibold transition duration-300">
                  Enroll
                </button>
                <Link to={`/course-details/${course._id}`} className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-semibold transition duration-300">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {courses.length === 0 && (
        <div className="flex flex-col items-center gap-5">

          <Loader className="animate-spin h-16 w-16 text-blue-600" />

          <p className="text-2xl font-bold text-gray-700">
            Loading Courses...
          </p>

        </div>
      )}
    </div>
  );
};

export default Courses;