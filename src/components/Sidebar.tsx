// import {
//   Home,
//   BarChart2,
//   Settings,
//   ChevronLeft,
//   ChevronRight,
//   X,
// } from "lucide-react";

// interface SidebarProps {
//   isSidebarOpen: boolean;
//   setIsSidebarOpen: (value: boolean) => void;
//   isCollapsed: boolean;
//   setIsCollapsed: (value: boolean) => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({
//   isSidebarOpen,
//   setIsSidebarOpen,
//   isCollapsed,
//   setIsCollapsed,
// }) => {
//   const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
//   const sidebarExpanded = isMobile ? false : isCollapsed;

//   return (
//     <>
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40 md:hidden"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       <div
//         className={`fixed top-0 left-0 h-full z-50 bg-[#0d1424] text-white border-r border-white/10 flex flex-col
//           transition-all duration-300
//           ${sidebarExpanded ? "w-20" : "w-64"}
//           ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
//           md:translate-x-0
//         `}
//       >
//         <div className="flex items-center justify-between p-3">
//           {!sidebarExpanded && (
//             <h1 className="text-lg font-semibold">Finicity</h1>
//           )}
//           <div className="flex items-center gap-2">
//             <button
//               onClick={() => setIsCollapsed(!isCollapsed)}
//               className="p-2 rounded-lg hover:bg-white/10 hidden md:block"
//             >
//               {sidebarExpanded ? (
//                 <ChevronRight size={20} />
//               ) : (
//                 <ChevronLeft size={20} />
//               )}
//             </button>

//             <button
//               onClick={() => setIsSidebarOpen(false)}
//               className="p-2 rounded-lg hover:bg-white/10 md:hidden"
//             >
//               <X size={20} />
//             </button>
//           </div>
//         </div>

//         <nav className="flex-1 mt-4 space-y-2">
//           <button className="flex items-center w-full px-4 py-2 text-sm hover:bg-white/10">
//             <Home size={20} />
//             {!sidebarExpanded && <span className="ml-3">Dashboard</span>}
//           </button>
//           <button className="flex items-center w-full px-4 py-2 text-sm hover:bg-white/10">
//             <BarChart2 size={20} />
//             {!sidebarExpanded && <span className="ml-3">Analytics</span>}
//           </button>
//         </nav>

//         <div className="p-4 border-t border-white/10">
//           <button className="flex items-center w-full px-2 py-2 text-sm hover:bg-white/10">
//             <Settings size={20} />
//             {!sidebarExpanded && <span className="ml-3">Settings</span>}
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

import {
  Home,
  BarChart2,
  Settings,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
  isCollapsed,
  setIsCollapsed,
}) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const sidebarExpanded = isMobile ? false : isCollapsed;

  const navItems = [
    { name: "Dashboard", icon: Home, path: "/" },
    { name: "Analytics", icon: BarChart2, path: "/analytics" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-50 bg-[#0d1424] text-white border-r border-white/10 flex flex-col
          transition-all duration-300
          ${sidebarExpanded ? "w-20" : "w-64"}
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3">
          {!sidebarExpanded && (
            <h1 className="text-lg font-semibold">Finicity</h1>
          )}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-lg hover:bg-white/10 hidden md:block"
            >
              {sidebarExpanded ? (
                <ChevronRight size={20} />
              ) : (
                <ChevronLeft size={20} />
              )}
            </button>

            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 rounded-lg hover:bg-white/10 md:hidden"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 mt-4 space-y-1">
          {navItems.map(({ name, icon: Icon, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `flex items-center w-full px-4 py-2 text-sm transition-colors rounded-md
                ${
                  isActive
                    ? "bg-white/15 text-white"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`
              }
              onClick={() => setIsSidebarOpen(false)}
            >
              <Icon size={20} />
              {!sidebarExpanded && <span className="ml-3">{name}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/10">
          <button className="flex items-center w-full px-2 py-2 text-sm hover:bg-white/10 rounded-md">
            <Settings size={20} />
            {!sidebarExpanded && <span className="ml-3">Settings</span>}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
