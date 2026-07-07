import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {
  BookOpen,
  ClipboardList,
  User,
  GraduationCap,
  Clock,
  CheckCircle,
  LogOut,
  ChevronDown,
  Gamepad2,
  Bell,
  FileText
} from "lucide-react";
import Courses from "./Courses";
import Subject from "./Subject";
import Notes from "./Notes";
import Game from "./Game";
import Profile from './Profile';
import { SidebarItem } from "../components/SidebarItem";



const StudentDashboard = () => {
    const[activeTab,setActiveTab]=useState("Dashboard")

  const [exams, setExam] = useState([]);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  

  return (
    <div className="min-h-screen bg-[#F4EAD4] flex text-[#2B1810] font-sans">
      
      <aside className="w-64 bg-white border-r shadow-md flex flex-col">


           

            <nav className="flex-1 p-4 space-y-2">
            <SidebarItem
                icon={<GraduationCap size={20} />}
                title="EduPortal"
                onClick={() => setActiveTab("EduPortal")}
              />

              <SidebarItem
                icon={<BookOpen size={20} />}
                title="Dashboard"
                onClick={() => setActiveTab("Dashboard")}
              />

              

              <SidebarItem
                icon={<FileText size={20} />}
                title="Courses"
                onClick={() => setActiveTab("Courses")}
              />
              <SidebarItem
                icon={<FileText size={20} />}
                title="Notices"
                onClick={() => setActiveTab("Notices")}
              />



              <SidebarItem
                icon={<ClipboardList size={20} />}
                title="Games"
                onClick={() => setActiveTab("Games")}
              />
              <SidebarItem
                icon={<ClipboardList size={20} />}
                title="Profile"
                onClick={() => setActiveTab("Profile")}
              />
            </nav>

            <div className="p-4 border-t text-sm text-gray-500">
              Learning Management System
            </div>
          </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-sm p-6 min-h-[90vh]">
          {activeTab === "Dashboard" && <Subject/>}
        {activeTab === "Courses" && <Courses/>}
        {activeTab === "Notices" && <Notes/>}
        {activeTab === "Games" && <Game/>}
        {activeTab === "Profile" && <Profile/>}
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 h-1 bg-[#26140A] hidden lg:block" />
    </div>
  );
};

export default StudentDashboard;