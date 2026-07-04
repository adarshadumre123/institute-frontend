import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';

const Database = () => {
  const[data,setData]=useState(null)
  const getDataForAdmin=async()=>{
    try {
      const token = localStorage.getItem("token");
      console.log(token);
  
      const res = await axios.get("http://localhost:8000/api/v1/database/get-database",{
        headers:{
          authorization:`Bearer ${token}`
        }
      })
      if(res.data.success){
        setData(res.data)
      }
    } catch (error) {
            toast.error(error.response?.data?.message || "Server error");
      
    }
  }

useEffect(() => {
  getDataForAdmin()
}, [])
  return (
  <div className="min-h-screen bg-gray-100 p-6">
    <h1 className="text-3xl font-bold mb-8">Database Dashboard</h1>

    {data ? (
      <>
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Courses</h2>
            <p className="text-3xl font-bold text-blue-600">
              {data.courses.length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Enrollments</h2>
            <p className="text-3xl font-bold text-green-600">
              {data.enrollments.length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Exams</h2>
            <p className="text-3xl font-bold text-red-600">
              {data.exams.length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Assignments</h2>
            <p className="text-3xl font-bold text-purple-600">
              {data.assignments.length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Classes</h2>
            <p className="text-3xl font-bold text-yellow-600">
              {data.classes.length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Students Enrolled</h2>
            <p className="text-3xl font-bold text-indigo-600">
              {data.enrollments.length}
            </p>
          </div>
        </div>

        {/* Enrollments Table */}
        <div className="bg-white rounded-xl shadow">
          <div className="p-5 border-b">
            <h2 className="text-xl font-semibold">
              Recent Enrollments
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">User</th>
                  <th className="p-3 text-left">role</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Course</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Subject</th>
                  <th className="p-3 text-left">Price</th>
                </tr>
              </thead>

              <tbody>
                {data.enrollments.map((item) => (
                  <tr
                    key={item._id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-3">
                      {item.student.firstName} {item.student.lastName}
                    </td>
                    <td className="p-3">
                      {item.student.role}
                    </td>

                    <td className="p-3">
                      {item.student.email}
                    </td>

                    <td className="p-3">
                      {item.course.course}
                    </td>
                    <td className="p-3">
                      {item.student.phone}
                    </td>

                    <td className="p-3">
                      {item.course.subject}
                    </td>

                    <td className="p-3">
                      Rs. {item.course.price || 0}
                    </td>
                    
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        

        {/* Course List */}
        <div className="mt-10 bg-white rounded-xl shadow p-5">
          <h2 className="text-xl font-semibold mb-5">
            All Courses
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.courses.map((course) => (
              <div
                key={course._id}
                className="border rounded-lg p-4 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold">
                  {course.course}
                </h3>

                <p className="text-gray-500">
                  {course.subject}
                </p>

                <p className="mt-2 font-semibold text-green-600">
                  Rs. {course.price || 0}
                </p>
              </div>
            ))}
          </div>
        </div>
      </>
    ) : (
      <div className="text-center mt-20">
        <h2 className="text-xl font-semibold">Loading...</h2>
      </div>
    )}
  </div>
);
  
}

export default Database