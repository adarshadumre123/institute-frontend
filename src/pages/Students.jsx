// import axios from 'axios'
// import React, { useState ,useEffect} from 'react'


// const Students = () => {
//   const [students, setStudents] = useState([])

//   const getStudents = async (req, res) => {
//     try {
//       const token = localStorage.getItem("token")
//       const res = await axios.get('http://localhost:8000/api/v1/users/get',
//         {
//           headers: {
//             authorization: `Bearer ${token}`
//           }
//         }

//       )
//         const studentUsers=res.data.users.filter((user)=>user.role.toLowerCase()==='student')

//       setStudents(studentUsers)
//     } catch (error) {
//       console.log(error);

//     }
//   }

//   useEffect(() => {
//   getStudents()
//   }, [])
//   return (
//     <>
//     {students.length>0?(
        
//           students.map((student)=>(

//             <div>
//             <h1>{student.length}</h1>
//           <h1>{student.firstName}</h1>
//           <h1>{student.lastName}</h1>
//           <h1>{student.role}</h1>
//           <h1>{student.phone}</h1>
//           </div>
//         ))
      
//       ):<p>no studets are available</p>
//     }
//     </>
//   )
// }

// export default Students


import axios from "axios";
import React, { useState, useEffect } from "react";

const Students = () => {
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:8000/api/v1/users/get",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      const studentUsers = res.data.users.filter(
        (user) => user.role.toLowerCase() === "student"
      );

      setStudents(studentUsers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-100 p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-800">
            Students Dashboard
          </h1>
          <p className="text-gray-500 mt-2">
            Manage and view all student details
          </p>
        </div>

        <div className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-lg">
          <h2 className="text-lg font-semibold">
            Total Students: {students.length}
          </h2>
        </div>
      </div>

      {/* Students Cards */}
      {students.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((student) => (
            <div
              key={student._id}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Top Section */}
              <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-6 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-white text-blue-700 flex items-center justify-center text-3xl font-bold shadow-lg border-4 border-white">
                  {student.firstName?.charAt(0)}
                  {student.lastName?.charAt(0)}
                </div>

                <h1 className="text-2xl font-bold text-white mt-4">
                  {student.firstName} {student.lastName}
                </h1>

                <p className="text-blue-100 capitalize mt-1">
                  {student.role}
                </p>
              </div>

              {/* Info Section */}
              <div className="p-6 space-y-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500">Phone Number</p>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {student.phone}
                  </h2>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500">Email Address</p>
                  <h2 className="text-lg font-semibold text-gray-800 wrap-break-word">
                    {student.email}
                  </h2>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
                    Active Student
                  </span>

                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-medium transition duration-300">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[60vh]">
          <div className="bg-white shadow-lg rounded-3xl p-10 text-center">
            <h1 className="text-2xl font-bold text-gray-700">
              No Students Available
            </h1>
            <p className="text-gray-500 mt-2">
              Students data will appear here.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Students;