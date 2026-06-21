// import React, { useState } from 'react'
// import { useParams } from 'react-router-dom';
// import  axios  from 'axios';
// import { toast } from 'sonner';

// const Notes = () => {
//   const [profile, setProfile] = useState({
//     "firstName": "",
//     "lastName": "",
//     "email": "",
//     "phone": ""

//   });
//   const[loading,setLoading]=useState(false)

//    const handleChange = (e) => {
//     setData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const updateUser = async () => {
//     setLoading(true)
//     try {
//       const token = localStorage.getItem("token")
//       const res = await axios.put("", profile, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json"
//         }
//       })
//       if (res.data.success) {
//         toast("exam updated successfully")
//         setProfile({
//           "firstName": "",
//           "lastName": "",
//           "email": "",
//           "phone": ""
//         })
//       }else {
//               toast.error("exam is not updated")
//             }
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Server error");
//     }finally{
//       setLoading(false)
//     }
//     }
//   return (
//     <div>Notes</div>
//   )
// }

// export default Notes


import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader2, User, Mail, Phone } from "lucide-react";

const Notes = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const updateUser = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
       const{id}=useParams()

      const token = localStorage.getItem("token");

      const res = await axios.put(
        `http://localhost:8000/api/v1/users/update`,
        profile,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.success) {
        toast.success("Profile updated successfully");
      } else {
        toast.error("Profile not updated");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-linear-to-r from-indigo-600 to-blue-600 p-8 text-white">
          <h1 className="text-3xl font-bold">Update Profile</h1>
          <p className="text-blue-100 mt-2">
            Keep your information up to date.
          </p>
        </div>

        <form
          onSubmit={updateUser}
          className="p-8 space-y-6"
        >
          {/* First Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              First Name
            </label>

            <div className="relative">
              <User className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />

              <input
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Last Name
            </label>

            <div className="relative">
              <User className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />

              <input
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Email
            </label>

            <div className="relative">
              <Mail className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />

              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Phone Number
            </label>

            <div className="relative">
              <Phone className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />

              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                placeholder="98XXXXXXXX"
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" />
                Updating...
              </>
            ) : (
              "Update Profile"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Notes;