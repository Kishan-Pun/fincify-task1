// import { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
// import Dashboard from "./pages/Dashboard";

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   return (
//     <div className="flex bg-[#0a1220] text-white min-h-screen relative">
//       <Sidebar
//         isSidebarOpen={isSidebarOpen}
//         setIsSidebarOpen={setIsSidebarOpen}
//         isCollapsed={isCollapsed}
//         setIsCollapsed={setIsCollapsed}
//       />

//       <div
//         className={`flex-1 flex flex-col transition-all duration-300
//         ${isCollapsed ? "md:ml-20" : "md:ml-64"}
//         `}
//       >
//         <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
//         <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
//           <Dashboard />
//         </main>
//       </div>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Analytics from "./components/Analytics/Analytics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
