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

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/exam", element: <Exam/> },
  { path: "/assignment", element: <Assignment /> },
  { path: "/profile", element: <Profile /> },
  { path: "/notes", element: <Notes/> },
  { path: "/examdetails/:id", element: <ExamDetails/> },
  { path: "/student/dashboard", element: < StudentDashboard/> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;