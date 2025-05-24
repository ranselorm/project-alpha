import { Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store/store";
import AdminLogin from "@/pages/AdminLogin";
import Dashboard from "@/pages/Dashboard";
import Settings from "@/pages/Settings";
import Transactions from "@/pages/Transactions";
import Users from "@/pages/Agents";
import MainPage from "@/layouts/MainPage";

const App = () => {
  // const user = useSelector((state: RootState) => state.user.user);

  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />

      {/* Protected Routes with Layout */}
      <Route element={<MainPage />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/agents" element={<Users />} />
      </Route>
    </Routes>
  );
};

export default App;
