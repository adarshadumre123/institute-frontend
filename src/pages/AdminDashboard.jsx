import React, { useState } from "react";

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
  FileText
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



const Admin = () => {
  const [activeTab, setActiveTab] = useState("Dashboard")
  return (
    <div className="min-h-screen bg-[#F4EAD4] flex text-[#2B1810] font-sans">

      <aside className="w-64 bg-white border-r shadow-md flex flex-col">



        <div className="p-6 border-b border-slate-800">
          <h1 className="text-3xl font-bold">
            Admin<span className="text-indigo-400">Panel</span>
          </h1>
        </div>


        <nav className="flex-1 p-4 space-y-2">

          <SidebarItem
            icon={<BookOpen size={20} />}
            title="Dashboard"
            onClick={() => setActiveTab("Dashboard")}
          />



          <SidebarItem
            icon={<FileText size={20} />}
            title="Students"
            onClick={() => setActiveTab("Students")}
          />
          <SidebarItem
            icon={<FileText size={20} />}
            title="Teachers"
            onClick={() => setActiveTab("Teachers")}
          />



          <SidebarItem
            icon={<ClipboardList size={20} />}
            title="Courses"
            onClick={() => setActiveTab("Courses")}
          />
          <SidebarItem
                      icon={<Bell size={20} />}
                      title="Notices"
                      active={activeTab === "Notices"}
                      onClick={() => setActiveTab("Notices")}
                    />
          <SidebarItem
            icon={<ClipboardList size={20} />}
            title="Database"
            onClick={() => setActiveTab("Database")}
          />
          <SidebarItem
            icon={<ClipboardList size={20} />}
            title="Setting"
            onClick={() => setActiveTab("Setting")}
          />
        </nav>

        <div className="p-4 border-t text-sm text-gray-500">
          Learning Management System
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-sm p-6 min-h-[90vh]">
          {activeTab === "Dashboard" && <Subject />}
          {activeTab === "Courses" && <Courses />}
          {activeTab === "Teachers" && <Teachers/>}
          {activeTab === "Students" && <Students />}
          {activeTab === "Notices" && <Notice />}
          {activeTab === "Database" && <Database />}
          {activeTab === "Setting" && <Setting />}
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 h-1 bg-[#26140A] hidden lg:block" />
    </div>

  );
};

export default Admin;

/* ================= COMPONENTS ================= */



// const StatsCard = ({ title, value, icon }) => {
//   return (
//     <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition">
//       <div className="flex items-center justify-between mb-4">
//         <div className="bg-indigo-100 text-indigo-600 p-3 rounded-2xl">
//           {icon}
//         </div>

//         <Activity className="text-gray-300" size={22} />
//       </div>

//       <h2 className="text-3xl font-bold text-gray-800">{value}</h2>

//       <p className="text-gray-500 mt-2">{title}</p>
//     </div>
//   );
// };

// const UserCard = ({ name, role, status }) => {
//   return (
//     <div className="flex items-center justify-between border border-gray-100 p-4 rounded-2xl hover:shadow-sm transition">
//       <div className="flex items-center gap-4">
//         <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
//           {name.charAt(0)}
//         </div>

//         <div>
//           <h4 className="font-bold text-gray-800">{name}</h4>
//           <p className="text-gray-500 text-sm">{role}</p>
//         </div>
//       </div>

//       <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
//         {status}
//       </span>
//     </div>
//   );
// };

// const TableRow = ({
//   exam,
//   subject,
//   date,
//   students,
//   status,
// }) => {
//   return (
//     <tr className="border-b last:border-none hover:bg-gray-50 transition">
//       <td className="py-4 font-semibold text-gray-800">{exam}</td>

//       <td className="py-4 text-gray-500">{subject}</td>

//       <td className="py-4 text-gray-500">{date}</td>

//       <td className="py-4 text-gray-500">{students}</td>

//       <td className="py-4">
//         <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
//           {status}
//         </span>
//       </td>

//       <td className="py-4">
//         <button className="flex items-center gap-2 text-indigo-600 hover:underline">
//           <Eye size={16} />
//           View
//         </button>
//       </td>
//     </tr>
//   );
// };

// const StatusCard = ({ title, status }) => {
//   return (
//     <div className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl">
//       <h4 className="font-semibold text-gray-800">{title}</h4>

//       <span className="text-green-600 font-medium">{status}</span>
//     </div>
//   );
// };

// const ActivityItem = ({ text }) => {
//   return (
//     <div className="flex items-center gap-3">
//       <div className="w-3 h-3 rounded-full bg-indigo-600"></div>

//       <p className="text-gray-600">{text}</p>
//     </div>
//   );
// };