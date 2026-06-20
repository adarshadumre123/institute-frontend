import React, { useState } from "react";
import { SidebarItem } from "../components/SidebarItem";
import {
  BookOpen,
  ClipboardList,
  Notebook,
  NotebookPen,
  GraduationCap,
  Bell,
  UserCircle,
} from "lucide-react";

const MainCourse = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="w-72 bg-linear-to-b from-blue-700 via-indigo-700 to-purple-700 text-white flex flex-col shadow-2xl">

        {/* Logo */}
        <div className="h-20 flex items-center justify-center border-b border-white/20">
          <GraduationCap size={34} />
          <h1 className="ml-2 text-2xl font-bold">EduLearn</h1>
        </div>

        {/* Course */}
        <div className="px-6 py-5">
          <div className="bg-white/10 rounded-2xl p-4">
            <h2 className="font-bold text-lg">MERN Stack</h2>
            <p className="text-sm text-gray-200">
              Continue your learning journey
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 space-y-2">

          <SidebarItem
            icon={<BookOpen size={20} />}
            title="Dashboard"
            active={activeMenu === "Dashboard"}
            onClick={() => setActiveMenu("Dashboard")}
          />

          <SidebarItem
            icon={<NotebookPen size={20} />}
            title="Subjects"
            active={activeMenu === "Subjects"}
            onClick={() => setActiveMenu("Subjects")}
            to={"/main-course/:id/create-subject"}
          />

          <SidebarItem
            icon={<Notebook size={20} />}
            title="Notes"
            active={activeMenu === "Notes"}
            onClick={() => setActiveMenu("Notes")}
          />

          <SidebarItem
            icon={<ClipboardList size={20} />}
            title="Assignments"
            active={activeMenu === "Assignments"}
            onClick={() => setActiveMenu("Assignments")}
          />

          <SidebarItem
            icon={<ClipboardList size={20} />}
            title="Exams"
            active={activeMenu === "Exams"}
            onClick={() => setActiveMenu("Exams")}
          />

        </div>

        {/* Progress */}
        <div className="px-5 pb-6">
          <h3 className="mb-2 text-sm">Course Progress</h3>

          <div className="bg-white/20 rounded-full h-3">
            <div className="bg-green-400 h-3 rounded-full w-2/5"></div>
          </div>

          <p className="mt-2 text-sm">40% Completed</p>
        </div>

      </aside>

      {/* Main */}
      <main className="flex-1">

        {/* Navbar */}
        <header className="bg-white h-20 shadow flex items-center justify-between px-8">

          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              {activeMenu}
            </h1>

            <p className="text-gray-500">
              Welcome back! Keep learning 🚀
            </p>
          </div>

          <div className="flex items-center gap-6">

            <Bell
              size={24}
              className="cursor-pointer text-gray-600"
            />

            <div className="flex items-center gap-2">

              <UserCircle
                size={38}
                className="text-blue-600"
              />

              <div>
                <h3 className="font-semibold">
                  Adarsha Dumre
                </h3>

                <p className="text-sm text-gray-500">
                  Student
                </p>
              </div>

            </div>

          </div>

        </header>

        {/* Content */}

        <div className="p-8">

          {/* Stats */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <div className="bg-white rounded-3xl shadow-lg p-6">
              <BookOpen className="text-blue-600" size={36} />
              <h2 className="mt-4 text-xl font-bold">Subjects</h2>
              <p className="text-gray-500 mt-2">7 Available</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6">
              <ClipboardList className="text-green-600" size={36} />
              <h2 className="mt-4 text-xl font-bold">Assignments</h2>
              <p className="text-gray-500 mt-2">3 Pending</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6">
              <Notebook className="text-purple-600" size={36} />
              <h2 className="mt-4 text-xl font-bold">Notes</h2>
              <p className="text-gray-500 mt-2">15 PDFs</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6">
              <NotebookPen className="text-red-500" size={36} />
              <h2 className="mt-4 text-xl font-bold">Exams</h2>
              <p className="text-gray-500 mt-2">1 Upcoming</p>
            </div>

          </div>

          {/* Continue Learning */}

          <div className="mt-10 bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-6">
              Continue Learning
            </h2>

            <div className="flex justify-between items-center border rounded-2xl p-5">

              <div>

                <h3 className="text-xl font-semibold">
                  React Fundamentals
                </h3>

                <p className="text-gray-500">
                  Last watched: Components & Props
                </p>

              </div>

              <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition">
                Resume
              </button>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default MainCourse;