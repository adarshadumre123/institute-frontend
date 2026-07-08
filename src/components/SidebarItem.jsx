// import { Link } from "react-router-dom";


// export const SidebarItem = ({ icon, title, active, to = "#",onClick }) => {
//   return (
//     <Link
//       to={to}
//       onClick={onClick}
//       className={`flex items-center gap-3 w-full p-3 rounded-xl transition ${
//         active
//           ? "bg-indigo-600 text-white"
//           : "hover:bg-gray-100 text-gray-700"
//       }`}
//     >
//       {icon}
//       <span className="font-medium">{title}</span>
//     </Link>
//   );
// };
import { Link } from "react-router-dom";

export const SidebarItem = ({ icon, title, active, to = "#", onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all duration-200 ${
        active
          ? "bg-[#8C3E1A] text-white shadow-xs shadow-orange-900/10 font-bold"
          : "hover:bg-[#FAF6F0] hover:text-[#2E1A11] text-neutral-600 font-medium"
      }`}
    >
      <div className={`transition-transform duration-200 ${active ? "scale-105 text-white" : "text-neutral-400 group-hover:text-[#8C3E1A]"}`}>
        {icon}
      </div>
      <span className="text-sm tracking-wide">{title}</span>
    </Link>
  );
};