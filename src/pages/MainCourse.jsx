import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { SidebarItem } from "../components/SidebarItem";
import CourseDetails from "./CourseDetails";

import Class from './Class';
import {
  BookOpen,
  LayoutDashboard,
  FileText,
  ClipboardList,
  Menu,
  X,
} from "lucide-react";
import Assignment from "./Assignment";
import Notes from './Notice';
import Exam from './Exam';
import GetNotes from "../components/GetNotes";
import GetClass from './../components/GetClass';
import api from "../utils/api";

const MainCourse = () => {
  const [course, setCourse] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { courseId } = useParams();
  const location = useLocation();

  const getCourseById = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.get(
        `/api/v1/course/get-course-id/${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCourse(res.data.course);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    }
  };

  useEffect(() => {
    if (courseId) {
      getCourseById();
    }
  }, [courseId]);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setIsMobileMenuOpen(false); // Close sidebar on selection in mobile view
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row relative">
      {/* Mobile Header Topbar */}
      {course?.isEnrolled && (
        <div className="md:hidden bg-white border-b px-4 py-3 flex items-center justify-between shadow-sm sticky top-0 z-20">
          <h2 className="text-xl font-bold text-yellow-900 truncate pr-2">
            {course?.subject}
          </h2>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      )}

      {/* Dark Backdrop Overlay for Mobile */}
      {isMobileMenuOpen && course?.isEnrolled && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      {course?.isEnrolled && (
        <aside
          className={`
            fixed md:static top-0 left-0 bottom-0 z-40
            w-64 bg-white border-r shadow-md flex flex-col
            transform transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          `}
        >
          {/* Sidebar Header */}
          <div className="p-6 border-b flex items-center justify-between">
            <h2 className="text-2xl font-bold text-yellow-900 truncate">
              {course?.subject}
            </h2>
            {/* Close button inside sidebar on mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="md:hidden p-1 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              title="Overview"
              active={activeTab === "Overview"}
              onClick={() => handleTabChange("Overview")}
            />

            <SidebarItem
              icon={<BookOpen size={20} />}
              title="Class"
              active={activeTab === "Class"}
              onClick={() => handleTabChange("Class")}
            />

            <SidebarItem
              icon={<FileText size={20} />}
              title="Notes"
              active={activeTab === "notes"}
              onClick={() => handleTabChange("notes")}
            />

            <SidebarItem
              icon={<FileText size={20} />}
              title="Exams"
              active={activeTab === "Exams"}
              onClick={() => handleTabChange("Exams")}
            />

            <SidebarItem
              icon={<ClipboardList size={20} />}
              title="Assignment"
              active={activeTab === "Assigments"}
              onClick={() => handleTabChange("Assigments")}
            />
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t text-sm text-gray-500">
            Kanva Digital Academy
          </div>
        </aside>
      )}

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6 min-h-[85vh] md:min-h-[90vh]">
          {activeTab === "Overview" && <CourseDetails />}
          {activeTab === "Class" && <GetClass />}
          {activeTab === "Exams" && <Exam />}
          {activeTab === "notes" && <GetNotes />}
          {activeTab === "Assigments" && <Assignment />}
        </div>
      </main>
    </div>
  );
};

export default MainCourse;