import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Analytics from "./components/Analytics/Analytics";
import PieChartDashboard from "./components/PieChart/PieChart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/piechart" element={<PieChartDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
