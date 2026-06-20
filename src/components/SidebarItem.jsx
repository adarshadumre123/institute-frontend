import { Link } from "react-router-dom";


export const SidebarItem = ({ icon, title, active, to = "#" }) => {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 w-full p-3 rounded-xl transition ${
        active
          ? "bg-indigo-600 text-white"
          : "hover:bg-gray-100 text-gray-700"
      }`}
    >
      {icon}
      <span className="font-medium">{title}</span>
    </Link>
  );
};
