import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { SidebarItem } from "../components/SidebarItem";
import { useLocation } from "react-router-dom";
import CourseDetails from "./CourseDetails";


import Class from './Class';
import {
  BookOpen,
  LayoutDashboard,
  FileText,
  ClipboardList,
} from "lucide-react";
import Assignment from "./Assignment";
import Notes from './Notes';
import Exam from './Exam';



const MainCourse = () => {
  const [course, setCourse] = useState(null);

  const[activeTab,setActiveTab]=useState("Overview")

  console.log("MainCourse Rendered");

  const { courseId } = useParams();

  console.log("courseId:", courseId);



  const location = useLocation();

  const getCourseById = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `http://localhost:8000/api/v1/course/get-course-id/${courseId}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data.course);


      setCourse(res.data.course);

      console.log(course);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    }
  };

  useEffect(() => {
    if (courseId) {
      console.log("hello")
      getCourseById();
    }
  }, [courseId]);


  return (
    
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}

      {
        course?.isEnrolled ? (


          <aside className="w-64 bg-white border-r shadow-md flex flex-col">
            {/* Header */}


            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-indigo-600">
                {course?.subject}
              </h2>
            </div>

            <nav className="flex-1 p-4 space-y-2">
            <SidebarItem
                icon={<LayoutDashboard size={20} />}
                title="Overview"
                onClick={() => setActiveTab("Overview")}
              />

              <SidebarItem
                icon={<BookOpen size={20} />}
                title="Class"
                onClick={() => setActiveTab("Class")}
              />

              

              <SidebarItem
                icon={<FileText size={20} />}
                title="Notes"
                onClick={() => setActiveTab("Notes")}
              />
              <SidebarItem
                icon={<FileText size={20} />}
                title="Exams"
                onClick={() => setActiveTab("Exams")}
              />



              <SidebarItem
                icon={<ClipboardList size={20} />}
                title="Assignments"
                onClick={() => setActiveTab("Assigments")}
                
              />
            </nav>

            {/* Footer */}
            <div className="p-4 border-t text-sm text-gray-500">
              Learning Management System
            </div>
          </aside>

        ):null
      }

     

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-sm p-6 min-h-[90vh]">
          {activeTab === "Overview" && <CourseDetails/>}
        {activeTab === "Class" && <Class/>}
        {activeTab === "Exams" && <Exam/>}
        {activeTab === "notes" && <Notes/>}
        {activeTab === "Assignments" && <Assignment/>}
        </div>
      </main>
    </div>
  );
};
export default MainCourse;