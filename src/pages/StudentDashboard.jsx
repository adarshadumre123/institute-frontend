import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import myImage from "../assets/book.png";
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
import api from "../utils/api";

const StudentDashboard = () => {
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

          <div className="flex items-center gap-2">
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
            title="Games"
            active={activeTab === "Games"}
            onClick={() => handleTabChange("Games")}
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
          {activeTab === "Dashboard" && <StudentComponent />}
          {activeTab === "Courses" && <Courses />}
          {activeTab === "Notices" && <Notice />}
          {activeTab === "Games" && <Game />}
          {activeTab === "Profile" && <Profile />}
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 h-1 bg-[#26140A] hidden lg:block z-50" />
    </div>
  );
};

export default StudentDashboard;

// --- SEPARATE EXPORT COMPONENT ---
export const StudentComponent = () => {
  const navigate = useNavigate();
  const [dashboard, setDashboard] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const getStudentDashboard = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await api.get("/api/v1/dashboard/student-dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDashboard(res.data.dashboard);
    } catch (error) {
      console.error("Dashboard Fetch Error:", error);
    }
  };

  useEffect(() => {
    getStudentDashboard();
    const timer = setInterval(() => setCurrentDate(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  if (!dashboard) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4">
        <Loader2 className="animate-spin h-12 w-12 text-amber-800" />
        <p className="text-lg font-semibold text-neutral-600">Loading...</p>
      </div>
    );
  }

  // Pure Calendar Logic Helpers
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const todayDate = currentDate.getDate();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();
  const prevDaysInMonth = new Date(year, month, 0).getDate();

  const calendarCells = [];

  for (let i = firstDayIndex - 1; i >= 0; i--) {
    calendarCells.push(
      <div key={`prev-${i}`} className="h-8 w-8 text-xs font-medium text-neutral-300 flex items-center justify-center">
        {prevDaysInMonth - i}
      </div>
    );
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = day === todayDate;
    calendarCells.push(
      <div
        key={`day-${day}`}
        className={`h-8 w-8 text-xs font-bold rounded-full flex items-center justify-center transition-all ${isToday
          ? "bg-[#8C3E1A] text-white shadow-md shadow-orange-100 scale-105"
          : "text-neutral-800 hover:bg-neutral-100"
          }`}
      >
        {day}
      </div>
    );
  }

  const stats = [
    { label: "Available Courses", value: dashboard.totalCourses, icon: BookOpen, bg: "bg-amber-50", text: "text-amber-800", border: "border-amber-100" },
    { label: "Enrolled Courses", value: dashboard.enrolledCourses, icon: GraduationCap, bg: "bg-orange-50", text: "text-orange-800", border: "border-orange-100" },
    { label: "Live Classes Scheduled", value: dashboard.totalClasses, icon: Video, bg: "bg-stone-100", text: "text-stone-800", border: "border-stone-200" },
    { label: "Pending Examinations", value: dashboard.totalExam, icon: FileSignature, bg: "bg-amber-100/50", text: "text-amber-900", border: "border-amber-200/60" },
    { label: "Active Assignments", value: dashboard.totalAssignment, icon: ClipboardList, bg: "bg-orange-100/60", text: "text-orange-900", border: "border-orange-200/60" },
  ];

  const studentFirstName = dashboard.name?.firstName || "Student";

  return (
    <div className="min-h-full bg-neutral-50 py-4 px-2">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Top Split Area: Welcome Banner alongside Side Calendar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

          {/* Welcome Card Banner (Takes 2 columns space) */}
          <div className="lg:col-span-2 bg-[#FAF6F0] rounded-3xl border border-[#EFE9DF] p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-2xs">
            <div className="absolute top-8 left-1/2 w-2.5 h-2.5 bg-amber-400 rotate-45 rounded-xs opacity-40 hidden sm:block" />

            <div className="text-center sm:text-left space-y-4 z-10 flex-1">
              <h1 className="text-3xl sm:text-4xl font-serif font-black text-[#2E1A11] tracking-tight leading-tight">
                Welcome back, <br />
                <span className="capitalize text-[#8C3E1A]">{studentFirstName}!</span> 👋
              </h1>
              <p className="text-[#65534A] text-sm font-medium max-w-xs leading-relaxed">
                Every day is a new step towards your goals. Let's keep going!
              </p>
              <button
                onClick={() => navigate("/course")}
                className="inline-flex items-center gap-2 bg-[#8C3E1A] hover:bg-[#703114] text-white font-bold py-3 px-5 rounded-xl text-xs transition-colors shadow-xs cursor-pointer mt-2"
              >
                <span>Explore Courses</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Logo Image Wrapper */}
            <div className="relative flex items-center justify-center w-full max-w-60 sm:max-w-70 aspect-video sm:aspect-square">
              <div className="flex flex-col items-center justify-end w-full h-full pb-4 relative">
                <img src={myImage} alt="Logo" className="max-h-[90%] object-contain mix-blend-multiply" />
              </div>
            </div>
          </div>

          {/* Calendar Container (Takes 1 column space) */}
          <div className="bg-[#FAF6F0] rounded-3xl border border-[#EFE9DF] p-6 flex flex-col justify-between shadow-2xs">
            <div>
              <h3 className="font-serif font-black text-lg text-[#2E1A11] mb-4">Calendar</h3>

              {/* Header Arrows with Date Label */}
              <div className="flex items-center justify-between text-neutral-800 px-1 mb-4">
                <button className="p-1 hover:bg-neutral-100 rounded-lg transition-colors text-neutral-500 cursor-pointer">
                  <ChevronLeft size={16} />
                </button>
                <span className="text-xs font-black text-neutral-800 tracking-wide font-sans">
                  {monthNames[month]} {year}
                </span>
                <button className="p-1 hover:bg-neutral-100 rounded-lg transition-colors text-neutral-500 cursor-pointer">
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Day Headings Grid */}
              <div className="grid grid-cols-7 text-center text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2">
                <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
              </div>

              {/* Numbers Data Cell Output */}
              <div className="grid grid-cols-7 gap-y-1.5 text-center justify-items-center">
                {calendarCells}
              </div>
            </div>
          </div>

        </div>

        {/* Lower Matrix: Row Area displaying metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`bg-white border ${stat.border} rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all duration-300 flex items-center justify-between group`}
              >
                <div className="space-y-1">
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider">{stat.label}</p>
                  <h2 className="text-3xl font-black text-neutral-800 group-hover:translate-x-1 transition-transform">
                    {stat.value}
                  </h2>
                </div>
                <div className={`p-4 rounded-xl ${stat.bg} ${stat.text} transition-transform group-hover:scale-105`}>
                  <Icon size={20} />
                </div>
              </div>
            );
          })}
        </div>

        <Courses />
<div className="w-full overflow-x-auto max-w-full rounded-2xl">
  <Notice />
</div>

      </div>
    </div>
  );
};