// import axios from 'axios';
// import React, { useState } from 'react'
// import { toast } from 'sonner';

// const Subject = () => {
//     const [subject, setSubject] = useState({
//         "subjectName": "",
//         "description": "",
        
//     });

//     const [loading, setLoading] = useState(false)
//     const handleChange = (e) => {
//         setSubject((prev) => ({
//             ...prev,
//             [e.target.name]: e.target.value
//         }))
//     }

//     const subjectSubmit = async() => {
//         setLoading(true)
//         try {
//             const token = localStorage.getItem("token");
//             const res = await axios.post("", subject, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                     "Content-Type": "application/json",
//                 }
//             })
//             if (res.data.success) {
//                 toast("subject created successfully")
//                 setSubject({
//                     "subjectName": "",
//                     "description": ""
//                 })
//             } else {
//                 toast.error("Not able to create subject")
//             }
//         } catch (error) {
//             toast.error(error.response?.data?.message || "Server error");

//         }finally {
//             setLoading(false)
//         }
//     }
//     return (
//         <div>Subject</div>
//     )
// }

// export default Subject


import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { BookOpen, FileText, ArrowLeft } from "lucide-react";

const Subject = () => {
  const { courseId } = useParams();

  const [subject, setSubject] = useState({
    subjectName: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSubject((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const subjectSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/subject/create", // Change to your API
        {
          ...subject,
          course: courseId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.success) {
        toast.success("Subject created successfully");

        setSubject({
          subjectName: "",
          description: "",
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-6">

      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* Header */}

        <div className="bg-linear-to-r from-blue-600 to-indigo-700 p-8 text-white">

          <button className="flex items-center gap-2 text-sm hover:text-gray-200">
            <ArrowLeft size={18} />
            Back to Course
          </button>

          <h1 className="text-4xl font-bold mt-5">
            Create New Subject
          </h1>

          <p className="mt-2 text-blue-100">
            Add a new subject to this course.
          </p>

        </div>

        {/* Form */}

        <form
          onSubmit={subjectSubmit}
          className="p-8 space-y-6"
        >

          {/* Subject Name */}

          <div>

            <label className="font-semibold text-gray-700 mb-2 block">
              Subject Name
            </label>

            <div className="relative">

              <BookOpen
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />

              <input
                type="text"
                name="subjectName"
                value={subject.subjectName}
                onChange={handleChange}
                placeholder="Enter subject name"
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

            </div>

          </div>

          {/* Description */}

          <div>

            <label className="font-semibold text-gray-700 mb-2 block">
              Description
            </label>

            <div className="relative">

              <FileText
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />

              <textarea
                rows={6}
                name="description"
                value={subject.description}
                onChange={handleChange}
                placeholder="Write subject description..."
                className="w-full border rounded-xl pl-12 pr-4 py-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
              />

            </div>

          </div>

          {/* Button */}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold text-lg hover:scale-[1.02] transition duration-300 disabled:opacity-50"
          >
            {loading ? "Creating Subject..." : "Create Subject"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default Subject;