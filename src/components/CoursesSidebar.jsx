import { useLocation } from "react-router-dom";
import { SidebarItem } from "./SidebarItem";
import {
  BookOpen,
  GraduationCap,
  FileText,
  ClipboardList,
} from "lucide-react";

const StudentSidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 h-screen bg-white border-r shadow-md p-4">
      <h2 className="text-2xl font-bold text-indigo-600 mb-8">
        Student Panel
      </h2>

      <div className="flex flex-col gap-2">
        <SidebarItem
          icon={<BookOpen size={20} />}
          title="Classes"
          to="/student/classes"
          active={location.pathname === "/student/classes"}
        />

        <SidebarItem
          icon={<GraduationCap size={20} />}
          title="Courses"
          to="/student/courses"
          active={location.pathname === "/student/courses"}
        />

        <SidebarItem
          icon={<FileText size={20} />}
          title="Notes"
          to="/student/notes"
          active={location.pathname === "/student/notes"}
        />

        <SidebarItem
          icon={<ClipboardList size={20} />}
          title="Assignments"
          to="/student/assignments"
          active={location.pathname === "/student/assignments"}
        />
      </div>
    </div>
  );
};

export default StudentSidebar;