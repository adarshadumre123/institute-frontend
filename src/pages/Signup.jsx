import React, { useState } from "react";
import { GraduationCap, Mail, Lock, Phone, User, Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Login from './Login';
import { toast } from 'react-toastify';
import  axios  from 'axios';


const SignupPage = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log(formData);

   try {
    const res = await  axios.post("http://localhost:8000/api/v1/users/register", formData,{
       headers:{
         "Content-type":"application/json"
       }
     })  
     if(res.data.success){
       toast.success(res.data.message || "registered successfully")
       navigate("/")
     }
   } catch (error) {
    console.log(error)
  toast(error?.response?.data?.message || 'something went wrong')

   }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-950 via-slate-900 to-indigo-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center bg-linear-to-br from-blue-600 to-indigo-700 text-white p-10">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap size={40} />
            <h1 className="text-4xl font-bold">EduInstitute</h1>
          </div>

          <h2 className="text-3xl font-bold leading-tight mb-4">
            Start Your Learning Journey Today
          </h2>

          <p className="text-blue-100 text-lg leading-relaxed">
            Join our educational institute platform and access courses,
            online exams, student dashboards, and more.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <p>Professional Learning Environment</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <p>Student & Teacher Management</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <p>Online Examination System</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white p-8 md:p-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Create Account
            </h2>
            <p className="text-gray-500 mt-2">
              Fill in the details to register
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Firstname & Lastname */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  First Name
                </label>

                <div className="relative mt-2">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter firstname"
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Last Name
                </label>

                <div className="relative mt-2">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter lastName"
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Email Address
              </label>

              <div className="relative mt-2">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Phone Number
              </label>

              <div className="relative mt-2">
                <Phone
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Role */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Select Role
              </label>

              <div className="relative mt-2">
                <Shield
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />

                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  required
                >
                  <option value="">Choose Role</option>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>

              <div className="relative mt-2">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Button */}
            <button
            onClick={handleSubmit}
              type="submit"
              className="w-full py-3 bg-linear-to-r from-blue-600 to-indigo-700 hover:opacity-90 text-white font-bold rounded-xl transition duration-300 shadow-lg cursor-pointer"
            >
              Create Account
            </button>

            <Link className="flex justify-center items-center text-gray-500 text-sm mt-4 " to={'/login'}>
              Already have an account?{" "}
              <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
                Login
              </span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;