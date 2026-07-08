// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   BookOpen,
//   DollarSign,
//   FileText,
//   GraduationCap,
//   Plus,
//   Loader
// } from "lucide-react";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import { toast } from "sonner";

// const Courses = () => {

//   const navigate=useNavigate();

//   const [courses, setCourses] = useState([]);


//   const role = localStorage.getItem("role")?.trim().toLowerCase();








//   const getAllCourses = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const res = await axios.get(
//         "http://localhost:8000/api/v1/course/get-course",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setCourses(res.data.course);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   useEffect(() => {
//     getAllCourses();
//   }, []);

//  const enrollChange = async (course) => {
//   try {
//     const token = localStorage.getItem("token");

//     // Free Course
//     if (Number(course.amount) === 0) {
//       const { data } = await axios.post(
//         "http://localhost:8000/api/v1/enrollment/enroll",
//         {
//           courseId: course._id,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       toast.success(data.message);

//       navigate(`/main-course/${course._id}`);

//       return;
//     }

//     // Paid Course
//     const { data } = await axios.post(
//       "http://localhost:8000/api/v1/payment/create-payment",
//       {
//         courseId: course._id,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     const paymentData = data.paymentData;

//     const form = document.createElement("form");

//     form.method = "POST";

//     form.action =
//       "https://rc-epay.esewa.com.np/api/epay/main/v2/form";

//     Object.keys(paymentData).forEach((key) => {
//       const input = document.createElement("input");

//       input.type = "hidden";

//       input.name = key;

//       input.value = paymentData[key];

//       form.appendChild(input);
//     });

//     document.body.appendChild(form);

//     form.submit();

//   } catch (error) {
//     console.log(error);

//     toast.error(
//       error.response?.data?.message || "Something went wrong"
//     );
//   }
// };

//   return (
//     <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-50 to-indigo-100 py-10 px-4">

//       {/* Heading */}
//       <div className="max-w-7xl mx-auto mb-10">
//         <h1 className="text-4xl font-extrabold text-gray-800 text-center">
//           Explore Courses
//         </h1>
//         {(role === "admin" || role === "teacher") && (

//           <Link to={'/create-course'} className=" flex absolute top-10 right-40 font-bold bg-blue-700 w-35 h-10 items-center rounded-xl text-shadow-white justify-center cursor-pointer">
//             <Plus className="text-white" />
//             <p className="text-white">Add Courses</p>
//           </Link>

//         )}

//         <p className="text-center text-gray-500 mt-3 text-lg">
//           Learn new skills and grow your knowledge
//         </p>
//       </div>

//       {/* Courses Grid */}


//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

//         {courses.map((course) => (
//           <div
//             key={course._id}
//             className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group hover:-translate-y-2"
//           >

//             {/* Top Banner */}
//             <div className="bg-linear-to-r from-blue-600 to-indigo-600 h-32 flex items-center justify-center">
//               <GraduationCap
//                 size={60}
//                 className="text-white group-hover:scale-110 transition-transform duration-300"
//               />
//             </div>

//             {/* Content */}
//             <div className="p-6">

//               {/* Course Name */}
//               <div className="flex items-center gap-2 mb-4">
//                 <BookOpen className="text-blue-600" size={22} />
//                 <h2 className="text-2xl font-bold text-gray-800">
//                   {course.course}
//                 </h2>
//               </div>

//               {/* Subject */}
//               <div className="flex items-center gap-2 mb-3">
//                 <FileText className="text-indigo-500" size={18} />
//                 <p className="text-gray-700 font-medium">
//                   {course.subject}
//                 </p>
//               </div>
//               <div className="flex items-center gap-2 mb-3">
//                 <FileText className="text-indigo-500" size={18} />
//                 <p className="text-gray-700 font-medium">
//                 Created By :  {course.createdBy.firstName} { course.createdBy.lastName}
//                 </p>
//               </div>
//               <div className="flex items-center gap-2 mb-3">
//                 <FileText className="text-indigo-500" size={18} />
//                 <p className="text-gray-700 font-medium">
//                 email :  {course.createdBy.email}
//                 </p>
//               </div>

//               {/* Description */}
//               <p className="text-gray-500 text-sm leading-relaxed mb-5">
//                 {course.description}
//               </p>

//               {/* Price */}
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <DollarSign className="text-green-600" size={20} />
//                   <span className="text-2xl font-bold text-green-600">
//                      {course.price}
//                   </span>
//                 </div>
// {
//   course.isEnrolled?(
//     <button className="bg-blue-600 text-white px-5 py-2 rounded-xl" onClick={()=>navigate(`/main-course/${course._id}`)}>view Course</button>
//   ):(
//      <button
//         onClick={() => enrollChange(course)}
//         className="bg-red-900 text-white px-5 py-2 rounded-xl"
//     >
//         Enroll
//     </button>
//   )
// }
                
//                 <Link to={`/main-course/${course._id}`} className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-semibold transition duration-300">
//                   View Details
//                 </Link>

 
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Empty State */}
//       {courses.length === 0 && (
//         <div className="flex flex-col items-center gap-5">

//           <Loader className="animate-spin h-16 w-16 text-blue-600" />

//           <p className="text-2xl font-bold text-gray-700">
//             Loading Courses...
//           </p>

//         </div>
//       )}
//     </div>
//   );
// };

// export default Courses;


import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BookOpen,
  FileText,
  GraduationCap,
  Plus,
  Loader2,
  User,
  Mail,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Courses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const role = localStorage.getItem("role")?.trim().toLowerCase();

  const getAllCourses = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "http://localhost:8000/api/v1/course/get-course",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCourses(res.data.course || []);
    } catch (error) {
      console.error("Error fetching courses:", error);
      toast.error("Failed to load courses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  const enrollChange = async (course) => {
    try {
      const token = localStorage.getItem("token");
      const coursePrice = Number(course.price) || 0;

      // Free Course Enrollment
      if (coursePrice === 0) {
        const { data } = await axios.post(
          "http://localhost:8000/api/v1/enrollment/enroll",
          { courseId: course._id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        toast.success(data.message || "Enrolled successfully!");
        navigate(`/main-course/${course._id}`);
        return;
      }

      // Paid Course - eSewa Integration
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/payment/create-payment",
        { courseId: course._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const paymentData = data.paymentData;
      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";

      Object.keys(paymentData).forEach((key) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = paymentData[key];
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Something went wrong during enrollment"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Top Header Section */}
      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-gray-200 pb-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            Explore Courses <Sparkles className="text-amber-500 fill-amber-500 w-6 h-6" />
          </h1>
          <p className="text-slate-500 mt-2 text-base sm:text-lg font-medium">
            Discover premium learning materials to accelerate your career path.
          </p>
        </div>

        {(role === "admin" || role === "teacher") && (
          <Link
            to="/create-course"
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-3 rounded-xl transition duration-200 shadow-md shadow-indigo-100 self-start md:self-auto"
          >
            <Plus size={20} />
            <span>Add New Course</span>
          </Link>
        )}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <Loader2 className="animate-spin h-12 w-12 text-indigo-600" />
          <p className="text-lg font-semibold text-slate-600">
            Gathering courses for you...
          </p>
        </div>
      )}

      {/* Empty State */}
      {!loading && courses.length === 0 && (
        <div className="max-w-md mx-auto text-center py-16 bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <GraduationCap className="mx-auto h-16 w-16 text-slate-300 mb-4" />
          <h3 className="text-xl font-bold text-slate-800 mb-1">No Courses Available</h3>
          <p className="text-slate-500">Check back later or contact your instructor.</p>
        </div>
      )}

      {/* Courses Grid */}
      {!loading && courses.length > 0 && (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const isFree = Number(course.price) === 0;
            
            return (
              <div
                key={course._id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 flex flex-col group"
              >
                {/* Visual Banner */}
                <div className="bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 h-36 flex items-center justify-center relative px-6 text-center">
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <GraduationCap
                    size={48}
                    className="text-white drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Dynamic Pricing Badge */}
                  <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm text-white ${
                    isFree ? 'bg-emerald-600' : 'bg-slate-900/80 backdrop-blur-xs'
                  }`}>
                    {isFree ? 'FREE' : `Rs. ${course.price}`}
                  </span>
                </div>

                {/* Content Wrapper */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Subject Tag */}
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-2">
                    <FileText size={14} />
                    {course.subject || "General"}
                  </span>

                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-slate-800 line-clamp-1 mb-2 group-hover:text-indigo-600 transition-colors">
                    {course.course}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-sm line-clamp-2 mb-6">
                    {course.description || "No description provided for this course details setup."}
                  </p>

                  {/* Instructor Info Footer */}
                  {course.createdBy && (
                    <div className="mt-auto pt-4 border-t border-slate-100 mb-5 text-xs text-slate-500 space-y-1.5">
                      <div className="flex items-center gap-2 font-medium text-slate-700">
                        <User size={14} className="text-slate-400" />
                        <span>
                          {course.createdBy.firstName} {course.createdBy.lastName}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={14} className="text-slate-400" />
                        <span className="truncate">{course.createdBy.email}</span>
                      </div>
                    </div>
                  )}

                  {/* Interactive Buttons */}
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    {course.isEnrolled ? (
                      <button
                        onClick={() => navigate(`/main-course/${course._id}`)}
                        className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold py-2.5 px-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-1"
                      >
                        <BookOpen size={16} />
                        View Study
                      </button>
                    ) : (
                      <button
                        onClick={() => enrollChange(course)}
                        className={`font-bold py-2.5 px-4 rounded-xl text-sm transition-colors text-white ${
                          isFree 
                            ? 'bg-emerald-600 hover:bg-emerald-700' 
                            : 'bg-rose-600 hover:bg-rose-700'
                        }`}
                      >
                        {isFree ? 'Enroll Free' : 'Buy Now'}
                      </button>
                    )}

                    <Link
                      to={`/main-course/${course._id}`}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 px-4 rounded-xl text-sm transition-colors text-center inline-flex items-center justify-center gap-1"
                    >
                      Details
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Courses;