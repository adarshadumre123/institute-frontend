import React, { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  FileText,
  ClipboardList,
  Bell,
  Settings,
  LogOut,
  Plus,
  Eye,
  Calendar,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";


const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-lg hidden md:flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-indigo-600">
            Teacher Panel
          </h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <SidebarItem icon={<LayoutDashboard size={20} />} title="Dashboard" active />
          <SidebarItem icon={<BookOpen size={20} />} title="Courses" />
          <SidebarItem icon={<ClipboardList size={20} />} title="Exams" />
          <SidebarItem icon={<Users size={20} />} title="Students" />
          <SidebarItem icon={<FileText size={20} />} title="Assignments" />
          <SidebarItem icon={<Bell size={20} />} title="Notifications" />
          <SidebarItem icon={<Settings size={20} />} title="Settings" />
        </nav>

        <div className="p-4 border-t">
          <button className="flex items-center gap-2 text-red-500 hover:bg-red-50 w-full p-3 rounded-xl transition">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {/* Topbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Welcome Back 👋
            </h2>
            <p className="text-gray-500 mt-1">
              Manage your classes and exams easily.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link to={'/createExam'} className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl flex items-center gap-2 transition">
              <Plus size={18} />
              Create Exam
            </Link>

            <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
              T
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Students"
            value="1,250"
            icon={<Users size={24} />}
          />

          <StatsCard
            title="Total Exams"
            value="48"
            icon={<ClipboardList size={24} />}
          />

          <StatsCard
            title="Assignments"
            value="26"
            icon={<FileText size={24} />}
          />

          <StatsCard
            title="Courses"
            value="12"
            icon={<BookOpen size={24} />}
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Recent Exams */}
          <div className="xl:col-span-2 bg-white rounded-3xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">
                Recent Exams
              </h3>

              <button className="text-indigo-600 font-medium hover:underline">
                View All
              </button>
            </div>

            <div className="space-y-4">
              <ExamCard
                title="Computer Networks"
                subject="Networking"
                students="120"
                date="20 Aug 2026"
              />

              <ExamCard
                title="Operating System"
                subject="System"
                students="95"
                date="25 Aug 2026"
              />

              <ExamCard
                title="DBMS Final Test"
                subject="Database"
                students="150"
                date="30 Aug 2026"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            {/* Schedule */}
            <div className="bg-white rounded-3xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Today Schedule
              </h3>

              <div className="space-y-4">
                <ScheduleCard
                  title="React Class"
                  time="10:00 AM"
                />

                <ScheduleCard
                  title="DBMS Viva"
                  time="1:30 PM"
                />

                <ScheduleCard
                  title="Exam Meeting"
                  time="4:00 PM"
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-3xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Quick Actions
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <QuickButton title="Create Exam" />
                <QuickButton title="Add Student" />
                <QuickButton title="Upload Notes" />
                <QuickButton title="Check Results" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;

/* ================= COMPONENTS ================= */

const SidebarItem = ({ icon, title, active }) => {
  return (
    <button
      className={`flex items-center gap-3 w-full p-3 rounded-xl transition ${active
          ? "bg-indigo-600 text-white"
          : "hover:bg-gray-100 text-gray-700"
        }`}
    >
      {icon}
      <span className="font-medium">{title}</span>
    </button>
  );
};

const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between mb-4">
        <div className="bg-indigo-100 text-indigo-600 p-3 rounded-2xl">
          {icon}
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-800">{value}</h2>
      <p className="text-gray-500 mt-2">{title}</p>
    </div>
  );
};

const ExamCard = ({ title, subject, students, date }) => {
  return (
    <div className="border border-gray-100 rounded-2xl p-5 hover:shadow-md transition">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h4 className="text-lg font-bold text-gray-800">{title}</h4>
          <p className="text-gray-500">{subject}</p>

          <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Users size={15} />
              {students} Students
            </span>

            <span className="flex items-center gap-1">
              <Calendar size={15} />
              {date}
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center gap-2 transition">
            <Eye size={16} />
            View
          </button>

          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition">
            Manage
          </button>
        </div>
      </div>
    </div>
  );
};

const ScheduleCard = ({ title, time }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-gray-500 text-sm">Scheduled Task</p>
      </div>

      <div className="flex items-center gap-2 text-indigo-600 font-medium">
        <Clock size={16} />
        {time}
      </div>
    </div>
  );
};

const QuickButton = ({ title }) => {
  return (
    <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 p-4 rounded-2xl font-medium transition">
      {title}
    </button>
  );
};