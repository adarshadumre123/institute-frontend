import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentDashboard from "./pages/StudentDashboard";
import Exam from "./pages/Exam";
import Assignment from "./pages/Assignment";
import Profile from "./pages/Profile";
import Notes from "./pages/Notes";
import ExamDetails from "./pages/ExamDetails";
import CreateExam from "./components/CreateExam";
import TeacherDashboard from "./pages/TeacherDashboard";
import { Toaster } from "sonner";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import Teachers from "./pages/Teachers";
import Admin from "./pages/AdminDashboard";
import Database from "./pages/Database";
import UpdateExam from "./components/updateExam";
import CreateCourses from "./components/CreateCourses";
import CreateAssignment from "./components/CreateAssignment";
import MainCourse from "./pages/MainCourse";
import Subject from "./pages/Subject";
import CourseDetails from "./pages/CourseDetails";
import Game from "./pages/Game";
import JoinExam from "./pages/JoinExam";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailed from "./pages/PaymentFailed";
import StudentSidebar from "./components/CoursesSidebar";
import Class from "./pages/Class";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/class", element: <Class /> },
  { path: "/signup", element: <Signup /> },
  { path: "/exam", element: <Exam/> },
  { path: "/game", element: <Game/> },
  { path: "/assignment", element: <Assignment /> },
  { path: "/profile", element: <Profile /> },
  { path: "/update", element: <Notes/> },
  { path: "/students", element: <Students/> },
  { path: "/teachers", element: <Teachers/> },
  { path: "/course", element: <Courses/> },
  { path: "/create-course", element: <CreateCourses/> },
  { path: "/create-assignment", element: <CreateAssignment/> },
  { path: "/database", element: <Database/> },
  { path: "/createExam", element: <CreateExam/> },
  { path: "/examdetails/:id", element: <ExamDetails/> },
  { path: "/student/dashboard", element: < StudentDashboard/> },
  { path: "/admin/dashboard", element: < Admin/> },
  { path: "/teacher/dashboard", element: < TeacherDashboard/> },
  {path: "/updateExam/:id",element: <UpdateExam /> },
  {path: "/join-exam/:id",element: <JoinExam /> },
  {path: "/main-course/:id",element: <MainCourse /> },
  {path: "/main-course/:id/create-subject",element: <Subject /> },
  {path: "/course-details/:id",element: <CourseDetails /> },
  {path: "/course-details/:id",element: <CourseDetails /> },
  {path:"/payment-success" ,element:<PaymentSuccess />},
  {path:"/courses-student" ,element:<StudentSidebar/>},
  {path:"/payment-failed", element:<PaymentFailed />}
  
  
]);



const App = () => {
  return (
    <>
      <RouterProvider router={router} />

      <Toaster
        position="bottom-right"
        richColors
        closeButton
      />
    </>
  );
};
export default App;