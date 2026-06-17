import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'sonner'
import { FileText, BookOpen, Layers, Hash } from "lucide-react";


const CreateAssignment = () => {

    
  const handleChange=(e)=>{
     SetAssignment((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

    const[loading,setLoading]=useState(false)
    const [assignment, SetAssignment] = useState({
        "title": "",
        "subject": "",
        "course": "",
        "description": "",
        "totalQuestions": "",
    })
    const createAssignment = async () => {
        try {
            setLoading(true)
            const token = localStorage.getItem("token");
            const res = await axios.post("http://localhost:8000/api/v1/assignment/create-assignment", assignment, {
                headers: {
                    authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            })
            if (res.data.success) {
                toast.success("assignment created successfully")
                SetAssignment({
                    "title": "",
                    "subject": "",
                    "course": "",
                    "description": "",
                    "totalQuestions": "",
                })
            }
        } catch (error) {
            toast.error("something went wrong")
        }finally{
            setLoading(false)
        }
    }
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-50 to-indigo-100 flex justify-center items-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-8">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Create Assignment
          </h1>
          <p className="text-gray-500 mt-2">
            Generate assignments for your students
          </p>
        </div>

        <div className="space-y-6">

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Assignment Title
            </label>
            <div className="relative">
              <FileText className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                name="title"
                value={assignment.title}
                onChange={handleChange}
                placeholder="JavaScript DOM Assignment"
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <div className="relative">
              <BookOpen className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                name="subject"
                value={assignment.subject}
                onChange={handleChange}
                placeholder="Web Development"
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Course */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course
            </label>
            <div className="relative">
              <Layers className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                name="course"
                value={assignment.course}
                onChange={handleChange}
                placeholder="MERN Stack"
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Total Questions */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Questions
            </label>
            <div className="relative">
              <Hash className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="number"
                name="totalQuestions"
                value={assignment.totalQuestions}
                onChange={handleChange}
                placeholder="10"
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              rows="5"
              name="description"
              value={assignment.description}
              onChange={handleChange}
              placeholder="Describe the assignment..."
              className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            />
          </div>

          {/* Button */}
          <button
            onClick={createAssignment}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300 disabled:opacity-60"
          >
            {loading ? "Creating Assignment..." : "Create Assignment"}
          </button>

        </div>
      </div>
    </div>

    )
}

export default CreateAssignment