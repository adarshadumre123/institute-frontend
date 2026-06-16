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


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/exam", element: <Exam/> },
  { path: "/assignment", element: <Assignment /> },
  { path: "/profile", element: <Profile /> },
  { path: "/notes", element: <Notes/> },
  { path: "/students", element: <Students/> },
  { path: "/teachers", element: <Teachers/> },
  { path: "/course", element: <Courses/> },
  { path: "/database", element: <Database/> },
  { path: "/createExam", element: <CreateExam/> },
  { path: "/examdetails/:id", element: <ExamDetails/> },
  { path: "/student/dashboard", element: < StudentDashboard/> },
  { path: "/admin/dashboard", element: < Admin/> },
  { path: "/teacher/dashboard", element: < TeacherDashboard/> },
  {path: "/updateExam/:id",element: <UpdateExam /> },
]);

// const App = () => {
//   return <RouterProvider router={router} />;
// };

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