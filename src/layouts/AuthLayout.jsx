import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="max-w-4xl flex flex-col md:flex-row items-center m-auto min-h-screen">
      <img src="/img/logo.svg" alt="logo" className="max-w-xs" />
      <div className="px-10 w-full my-10">
        <Outlet />
      </div>
    </main>
  );
}
