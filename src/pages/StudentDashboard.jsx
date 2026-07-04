// import React, { useState } from "react";
// import { Link } from 'react-router-dom';
// import {
//   BookOpen,
//   CalendarDays,
//   ClipboardList,
//   Bell,
//   User,
//   GraduationCap,
//   Clock,
//   CheckCircle,
//   ShoppingBag,
// } from "lucide-react";

// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Courses from "./Courses";



// const StudentDashboard = () => {
//   const [exams, setExam] = useState([]);

//   const navigate = useNavigate()

//   const ProfileImageHandler = (e) => {
//     if (e.target.value === 'profile') {
//       navigate('/profile')
//     }
//     if (e.target.value === 'logout') {

//       navigate('/login')
//     }
//   }
//   const courses = [
  
//   ];



//   const assignments = [

//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 flex">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-700 text-white p-5 hidden md:block">
//         <div className="flex items-center gap-3 mb-10">
//           <GraduationCap size={35} />
//           <h1 className="text-2xl font-bold">EduPortal</h1>
//         </div>

//         <nav className="space-y-4">
//           <div className="flex items-center gap-3 hover:bg-gray-600 p-3 rounded-lg cursor-pointer">
//             <BookOpen />
//             <span>Dashboard</span>
//           </div>

          
          
//           <Link to={'/course'} className="flex items-center gap-3 hover:bg-gray-600 p-3 rounded-lg cursor-pointer">
//             <BookOpen />
//             <span>Courses</span>            
//           </Link>
//           <Link to={'/game'} className="flex items-center gap-3 hover:bg-gray-600 p-3 rounded-lg cursor-pointer">
//             <BookOpen />
//             <span>Games</span>            
//           </Link>

//           <Link to={'/update'} className="flex items-center gap-3 hover:bg-gray-600 p-3 rounded-lg cursor-pointer">
//             <ClipboardList />
//             <span>Notices</span>
//           </Link>

//           <Link to={'/profile'} className="flex items-center gap-3 hover:bg-gray-600 p-3 rounded-lg cursor-pointer">
//             <User />
//             <span>Profile</span>
//           </Link>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         {/* Top Navbar */}
//         <div className="bg-white rounded-2xl shadow-md p-5 flex justify-between items-center mb-6">
//           <div>
//             <h2 className="text-3xl font-bold text-gray-800">
//               Welcome Back 👋
//             </h2>
//             <p className="text-gray-500 mt-1">
//               Here is your learning progress
//             </p>
//           </div>

//           <div className="flex items-center gap-3">

            
//           </div>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid md:grid-cols-3 gap-5 mb-8">
//           <div className="bg-white p-5 rounded-2xl shadow-md">
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-gray-500">Enrolled Courses</p>
//                 <h2 className="text-3xl font-bold mt-2">6</h2>
//               </div>

//               <div className="bg-indigo-100 p-4 rounded-full">
//                 <BookOpen className="text-indigo-700" />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-5 rounded-2xl shadow-md">
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-gray-500">Assignments</p>
//                 <h2 className="text-3xl font-bold mt-2">12</h2>
//               </div>

//               <div className="bg-green-100 p-4 rounded-full">
//                 <ClipboardList className="text-green-700" />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-5 rounded-2xl shadow-md">
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-gray-500">Attendance</p>
//                 <h2 className="text-3xl font-bold mt-2">92%</h2>
//               </div>

//               <div className="bg-pink-100 p-4 rounded-full">
//                 <CheckCircle className="text-pink-700" />
//               </div>
//             </div>
//           </div>
//         </div>

//         Courses
//         <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
//           <h2 className="text-2xl font-bold mb-5">My Courses</h2>

//           <div className="space-y-5">
//             {courses.map((course, index) => (
//               <div key={index}>
//                 <div className="flex justify-between mb-2">
//                   <div>
//                     <h3 className="font-semibold text-lg">
//                       {course.title}
//                     </h3>
//                     <p className="text-gray-500 text-sm">
//                       {course.teacher}
//                     </p>
//                   </div>

//                   <span className="font-bold text-indigo-600">
//                     {course.progress}%
//                   </span>
//                 </div>

//                 <div className="w-full bg-gray-200 h-3 rounded-full">
//                   <div
//                     className="bg-indigo-600 h-3 rounded-full"
//                     style={{ width: `${course.progress}%` }}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <Courses/>

//         {/* Assignments + Schedule */}
//         <div className="grid md:grid-cols-2 gap-6">
        

//           {/* Schedule */}
//           <div className="bg-white rounded-2xl shadow-md p-6 ">
//             <h2 className="text-2xl font-bold mb-5">Offline Class Schedule</h2>

//             <div className="space-y-5">
//               <div className=" gap-4 border-l-4 border-indigo-600 pl-4">
//                 <Clock className="text-indigo-600" />
//                 <div>
//                   <h3 className="font-semibold">
//                     Korean Language Class
//                   </h3>
//                   <p className="text-gray-500 text-sm">
//                     10:00 AM - 11:30 AM
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4 border-l-4 border-pink-600 pl-4">
//                 <Clock className="text-pink-600" />
//                 <div>
//                   <h3 className="font-semibold">
//                     12 Tution Class
//                   </h3>
//                   <p className="text-gray-500 text-sm">
//                     1:00 PM - 3:00 PM
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4 border-l-4 border-green-600 pl-4">
//                 <Clock className="text-green-600" />
//                 <div>
//                   <h3 className="font-semibold">
//                     Japanese Language class
//                   </h3>
//                   <p className="text-gray-500 text-sm">
//                     4:00 PM - 5:00 PM
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;


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
  Bell
} from "lucide-react";
import Courses from "./Courses";

const StudentDashboard = () => {
  const [exams, setExam] = useState([]);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const courses = [
    { title: "Korean Language Course", teacher: "Mr. Kim", progress: 75 },
    { title: "Japanese Intensive", teacher: "Sensei Tanaka", progress: 40 },
    { title: "Class 12 Advanced Tuition", teacher: "Mrs. Sharma", progress: 90 }
  ];

  return (
    // Main Background: Champagne (#F7E7CE / #F2E3C6 structural equivalent)
    <div className="min-h-screen bg-[#F4EAD4] flex text-[#2B1810] font-sans">
      
      {/* Sidebar: Chocolate (#4A2C11 / deep warm stone) */}
      <aside className="w-64 bg-[#3D220F] text-[#F4EAD4]/90 p-6 hidden lg:flex flex-col justify-between shrink-0 border-r border-[#2B1810]/20">
        <div>
          <div className="flex items-center gap-3 mb-10 px-2">
            {/* Highlight Icon Container: Gold (#D4AF37) */}
            <div className="bg-[#D4AF37] p-2 rounded-xl text-[#2B1810] shadow-sm">
              <GraduationCap size={26} />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white">EduPortal</h1>
          </div>

          <nav className="space-y-1">
            <Link to="/dashboard" className="flex items-center gap-3 bg-[#4D2A12] text-white p-3 rounded-xl font-semibold transition-all">
              <BookOpen size={20} className="text-[#D4AF37]" />
              <span>Dashboard</span>
            </Link>
            
            <Link to="/course" className="flex items-center gap-3 text-amber-100/70 hover:text-white hover:bg-[#4D2A12]/50 p-3 rounded-xl font-medium transition-all">
              <BookOpen size={20} />
              <span>Courses</span>            
            </Link>

            <Link to="/game" className="flex items-center gap-3 text-amber-100/70 hover:text-white hover:bg-[#4D2A12]/50 p-3 rounded-xl font-medium transition-all">
              <Gamepad2 size={20} />
              <span>Games</span>            
            </Link>

            <Link to="/update" className="flex items-center gap-3 text-amber-100/70 hover:text-white hover:bg-[#4D2A12]/50 p-3 rounded-xl font-medium transition-all">
              <ClipboardList size={20} />
              <span>Notices</span>
            </Link>

            <Link to="/profile" className="flex items-center gap-3 text-amber-100/70 hover:text-white hover:bg-[#4D2A12]/50 p-3 rounded-xl font-medium transition-all">
              <User size={20} />
              <span>Profile</span>
            </Link>
          </nav>
        </div>

        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 text-amber-200/60 hover:text-rose-300 hover:bg-rose-950/30 p-3 rounded-xl font-medium transition-all mt-auto"
        >
          <LogOut size={20} />
          <span>Log Out</span>
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full overflow-x-hidden">
        
        {/* Top Header / Navbar: Dark Chocolate background (#26140A) */}
        <header className="bg-[#26140A] rounded-2xl border border-[#4A2C11]/30 p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 shadow-md">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              Welcome Back 👋
            </h2>
            <p className="text-amber-100/60 text-sm mt-0.5">
              Here is your learning progress for today.
            </p>
          </div>

          {/* Actions & Profile */}
          <div className="flex items-center gap-4 self-end sm:self-auto">
            <button className="p-2 text-amber-100/70 hover:text-white hover:bg-[#3D220F] rounded-full transition-all relative">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#D4AF37] rounded-full ring-2 ring-[#26140A]"></span>
            </button>

            <div className="relative">
              <button 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 p-1.5 pr-3 rounded-full border border-[#4A2C11] transition-all bg-[#3D220F] text-white"
              >
                {/* Profile Badge icon context using Gold background */}
                <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#2B1810] flex items-center justify-center font-extrabold text-sm shadow-inner">
                  S
                </div>
                <span className="text-sm font-semibold hidden sm:inline text-amber-50">Student</span>
                <ChevronDown size={16} className="text-amber-200/60" />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-[#3D220F] border border-[#4A2C11] rounded-xl shadow-2xl py-1 z-50 text-amber-50">
                  <Link to="/profile" className="block px-4 py-2.5 text-sm hover:bg-[#4D2A12] font-medium">Your Profile</Link>
                  <Link to="/settings" className="block px-4 py-2.5 text-sm hover:bg-[#4D2A12] font-medium">Settings</Link>
                  <hr className="border-[#4A2C11] my-1" />
                  <button onClick={handleLogout} className="w-full text-left block px-4 py-2.5 text-sm text-rose-300 hover:bg-rose-950/40 font-medium">Log Out</button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Quick Stats Grid - Chocolate Cards (#3D220F) */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          
          <div className="bg-[#3D220F] text-white p-6 rounded-2xl border border-[#4A2C11] shadow-md hover:shadow-lg transition-all">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-amber-100/60 uppercase tracking-wider">Enrolled Courses</p>
                <h3 className="text-3xl font-extrabold mt-2 text-white">6</h3>
              </div>
              {/* Badges/Important actions in Gold */}
              <div className="bg-[#D4AF37] p-3.5 rounded-xl text-[#2B1810]">
                <BookOpen size={24} />
              </div>
            </div>
          </div>

          <div className="bg-[#3D220F] text-white p-6 rounded-2xl border border-[#4A2C11] shadow-md hover:shadow-lg transition-all">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-amber-100/60 uppercase tracking-wider">Assignments</p>
                <h3 className="text-3xl font-extrabold mt-2 text-white">12</h3>
              </div>
              <div className="bg-[#D4AF37] p-3.5 rounded-xl text-[#2B1810]">
                <ClipboardList size={24} />
              </div>
            </div>
          </div>

          <div className="bg-[#3D220F] text-white p-6 rounded-2xl border border-[#4A2C11] shadow-md hover:shadow-lg transition-all sm:col-span-2 lg:col-span-1">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-amber-100/60 uppercase tracking-wider">Attendance</p>
                <h3 className="text-3xl font-extrabold mt-2 text-white">92%</h3>
              </div>
              <div className="bg-[#D4AF37] p-3.5 rounded-xl text-[#2B1810]">
                <CheckCircle size={24} />
              </div>
            </div>
          </div>
        </section>

        {/* Content Splitting Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Progress Bars Column: Chocolate Card Container */}
          <section className="lg:col-span-2 bg-[#3D220F] text-white rounded-2xl border border-[#4A2C11] p-6 shadow-md space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white">Course Progress Overview</h2>
              <p className="text-amber-100/60 text-sm">Track your dynamic pacing metrics.</p>
            </div>

            <div className="space-y-5">
              {courses.map((course, index) => (
                <div key={index} className="group p-4 rounded-xl bg-[#26140A]/40 border border-[#4A2C11]/40 hover:border-[#D4AF37]/40 transition-colors">
                  <div className="flex justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-amber-50 group-hover:text-[#D4AF37] transition-colors">
                        {course.title}
                      </h4>
                      <p className="text-amber-100/50 text-xs mt-0.5">
                        Instructor: {course.teacher}
                      </p>
                    </div>
                    {/* Important stats highlight tags in Gold */}
                    <span className="font-bold text-xs text-[#2B1810] bg-[#D4AF37] px-2 py-1 rounded-md self-start shadow-sm">
                      {course.progress}% Complete
                    </span>
                  </div>

                  {/* Track line: Dark Chocolate background */}
                  <div className="w-full bg-[#26140A] h-2.5 rounded-full overflow-hidden p-0.5 border border-[#4A2C11]">
                    {/* Active Bar fills with Terracotta highlight (#C25A3F / deep warm burnt tone) */}
                    <div
                      className="bg-[#C25A3F] h-full rounded-full transition-all duration-500 shadow"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Offline Schedule Column: Chocolate Container */}
          <section className="bg-[#3D220F] text-white rounded-2xl border border-[#4A2C11] p-6 shadow-md">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white">Offline Schedule</h2>
              <p className="text-amber-100/60 text-sm">Today's physical on-campus classes.</p>
            </div>

            <div className="space-y-4">
              {/* Left border emphasizes highlight utilizing high-impact Terracotta (#C25A3F) */}
              <div className="flex items-start gap-4 border-l-4 border-[#C25A3F] pl-4 py-1 bg-[#26140A]/30 rounded-r-lg">
                <div className="text-[#D4AF37] mt-0.5 shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">Korean Language Class</h4>
                  <p className="text-amber-100/50 text-xs mt-0.5">10:00 AM - 11:30 AM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-l-4 border-[#C25A3F] pl-4 py-1 bg-[#26140A]/30 rounded-r-lg">
                <div className="text-[#D4AF37] mt-0.5 shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">Grade 12 Tuition Class</h4>
                  <p className="text-amber-100/50 text-xs mt-0.5">1:00 PM - 3:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-l-4 border-[#C25A3F] pl-4 py-1 bg-[#26140A]/30 rounded-r-lg">
                <div className="text-[#D4AF37] mt-0.5 shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">Japanese Language Class</h4>
                  <p className="text-amber-100/50 text-xs mt-0.5">4:00 PM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* External Imported Component Section */}
        <section className="mt-8">
          <Courses />
        </section>

      </main>

      {/* Footer Element utilizing Dark Chocolate theme (#26140A) */}
      <footer className="fixed bottom-0 left-0 right-0 h-1 bg-[#26140A] hidden lg:block" />
    </div>
  );
};

export default StudentDashboard;