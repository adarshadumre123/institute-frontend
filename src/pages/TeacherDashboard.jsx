import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  FileText,
  ClipboardList,
  Bell,
  Settings,
  GraduationCap,
  LogOut,
  Plus
} from "lucide-react";

import { SidebarItem } from "../components/SidebarItem";
import { Link } from "react-router-dom";

const TeacherDashboard = () => {
  const [dashboard, setDashboard] = useState({
    totalCourses: "-",
    totalStudents: "-",
    totalClasses: "-",
    totalAssignments: "-",
    totalExams: "-",
  });

  const token = localStorage.getItem("token");

  const getDashboard = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/dashboard/teacher-dashboard",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDashboard(res.data.dashboard);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    getDashboard();
  }, []);

  const cards = [
    {
      title: "Total Courses",
      value: dashboard.totalCourses,
      icon: <BookOpen size={30} />,
      color: "bg-blue-500",
    },
    {
      title: "Total Students",
      value: dashboard.totalStudents,
      icon: <Users size={30} />,
      color: "bg-green-500",
    },
    {
      title: "Total Classes",
      value: dashboard.totalClasses,
      icon: <GraduationCap size={30} />,
      color: "bg-purple-500",
    },
    {
      title: "Assignments",
      value: dashboard.totalAssignments,
      icon: <FileText size={30} />,
      color: "bg-orange-500",
    },
    {
      title: "Exams",
      value: dashboard.totalExams,
      icon: <ClipboardList size={30} />,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}

      <aside className="w-64 bg-white shadow-lg border-r flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-indigo-600">
            Teacher Panel
          </h1>
        </div>

         

        <nav className="flex-1 p-4 space-y-2">
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            title="Dashboard"
            active
          />

          <SidebarItem
            icon={<BookOpen size={20} />}
            title="Courses"
            to={"/course"}
          />

          <SidebarItem
            icon={<ClipboardList size={20} />}
            title="Exams"
            to={"/exam"}
          />

          <SidebarItem
            icon={<Users size={20} />}
            title="Students"
            to={"/students"}
          />

          <SidebarItem
            icon={<FileText size={20} />}
            title="Assignments"
            to={"/assignment"}
          />

          <SidebarItem
            icon={<Bell size={20} />}
            title="Notifications"
          />

          <SidebarItem
            icon={<Settings size={20} />}
            title="Settings"
          />
        </nav>

        <div className="p-4 border-t">
          <button className="flex items-center gap-2 w-full bg-red-500 hover:bg-red-600 text-white p-3 rounded-xl transition">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}

      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
          <p className="text-gray-500 mt-2">
            Welcome back{
              
            }
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div
                className={`${card.color} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-4`}
              >
                {card.icon}
              </div>

              <h2 className="text-gray-500 text-sm">{card.title}</h2>

              <p className="text-3xl font-bold mt-2">{card.value}</p>
            </div>
          ))}
        </div>

        

        {/* Quick Actions */}

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>

            <div className="grid grid-cols-2 gap-4">
              <button className="bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700">
                Add Course
              </button>

              <button className="bg-green-600 text-white py-3 rounded-xl hover:bg-green-700">
                Create Exam
              </button>

              <button className="bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600">
                New Assignment
              </button>

              <button className="bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700">
                View Students
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">
              Dashboard Summary
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between border-b pb-2">
                <span>Total Courses</span>
                <span className="font-semibold">
                  {dashboard.totalCourses}
                </span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span>Total Students</span>
                <span className="font-semibold">
                  {dashboard.totalStudents}
                </span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span>Total Classes</span>
                <span className="font-semibold">
                  {dashboard.totalClasses}
                </span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span>Total Assignments</span>
                <span className="font-semibold">
                  {dashboard.totalAssignments}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Total Exams</span>
                <span className="font-semibold">
                  {dashboard.totalExams}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeacherDashboard;