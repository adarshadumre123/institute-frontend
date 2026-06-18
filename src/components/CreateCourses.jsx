// http://localhost:8000/api/v1/course/create-course

import React, { useState } from 'react'
import { toast } from 'sonner'
import axios from "axios";
import Courses from '../pages/Courses';


const CreateCourses = () => {

  const handleChange=(e)=>{
     setCourses((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  const[courses,setCourses]=useState({
    "course":"",
    "subject":"",
    "description":"",
    "price":"",
})



const[loading,setLoading]=useState(false)

const createCourses=async()=>{
  setLoading(true)
  try {
    let token = localStorage.getItem("token");
    const res = await axios.post("http://localhost:8000/api/v1/course/create-course",courses,{
       headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
    }}
  );
  if(res.data.success){
    toast.success("course created successfully")
    setCourses({
       "course":"",
    "subject":"",
    "description":"",
    "price":"",
    })
  }else{
    toast.error("something went wrong")
  }
  } catch (error) {
  toast.error(error.response?.data?.message || "Server error");

  }finally{
    setLoading(false)
  }
}
    
  return (
   <div className="min-h-screen bg-linear-to-br from-indigo-950 via-slate-900 to-black flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl">
        {/* Card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8 md:p-10">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white">
              Create New Course
            </h1>
            <p className="text-gray-300 mt-2">
              Build and publish your next amazing course.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Course */}
            <div>
              <label className="block text-gray-200 mb-2 font-medium">
                Course Name
              </label>
              <input
                type="text"
                name="course"
                value={courses.course}
                onChange={handleChange}
                placeholder="MERN Stack Development"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-gray-200 mb-2 font-medium">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={courses.subject}
                onChange={handleChange}
                placeholder="Web Development"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-200 mb-2 font-medium">
                Description
              </label>
              <textarea
                rows="5"
                name="description"
                value={courses.description}
                onChange={handleChange}
                placeholder="Write a detailed description about your course..."
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-200 mb-2 font-medium">
                Price ()
              </label>
              <input
                type="text"
                name="price"
                value={courses.price}
                onChange={handleChange}
                placeholder="99"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>

            {/* Button */}
            <button
              onClick={createCourses}
              disabled={loading}
              className="w-full py-3 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex justify-center items-center gap-2">
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Creating...
                </div>
              ) : (
                "Create Course"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCourses

