import { useLocation } from "react-router-dom";
import { SidebarItem } from "../components/SidebarItem";
import CourseDetails from "./CourseDetails";

import {
  BookOpen,
  LayoutDashboard,
  FileText,
  ClipboardList,
} from "lucide-react";

const MainCourse = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-md flex flex-col">
        {/* Header */}
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-indigo-600">
            Student Panel
          </h2>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          <SidebarItem
            icon={<BookOpen size={20} />}
            title="Classes"
          to={'/class'}
            active={location.pathname === "/student/classes"}
          />

          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            title="Overview"
          
          />

          <SidebarItem
            icon={<FileText size={20} />}
            title="Notes"
            to="/student/notes"
            active={location.pathname === "/student/notes"}
          />
          <SidebarItem
            icon={<FileText size={20} />}
            title="Exams"
            to={`/course/:courseId/exam`}
            active={location.pathname === "/student/notes"}
          />



          <SidebarItem
            icon={<ClipboardList size={20} />}
            title="Assignments"
            to="/student/assignments"
            active={location.pathname === "/student/assignments"}
          />
        </nav>

        {/* Footer */}
        <div className="p-4 border-t text-sm text-gray-500">
          Learning Management System
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-sm p-6 min-h-[90vh]">
          <CourseDetails />
        </div>
      </main>
    </div>
  );
};

export default MainCourse;