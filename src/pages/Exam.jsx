import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";
import {
  Clock,
  BookOpen,
  CalendarDays,
  PlayCircle,
  Pencil,
  Loader,
} from "lucide-react";
import axios from "axios";

const Exam = () => {
  const [exams, setExam] = useState([]);
  const [loading, setLoading] = useState(true);

  const {id}=useParams();



  const role = localStorage.getItem("role")?.trim().toLowerCase();


  const deleteExam=async(id)=>{
    
    try {
      const token = localStorage.getItem("token")
      const res = await axios.delete(`http://localhost:8000/api/v1/exams/delete/${id}`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      if (res.data.success){
        toast.success("exam delete successfully")
        setExam(prev=>prev.filter(exams=>exams._id!==id))
      }
    } catch (error) {
       toast.error(error.response?.data?.message || "Delete failed");

    }
  }

  const handleDelete=(id)=>{
    const confirm=window.confirm("Are you sure to delete");
    if(confirm){
      deleteExam(id)
    }
  }

  const getAllExams = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:8000/api/v1/exams/get-Exam",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setExam(res.data.exam);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllExams();
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

      {/* Loading */}
      {loading ? (
        <div className="flex flex-col items-center gap-5">
          <Loader className="animate-spin h-16 w-16 text-blue-600" />

          <p className="text-2xl font-bold text-gray-700">
            Loading Exams...
          </p>
        </div>
      ) : exams.length > 0 ? (
        /* Exam Cards */
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {exams.map((exam) => (
            <div
              key={exam._id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              {/* Status */}
              <div className="flex justify-between items-center mb-5">
                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold ${exam.status === "Live"
                      ? "bg-green-100 text-green-600"
                      : exam.status === "Scheduled"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-200 text-gray-600"
                    }`}
                >
                  {exam.status}
                </span>

                <BookOpen className="text-indigo-600" />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {exam.title}
              </h2>

              <p className="text-gray-500 mb-5">
                Subject: {exam.subject}
              </p>

              {/* Exam Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock size={18} />
                  <span>{exam.duration} Minutes</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <BookOpen size={18} />
                  <span>{exam.totalQuestions} Questions</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <CalendarDays size={18} />
                  <span>
                    {exam.startTime} - {exam.endTime}
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 flex-wrap">
                <Link to={`/join-exam/${exam._id}`} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2">
                  <PlayCircle size={20} />
                  Join Exam
                </Link>

                <Link
                  to={`/examdetails/${exam._id}`}
                  className="flex-1 text-center bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-xl font-semibold transition"
                >
                  Details
                </Link>

                {(role === "teacher" || role === "admin") && (
                  <>
                    <Link
                      to={`/updateExam/${exam._id}`}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg"
                    >
                      Edit
                    </Link>

                    <button onClick={()=>handleDelete(exam._id)} className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2">
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* No Exams */
        <div className="text-center text-gray-600 text-xl font-semibold">
          No Exams Found
        </div>
      )}
    </div>
  );
};

export default Exam;