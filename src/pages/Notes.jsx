import React from "react";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  ClipboardList,
  BookOpen,
  Bell,
  Settings,
  LogOut,
  UserPlus,
  Plus,
  Eye,
  TrendingUp,
  Shield,
  Database,
  Activity,
} from "lucide-react";

const Notes = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* SIDEBAR */}
      <aside className="w-72 bg-slate-900 text-white hidden lg:flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-3xl font-bold">
            Admin<span className="text-indigo-400">Panel</span>
          </h1>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2">
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            title="Dashboard"
            active
          />

          <SidebarItem
            icon={<Users size={20} />}
            title="Students"
          />

          <SidebarItem
            icon={<GraduationCap size={20} />}
            title="Teachers"
          />

          <SidebarItem
            icon={<ClipboardList size={20} />}
            title="Exams"
          />

          <SidebarItem
            icon={<BookOpen size={20} />}
            title="Courses"
          />

          <SidebarItem
            icon={<Shield size={20} />}
            title="Roles & Access"
          />

          <SidebarItem
            icon={<Database size={20} />}
            title="Database"
          />

          <SidebarItem
            icon={<Bell size={20} />}
            title="Notifications"
          />

          <SidebarItem
            icon={<Settings size={20} />}
            title="Settings"
          />
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-slate-800">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500 transition">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {/* TOPBAR */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">
              Admin Dashboard 🚀
            </h2>

            <p className="text-gray-500 mt-2">
              Manage students, teachers, exams and platform analytics.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-2xl flex items-center gap-2 transition">
              <Plus size={18} />
              Create Exam
            </button>

            <button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-2xl flex items-center gap-2 transition">
              <UserPlus size={18} />
              Add User
            </button>

            <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
              A
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Students"
            value="5,240"
            icon={<Users size={24} />}
          />

          <StatsCard
            title="Total Teachers"
            value="185"
            icon={<GraduationCap size={24} />}
          />

          <StatsCard
            title="Active Exams"
            value="48"
            icon={<ClipboardList size={24} />}
          />

          <StatsCard
            title="Platform Growth"
            value="+18%"
            icon={<TrendingUp size={24} />}
          />
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* LEFT SIDE */}
          <div className="xl:col-span-2 space-y-6">
            {/* RECENT USERS */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  Recent Users
                </h3>

                <button className="text-indigo-600 font-semibold hover:underline">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                <UserCard
                  name="John Doe"
                  role="Student"
                  status="Active"
                />

                <UserCard
                  name="Sarah Smith"
                  role="Teacher"
                  status="Pending"
                />

                <UserCard
                  name="Michael Lee"
                  role="Admin"
                  status="Active"
                />
              </div>
            </div>

            {/* EXAMS TABLE */}
            <div className="bg-white rounded-3xl p-6 shadow-sm overflow-x-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  Upcoming Exams
                </h3>

                <button className="text-indigo-600 font-semibold hover:underline">
                  Manage Exams
                </button>
              </div>

              <table className="w-full min-w-175">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-4 text-gray-500 font-semibold">
                      Exam
                    </th>

                    <th className="pb-4 text-gray-500 font-semibold">
                      Subject
                    </th>

                    <th className="pb-4 text-gray-500 font-semibold">
                      Date
                    </th>

                    <th className="pb-4 text-gray-500 font-semibold">
                      Students
                    </th>

                    <th className="pb-4 text-gray-500 font-semibold">
                      Status
                    </th>

                    <th className="pb-4 text-gray-500 font-semibold">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="space-y-3">
                  <TableRow
                    exam="DBMS Final"
                    subject="Database"
                    date="22 Aug"
                    students="120"
                    status="Active"
                  />

                  <TableRow
                    exam="OS Mid Term"
                    subject="Operating System"
                    date="25 Aug"
                    students="90"
                    status="Pending"
                  />

                  <TableRow
                    exam="Networking Test"
                    subject="CN"
                    date="30 Aug"
                    students="140"
                    status="Completed"
                  />
                </tbody>
              </table>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* SYSTEM STATUS */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                System Status
              </h3>

              <div className="space-y-4">
                <StatusCard
                  title="Server Status"
                  status="Running"
                />

                <StatusCard
                  title="Database"
                  status="Connected"
                />

                <StatusCard
                  title="API Services"
                  status="Healthy"
                />
              </div>
            </div>

            {/* ACTIVITY */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Recent Activity
              </h3>

              <div className="space-y-5">
                <ActivityItem text="New teacher added" />
                <ActivityItem text="Exam created successfully" />
                <ActivityItem text="Database backup completed" />
                <ActivityItem text="Student registered" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Notes;

/* ================= COMPONENTS ================= */

const SidebarItem = ({ icon, title, active }) => {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
        active
          ? "bg-indigo-600 text-white"
          : "hover:bg-slate-800 text-slate-300"
      }`}
    >
      {icon}
      <span className="font-medium">{title}</span>
    </button>
  );
};

const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between mb-4">
        <div className="bg-indigo-100 text-indigo-600 p-3 rounded-2xl">
          {icon}
        </div>

        <Activity className="text-gray-300" size={22} />
      </div>

      <h2 className="text-3xl font-bold text-gray-800">{value}</h2>

      <p className="text-gray-500 mt-2">{title}</p>
    </div>
  );
};

const UserCard = ({ name, role, status }) => {
  return (
    <div className="flex items-center justify-between border border-gray-100 p-4 rounded-2xl hover:shadow-sm transition">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
          {name.charAt(0)}
        </div>

        <div>
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>

      <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
        {status}
      </span>
    </div>
  );
};

const TableRow = ({
  exam,
  subject,
  date,
  students,
  status,
}) => {
  return (
    <tr className="border-b last:border-none hover:bg-gray-50 transition">
      <td className="py-4 font-semibold text-gray-800">{exam}</td>

      <td className="py-4 text-gray-500">{subject}</td>

      <td className="py-4 text-gray-500">{date}</td>

      <td className="py-4 text-gray-500">{students}</td>

      <td className="py-4">
        <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
          {status}
        </span>
      </td>

      <td className="py-4">
        <button className="flex items-center gap-2 text-indigo-600 hover:underline">
          <Eye size={16} />
          View
        </button>
      </td>
    </tr>
  );
};

const StatusCard = ({ title, status }) => {
  return (
    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl">
      <h4 className="font-semibold text-gray-800">{title}</h4>

      <span className="text-green-600 font-medium">{status}</span>
    </div>
  );
};

const ActivityItem = ({ text }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-3 h-3 rounded-full bg-indigo-600"></div>

      <p className="text-gray-600">{text}</p>
    </div>
  );
};