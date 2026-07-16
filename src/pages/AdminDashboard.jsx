import React, { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  ClipboardList,
  BookOpen,
  Bell,
  Settings,
  LogOut,
  UserPlus,
  Plus,
  Eye,
  TrendingUp,
  Shield,
  Activity,
  FileText,
  Menu,
  X
} from "lucide-react";
import { Link } from "react-router-dom";
import { SidebarItem } from "../components/SidebarItem";



import Teachers from './Teachers';
import Students from './Students';
import Database from './Database';
import Courses from "./Courses";
import Class from './Class';
import Subject from "./Subject";
import Notice from "./Notice";

const AdminPage = () => <div className="text-sm font-medium">System Metrics Dashboard Panel Overview</div>;
const Setting = () => <div className="text-sm font-medium">System Core Parameters and Security Configurations</div>;

const Admin = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setIsMobileSidebarOpen(false);
  };
    const handleLogout=()=>{
          const confirm = window.confirm("Are you sure to log out?");
  
      if(confirm){
         localStorage.removeItem("token");
      toast.success("Logout successfully");
      navigate("/login");
      }
    }

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2E1A11] font-sans flex flex-col md:flex-row relative">
      
      {/* Mobile Top Navigation Header */}
      <header className="md:hidden flex items-center justify-between px-5 py-4 bg-white border-b border-[#EFE9DF] sticky top-0 z-40">
        <h1 className="text-xl font-black tracking-tight text-[#2E1A11]">
          Admin<span className="text-[#8C3E1A]">Panel</span>
        </h1>
        <button 
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="p-1.5 rounded-lg border border-[#EFE9DF] text-[#65534A] hover:bg-[#FAF6F0] transition"
        >
          {isMobileSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Sidebar Panel Navigation Container */}
      <aside className={`
        fixed inset-y-0 left-0 w-64 bg-white border-r border-[#EFE9DF] flex flex-col z-50 transform transition-transform duration-250 ease-in-out
        md:translate-x-0 md:sticky md:top-0 md:h-screen
        ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        {/* Sidebar Header (Admin branding) */}
        <div className="p-6 border-b border-[#FAF6F0] flex items-center justify-between">
          <h1 className="text-2xl font-black tracking-tight text-[#2E1A11]">
            Admin<span className="text-[#8C3E1A]">Panel</span>
          </h1>
          {/* Mobile Close Button */}
          <button 
            onClick={() => setIsMobileSidebarOpen(false)}
            className="md:hidden p-1 rounded-lg hover:bg-[#FAF6F0] text-[#65534A]"
          >
            <X size={18} />
          </button>
        </div>

        {/* Primary Navigation Options */}
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          <SidebarItem
            icon={<LayoutDashboard size={18} />}
            title="Dashboard"
            active={activeTab === "Dashboard"}
            onClick={() => handleTabChange("Dashboard")}
          />
          <SidebarItem
            icon={<GraduationCap size={18} />}
            title="Students"
            active={activeTab === "Students"}
            onClick={() => handleTabChange("Students")}
          />
          <SidebarItem
            icon={<Users size={18} />}
            title="Teachers"
            active={activeTab === "Teachers"}
            onClick={() => handleTabChange("Teachers")}
          />
          <SidebarItem
            icon={<BookOpen size={18} />}
            title="Courses"
            active={activeTab === "Courses"}
            onClick={() => handleTabChange("Courses")}
          />
          <SidebarItem
            icon={<Bell size={18} />}
            title="Notices"
            active={activeTab === "Notices"}
            onClick={() => handleTabChange("Notices")}
          />
          <SidebarItem
            icon={<Activity size={18} />}
            title="Database"
            active={activeTab === "Database"}
            onClick={() => handleTabChange("Database")}
          />
          <SidebarItem
            icon={<Settings size={18} />}
            title="Setting"
            active={activeTab === "Setting"}
            onClick={() => handleTabChange("Setting")}
          />
        </nav>

        {/* Sidebar Brand Footer */}
        <div className="p-4 border-t border-neutral-100 space-y-3 bg-[#FAF6F0]/30 shrink-0">
                 <button 
                   onClick={handleLogout}
                   className="flex items-center gap-3 w-full p-2.5 rounded-xl text-xs font-bold text-rose-700 hover:bg-rose-50 transition-colors cursor-pointer"
                 >
                   <LogOut size={16} />
                   <span>Sign Out Account</span>
                 </button>
                 <div className="text-[11px] font-medium text-neutral-400 tracking-wide text-center">
                   Learning Management System
                 </div>
               </div>
      </aside>

      {/* Backdrop overlay when mobile sidebar is open */}
      {isMobileSidebarOpen && (
        <div 
          onClick={() => setIsMobileSidebarOpen(false)}
          className="fixed inset-0 bg-[#2E1A11]/30 backdrop-blur-xs z-45 md:hidden"
        />
      )}

      {/* Main Panel Content Window Area */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <div className="bg-white rounded-2xl border border-[#EFE9DF] p-5 sm:p-6 lg:p-8 min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-100px)] md:min-h-0 shadow-xs">
          {activeTab === "Dashboard" && <AdminComponent />}
          {activeTab === "Courses" && <Courses />}
          {activeTab === "Teachers" && <Teachers />}
          {activeTab === "Students" && <Students />}
          {activeTab === "Notices" && <Notice />}
          {activeTab === "Database" && <Database />}
          {activeTab === "Setting" && <ChangeUser />}
        </div>
      </main>

      {/* Baseline Footer border overlay */}
      <footer className="fixed bottom-0 left-0 right-0 h-1 bg-[#2E1A11] hidden lg:block z-50" />
    </div>
  );
};

export default Admin;


import axios from 'axios';
import { toast } from 'sonner';
import Footer from "../components/DashFooter";
import ChangeUser from "../components/ChangeRole";

export const AdminComponent = () => {

  const[data,setData]=useState(null)

  const getDataForAdmin=async()=>{
    try {
      const token = localStorage.getItem("token");
      console.log(token);
  
      const res = await axios.get("http://localhost:8000/api/v1/database/get-database",{
        headers:{
          authorization:`Bearer ${token}`
        }
      })
      if(res.data.success){
        setData(res.data)
      }
    } catch (error) {
            toast.error(error.response?.data?.message || "Server error");
      
    }
  }

useEffect(() => {
  getDataForAdmin()
}, [])
  return (
  <div className="min-h-screen bg-gray-100 p-6">
    <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

    {data ? (
      <>
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Courses</h2>
            <p className="text-3xl font-bold text-blue-600">
              {data.courses.length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Enrollments</h2>
            <p className="text-3xl font-bold text-green-600">
              {data.enrollments.length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Exams</h2>
            <p className="text-3xl font-bold text-red-600">
              {data.exams.length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Assignments</h2>
            <p className="text-3xl font-bold text-purple-600">
              {data.assignments.length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Classes</h2>
            <p className="text-3xl font-bold text-yellow-600">
              {data.classes.length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Students Enrolled</h2>
            <p className="text-3xl font-bold text-indigo-600">
              {data.enrollments.length}
            </p>
          </div>
        </div>

        {/* Enrollments Table */}
        <div className="bg-white rounded-xl shadow">
          <div className="p-5 border-b">
            <h2 className="text-xl font-semibold">
              Recent Enrollments
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">User</th>
                  <th className="p-3 text-left">role</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Course</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Subject</th>
                  <th className="p-3 text-left">Price</th>
                </tr>
              </thead>

              <tbody>
                {data.enrollments.map((item) => (
                  <tr
                    key={item._id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-3">
                      {item.student.firstName} {item.student.lastName}
                    </td>
                    <td className="p-3">
                      {item.student.role}
                    </td>

                    <td className="p-3">
                      {item.student.email}
                    </td>

                    <td className="p-3">
                      {item.course.course}
                    </td>
                    <td className="p-3">
                      {item.student.phone}
                    </td>

                    <td className="p-3">
                      {item.course.subject}
                    </td>

                    <td className="p-3">
                      Rs. {item.course.price || 0}
                    </td>
                    
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        

        {/* Course List */}
        <div className="mt-10 bg-white rounded-xl shadow p-5">
          <h2 className="text-xl font-semibold mb-5">
            All Courses
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.courses.map((course) => (
              <div
                key={course._id}
                className="border rounded-lg p-4 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold">
                  {course.course}
                </h3>

                <p className="text-gray-500">
                  {course.subject}
                </p>

                <p className="mt-2 font-semibold text-green-600">
                  Rs. {course.price || 0}
                </p>
              </div>
            ))}
          </div>
        </div>
      </>
    ) : (
      <div className="text-center mt-20">
        <h2 className="text-xl font-semibold">Loading...</h2>
      </div>
    )}
   
  </div>
);
  
}

