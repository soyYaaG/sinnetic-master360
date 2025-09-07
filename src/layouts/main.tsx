import { Sidebar } from "@components/sidebar";
import { Statusbar } from "@components/statusBar";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <main className="h-screen grid grid-cols-1 grid-rows-1">
      <section className="grid grid-cols-[18rem_1fr] h-full w-full">
        <Sidebar />
        <div className="p-4 overflow-y-auto overscroll-contain">
          <Outlet />
        </div>
      </section>
      <Statusbar />
    </main>
  );
};
