import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
  BookOpen,
  CalendarDays,
  ClipboardList,
  Bell,
  User,
  GraduationCap,
  Clock,
  CheckCircle,
  ShoppingBag,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Courses from "./Courses";



const StudentDashboard = () => {
  const [exams, setExam] = useState([]);

  const navigate = useNavigate()

  const ProfileImageHandler = (e) => {
    if (e.target.value === 'profile') {
      navigate('/profile')
    }
    if (e.target.value === 'logout') {

      navigate('/login')
    }
  }
  const courses = [
    {
      title: "Web Development",
      teacher: "Mr. Sharma",
      progress: 75,
    },
    {
      title: "Database Management",
      teacher: "Mrs. Karki",
      progress: 55,
    },
    {
      title: "Computer Networking",
      teacher: "Mr. Rai",
      progress: 90,
    },
  ];



  const assignments = [
    {
      title: "React Assignment",
      due: "Tomorrow",
      status: "Pending",
    },
    {
      title: "MongoDB Project",
      due: "2 Days Left",
      status: "Submitted",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-700 text-white p-5 hidden md:block">
        <div className="flex items-center gap-3 mb-10">
          <GraduationCap size={35} />
          <h1 className="text-2xl font-bold">EduPortal</h1>
        </div>

        <nav className="space-y-4">
          <div className="flex items-center gap-3 hover:bg-gray-600 p-3 rounded-lg cursor-pointer">
            <BookOpen />
            <span>Dashboard</span>
          </div>

          <Link to={'/assignment'} className="flex items-center gap-3 hover:bg-gray-600 p-3 rounded-lg cursor-pointer">
            <ClipboardList />
            <span>Assignments</span>
          </Link>
          <Link to={'/exam'} className="flex items-center gap-3 hover:bg-gray-600 p-3 rounded-lg cursor-pointer">
            <ClipboardList />
            <span>Online Exam</span>
          </Link>

          <Link to={'/notes'} className="flex items-center gap-3 hover:bg-gray-600 p-3 rounded-lg cursor-pointer">
            <ClipboardList />
            <span>Notices</span>
          </Link>

          <Link to={'/profile'} className="flex items-center gap-3 hover:bg-gray-600 p-3 rounded-lg cursor-pointer">
            <User />
            <span>Profile</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="bg-white rounded-2xl shadow-md p-5 flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Welcome Back 👋
            </h2>
            <p className="text-gray-500 mt-1">
              Here is your learning progress
            </p>
          </div>

          <div className="flex items-center gap-3">

            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-12 h-12 rounded-full border-2 border-indigo-500"
            />
            <select
              defaultValue=""
              onChange={ProfileImageHandler}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="profile">Profile</option>
              <option value="logout">Logout</option>
            </select>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          <div className="bg-white p-5 rounded-2xl shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">Enrolled Courses</p>
                <h2 className="text-3xl font-bold mt-2">6</h2>
              </div>

              <div className="bg-indigo-100 p-4 rounded-full">
                <BookOpen className="text-indigo-700" />
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">Assignments</p>
                <h2 className="text-3xl font-bold mt-2">12</h2>
              </div>

              <div className="bg-green-100 p-4 rounded-full">
                <ClipboardList className="text-green-700" />
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">Attendance</p>
                <h2 className="text-3xl font-bold mt-2">92%</h2>
              </div>

              <div className="bg-pink-100 p-4 rounded-full">
                <CheckCircle className="text-pink-700" />
              </div>
            </div>
          </div>
        </div>

        Courses
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-5">My Courses</h2>

          <div className="space-y-5">
            {courses.map((course, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">
                      {course.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {course.teacher}
                    </p>
                  </div>

                  <span className="font-bold text-indigo-600">
                    {course.progress}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className="bg-indigo-600 h-3 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Courses/>

        {/* Assignments + Schedule */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Assignments */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-5">
              Upcoming Assignments
            </h2>

            <div className="space-y-4">
              {assignments.map((assignment, index) => (
                <div
                  key={index}
                  className="border p-4 rounded-xl flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-semibold">
                      {assignment.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Due: {assignment.due}
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${assignment.status === "Pending"
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                      }`}
                  >
                    {assignment.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-white rounded-2xl shadow-md p-6 ">
            <h2 className="text-2xl font-bold mb-5">Offline Class Schedule</h2>

            <div className="space-y-5">
              <div className=" gap-4 border-l-4 border-indigo-600 pl-4">
                <Clock className="text-indigo-600" />
                <div>
                  <h3 className="font-semibold">
                    Korean Language Class
                  </h3>
                  <p className="text-gray-500 text-sm">
                    10:00 AM - 11:30 AM
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-l-4 border-pink-600 pl-4">
                <Clock className="text-pink-600" />
                <div>
                  <h3 className="font-semibold">
                    12 Tution Class
                  </h3>
                  <p className="text-gray-500 text-sm">
                    1:00 PM - 3:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-l-4 border-green-600 pl-4">
                <Clock className="text-green-600" />
                <div>
                  <h3 className="font-semibold">
                    Japanese Language class
                  </h3>
                  <p className="text-gray-500 text-sm">
                    4:00 PM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;