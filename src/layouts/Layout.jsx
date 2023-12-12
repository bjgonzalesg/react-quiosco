import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebard";
import Resumen from "../components/Resumen";

export default function Layout() {
  return (
    <div className="md:flex">
      <Sidebar />
      <Outlet />
      <Resumen />
    </div>
  );
}
