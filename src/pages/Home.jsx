// import { useNavigate,Link } from "react-router-dom";

// const stats = [
//   { value: "12,000+", label: "Students Enrolled" },
//   { value: "340+", label: "Expert Teachers" },
//   { value: "500+", label: "Courses Available" },
//   { value: "98%", label: "Success Rate" },
// ];

// const features = [
//   {
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//       </svg>
//     ),
//     title: "Smart Learning",
//     desc: "AI-powered personalized learning paths tailored to each student's pace.",
//   },
//   {
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
//       </svg>
//     ),
//     title: "Live Classes",
//     desc: "Real-time interaction between students and instructors from anywhere.",
//   },
//   {
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
//       </svg>
//     ),
//     title: "Certified Courses",
//     desc: "Earn globally recognized certificates upon successful completion.",
//   },
//   {
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//       </svg>
//     ),
//     title: "Learn Anytime",
//     desc: "Access all recorded sessions and materials 24/7 at your convenience.",
//   },
// ];

// const portals = [
//   {
//     role: "Student",
//     path: "/dashboard/student",
//     color: "from-indigo-500 to-indigo-600",
//     lightBg: "bg-indigo-50",
//     border: "border-indigo-200",
//     textColor: "text-indigo-600",
//     btnColor: "bg-indigo-600 hover:bg-indigo-700",
//     icon: (
//       <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0121 21H3a12.083 12.083 0 012.84-10.422L12 14z" />
//       </svg>
//     ),
//     desc: "Access your courses, assignments, grades, and learning progress.",
//     perks: ["View enrolled courses", "Submit assignments", "Track your grades", "Join live classes"],
//   },
//   {
//     role: "Teacher",
//     path: "/dashboard/teacher",
//     color: "from-emerald-500 to-emerald-600",
//     lightBg: "bg-emerald-50",
//     border: "border-emerald-200",
//     textColor: "text-emerald-600",
//     btnColor: "bg-emerald-600 hover:bg-emerald-700",
//     icon: (
//       <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//       </svg>
//     ),
//     desc: "Manage your classes, create content, and track student performance.",
//     perks: ["Create & manage courses", "Grade assignments", "Monitor attendance", "Schedule live sessions"],
//   },
//   {
//     role: "Admin",
//     path: "/dashboard/admin",
//     color: "from-violet-500 to-violet-600",
//     lightBg: "bg-violet-50",
//     border: "border-violet-200",
//     textColor: "text-violet-600",
//     btnColor: "bg-violet-600 hover:bg-violet-700",
//     icon: (
//       <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//       </svg>
//     ),
//     desc: "Oversee the entire institute — users, reports, and system settings.",
//     perks: ["Manage all users", "View system analytics", "Configure settings", "Generate reports"],
//   },
// ];

// export default function HomePage() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-white font-sans">

//       {/* ── Navbar ── */}
//       <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
//         <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
//           <div className="flex items-center gap-2.5">
//             <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
//               <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
//               </svg>
//             </div>
//             <span className="text-lg font-bold text-slate-800 tracking-tight">EduNova</span>
//           </div>
//           <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
//             <a href="#portals" className="hover:text-slate-800 transition">Portals</a>
//             <a href="#features" className="hover:text-slate-800 transition">Features</a>
//             <a href="#stats" className="hover:text-slate-800 transition">About</a>
//           </div>
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => navigate("/login")}
//               className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition px-3 py-1.5"
//             >
//               Sign in
//             </button>
//             <button
//               onClick={() => navigate("/signup")}
//               className="text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
//             >
//               Get started
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* ── Hero ── */}
//       <section className="relative overflow-hidden bg-linear-to-b from-indigo-50 to-white pt-20 pb-24 px-6">
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-100 bg-indigo-100 rounded-full opacity-30 blur-3xl" />
//         </div>
//         <div className="relative max-w-3xl mx-auto text-center">
//           <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-5 tracking-wide">
//             🎓 Nepal's #1 Teaching Institute
//           </span>
//           <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
//             Education that <span className="text-indigo-600">empowers</span> every learner
//           </h1>
//           <p className="text-lg text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed">
//             A unified platform for students, teachers, and administrators to learn, teach, and manage — all in one place.
//           </p>
//           <div className="flex items-center justify-center gap-4 flex-wrap">
//             <button
//               onClick={() => navigate("/signup")}
//               className="px-7 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition shadow-lg shadow-indigo-200 flex items-center gap-2"
//             >
//               Join for free
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//             </button>
//             <button
//               onClick={() => document.getElementById("portals").scrollIntoView({ behavior: "smooth" })}
//               className="px-7 py-3.5 bg-white border border-slate-200 hover:border-indigo-300 text-slate-700 font-semibold rounded-xl transition"
//             >
//               Go to my portal
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ── Stats ── */}
//       <section id="stats" className="bg-white py-14 px-6 border-y border-slate-100">
//         <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
//           {stats.map((s) => (
//             <div key={s.label} className="text-center">
//               <p className="text-4xl font-extrabold text-indigo-600 mb-1">{s.value}</p>
//               <p className="text-sm text-slate-500 font-medium">{s.label}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── Portals ── */}
//       <section id="portals" className="py-20 px-6 bg-slate-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-extrabold text-slate-800 mb-3">Choose your portal</h2>
//             <p className="text-slate-500 text-base max-w-md mx-auto">
//               Select your role to go directly to your personalized dashboard.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-6">
//             {portals.map((p) => (
//               <Link to={'/login'}

//                 key={p.role}
//                 className={`bg-white rounded-2xl border ${p.border} overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col`}
//               >
//                 {/* Card header */}
//                 <div className={`bg-linear-to-r ${p.color} p-6 flex items-center gap-4`}>
//                   <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
//                     {p.icon}
//                   </div>
//                   <div>
//                     <p className="text-white/70 text-xs font-semibold uppercase tracking-widest">Portal</p>
//                     <h3 className="text-white text-xl font-bold">{p.role}</h3>
//                   </div>
//                 </div>

//                 {/* Card body */}
//                 <div className="p-6 flex flex-col flex-1">
//                   <p className="text-slate-500 text-sm leading-relaxed mb-5">{p.desc}</p>
//                   <ul className="space-y-2.5 mb-6 flex-1">
//                     {p.perks.map((perk) => (
//                       <li key={perk} className="flex items-center gap-2.5 text-sm text-slate-600">
//                         <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${p.lightBg}`}>
//                           <svg className={`w-3 h-3 ${p.textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                           </svg>
//                         </span>
//                         {perk}
//                       </li>
//                     ))}
//                   </ul>
//                   <button
//                     onClick={() => navigate(p.path)}
//                     className={`w-full py-3 ${p.btnColor} text-white font-bold rounded-xl transition flex items-center justify-center gap-2`}
//                   >
//                     Go to {p.role} Dashboard
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                     </svg>
//                   </button>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Features ── */}
//       <section id="features" className="py-20 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-extrabold text-slate-800 mb-3">Why choose EduNova?</h2>
//             <p className="text-slate-500 text-base max-w-md mx-auto">
//               Everything you need for a modern education experience.
//             </p>
//           </div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {features.map((f) => (
//               <div key={f.title} className="bg-slate-50 rounded-2xl p-6 hover:bg-indigo-50 transition-colors duration-200 group">
//                 <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-indigo-600 mb-4 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200">
//                   {f.icon}
//                 </div>
//                 <h3 className="font-bold text-slate-800 mb-2">{f.title}</h3>
//                 <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── CTA Banner ── */}
//       <section className="py-16 px-6 bg-indigo-600">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-3xl font-extrabold text-white mb-4">Ready to start learning?</h2>
//           <p className="text-indigo-200 mb-8 text-base">
//             Join thousands of learners already growing with EduNova.
//           </p>
//           <div className="flex items-center justify-center gap-4 flex-wrap">
//             <button
//               onClick={() => navigate("/signup")}
//               className="px-8 py-3.5 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition"
//             >
//               Create free account
//             </button>
//             <button
//               onClick={() => navigate("/login")}
//               className="px-8 py-3.5 border border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition"
//             >
//               Sign in
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ── Footer ── */}
//       <footer className="bg-slate-900 text-slate-400 py-10 px-6">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
//           <div className="flex items-center gap-2">
//             <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
//               <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
//               </svg>
//             </div>
//             <span className="text-white font-bold">EduNova</span>
//           </div>
//           <p className="text-sm">© {new Date().getFullYear()} EduNova Institute. All rights reserved.</p>
//           <div className="flex gap-6 text-sm">
//             <a href="#" className="hover:text-white transition">Privacy</a>
//             <a href="#" className="hover:text-white transition">Terms</a>
//             <a href="#" className="hover:text-white transition">Contact</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

import React from 'react';

export default function LearnWiseLMS() {
  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#3C2A21] antialiased font-sans select-none">
      
      {/* HEADER / NAVIGATION BAR */}
      <header className="w-full bg-[#FAF6F0]/80 backdrop-blur-md border-b border-[#EADBC8] px-4 sm:px-8 py-3.5 flex items-center justify-between sticky top-0 z-50">
        {/* Left Side: Burger Menu & Search */}
        <div className="flex items-center space-x-6 w-full max-w-xl">
          <button className="text-[#3C2A21] hover:opacity-70 text-xl transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          
          <div className="relative w-full hidden sm:block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#A084DC]/70">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#7F6148]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </span>
            <input 
              type="text" 
              placeholder="Search for courses, topics, skills..." 
              className="w-full pl-11 pr-4 py-2 bg-[#EADBC8]/30 border border-[#EADBC8] rounded-xl text-sm placeholder-[#7F6148]/60 focus:outline-none focus:ring-1 focus:ring-[#8B5E3C] focus:bg-[#FAF6F0] transition-all"
            />
          </div>
        </div>

        {/* Right Side: Theme, Notification, User Profile */}
        <div className="flex items-center space-x-5">
          <button className="text-[#D4A373] text-xl hover:opacity-80 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#7F6148]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m8.942-8.942h-2.25M4.144 12h-2.25m15.393-7.058l-1.594 1.594M6.744 17.256l-1.594 1.594m12.344 0l-1.594-1.594M6.744 6.744L5.15 5.15M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
            </svg>
          </button>
          
          <button className="text-[#7F6148] text-xl hover:opacity-80 transition-opacity relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </button>
          
          <div className="flex items-center space-x-3 border-l border-[#EADBC8] pl-5 cursor-pointer group">
            <div className="w-9 h-9 bg-[#EADBC8] rounded-full flex items-center justify-center text-[#7F6148] overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mt-1">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="hidden md:block text-left">
              <p class="text-[11px] text-[#7F6148]/80 font-medium leading-none mb-0.5">Guest User</p>
              <p className="text-sm font-semibold text-[#3C2A21] flex items-center gap-1 leading-none">
                Welcome!
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 text-[#7F6148]/60">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 lg:px-16 pt-14 pb-24 md:py-24 bg-linear-to-b from-[#FAF6F0] via-[#F5EFE6] to-[#EADBC8]/20">
        {/* Soft elegant radial background overlays */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-linear-to-bl from-[#D4A373]/10 to-transparent rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-6 relative z-10">
            <div className="relative inline-block">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif text-[#3C2A21] font-bold leading-[1.15]">
                Welcome to <br />
                <span>LearnWise LMS</span>
              </h1>
              {/* Decorative sparkles matching the original image */}
              <span className="absolute -top-3 -right-8 text-[#D4A373] text-xl opacity-80 select-none">✦</span>
              <span className="absolute top-5 -right-4 text-[#D4A373] text-xs opacity-50 select-none">✦</span>
            </div>
            
            <p className="text-[#7F6148] max-w-md text-base md:text-[17px] leading-relaxed font-medium">
              Your journey to knowledge starts here. Learn, grow, and achieve your goals with the best learning experience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-[#8B5E3C] hover:bg-[#724B2F] text-[#FAF6F0] font-semibold px-7 py-3 rounded-xl shadow-md transition-all text-sm md:text-base border border-[#8B5E3C]">
                Explore Courses
              </button>
              <button className="border border-[#8B5E3C] text-[#8B5E3C] bg-transparent hover:bg-[#8B5E3C]/5 font-semibold px-7 py-3 rounded-xl transition-all text-sm md:text-base">
                Create Account
              </button>
            </div>

            {/* Social Proof / Learners Count */}
            <div className="flex items-center space-x-3.5 pt-4">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#FAF6F0] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Student" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#FAF6F0] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Student" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#FAF6F0] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Student" />
              </div>
              <p className="text-xs text-[#7F6148] font-semibold leading-snug">
                Join thousands of learners <br /> and start learning today!
              </p>
            </div>
          </div>

          {/* Hero Right Content: High fidelity 3D Graphic element mock */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md flex flex-col items-center">
              {/* Plant Detail */}
              <div className="absolute bottom-6 left-2 bg-[#FAF6F0]/60 backdrop-blur-md p-2.5 rounded-2xl shadow-sm border border-[#FAF6F0] hidden sm:block">
                <span className="text-2xl">🪴</span>
              </div>
              
              {/* High-fidelity CSS/SVG graphic matching the warm palette of the books and cap */}
              <div className="bg-linear-to-b from-[#FAF6F0]/40 to-[#EADBC8]/40 p-8 rounded-3xl border border-[#FAF6F0] shadow-xl backdrop-blur-sm w-full flex flex-col items-center justify-center text-center py-16 relative">
                <div className="absolute top-10 right-14 text-[#D4A373] text-lg opacity-60">✦</div>
                
                {/* Embedded SVG 3D Representation for pristine rendering and precise coloring */}
                <svg viewBox="0 0 200 180" className="w-56 h-56 drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Cap Base */}
                  <path d="M75 75v12c0 8 18 12 25 12s25-4 25-12v-12" fill="#2E241F" />
                  {/* Book 1 (Top - Warm Terracotta/Red-Brown) */}
                  <path d="M40 90h120v18H40z" fill="#9C5333" />
                  <path d="M155 90h10v18h-10z" fill="#D4A373" />
                  <path d="M40 104h115v4H40z" fill="#FAF6F0" opacity="0.9" />
                  {/* Book 2 (Middle - Espresso Brown) */}
                  <path d="M35 110h130v22H35z" fill="#4A3429" />
                  <path d="M158 110h10v22h-10z" fill="#D4A373" />
                  <path d="M35 126h125v6H35z" fill="#FAF6F0" opacity="0.9" />
                  {/* Book 3 (Bottom - Warm Grey/Dark Charcoal) */}
                  <path d="M30 134h140v24H30z" fill="#362921" />
                  <path d="M162 134h10v24h-10z" fill="#9C5333" />
                  <path d="M30 152h135v6H30z" fill="#FAF6F0" opacity="0.9" />
                  {/* Mortarboard Diamond Top */}
                  <path d="M100 40l65 15-65 15-65-15z" fill="#2E241F" />
                  <path d="M100 42l60 13-60 13-60-13z" fill="#1C1512" />
                  {/* Tassel */}
                  <path d="M100 55c20 5 40 15 45 25" stroke="#D4A373" strokeWidth="2" strokeLinecap="round" />
                  <path d="M145 80l3 12-6 0z" fill="#D4A373" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CORE FEATURES GRID SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 -mt-10 relative z-20">
        <div className="bg-[#FAF6F0] rounded-2xl shadow-md border border-[#EADBC8]/60 p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          
          {/* Feature 1 */}
          <div className="space-y-3 p-1">
            <div className="w-11 h-11 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#8B5E3C]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <h3 class="font-bold text-[#3C2A21] text-[15px]">Quality Courses</h3>
            <p className="text-xs text-[#7F6148] font-medium leading-relaxed">Learn from expert instructors with well-structured courses.</p>
          </div>

          {/* Feature 2 */}
          <div className="space-y-3 p-1 border-t sm:border-t-0 sm:border-l border-[#EADBC8]/50 sm:pl-5 lg:pl-6">
            <div className="w-11 h-11 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#8B5E3C]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            <h3 class="font-bold text-[#3C2A21] text-[15px]">Live Classes</h3>
            <p className="text-xs text-[#7F6148] font-medium leading-relaxed">Attend live interactive sessions and clear your doubts.</p>
          </div>

          {/* Feature 3 */}
          <div className="space-y-3 p-1 border-t lg:border-t-0 lg:border-l border-[#EADBC8]/50 lg:pl-6">
            <div className="w-11 h-11 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#8B5E3C]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 2.24a4.5 4.5 0 111.5 0m-6 11.25h.008v.008H3.75m.008-3h.008v.008H3.75m.008-3h.008v.008H3.75M6.75 12h.008v.008H6.75m.008 3h.008v.008H6.75m.008 3h.008v.008H6.75" />
              </svg>
            </div>
            <h3 class="font-bold text-[#3C2A21] text-[15px]">Assignments</h3>
            <p className="text-xs text-[#7F6148] font-medium leading-relaxed">Practice with assignments and real-world projects.</p>
          </div>

          {/* Feature 4 */}
          <div className="space-y-3 p-1 border-t sm:border-t-0 sm:border-l border-[#EADBC8]/50 sm:pl-5 lg:pl-6">
            <div className="w-11 h-11 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#8B5E3C]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 10.79c.18-1.111.516-2.186.982-3.171m0 0a3 3 0 005.344 0c.466.985.802 2.06 1.002 3.172M10.479 7.618a3.001 3.001 0 005.042 0M8.25 5.25a3.75 3.75 0 107.5 0 3.75 3.75 0 00-7.5 0z" />
              </svg>
            </div>
            <h3 class="font-bold text-[#3C2A21] text-[15px]">Certificates</h3>
            <p className="text-xs text-[#7F6148] font-medium leading-relaxed">Earn certificates and boost your career.</p>
          </div>

          {/* Feature 5 */}
          <div className="space-y-3 p-1 border-t lg:border-t-0 lg:border-l border-[#EADBC8]/50 lg:pl-6">
            <div className="w-11 h-11 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#8B5E3C]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <h3 class="font-bold text-[#3C2A21] text-[15px]">Community</h3>
            <p className="text-xs text-[#7F6148] font-medium leading-relaxed">Connect with learners and grow together.</p>
          </div>

        </div>
      </div>

      {/* HOW IT WORKS SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20 text-center">
        <h2 className="text-3xl font-serif font-bold text-[#3C2A21] mb-14">How it works?</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          
          {/* Step 1 */}
          <div className="flex items-start space-x-4 text-left relative group">
            <div className="w-14 h-14 shrink-0 rounded-xl bg-[#FAF6F0] border border-[#EADBC8]/60 flex items-center justify-center text-[#8B5E3C] text-2xl shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
              </svg>
            </div>
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-[#8B5E3C]/50 block tracking-wider font-mono">01</span>
              <h4 className="font-bold text-[#3C2A21] text-[15px]">Create Account</h4>
              <p className="text-xs text-[#7F6148] font-medium leading-relaxed">Sign up for free and create your account.</p>
            </div>
            {/* Step Arrow */}
            <div className="hidden lg:block absolute top-5 -right-3 text-[#7F6148]/30 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start space-x-4 text-left relative group">
            <div className="w-14 h-14 shrink-0 rounded-xl bg-[#FAF6F0] border border-[#EADBC8]/60 flex items-center justify-center text-[#8B5E3C] text-2xl shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
              </svg>
            </div>
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-[#8B5E3C]/50 block tracking-wider font-mono">02</span>
              <h4 className="font-bold text-[#3C2A21] text-[15px]">Explore Courses</h4>
              <p className="text-xs text-[#7F6148] font-medium leading-relaxed">Browse courses and choose what you want to learn.</p>
            </div>
            <div className="hidden lg:block absolute top-5 -right-3 text-[#7F6148]/30 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start space-x-4 text-left relative group">
            <div className="w-14 h-14 shrink-0 rounded-xl bg-[#FAF6F0] border border-[#EADBC8]/60 flex items-center justify-center text-[#8B5E3C] text-2xl shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
              </svg>
            </div>
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-[#8B5E3C]/50 block tracking-wider font-mono">03</span>
              <h4 className="font-bold text-[#3C2A21] text-[15px]">Start Learning</h4>
              <p className="text-xs text-[#7F6148] font-medium leading-relaxed">Start learning with videos, notes, and resources.</p>
            </div>
            <div className="hidden lg:block absolute top-5 -right-3 text-[#7F6148]/30 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start space-x-4 text-left relative">
            <div className="w-14 h-14 shrink-0 rounded-xl bg-[#FAF6F0] border border-[#EADBC8]/60 flex items-center justify-center text-[#8B5E3C] text-2xl shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110.5 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0113.5 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-[#8B5E3C]/50 block tracking-wider font-mono">04</span>
              <h4 className="font-bold text-[#3C2A21] text-[15px]">Achieve Goals</h4>
              <p className="text-xs text-[#7F6148] font-medium leading-relaxed">Complete courses and achieve your goals.</p>
            </div>
          </div>

        </div>
      </section>

      <footer className="bg-[#FAF6F0] border-t border-[#EADBC8] pt-16 pb-8 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <h2 className="text-2xl font-serif font-bold text-[#3C2A21]">LearnWise LMS</h2>
          <p className="text-sm text-[#7F6148] leading-relaxed">
            Empowering learners worldwide with accessible, high-quality education. Your future starts with a single step.
          </p>
        </div>

        {/* Links Column 1 */}
        <div className="space-y-4">
          <h4 className="font-bold text-[#3C2A21]">Platform</h4>
          <ul className="space-y-2 text-sm text-[#7F6148]">
            {['Browse Courses', 'Live Sessions', 'Certifications', 'Instructor Dashboard'].map((item) => (
              <li key={item}><a href="#" className="hover:text-[#8B5E3C] transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="space-y-4">
          <h4 className="font-bold text-[#3C2A21]">Company</h4>
          <ul className="space-y-2 text-sm text-[#7F6148]">
            {['About Us', 'Careers', 'Privacy Policy', 'Terms of Service'].map((item) => (
              <li key={item}><a href="#" className="hover:text-[#8B5E3C] transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="space-y-4">
          <h4 className="font-bold text-[#3C2A21]">Stay Updated</h4>
          <p className="text-xs text-[#7F6148]">Subscribe to get the latest course updates.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-3 py-2 bg-[#EADBC8]/30 border border-[#EADBC8] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#8B5E3C]"
            />
            <button className="bg-[#8B5E3C] text-[#FAF6F0] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#724B2F] transition-colors">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-[#EADBC8]/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#7F6148]">
        <p>© 2026 LearnWise LMS. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-[#3C2A21]">Instagram</a>
          <a href="#" className="hover:text-[#3C2A21]">Twitter</a>
          <a href="#" className="hover:text-[#3C2A21]">LinkedIn</a>
        </div>
      </div>
    </footer>

    </div>
  );
}