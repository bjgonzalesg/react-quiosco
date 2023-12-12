import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="max-w-4xl m-auto">
      <img src="/img/logo.svg" alt="logo" className="max-w-xs" />
      <Outlet />
    </main>
  );
}
