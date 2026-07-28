


import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import logo from "../assets/logo.png";

import {
  User,
  Clock,
  CheckCircle,
  LogOut,
  ChevronDown,
  Gamepad2,
  Bell,
  FileText,
  Menu,
  X,
  BookOpen,
  GraduationCap,
  ClipboardList,
  Video,
  FileSignature,
  Loader2,
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from "lucide-react";

import Courses from "./Courses";
import Subject from "./Subject";
import Game from "./Game";
import Profile from './Profile';
import { SidebarItem } from "../components/SidebarItem";
import Notice from "./Notice";
import { toast } from "sonner";
import { StudentComponent } from "./StudentDashboard";
import Students from "./Students";

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirm = window.confirm("Are you sure to log out?");

    if (confirm) {
      localStorage.removeItem("token");
      navigate("/login");
      toast.success("Logout successfully");
    }
  }

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setIsSidebarOpen(false);
  };

  return (
    <div className="h-screen w-screen bg-[#F4EAD4] flex flex-col md:flex-row text-[#2B1810] font-sans overflow-hidden relative">

      {/* --- MOBILE TOP HEADER NAVIGATION (Hidden on Desktop) --- */}
      <header className="md:hidden w-full h-16 bg-white border-b border-[#EFE9DF] px-4 flex items-center justify-between shrink-0 z-40 shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 text-neutral-700 hover:bg-[#FAF6F0] rounded-xl transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="Kanva Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="font-serif font-black text-lg text-[#2E1A11] tracking-tight">KANVA</span>
          </div>
        </div>
      </header>

      {/* --- BACKGROUND DIMMER OVERLAY (Mobile Drawer view mode only) --- */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-xs transition-opacity duration-300 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* --- HYBRID RESPONSIVE SIDEBAR --- */}
      <aside className={`
        fixed inset-y-0 left-0 w-64 bg-white border-r border-neutral-200/80 z-50 flex flex-col transform transition-transform duration-300 ease-in-out shadow-xl
        md:translate-x-0 md:sticky md:top-0 md:h-screen md:shadow-none
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="p-5 border-b border-neutral-100 flex items-center justify-between bg-[#FAF6F0]/50 h-16 shrink-0">
         <div className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="Kanva Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="font-serif font-black text-lg text-[#2E1A11] tracking-tight">KANVA</span>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden p-1.5 text-neutral-400 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          <SidebarItem
            icon={<BookOpen size={20} />}
            title="Dashboard"
            active={activeTab === "Dashboard"}
            onClick={() => handleTabChange("Dashboard")}
          />

          <SidebarItem
            icon={<FileText size={20} />}
            title="Courses"
            active={activeTab === "Courses"}
            onClick={() => handleTabChange("Courses")}
          />

          <SidebarItem
            icon={<Bell size={20} />}
            title="Notices"
            active={activeTab === "Notices"}
            onClick={() => handleTabChange("Notices")}
          />

          <SidebarItem
            icon={<Gamepad2 size={20} />}
            title="Students"
            active={activeTab === "Students"}
            onClick={() => handleTabChange("Students")}
          />

          <SidebarItem
            icon={<User size={20} />}
            title="Profile"
            active={activeTab === "Profile"}
            onClick={() => handleTabChange("Profile")}
          />
        </nav>

        <div className="p-4 border-t border-neutral-100 space-y-3 bg-[#FAF6F0]/30 shrink-0">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full p-2.5 rounded-xl text-xs font-bold text-rose-700 hover:bg-rose-50 transition-colors cursor-pointer"
          >
            <LogOut size={16} />
            <span>Sign Out Account</span>
          </button>
          <div className="text-[11px] font-medium text-neutral-400 tracking-wide text-center">
            Kanva Digital Academy
          </div>
        </div>
      </aside>

      {/* --- SCROLLABLE CONTAINER FOR DASHBOARD PAGES --- */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto h-[calc(100vh-4rem)] md:h-screen">
        <div className="bg-white rounded-2xl shadow-xs p-4 sm:p-6 min-h-full transition-all duration-300">
          {activeTab === "Dashboard" && <TeacherComponent />}
          {activeTab === "Courses" && <Courses />}
          {activeTab === "Notices" && <Notice />}
          {activeTab === "Students" && <Students />}
          {activeTab === "Profile" && <Profile />}
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 h-1 bg-[#26140A] hidden lg:block z-50" />
    </div>
  );
};

export default TeacherDashboard;

import {
  Users,
  Calendar as CalendarIcon,
  BellRing
} from "lucide-react";
import api from "../utils/api";

export const TeacherComponent = () => {
  const [dashboard, setDashboard] = useState({
    totalCourses: "-",
    totalStudents: "-",
    totalClasses: "-",
    totalAssignments: "-",
    totalExams: "-",
  });

  // Calendar State Management
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const token = localStorage.getItem("token");

  const getDashboard = async () => {
    try {
      const res = await api.get(
        "/api/v1/dashboard/teacher-dashboard",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDashboard(res.data.dashboard);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong fetching analytics");
    }
  };

  useEffect(() => {
    getDashboard();
  }, []);

  // Calendar Generation Helpers
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDayIndex = getFirstDayOfMonth(currentDate);

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2E1A11] p-4 sm:p-6 lg:p-8">
      <div className="max-w-350 mx-auto space-y-6">

        {/* Upper Brand Welcome Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-[#EFE9DF]">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Instructor Dashboard</h1>
            <p className="text-[#65534A] text-sm mt-0.5 font-medium">
              Welcome back. Here is your academic progress overhead mapping for today.
            </p>
          </div>

        </div>

        {/* Outer Split Layout - Grid to stack on small viewports */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Main Dashboard Panel Metrics (Left Columns) */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xs font-black uppercase tracking-widest text-[#65534A]">Academic Statistics</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

              {/* Courses Metric */}
              <div className="bg-white rounded-2xl border border-[#EFE9DF] p-5 shadow-xs hover:shadow-sm transition group">
                <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#EFE9DF] flex items-center justify-center text-[#8C3E1A] mb-4 group-hover:scale-105 transition-transform">
                  <BookOpen size={20} />
                </div>
                <p className="text-xs font-bold text-[#65534A] uppercase tracking-wider">Total Courses</p>
                <p className="text-3xl font-black tracking-tight mt-1 text-[#2E1A11]">{dashboard.totalCourses}</p>
              </div>

              {/* Students Metric */}
              <div className="bg-white rounded-2xl border border-[#EFE9DF] p-5 shadow-xs hover:shadow-sm transition group">
                <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#EFE9DF] flex items-center justify-center text-[#8C3E1A] mb-4 group-hover:scale-105 transition-transform">
                  <Users size={20} />
                </div>
                <p className="text-xs font-bold text-[#65534A] uppercase tracking-wider">Students Enrolled</p>
                <p className="text-3xl font-black tracking-tight mt-1 text-[#2E1A11]">{dashboard.totalStudents}</p>
              </div>

              {/* Classes Metric */}
              <div className="bg-white rounded-2xl border border-[#EFE9DF] p-5 shadow-xs hover:shadow-sm transition group">
                <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#EFE9DF] flex items-center justify-center text-[#8C3E1A] mb-4 group-hover:scale-105 transition-transform">
                  <Video size={20} />
                </div>
                <p className="text-xs font-bold text-[#65534A] uppercase tracking-wider">Live Classes</p>
                <p className="text-3xl font-black tracking-tight mt-1 text-[#2E1A11]">{dashboard.totalClasses}</p>
              </div>

              {/* Assignments Metric */}
              <div className="bg-white rounded-2xl border border-[#EFE9DF] p-5 shadow-xs hover:shadow-sm transition group">
                <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#EFE9DF] flex items-center justify-center text-[#8C3E1A] mb-4 group-hover:scale-105 transition-transform">
                  <FileText size={20} />
                </div>
                <p className="text-xs font-bold text-[#65534A] uppercase tracking-wider">Assignments</p>
                <p className="text-3xl font-black tracking-tight mt-1 text-[#2E1A11]">{dashboard.totalAssignments}</p>
              </div>

              {/* Exams Metric */}
              <div className="bg-white rounded-2xl border border-[#EFE9DF] p-5 shadow-xs hover:shadow-sm transition group col-span-2 sm:col-span-1">
                <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#EFE9DF] flex items-center justify-center text-[#8C3E1A] mb-4 group-hover:scale-105 transition-transform">
                  <GraduationCap size={20} />
                </div>
                <p className="text-xs font-bold text-[#65534A] uppercase tracking-wider">Exams Configured</p>
                <p className="text-3xl font-black tracking-tight mt-1 text-[#2E1A11]">{dashboard.totalExams}</p>
              </div>

            </div>

            {/* Micro Activity Feed Callout */}
            <div className="bg-[#FAF6F0] border border-[#EFE9DF] rounded-2xl p-5 flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-white border border-[#EFE9DF] text-[#8C3E1A]">
                <BellRing size={18} />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#2E1A11]">Quick Suggestion</h4>
                <p className="text-xs text-[#65534A] leading-relaxed">
                  You currently have <strong className="font-black text-[#8C3E1A]">{dashboard.totalAssignments} pending active assignments</strong> to review. Consider reviewing student responses before scheduling subsequent assignments.
                </p>
              </div>
            </div>
          </div>

          {/* Calendar Widget Panel (Right Column) */}
          <div className="space-y-6">
            <h2 className="text-xs font-black uppercase tracking-widest text-[#65534A] flex items-center gap-2">
              <CalendarIcon size={14} className="text-[#8C3E1A]" />
              Schedule Calendar
            </h2>

            <div className="bg-white rounded-2xl border border-[#EFE9DF] p-5 shadow-xs">

              {/* Calendar Month Selector Header */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-sm font-black text-[#2E1A11]">
                  {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
                </span>
                <div className="flex gap-1.5">
                  <button
                    onClick={prevMonth}
                    className="p-1.5 bg-white hover:bg-[#FAF6F0] border border-[#EFE9DF] text-[#2E1A11] rounded-lg transition"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={nextMonth}
                    className="p-1.5 bg-white hover:bg-[#FAF6F0] border border-[#EFE9DF] text-[#2E1A11] rounded-lg transition"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Day Headers */}
              <div className="grid grid-cols-7 text-center text-[10px] font-black uppercase tracking-wider text-[#65534A] mb-3">
                {daysOfWeek.map((day) => (
                  <div key={day}>{day}</div>
                ))}
              </div>

              {/* Month Days Grid Layout */}
              <div className="grid grid-cols-7 gap-1">
                {/* Pad previous month offsets */}
                {Array.from({ length: firstDayIndex }).map((_, idx) => (
                  <div key={`empty-${idx}`} className="aspect-square"></div>
                ))}

                {/* Print month calendar numbers */}
                {Array.from({ length: daysInMonth }).map((_, idx) => {
                  const dayNum = idx + 1;
                  const isToday =
                    dayNum === new Date().getDate() &&
                    currentDate.getMonth() === new Date().getMonth() &&
                    currentDate.getFullYear() === new Date().getFullYear();

                  const isSelected =
                    dayNum === selectedDate.getDate() &&
                    currentDate.getMonth() === selectedDate.getMonth() &&
                    currentDate.getFullYear() === selectedDate.getFullYear();

                  return (
                    <button
                      key={`day-${dayNum}`}
                      onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), dayNum))}
                      className={`
                        aspect-square flex items-center justify-center text-xs font-bold rounded-lg transition-all
                        ${isToday ? "border-2 border-[#8C3E1A] text-[#8C3E1A]" : ""}
                        ${isSelected ? "bg-[#8C3E1A] text-white" : "text-[#2E1A11] hover:bg-[#FAF6F0]"}
                      `}
                    >
                      {dayNum}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Calendar Selection Footer */}
              <div className="mt-5 pt-4 border-t border-[#FAF6F0] flex items-center justify-between text-xs">
                <span className="text-[#65534A] font-medium">Selected Date:</span>
                <span className="font-black text-[#8C3E1A]">
                  {selectedDate.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
      <Courses />
    </div>
  );
};

