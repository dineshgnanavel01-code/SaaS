import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import DashboardStats from "./pages/Dashboard";
import Analytics from "./components/Analytics";
import ProjectsTable from "./components/ProjectsTable";
import Activities from "./components/Activities";
import Team from "./components/Team";
import Tasks from "./components/Tasks";
import Messages from "./components/Messages";
import Settings from "./components/Settings";

export default function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function renderPage(tab) {
    switch (tab) {
      case "Dashboard":
        return (
          <div className="w-full min-w-0 space-y-6">
            <div className="w-full min-w-0">
              <DashboardStats />
            </div>

            <div className="w-full min-w-0">
              <Analytics />
            </div>

            <div className="grid w-full min-w-0 grid-cols-1 gap-6 xl:grid-cols-3">
              <div className="min-w-0 overflow-x-auto rounded-3xl xl:col-span-2">
                <ProjectsTable />
              </div>

              <div className="w-full min-w-0 space-y-6">
                <Activities />
                <Team />
              </div>
            </div>
          </div>
        );

      case "Analytics":
        return (
          <div className="w-full min-w-0">
            <Analytics />
          </div>
        );

      case "Projects":
        return (
          <div className="w-full min-w-0 overflow-x-auto rounded-3xl">
            <ProjectsTable />
          </div>
        );

      case "Team":
        return (
          <div className="w-full min-w-0">
            <Team />
          </div>
        );

      case "Tasks":
        return (
          <div className="w-full min-w-0">
            <Tasks />
          </div>
        );

      case "Messages":
        return (
          <div className="w-full min-w-0">
            <Messages />
          </div>
        );

      case "Settings":
        return (
          <div className="w-full min-w-0">
            <Settings />
          </div>
        );

      case "Logout":
        return (
          <div className="w-full min-w-0 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Logged out</h2>
            <p className="mt-3 text-sm text-slate-500">
              You have successfully signed out. Refresh the page to sign back in.
            </p>
          </div>
        );

      default:
        return (
          <div className="w-full min-w-0">
            <Analytics />
          </div>
        );
    }
  }

  return (
    <div className="flex min-h-screen w-full min-w-0 overflow-x-hidden bg-slate-50">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <Navbar setSidebarOpen={setSidebarOpen} />

        <main className="min-h-[calc(100vh-72px)] w-full min-w-0 flex-1 space-y-6 p-3 sm:p-6 lg:p-8">
          <div className="w-full min-w-0 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <h1 className="truncate text-xl font-semibold text-slate-900 sm:text-2xl">
                  {activeTab}
                </h1>

                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  {activeTab === "Dashboard"
                    ? "A modern analytics dashboard for tracking revenue, activity, and team progress."
                    : `You are viewing the ${activeTab} page.`}
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-2 sm:gap-3">
                <span className="inline-flex items-center rounded-2xl bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-700 sm:text-sm">
                  <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
                  Live insights
                </span>

                <span className="inline-flex items-center rounded-2xl bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 sm:text-sm">
                  Updated 10m ago
                </span>
              </div>
            </div>
          </div>

          {/* Active Page Component */}
          {renderPage(activeTab)}
        </main>
      </div>
    </div>
  );
}