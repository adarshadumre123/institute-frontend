// import React, { useEffect, useState } from "react";
// import {
//   LayoutDashboard,
//   BookOpen,
//   Users,
//   FileText,
//   ClipboardList,
//   Bell,
//   Settings,
//   LogOut,
//   Plus,
//   Eye,
//   Calendar,
//   Clock,
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { SidebarItem } from "../components/SidebarItem";




// const TeacherDashboard = () => {
//   const [dashboard, setDashboard] = useState({
//   totalCourses: 0,
//   totalStudents: 0,
//   totalClasses: 0,
//   totalAssignments: 0,
//   totalExams: 0,
// });
//   const token = localStorage.getItem("token")

//   const getDashboard = async () => {
//     try {
//       const res = await axios.get('http://localhost:8000/api/v1/dashboard/teacher-dashboard', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       setDashboard(res.data.dashboard)
//     } catch (error) {
//       toast.error(error.response?.data?.message);

//     }
//   }

//   useEffect(() => {
//     getDashboard();
//   }, [])

//   return (
//     <div className="min-h-screen bg-gray-100 flex">
//       {/* Sidebar */}
//       <aside className="w-72 bg-white shadow-lg hidden md:flex flex-col">
//         <div className="p-6 border-b">
//           <h1 className="text-2xl font-bold text-indigo-600">
//             Teacher Panel
//           </h1>
//         </div>

//         <nav className="flex-1 p-4 space-y-2">
//           <SidebarItem icon={<LayoutDashboard size={20} />} title="Dashboard" active />
//           <SidebarItem icon={<BookOpen size={20} />} title="Courses" to={'/course'} />
//           <SidebarItem icon={<ClipboardList size={20} />} title="Exams" to={'/exam'} />
//           <SidebarItem icon={<Users size={20} />} title="Students" to={'/students'} />
//           <SidebarItem icon={<FileText size={20} />} title="Assignments" to={'/assignment'} />
//           <SidebarItem icon={<Bell size={20} />} title="Notifications" />
//           <SidebarItem icon={<Settings size={20} />} title="Settings" />
//         </nav>

//         <div className="p-4 border-t">
//           <button className="flex items-center gap-2 text-red-500 hover:bg-red-50 w-full p-3 rounded-xl transition">
//             <LogOut size={18} />
//             Logout
//           </button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-4 md:p-8 overflow-y-auto">
//         {/* Topbar */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
//           <div>
//             <h2 className="text-3xl font-bold text-gray-800">
//               Welcome Back 👋
//             </h2>
//             <p className="text-gray-500 mt-1">
//               Manage your classes and exams easily.
//             </p>
//           </div>

//           <div className="flex items-center gap-4">
//             <Link to={'/createExam'} className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl flex items-center gap-2 transition">
//               <Plus size={18} />
//               Create Exam
//             </Link>

//             <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
//               T
//             </div>
//           </div>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
//           <StatsCard
//             title="Total Students"
//             value={dashboard.totalCourses}
//             icon={<Users size={24} />}
//           />


//           <StatsCard
//             title="Total Exams"
//             value="48"
//             icon={<ClipboardList size={24} />}
//           />

//           <StatsCard
//             title="Assignments"
//             value="26"
//             icon={<FileText size={24} />}
//           />

//           <StatsCard
//             title="Courses"
//             value="12"
//             icon={<BookOpen size={24} />}
//           />
//         </div>

//         {/* Content Grid */}
//         <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
//           {/* Recent Exams */}
//           <div className="xl:col-span-2 bg-white rounded-3xl shadow-sm p-6">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-xl font-bold text-gray-800">
//                 Recent Exams
//               </h3>

//               <button className="text-indigo-600 font-medium hover:underline">
//                 View All
//               </button>
//             </div>

//             <div className="space-y-4">
//               <ExamCard
//                 title="Computer Networks"
//                 subject="Networking"
//                 students="120"
//                 date="20 Aug 2026"
//               />

//               <ExamCard
//                 title="Operating System"
//                 subject="System"
//                 students="95"
//                 date="25 Aug 2026"
//               />

//               <ExamCard
//                 title="DBMS Final Test"
//                 subject="Database"
//                 students="150"
//                 date="30 Aug 2026"
//               />
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="space-y-6">
//             {/* Schedule */}
//             <div className="bg-white rounded-3xl shadow-sm p-6">
//               <h3 className="text-xl font-bold text-gray-800 mb-6">
//                 Today Schedule
//               </h3>

//               <div className="space-y-4">
//                 <ScheduleCard
//                   title="React Class"
//                   time="10:00 AM"
//                 />

//                 <ScheduleCard
//                   title="DBMS Viva"
//                   time="1:30 PM"
//                 />

//                 <ScheduleCard
//                   title="Exam Meeting"
//                   time="4:00 PM"
//                 />
//               </div>
//             </div>

//             {/* Quick Actions */}
//             <div className="bg-white rounded-3xl shadow-sm p-6">
//               <h3 className="text-xl font-bold text-gray-800 mb-6">
//                 Quick Actions
//               </h3>

//               <div className="grid grid-cols-2 gap-4">
//                 <QuickButton title="Create Exam" />
//                 <QuickButton title="Add Student" />
//                 <QuickButton title="Upload Notes" />
//                 <QuickButton title="Check Results" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default TeacherDashboard;

// /* ================= COMPONENTS ================= */

// // const SidebarItem = ({ icon, title, active, to = "#" }) => {
// //   return (
// //     <Link
// //       to={to}
// //       className={`flex items-center gap-3 w-full p-3 rounded-xl transition ${
// //         active
// //           ? "bg-indigo-600 text-white"
// //           : "hover:bg-gray-100 text-gray-700"
// //       }`}
// //     >
// //       {icon}
// //       <span className="font-medium">{title}</span>
// //     </Link>
// //   );
// // };

// const StatsCard = ({ title, value, icon }) => {
//   return (
//     <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition">
//       <div className="flex items-center justify-between mb-4">
//         <div className="bg-indigo-100 text-indigo-600 p-3 rounded-2xl">
//           {icon}
//         </div>
//       </div>

//       <h2 className="text-3xl font-bold text-gray-800">{value}</h2>
//       <p className="text-gray-500 mt-2">{title}</p>
//     </div>
//   );
// };

// const ExamCard = ({ title, subject, students, date }) => {
//   return (
//     <div className="border border-gray-100 rounded-2xl p-5 hover:shadow-md transition">
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//         <div>
//           <h4 className="text-lg font-bold text-gray-800">{title}</h4>
//           <p className="text-gray-500">{subject}</p>

//           <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
//             <span className="flex items-center gap-1">
//               <Users size={15} />
//               {students} Students
//             </span>

//             <span className="flex items-center gap-1">
//               <Calendar size={15} />
//               {date}
//             </span>
//           </div>
//         </div>

//         <div className="flex gap-3">
//           <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center gap-2 transition">
//             <Eye size={16} />
//             View
//           </button>

//           <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition">
//             Manage
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ScheduleCard = ({ title, time }) => {
//   return (
//     <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
//       <div>
//         <h4 className="font-semibold text-gray-800">{title}</h4>
//         <p className="text-gray-500 text-sm">Scheduled Task</p>
//       </div>

//       <div className="flex items-center gap-2 text-indigo-600 font-medium">
//         <Clock size={16} />
//         {time}
//       </div>
//     </div>
//   );
// };

// const QuickButton = ({ title }) => {
//   return (
//     <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 p-4 rounded-2xl font-medium transition">
//       {title}
//     </button>
//   );
// };


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