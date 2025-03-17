import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar"; // ✅ Import Sidebar
import { Outlet } from "react-router-dom";

const MainPage = () => {
  const globalState = useSelector((state: RootState) => state.user);
  //   const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const currentDate = new Date();

    // Decode and check token expiration
    const token =
      globalState.token && jwtDecode<{ exp: number }>(globalState.token);
    console.log(token, "token");

    if (!globalState?.isLoggedIn) {
      console.log("User not logged in, redirecting to login");
      navigate("/login");
    } else if (token && (token.exp ?? 0) * 1000 < currentDate.getTime()) {
      console.log("Token expired, logging out");
      navigate("/login");
    }
  }, [globalState.isLoggedIn, navigate]);

  return (
    <div className="flex h-screen overflow-hidden">
      {" "}
      {/* ✅ Ensures full-screen layout */}
      {globalState.isLoggedIn && <Sidebar />}{" "}
      {/* ✅ Show sidebar only if logged in */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Navbar />

        <main className="flex-grow p-4">
          <Outlet /> {/* Render nested routes here */}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
