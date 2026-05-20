import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Clock,
  BookOpen,
  CalendarDays,
  PlayCircle,
  Pencil,
} from "lucide-react";
import axios from "axios";


const Exam = () => {
  const [exams, setExam] = useState([]);

  const getAllExams = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get('http://localhost:8000/api/v1/exams/get-Exam',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },

        }
      );
      setExam(res.data.exam)
    } catch (error) {
      console.log(error);
       
    }
    console.log(exams)
  }
  useEffect(() => {
    getAllExams();
    console.log(exams)
  }, []);




  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Online Exams
        </h1>

        <p className="text-gray-500 mt-2">
          Join your scheduled exams and complete them on time.
        </p>
      </div>

      {/* Exam Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        { exams? exams.map((exams) => (
          <div
            key={exams.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            {/* Status */}
            <div className="flex justify-between items-center mb-5">
              <span
                className={`px-4 py-1 rounded-full text-sm font-semibold ${exams.status === "Live"
                    ? "bg-green-100 text-green-600"
                    : exams.status === "Scheduled"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-200 text-gray-600"
                  }`}
              >
                {exams.status}
              </span>

              <BookOpen className="text-indigo-600" />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {exams.title}
            </h2>

            <p className="text-gray-500 mb-5">
              Subject: {exams.subject}
            </p>

            {/* Exam Details */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-gray-600">
                <Clock size={18} />
                <span>{exams.duration} Minutes</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <BookOpen size={18} />
                <span>
                  {exams.totalQuestions} Questions
                </span>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <CalendarDays size={18} />
                <span>
                  {exams.startTime} - {exams.endTime}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2">
                <PlayCircle size={20} />
                Join Exam
              </button>
              <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2">
                <Pencil size={20} />
                Edit
              </button>

              <Link  to={`/examdetails/${exams._id}`} className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-xl font-semibold transition"> 
              Details 
               </Link> 
            </div>
          </div>
        )
      ): <p>
                loading...
                <Loader className='animate-spin rounded-full h-10 w-10  border-t-transparent'/>
                </p>
    }
      </div>
    </div>
  );
};

export default Exam;