// import React from 'react'

// const Subject = () => {
//   return (
//     <div>
//       <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full overflow-x-hidden">
        
//         {/* Top Header / Navbar: Dark Chocolate background (#26140A) */}
//         <header className="bg-[#26140A] rounded-2xl border border-[#4A2C11]/30 p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 shadow-md">
//           <div>
//             <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
//               Welcome Back 👋
//             </h2>
//             <p className="text-amber-100/60 text-sm mt-0.5">
//               Here is your learning progress for today.
//             </p>
//           </div>

//           {/* Actions & Profile */}
//           <div className="flex items-center gap-4 self-end sm:self-auto">
//             <button className="p-2 text-amber-100/70 hover:text-white hover:bg-[#3D220F] rounded-full transition-all relative">
//               <Bell size={20} />
//               <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#D4AF37] rounded-full ring-2 ring-[#26140A]"></span>
//             </button>

//             <div className="relative">
//               <button 
//                 onClick={() => setShowProfileMenu(!showProfileMenu)}
//                 className="flex items-center gap-2 p-1.5 pr-3 rounded-full border border-[#4A2C11] transition-all bg-[#3D220F] text-white"
//               >
//                 {/* Profile Badge icon context using Gold background */}
//                 <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#2B1810] flex items-center justify-center font-extrabold text-sm shadow-inner">
//                   S
//                 </div>
//                 <span className="text-sm font-semibold hidden sm:inline text-amber-50">Student</span>
//                 <ChevronDown size={16} className="text-amber-200/60" />
//               </button>

//               {showProfileMenu && (
//                 <div className="absolute right-0 mt-2 w-48 bg-[#3D220F] border border-[#4A2C11] rounded-xl shadow-2xl py-1 z-50 text-amber-50">
//                   <Link to="/profile" className="block px-4 py-2.5 text-sm hover:bg-[#4D2A12] font-medium">Your Profile</Link>
//                   <Link to="/settings" className="block px-4 py-2.5 text-sm hover:bg-[#4D2A12] font-medium">Settings</Link>
//                   <hr className="border-[#4A2C11] my-1" />
//                   <button onClick={handleLogout} className="w-full text-left block px-4 py-2.5 text-sm text-rose-300 hover:bg-rose-950/40 font-medium">Log Out</button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </header>

//         {/* Quick Stats Grid - Chocolate Cards (#3D220F) */}
//         <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          
//           <div className="bg-[#3D220F] text-white p-6 rounded-2xl border border-[#4A2C11] shadow-md hover:shadow-lg transition-all">
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-xs font-bold text-amber-100/60 uppercase tracking-wider">Enrolled Courses</p>
//                 <h3 className="text-3xl font-extrabold mt-2 text-white">6</h3>
//               </div>
//               {/* Badges/Important actions in Gold */}
//               <div className="bg-[#D4AF37] p-3.5 rounded-xl text-[#2B1810]">
//                 <BookOpen size={24} />
//               </div>
//             </div>
//           </div>

//           <div className="bg-[#3D220F] text-white p-6 rounded-2xl border border-[#4A2C11] shadow-md hover:shadow-lg transition-all">
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-xs font-bold text-amber-100/60 uppercase tracking-wider">Assignments</p>
//                 <h3 className="text-3xl font-extrabold mt-2 text-white">12</h3>
//               </div>
//               <div className="bg-[#D4AF37] p-3.5 rounded-xl text-[#2B1810]">
//                 <ClipboardList size={24} />
//               </div>
//             </div>
//           </div>

//           <div className="bg-[#3D220F] text-white p-6 rounded-2xl border border-[#4A2C11] shadow-md hover:shadow-lg transition-all sm:col-span-2 lg:col-span-1">
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-xs font-bold text-amber-100/60 uppercase tracking-wider">Attendance</p>
//                 <h3 className="text-3xl font-extrabold mt-2 text-white">92%</h3>
//               </div>
//               <div className="bg-[#D4AF37] p-3.5 rounded-xl text-[#2B1810]">
//                 <CheckCircle size={24} />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Content Splitting Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
//           {/* Progress Bars Column: Chocolate Card Container */}
//           <section className="lg:col-span-2 bg-[#3D220F] text-white rounded-2xl border border-[#4A2C11] p-6 shadow-md space-y-6">
//             <div>
//               <h2 className="text-xl font-bold text-white">Course Progress Overview</h2>
//               <p className="text-amber-100/60 text-sm">Track your dynamic pacing metrics.</p>
//             </div>

//             <div className="space-y-5">
//               {courses.map((course, index) => (
//                 <div key={index} className="group p-4 rounded-xl bg-[#26140A]/40 border border-[#4A2C11]/40 hover:border-[#D4AF37]/40 transition-colors">
//                   <div className="flex justify-between mb-2">
//                     <div>
//                       <h4 className="font-semibold text-amber-50 group-hover:text-[#D4AF37] transition-colors">
//                         {course.title}
//                       </h4>
//                       <p className="text-amber-100/50 text-xs mt-0.5">
//                         Instructor: {course.teacher}
//                       </p>
//                     </div>
//                     {/* Important stats highlight tags in Gold */}
//                     <span className="font-bold text-xs text-[#2B1810] bg-[#D4AF37] px-2 py-1 rounded-md self-start shadow-sm">
//                       {course.progress}% Complete
//                     </span>
//                   </div>

//                   {/* Track line: Dark Chocolate background */}
//                   <div className="w-full bg-[#26140A] h-2.5 rounded-full overflow-hidden p-0.5 border border-[#4A2C11]">
//                     {/* Active Bar fills with Terracotta highlight (#C25A3F / deep warm burnt tone) */}
//                     <div
//                       className="bg-[#C25A3F] h-full rounded-full transition-all duration-500 shadow"
//                       style={{ width: `${course.progress}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Offline Schedule Column: Chocolate Container */}
//           <section className="bg-[#3D220F] text-white rounded-2xl border border-[#4A2C11] p-6 shadow-md">
//             <div className="mb-6">
//               <h2 className="text-xl font-bold text-white">Offline Schedule</h2>
//               <p className="text-amber-100/60 text-sm">Today's physical on-campus classes.</p>
//             </div>

//             <div className="space-y-4">
//               {/* Left border emphasizes highlight utilizing high-impact Terracotta (#C25A3F) */}
//               <div className="flex items-start gap-4 border-l-4 border-[#C25A3F] pl-4 py-1 bg-[#26140A]/30 rounded-r-lg">
//                 <div className="text-[#D4AF37] mt-0.5 shrink-0">
//                   <Clock size={18} />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-sm text-white">Korean Language Class</h4>
//                   <p className="text-amber-100/50 text-xs mt-0.5">10:00 AM - 11:30 AM</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 border-l-4 border-[#C25A3F] pl-4 py-1 bg-[#26140A]/30 rounded-r-lg">
//                 <div className="text-[#D4AF37] mt-0.5 shrink-0">
//                   <Clock size={18} />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-sm text-white">Grade 12 Tuition Class</h4>
//                   <p className="text-amber-100/50 text-xs mt-0.5">1:00 PM - 3:00 PM</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 border-l-4 border-[#C25A3F] pl-4 py-1 bg-[#26140A]/30 rounded-r-lg">
//                 <div className="text-[#D4AF37] mt-0.5 shrink-0">
//                   <Clock size={18} />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-sm text-white">Japanese Language Class</h4>
//                   <p className="text-amber-100/50 text-xs mt-0.5">4:00 PM - 5:00 PM</p>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* External Imported Component Section */}
//         <section className="mt-8">
//           <Courses />
//         </section>
//       </main>
//     </div>
//   )
// }

// export default Subject

import React from 'react'

const Subject = () => {
  return (
    <div>hello
      <p>this is a dubjet</p>
    </div>
  )
}

export default Subject