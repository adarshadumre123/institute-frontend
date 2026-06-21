// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { toast } from 'sonner'
// import {
//   BookOpen,
//   User,
//   DollarSign,
//   Clock,
//   Award,
//   CheckCircle,
// } from "lucide-react";

// const CourseDetails = () => {
//     const[courseDetails,setCourseDetails]=useState(null)

//     const {id}=useParams()
//     const getCourseDetails=async()=>{
//         try {
//             const token = localStorage.getItem("token")
//               const res = await axios.get(
//                 `http://localhost:8000/api/v1/course/get-course-id/${id}`,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 }
//             );
//             setCourseDetails(res.data.course)

//         } catch (error) {

//   toast.error(error.response?.data?.message || "Server error");
//         }
//     }

//     useEffect(() => {
//         if(id){
//             getCourseDetails()
//         }
//     }, [id])

//     if (!courseDetails) {
//     return (
//       <div className="h-screen flex items-center justify-center">
//         <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   return (
//         <div className="min-h-screen bg-slate-100">
//       {/* Hero */}
//       <div className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-white">
//             <h1 className="text-5xl font-bold mb-4">
//               {courseDetails.title}
//             </h1>

//             <p className="text-xl text-blue-100 max-w-3xl">
//               {courseDetails.shortDescription}
//             </p>

//             <div className="flex flex-wrap gap-6 mt-8">
//               <div className="flex items-center gap-2">
//                 <User size={20} />
//                 <span>{courseDetails.createdBy}</span>
//               </div>

//               <div className="flex items-center gap-2">
//                 <BookOpen size={20} />
//                 <span>{courseDetails.category}</span>
//               </div>

//               <div className="flex items-center gap-2">
//                 <DollarSign size={20} />
//                 <span>${courseDetails.price}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Section */}
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         <div className="grid lg:grid-cols-3 gap-8">
          
//           {/* Left Side */}
//           <div className="lg:col-span-2 space-y-8">
            
//             {/* Description */}
//             <div className="bg-white rounded-3xl shadow-lg p-8">
//               <h2 className="text-3xl font-bold mb-6">
//                 Course Overview
//               </h2>

//               <p className="text-gray-600 leading-8 text-lg whitespace-pre-line">
//                 {courseDetails.longDescription}
//               </p>
//             </div>

//             {/* Learning Outcomes */}
//             <div className="bg-white rounded-3xl shadow-lg p-8">
//               <h2 className="text-3xl font-bold mb-6">
//                 What You'll Learn
//               </h2>

//               <div className="grid md:grid-cols-2 gap-4">
//                 {[
//                   "Build Real Projects",
//                   "Learn Industry Practices",
//                   "Master Modern Development",
//                   "Deploy Applications",
//                   "Authentication & Security",
//                   "Database Design",
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-3"
//                   >
//                     <CheckCircle
//                       className="text-green-500"
//                       size={20}
//                     />
//                     <span>{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Side */}
//           <div>
//             <div className="sticky top-8">
//               <div className="bg-white rounded-3xl shadow-xl p-8">
//                 <div className="text-center">
//                   <h2 className="text-5xl font-bold text-green-600">
//                     ${courseDetails.price}
//                   </h2>

//                   <p className="text-gray-500 mt-2">
//                     One Time Payment
//                   </p>
//                 </div>

//                 <button className="w-full mt-8 bg-linear-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl text-lg font-semibold hover:scale-105 transition">
//                   Enroll Now
//                 </button>

//                 <div className="border-t mt-8 pt-8 space-y-5">
//                   <div className="flex items-center gap-3">
//                     <Clock className="text-blue-600" />
//                     <span>Lifetime Access</span>
//                   </div>

//                   <div className="flex items-center gap-3">
//                     <Award className="text-blue-600" />
//                     <span>Certificate Included</span>
//                   </div>

//                   <div className="flex items-center gap-3">
//                     <BookOpen className="text-blue-600" />
//                     <span>Project Based Learning</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Instructor Card */}
//               <div className="bg-white rounded-3xl shadow-xl p-6 mt-6">
//                 <h3 className="text-xl font-bold mb-4">
//                   Instructor
//                 </h3>

//                 <div className="flex items-center gap-4">
//                   <div className="h-14 w-14 rounded-full bg-linear-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
//                     {courseDetails.createdBy.firstName}
//                   </div>

//                   <div>
//                     <h4 className="font-semibold">
//                       {courseDetails.createdBy.email}
//                     </h4>
//                     <p className="text-gray-500 text-sm">
//                       Course Instructor
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>

//   )
// }

// export default CourseDetails


import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import {
  BookOpen,
  User,
  DollarSign,
  Clock,
  Award,
  CheckCircle,
} from "lucide-react";

const CourseDetails = () => {
  const [courseDetails, setCourseDetails] = useState(null);

  const { id } = useParams();

  const getCourseDetails = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `http://localhost:8000/api/v1/course/get-course-id/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCourseDetails(res.data.course);
    } catch (error) {
      toast.error(error.response?.data?.message || "Server error");
    }
  };

  useEffect(() => {
    if (id) {
      getCourseDetails();
    }
  }, [id]);

  if (!courseDetails) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Hero */}
      <div className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">
              {courseDetails.title}
            </h1>

            <p className="text-xl text-blue-100 max-w-3xl">
              {courseDetails.shortDescription}
            </p>

            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2">
                <User size={20} />
                <span>
                  {courseDetails.createdBy?.firstName}{" "}
                  {courseDetails.createdBy?.lastName}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <BookOpen size={20} />
                <span>{courseDetails.category}</span>
              </div>

              <div className="flex items-center gap-2">
                <DollarSign size={20} />
                <span>${courseDetails.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">
                Course Overview
              </h2>

              <p className="text-gray-600 leading-8 text-lg whitespace-pre-line">
                {courseDetails.longDescription}
              </p>
            </div>

            {/* Learning */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">
                What You'll Learn
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Build Real Projects",
                  "Learn Industry Practices",
                  "Master Modern Development",
                  "Deploy Applications",
                  "Authentication & Security",
                  "Database Design",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle
                      className="text-green-500"
                      size={20}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="sticky top-8">
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <div className="text-center">
                  <h2 className="text-5xl font-bold text-green-600">
                    ${courseDetails.price}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    One Time Payment
                  </p>
                </div>

                <button className="w-full mt-8 bg-linear-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl text-lg font-semibold hover:scale-105 transition">
                  Enroll Now
                </button>

                <div className="border-t mt-8 pt-8 space-y-5">
                  <div className="flex items-center gap-3">
                    <Clock className="text-blue-600" />
                    <span>Lifetime Access</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Award className="text-blue-600" />
                    <span>Certificate Included</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <BookOpen className="text-blue-600" />
                    <span>Project Based Learning</span>
                  </div>
                </div>
              </div>

              {/* Instructor */}
              <div className="bg-white rounded-3xl shadow-xl p-6 mt-6">
                <h3 className="text-xl font-bold mb-4">
                  Instructor
                </h3>

                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-linear-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                    {courseDetails.createdBy?.firstName?.charAt(0)}
                    {courseDetails.createdBy?.lastName?.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      {courseDetails.createdBy?.firstName}{" "}
                      {courseDetails.createdBy?.lastName}
                    </h4>

                    <p className="text-gray-500 text-sm">
                      {courseDetails.createdBy?.email}
                    </p>
                  </div>
                </div>
              </div>
              {/* End Instructor */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;