import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="max-w-4xl m-auto flex flex-col md:flex-row items-center h-full">
      <img src="/img/logo.svg" alt="logo" className="max-w-xs" />
      <div className="p-10 w-full">
        <Outlet />
      </div>
    </main>
  );
}
