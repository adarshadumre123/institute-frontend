// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { toast } from "sonner";
// import {
//   Clock,
//   BookOpen,
//   CalendarDays,
//   PlayCircle,
//   Pencil,
//   Loader,
// } from "lucide-react";
// import axios from "axios";

// const Exam = () => {
//   const {courseId}=useParams()
//   const [exams, setExam] = useState([]);
//   const [loading, setLoading] = useState(true);




//   const role = localStorage.getItem("role")?.trim().toLowerCase();


//   const deleteExam=async(id)=>{
    
//     try {
//       const token = localStorage.getItem("token")
//       const res = await axios.delete(`http://localhost:8000/api/v1/exams/delete/${id}`,{
//         headers:{
//           Authorization:`Bearer ${token}`
//         }
//       })
//       if (res.data.success){
//         toast.success("exam delete successfully")
//         setExam(prev=>prev.filter(exams=>exams._id!==id))
//       }
//     } catch (error) {
//        toast.error(error.response?.data?.message || "Delete failed");

//     }
//   }

//   const handleDelete=(id)=>{
//     const confirm=window.confirm("Are you sure to delete");
//     if(confirm){
//       deleteExam(id)
//     }
//   }

//   const getAllExams = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const res = await axios.get(
//         "http://localhost:8000/api/v1/exams/get-Exam",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setExam(res.data.exam);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getAllExams();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       {/* Header */}
//       <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
//         <h1 className="text-3xl font-bold text-gray-800">
//           Online Exams
//         </h1>

//         <p className="text-gray-500 mt-2">
//           Join your scheduled exams and complete them on time.
//         </p>
//       </div>

//       {/* Loading */}
//       {loading ? (
//         <div className="flex flex-col items-center gap-5">
//           <Loader className="animate-spin h-16 w-16 text-blue-600" />

//           <p className="text-2xl font-bold text-gray-700">
//             Loading Exams...
//           </p>
//         </div>
//       ) : exams.length > 0 ? (
//         /* Exam Cards */
//         <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
//           {exams.map((exam) => (
//             <div
//               key={exam._id}
//               className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
//             >
//               {/* Status */}
//               <div className="flex justify-between items-center mb-5">
//                 <span
//                   className={`px-4 py-1 rounded-full text-sm font-semibold ${exam.status === "Live"
//                       ? "bg-green-100 text-green-600"
//                       : exam.status === "Scheduled"
//                         ? "bg-yellow-100 text-yellow-700"
//                         : "bg-gray-200 text-gray-600"
//                     }`}
//                 >
//                   {exam.status}
//                 </span>

//                 <BookOpen className="text-indigo-600" />
//               </div>

//               {/* Title */}
//               <h2 className="text-2xl font-bold text-gray-800 mb-2">
//                 {exam.title}
//               </h2>

//               <p className="text-gray-500 mb-5">
//                 Subject: {exam.subject}
//               </p>

//               {/* Exam Details */}
//               <div className="space-y-4 mb-6">
//                 <div className="flex items-center gap-3 text-gray-600">
//                   <Clock size={18} />
//                   <span>{exam.duration} Minutes</span>
//                 </div>

//                 <div className="flex items-center gap-3 text-gray-600">
//                   <BookOpen size={18} />
//                   <span>{exam.totalQuestions} Questions</span>
//                 </div>

//                 <div className="flex items-center gap-3 text-gray-600">
//                   <CalendarDays size={18} />
//                   <span>
//                     {exam.startTime} - {exam.endTime}
//                   </span>
//                 </div>
//               </div>

//               {/* Buttons */}
//               <div className="flex gap-2 flex-wrap">
//                 <Link to={`/join-exam/${exam._id}`} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2">
//                   <PlayCircle size={20} />
//                   Join Exam
//                 </Link>

//                 <Link
//                   to={`/exam-details/${exam._id}`}
//                   className="flex-1 text-center bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-xl font-semibold transition"
//                 >
//                   Details
//                 </Link>

//                 {(role === "teacher" || role === "admin") && (
//                   <>
//                     <Link
//                       to={`/updateExam/${exam._id}`}
//                       className="bg-green-600 text-white px-4 py-2 rounded-lg"
//                     >
//                       Edit
//                     </Link>

//                     <button onClick={()=>handleDelete(exam._id)} className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2">
//                       Delete
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         /* No Exams */
//         <div className="text-center text-gray-600 text-xl font-semibold">
//           No Exams Found
//         </div>
//       )}
//     </div>
//   );
// };

// export default Exam;


import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";
import {
  Clock,
  BookOpen,
  CalendarDays,
  PlayCircle,
  Loader,
} from "lucide-react";
import axios from "axios";

const Exam = () => {
  const { courseId } = useParams();
  const [exams, setExam] = useState([]);
  const [loading, setLoading] = useState(true);

  const role = localStorage.getItem("role")?.trim().toLowerCase();

  const deleteExam = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(`http://localhost:8000/api/v1/exams/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data.success) {
        toast.success("Exam deleted successfully");
        setExam(prev => prev.filter(exam => exam._id !== id));
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed");
    }
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this exam?");
    if (confirm) {
      deleteExam(id);
    }
  };

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
    // Outer layout shell managing screen limits
    <div className="flex w-full min-h-screen bg-[#F8F6F2] overflow-hidden">
      
      

      {/* Main Content Area - min-w-0 holds structural columns true */}
      <main className="flex-1 min-w-0 p-6 overflow-y-auto">
        
        {/* Header section */}
        <div className="bg-white shadow-sm rounded-2xl p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Online Exams
          </h1>
          <p className="text-gray-500 mt-2">
            Join your scheduled exams and complete them on time.
          </p>
        </div>

        {/* Loading state handling */}
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[50vh] gap-5">
            <Loader className="animate-spin h-12 w-12 text-indigo-600" />
            <p className="text-xl font-semibold text-gray-600">
              Loading Exams...
            </p>
          </div>
        ) : exams.length > 0 ? (
          /* Responsive Layout Exam Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {exams.map((exam) => (
              <div
                key={exam._id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Status Badges Header */}
                  <div className="flex justify-between items-center mb-5">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        exam.status === "Live"
                          ? "bg-green-100 text-green-600"
                          : exam.status === "Scheduled"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {exam.status}
                    </span>
                    <BookOpen size={20} className="text-indigo-600" />
                  </div>

                  {/* Title details */}
                  <h2 className="text-xl font-bold text-gray-800 mb-1 line-clamp-2">
                    {exam.title}
                  </h2>
                  <p className="text-sm text-gray-400 font-medium mb-5">
                    Subject: {exam.subject}
                  </p>

                  {/* Operational spec records */}
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock size={16} className="text-gray-400" />
                      <span>{exam.duration} Minutes</span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-600">
                      <BookOpen size={16} className="text-gray-400" />
                      <span>{exam.totalQuestions} Questions</span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-600">
                      <CalendarDays size={16} className="text-gray-400" />
                      <span className="truncate">
                        {exam.startTime} - {exam.endTime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Grid UI Call To Actions */}
                <div className="flex gap-2 flex-wrap pt-4 border-t border-gray-50 mt-auto">
                  <Link 
                    to={`/join-exam/${exam._id}`} 
                    className="flex-1 min-w-25 bg-[#8C3E1A] hover:bg-[#5e2004] text-white py-2.5 rounded-xl text-sm font-semibold transition flex items-center justify-center gap-2"
                  >
                    <PlayCircle size={16} />
                    Join
                  </Link>

                  <Link
                    to={`/exam-details/${exam._id}`}
                    className="flex-1 min-w-20 text-center bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 rounded-xl text-sm font-semibold transition"
                  >
                    Details
                  </Link>

                  {(role === "teacher" || role === "admin") && (
                    <div className="w-full flex gap-2 mt-2">
                      <Link
                        to={`/updateExam/${exam._id}`}
                        className="flex-1 text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl text-sm font-semibold transition"
                      >
                        Edit
                      </Link>

                      <button 
                        onClick={() => handleDelete(exam._id)} 
                        className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 py-2 rounded-xl text-sm font-semibold transition"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty structural state wrapper */
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center text-gray-400 font-medium border border-dashed border-gray-200">
            No Exams Found
          </div>
        )}
      </main>
    </div>
  );
};

export default Exam;