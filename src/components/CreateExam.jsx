import React, { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";
const CreateExam = () => {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    title: "",
    subject: "",
    description: "",
    duration: "",
    totalQuestions: "",
    totalMarks: "",
    passingMarks: "",
    startTime: "",
    endTime: "",
  });


  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const createExam = async (e) => {
    e.preventDefault();
    
    try {
         const token = localStorage.getItem("token");

      setLoading(true);

      const res = await axios.post(
        "http://localhost:8000/api/v1/exams/create",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.success) {
        toast.success(res.data.message || "Exam created successfully");
        setData({
          title: "",
          subject: "",
          description: "",
          duration: "",
          totalQuestions: "",
          totalMarks: "",
          passingMarks: "",
          startTime: "",
          endTime: "",
        });
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
    toast.error(error.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create New Exam
        </h2>

        <form onSubmit={createExam} className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            type="text"
            name="title"
            placeholder="Exam Title"
            value={data.title}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={data.subject}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="number"
            name="duration"
            placeholder="Duration (minutes)"
            value={data.duration}
            onChange={handleChange}
            className="p-3 border rounded-lg"
          />

          <input
            type="number"
            name="totalQuestions"
            placeholder="Total Questions"
            value={data.totalQuestions}
            onChange={handleChange}
            className="p-3 border rounded-lg"
          />

          <input
            type="number"
            name="totalMarks"
            placeholder="Total Marks"
            value={data.totalMarks}
            onChange={handleChange}
            className="p-3 border rounded-lg"
          />

          <input
            type="number"
            name="passingMarks"
            placeholder="Passing Marks"
            value={data.passingMarks}
            onChange={handleChange}
            className="p-3 border rounded-lg"
          />

          <input
            type="datetime-local"
            name="startTime"
            value={data.startTime}
            onChange={handleChange}
            className="p-3 border rounded-lg"
          />

          <input
            type="datetime-local"
            name="endTime"
            value={data.endTime}
            onChange={handleChange}
            className="p-3 border rounded-lg"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={data.description}
            onChange={handleChange}
            className="p-3 border rounded-lg md:col-span-2 h-28 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            {loading ? "Creating..." : "Create Exam"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateExam;