// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { toast } from 'sonner';

// const Database = () => {
//   const[data,setData]=useState(null)
//   const getDataForAdmin=async()=>{
//     try {
//       const token = localStorage.getItem("token");
//       console.log(token);
  
//       const res = await axios.get("http://localhost:8000/api/v1/database/get-database",{
//         headers:{
//           authorization:`Bearer ${token}`
//         }
//       })
//       if(res.data.success){
//         setData(res.data)
//       }
//     } catch (error) {
//             toast.error(error.response?.data?.message || "Server error");
      
//     }
//   }

// useEffect(() => {
//   getDataForAdmin()
// }, [])
//   return (
//   <div className="min-h-screen bg-gray-100 p-6">
//     <h1 className="text-3xl font-bold mb-8">Database Dashboard</h1>

//     {data ? (
//       <>
//         {/* Summary Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
//           <div className="bg-white rounded-xl shadow p-6">
//             <h2 className="text-gray-500">Courses</h2>
//             <p className="text-3xl font-bold text-blue-600">
//               {data.courses.length}
//             </p>
//           </div>

//           <div className="bg-white rounded-xl shadow p-6">
//             <h2 className="text-gray-500">Enrollments</h2>
//             <p className="text-3xl font-bold text-green-600">
//               {data.enrollments.length}
//             </p>
//           </div>

//           <div className="bg-white rounded-xl shadow p-6">
//             <h2 className="text-gray-500">Exams</h2>
//             <p className="text-3xl font-bold text-red-600">
//               {data.exams.length}
//             </p>
//           </div>

//           <div className="bg-white rounded-xl shadow p-6">
//             <h2 className="text-gray-500">Assignments</h2>
//             <p className="text-3xl font-bold text-purple-600">
//               {data.assignments.length}
//             </p>
//           </div>

//           <div className="bg-white rounded-xl shadow p-6">
//             <h2 className="text-gray-500">Classes</h2>
//             <p className="text-3xl font-bold text-yellow-600">
//               {data.classes.length}
//             </p>
//           </div>

//           <div className="bg-white rounded-xl shadow p-6">
//             <h2 className="text-gray-500">Students Enrolled</h2>
//             <p className="text-3xl font-bold text-indigo-600">
//               {data.enrollments.length}
//             </p>
//           </div>
//         </div>

//         {/* Enrollments Table */}
//         <div className="bg-white rounded-xl shadow">
//           <div className="p-5 border-b">
//             <h2 className="text-xl font-semibold">
//               Recent Enrollments
//             </h2>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="p-3 text-left">User</th>
//                   <th className="p-3 text-left">role</th>
//                   <th className="p-3 text-left">Email</th>
//                   <th className="p-3 text-left">Course</th>
//                   <th className="p-3 text-left">Phone</th>
//                   <th className="p-3 text-left">Subject</th>
//                   <th className="p-3 text-left">Price</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {data.enrollments.map((item) => (
//                   <tr
//                     key={item._id}
//                     className="border-b hover:bg-gray-50"
//                   >
//                     <td className="p-3">
//                       {item.student.firstName} {item.student.lastName}
//                     </td>
//                     <td className="p-3">
//                       {item.student.role}
//                     </td>

//                     <td className="p-3">
//                       {item.student.email}
//                     </td>

//                     <td className="p-3">
//                       {item.course.course}
//                     </td>
//                     <td className="p-3">
//                       {item.student.phone}
//                     </td>

//                     <td className="p-3">
//                       {item.course.subject}
//                     </td>

//                     <td className="p-3">
//                       Rs. {item.course.price || 0}
//                     </td>
                    
                    
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

        

//         {/* Course List */}
//         <div className="mt-10 bg-white rounded-xl shadow p-5">
//           <h2 className="text-xl font-semibold mb-5">
//             All Courses
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
//             {data.courses.map((course) => (
//               <div
//                 key={course._id}
//                 className="border rounded-lg p-4 hover:shadow-lg transition"
//               >
//                 <h3 className="text-lg font-bold">
//                   {course.course}
//                 </h3>

//                 <p className="text-gray-500">
//                   {course.subject}
//                 </p>

//                 <p className="mt-2 font-semibold text-green-600">
//                   Rs. {course.price || 0}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </>
//     ) : (
//       <div className="text-center mt-20">
//         <h2 className="text-xl font-semibold">Loading...</h2>
//       </div>
//     )}
//   </div>
// );
  
// }

// export default Database


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import {
  Users,
  BookOpen,
  Video,
  FileSignature,
  ClipboardList,
  Loader2,
  TrendingUp,
  DollarSign,
  Calendar,
  Search,
  Download,
  Eye,
  Info,
  Layers,
  ShieldCheck,
  Clock,
  Briefcase
} from "lucide-react";

const Database = () => {
  const [data, setData] = useState(null);
  const [activeSubTab, setActiveSubTab] = useState("enrollments");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null); // Controls deep inspection modal

  const getDataForAdmin = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:8000/api/v1/database/get-database", {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      if (res.data.success) {
        setData(res.data);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Server error");
    }
  };

  useEffect(() => {
    getDataForAdmin();
  }, []);

  if (!data) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center gap-4">
        <Loader2 className="animate-spin h-12 w-12 text-[#8C3E1A]" />
        <p className="text-sm font-bold uppercase tracking-widest text-neutral-500">Compiling centralized database registries...</p>
      </div>
    );
  }

  // --- ADVANCED CALCULATED DATA EXTRACTIONS ---
  const totalRevenue = data.enrollments?.reduce((acc, curr) => acc + (curr.course?.price || 0), 0) || 0;
  const uniqueStudents = new Set(data.enrollments?.map(e => e.student?._id)).size;
  const adminProfilesCount = data.enrollments?.filter(e => e.student?.role === 'admin').length || 0;
  const totalPendingExams = data.exams?.filter(e => e.status === 'scheduled').length || 0;

  const coreMetrics = [
    { label: "Unique Users", value: uniqueStudents, description: "Active matching student references", icon: Users, bg: "bg-amber-50", text: "text-amber-800" },
    { label: "Asset Matrix", value: data.courses?.length || 0, description: "Active system course items", icon: BookOpen, bg: "bg-orange-50", text: "text-orange-800" },
    { label: "Room Sessions", value: data.classes?.length || 0, description: "Live scheduled coordinates", icon: Video, bg: "bg-stone-100", text: "text-stone-800" },
    { label: "Gross Value Ledger", value: `$${totalRevenue.toLocaleString()}`, description: "Accumulated system ledger totals", icon: DollarSign, bg: "bg-emerald-50", text: "text-emerald-800" },
  ];

  // --- DETAILED SEARCH & DATA BLOCK FILTERING LOGIC ---
  const getFilteredData = () => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return data[activeSubTab] || [];

    switch (activeSubTab) {
      case "enrollments":
        return data.enrollments.filter(item => 
          item.student?.firstName?.toLowerCase().includes(query) ||
          item.student?.lastName?.toLowerCase().includes(query) ||
          item.student?.email?.toLowerCase().includes(query) ||
          item.course?.course?.toLowerCase().includes(query)
        );
      case "courses":
        return data.courses.filter(item => 
          item.course?.toLowerCase().includes(query) ||
          item.subject?.toLowerCase().includes(query)
        );
      case "classes":
        return data.classes.filter(item => 
          item.title?.toLowerCase().includes(query) ||
          item.zoomLink?.toLowerCase().includes(query)
        );
      case "exams":
        return data.exams.filter(item => 
          item.title?.toLowerCase().includes(query) ||
          item.subject?.toLowerCase().includes(query)
        );
      case "assignments":
        return data.assignments.filter(item => 
          item.title?.toLowerCase().includes(query) ||
          item.subject?.toLowerCase().includes(query)
        );
      default:
        return [];
    }
  };

  const filteredCollection = getFilteredData();

  // --- CSV DATA EXPORT TRICK ---
  const exportToCSV = () => {
    const currentList = filteredCollection;
    if (!currentList.length) return toast.error("No raw rows to export.");
    
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += Object.keys(currentList[0]).join(",") + "\n";
    
    currentList.forEach(row => {
      const flattenedRow = Object.values(row).map(val => 
        typeof val === 'object' ? `"${JSON.stringify(val).replace(/"/g, '""')}"` : `"${val}"`
      );
      csvContent += flattenedRow.join(",") + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `LMS_Backup_${activeSubTab}_2026.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8 p-2 bg-neutral-50 min-h-full">
      
      {/* --- RE-STYLED ADMINISTRATIVE TOP BANNER --- */}
      <div className="bg-[#FAF6F0] rounded-3xl border border-[#EFE9DF] p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="space-y-2 z-10">
          <div className="flex items-center gap-2 text-xs font-bold text-[#8C3E1A] uppercase tracking-widest">
            <ShieldCheck size={14} />
            <span>Secured Master Scope</span>
          </div>
          <h1 className="text-3xl font-serif font-black text-[#2E1A11] tracking-tight">
            Root Database Manifest
          </h1>
          <p className="text-[#65534A] text-xs font-medium max-w-xl leading-relaxed">
            Inspect core documents mapping across systemic schemas. Search records, compile ledger analytics, and safely export CSV dumps of structural database schemas.
          </p>
        </div>
        <div className="bg-white border border-[#EFE9DF] p-4 rounded-2xl flex flex-col gap-1 shrink-0 shadow-xs">
          <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Metadata Signatures</div>
          <div className="text-xs font-bold text-[#2E1A11]">Total Root Documents: <span className="text-[#8C3E1A]">{ (data.enrollments?.length || 0) + (data.courses?.length || 0) + (data.classes?.length || 0) }</span></div>
          <div className="text-[11px] font-medium text-neutral-400 font-mono">Status: Verified 200 OK</div>
        </div>
      </div>

      {/* --- UPPER ANALYTICAL METRIC LAYER --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {coreMetrics.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white border border-neutral-200/60 rounded-2xl p-6 shadow-2xs hover:shadow-xs transition-all duration-300 flex items-center justify-between group">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">{stat.label}</p>
                <h2 className="text-3xl font-black text-neutral-800 tracking-tight group-hover:translate-x-0.5 transition-transform">
                  {stat.value}
                </h2>
                <p className="text-[11px] font-medium text-neutral-400">{stat.description}</p>
              </div>
              <div className={`p-4 rounded-xl ${stat.bg} ${stat.text} transition-transform group-hover:scale-105`}>
                <Icon size={20} />
              </div>
            </div>
          );
        })}
      </div>

      {/* --- SYSTEM SEARCH CONTROL & ACTIONS DOCK --- */}
      <div className="bg-white border border-neutral-200/60 p-4 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xs">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
          <input
            type="text"
            placeholder={`Search across active filters (${activeSubTab})...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-neutral-50 border border-neutral-200 text-neutral-800 placeholder-neutral-400 rounded-xl py-2.5 pl-10 pr-4 text-xs font-medium focus:outline-none focus:border-[#8C3E1A] transition-colors"
          />
        </div>
        
        <div className="flex items-center gap-3 self-end md:self-auto">
          <button
            onClick={exportToCSV}
            className="inline-flex items-center gap-2 bg-white hover:bg-neutral-50 text-neutral-700 border border-neutral-200 font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-2xs cursor-pointer"
          >
            <Download size={14} />
            <span>Generate CSV Extraction</span>
          </button>
        </div>
      </div>

      {/* --- REGISTRY CONTEXT-MENU SUB TABS --- */}
      <div className="bg-[#FAF6F0] p-1.5 rounded-2xl border border-[#EFE9DF] flex flex-wrap gap-1.5">
        {[
          { id: "enrollments", label: "Enrollment Manifest", count: data.enrollments?.length, color: "border-amber-200 text-amber-900" },
          { id: "courses", label: "System Catalog Matrix", count: data.courses?.length, color: "border-orange-200 text-orange-900" },
          { id: "classes", label: "Live Room Schemas", count: data.classes?.length, color: "border-stone-300 text-stone-900" },
          { id: "exams", label: "Examinations Suite", count: data.exams?.length, color: "border-neutral-200 text-neutral-900" },
          { id: "assignments", label: "Assignment Ledger", count: data.assignments?.length, color: "border-neutral-200 text-neutral-900" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => { setActiveSubTab(tab.id); setSearchQuery(""); }}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${
              activeSubTab === tab.id
                ? "bg-[#8C3E1A] text-white shadow-md shadow-orange-900/10"
                : "text-[#65534A] hover:bg-white/70 hover:text-[#2E1A11]"
            }`}
          >
            <span>{tab.label}</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold ${activeSubTab === tab.id ? "bg-white/20 text-white" : "bg-neutral-200/80 text-neutral-600"}`}>
              {tab.count || 0}
            </span>
          </button>
        ))}
      </div>

      {/* --- ISOLATED RELATIONAL DATABASE DISPLAY MATRIX --- */}
      <div className="bg-white border border-neutral-200/80 rounded-2xl overflow-hidden shadow-2xs">
        {filteredCollection.length === 0 ? (
          <div className="p-16 text-center text-neutral-400 text-xs font-medium">
            No document rows match your search query filters inside the active scope.
          </div>
        ) : (
          <div className="overflow-x-auto">
            
            {/* ENROLLMENTS VIEW BLOCK */}
            {activeSubTab === "enrollments" && (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAF6F0]/60 border-b border-neutral-100 text-[11px] font-bold uppercase tracking-wider text-[#65534A]">
                    <th className="p-4 pl-6">Student Information Profile</th>
                    <th className="p-4">Assigned Target Block</th>
                    <th className="p-4">Financial Ledger Value</th>
                    <th className="p-4">Security Role Signature</th>
                    <th className="p-4">System IDs</th>
                    <th className="p-4 pr-6 text-right">Inspect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-xs">
                  {filteredCollection.map((item) => (
                    <tr key={item._id} className="hover:bg-neutral-50/40 transition-colors">
                      <td className="p-4 pl-6">
                        <div className="capitalize font-black text-[#2E1A11]">{item.student?.firstName} {item.student?.lastName}</div>
                        <div className="text-[11px] text-neutral-400 font-mono tracking-tight">{item.student?.email}</div>
                        <div className="text-[10px] text-neutral-400 mt-0.5 font-medium">Phone: {item.student?.phone || 'None'}</div>
                      </td>
                      <td className="p-4 font-medium">
                        <div className="capitalize font-bold text-neutral-800">{item.course?.course || 'Undefined'}</div>
                        <div className="text-[10px] text-neutral-400 uppercase tracking-wider">Topic: {item.course?.subject}</div>
                      </td>
                      <td className="p-4">
                        <div className="font-black text-neutral-800">${item.course?.price || 0}</div>
                        <div className="text-[10px] text-neutral-400 font-medium capitalize">Payment: {item.payment || "Direct link"}</div>
                      </td>
                      <td className="p-4">
                        <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-md border ${
                          item.student?.role === 'admin' 
                            ? 'bg-rose-50 text-rose-800 border-rose-100' 
                            : 'bg-amber-50 text-amber-800 border-amber-100'
                        }`}>
                          {item.student?.role || 'student'}
                        </span>
                      </td>
                      <td className="p-4 text-[10px] font-mono text-neutral-400">
                        <div>DocID: {item._id}</div>
                        <div>StudID: {item.student?._id}</div>
                      </td>
                      <td className="p-4 pr-6 text-right">
                        <button onClick={() => setSelectedItem({ type: 'Enrollment Object', payload: item })} className="p-1.5 text-neutral-400 hover:text-[#8C3E1A] hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer">
                          <Eye size={15} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {/* COURSES VIEW BLOCK */}
            {activeSubTab === "courses" && (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAF6F0]/60 border-b border-neutral-100 text-[11px] font-bold uppercase tracking-wider text-[#65534A]">
                    <th className="p-4 pl-6">Course Framework</th>
                    <th className="p-4">Subject Focus</th>
                    <th className="p-4">Pricing Model</th>
                    <th className="p-4">Enrolled Collection Array</th>
                    <th className="p-4">Brief Abstract</th>
                    <th className="p-4 pr-6 text-right">Inspect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-xs">
                  {filteredCollection.map((course) => (
                    <tr key={course._id} className="hover:bg-neutral-50/40 transition-colors">
                      <td className="p-4 pl-6 font-black text-[#2E1A11] capitalize text-[13px]">{course.course}</td>
                      <td className="p-4 text-neutral-700 font-bold capitalize">{course.subject}</td>
                      <td className="p-4 font-black text-[#8C3E1A] text-[13px]">${course.price}</td>
                      <td className="p-4">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200/60 font-bold text-[11px]">
                          <Users size={10} />
                          <span>{course.enrolledStudents?.length || 0} Primary Matches</span>
                        </div>
                      </td>
                      <td className="p-4 text-neutral-400 font-medium max-w-xs truncate">
                        {course.shortDescription || course.description || "No specification provided."}
                      </td>
                      <td className="p-4 pr-6 text-right">
                        <button onClick={() => setSelectedItem({ type: 'Course Object', payload: course })} className="p-1.5 text-neutral-400 hover:text-[#8C3E1A] hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer">
                          <Eye size={15} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {/* CLASSES VIEW BLOCK */}
            {activeSubTab === "classes" && (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAF6F0]/60 border-b border-neutral-100 text-[11px] font-bold uppercase tracking-wider text-[#65534A]">
                    <th className="p-4 pl-6">Room Configuration Profile</th>
                    <th className="p-4">Secure Zoom Handshake Link</th>
                    <th className="p-4">Target Schema Lock</th>
                    <th className="p-4 pr-6">Created On</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-xs">
                  {filteredCollection.map((cls) => (
                    <tr key={cls._id} className="hover:bg-neutral-50/40 transition-colors">
                      <td className="p-4 pl-6">
                        <div className="font-black text-[#2E1A11] capitalize">{cls.title}</div>
                        <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 font-bold mt-1 font-sans">
                          <Clock size={12} className="text-[#8C3E1A]" />
                          <span>{new Date(cls.classDate).toLocaleString()}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <a href={`https://${cls.zoomLink}`} target="_blank" rel="noreferrer" className="text-amber-800 font-bold hover:underline bg-amber-50 px-2 py-1 rounded-md border border-amber-100/60 break-all">
                          {cls.zoomLink}
                        </a>
                      </td>
                      <td className="p-4 text-[11px] font-mono text-neutral-400">
                        <div>Course Ref: {cls.course}</div>
                        <div>Creator Ref: {cls.createdBy}</div>
                      </td>
                      <td className="p-4 text-neutral-400 pr-6">{new Date(cls.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {/* EXAMINATIONS SUITE */}
            {activeSubTab === "exams" && (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAF6F0]/60 border-b border-neutral-100 text-[11px] font-bold uppercase tracking-wider text-[#65534A]">
                    <th className="p-4 pl-6">Assessment Title</th>
                    <th className="p-4">Subject Vector</th>
                    <th className="p-4">Structural Evaluation Setup</th>
                    <th className="p-4">Window Configuration</th>
                    <th className="p-4 pr-6">Workflow Flag</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-xs">
                  {filteredCollection.map((exam) => (
                    <tr key={exam._id} className="hover:bg-neutral-50/40 transition-colors">
                      <td className="p-4 pl-6 font-black text-[#2E1A11]">{exam.title}</td>
                      <td className="p-4 text-neutral-700 font-bold capitalize">{exam.subject}</td>
                      <td className="p-4 text-neutral-600 font-medium">
                        <div>Total Questions: <span className="font-bold text-neutral-800">{exam.totalQuestions} items</span></div>
                        <div className="text-[11px] text-neutral-400">Evaluation Points: {exam.totalMarks} Marks (Passes at {exam.passingMarks}M)</div>
                      </td>
                      <td className="p-4 text-neutral-500">
                        <div className="font-medium text-neutral-700">Duration Limit: {exam.duration} mins</div>
                        <div className="text-[11px] text-neutral-400 font-mono">Window Lock: {new Date(exam.startTime).toLocaleDateString()}</div>
                      </td>
                      <td className="p-4 pr-6">
                        <span className="inline-block text-[10px] uppercase font-black tracking-widest px-2.5 py-0.5 rounded-md bg-stone-100 text-stone-800 border border-stone-200">
                          {exam.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {/* ASSIGNMENTS LEDGER */}
            {activeSubTab === "assignments" && (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAF6F0]/60 border-b border-neutral-100 text-[11px] font-bold uppercase tracking-wider text-[#65534A]">
                    <th className="p-4 pl-6">Task Header</th>
                    <th className="p-4">Domain Context</th>
                    <th className="p-4">Description Core Model Mapping</th>
                    <th className="p-4 pr-6">Created On</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-xs">
                  {filteredCollection.map((asg) => (
                    <tr key={asg._id} className="hover:bg-neutral-50/40 transition-colors">
                      <td className="p-4 pl-6 font-black text-[#2E1A11]">{asg.title}</td>
                      <td className="p-4 text-neutral-700 font-bold capitalize">{asg.subject}</td>
                      <td className="p-4 text-neutral-500 font-medium max-w-sm leading-relaxed whitespace-pre-line">
                        {asg.description}
                      </td>
                      <td className="p-4 text-neutral-400 pr-6">{new Date(asg.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

          </div>
        )}
      </div>

      {/* --- FLOATING DEEP INSPECTION MODAL (JSON JSON RAW SCHEMA VIEW) --- */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 z-50 backdrop-blur-xs flex items-center justify-center p-4 transition-opacity animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full border border-neutral-200 max-h-[85vh] flex flex-col shadow-2xl">
            <div className="p-5 border-b border-neutral-100 flex items-center justify-between bg-[#FAF6F0]/50 rounded-t-2xl">
              <div>
                <h3 className="font-serif font-black text-lg text-[#2E1A11]">{selectedItem.type}</h3>
                <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 font-sans mt-0.5">Isolated Row Matrix Block Mapping</p>
              </div>
              <button 
                onClick={() => setSelectedItem(null)}
                className="px-3 py-1.5 text-xs font-bold text-neutral-500 hover:bg-neutral-200/60 rounded-xl transition-colors cursor-pointer"
              >
                Dismiss View
              </button>
            </div>
            <div className="p-5 overflow-y-auto flex-1 font-mono text-[11px] bg-neutral-900 text-amber-100/90 leading-relaxed rounded-b-2xl shadow-inner select-all">
              <pre>{JSON.stringify(selectedItem.payload, null, 2)}</pre>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Database;