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
import Logout from "./components/Logout";

export default function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function renderPage(tab) {
    switch (tab) {
      case "Dashboard":
        return (
          <div className="w-full min-w-0 space-y-6">
            <DashboardStats />
            <Analytics />
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
        return <Analytics />;

      case "Projects":
        return <ProjectsTable />;

      case "Team":
        return <Team />;

      case "Tasks":
        return <Tasks />;

      case "Messages":
        return <Messages />;

      case "Settings":
        return <Settings />;

      case "Logout":
        return <Logout setActiveTab={setActiveTab} />;

      case "SignIn":
        return (
          <div className="w-full min-w-0 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Sign In</h2>
            <form className="mt-6 space-y-4">
              <input type="email" placeholder="Email" className="w-full rounded-xl border px-4 py-2" />
              <input type="password" placeholder="Password" className="w-full rounded-xl border px-4 py-2" />
              <button className="w-full rounded-xl bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">
                Sign In
              </button>
            </form>
            {/* Centered Back to Logout */}
            <div className="mt-4 text-center">
              <button
                onClick={() => setActiveTab("Logout")}
                className="text-sm text-slate-500 underline"
              >
                Back to Logout
              </button>
            </div>
          </div>
        );

      case "SignUp":
        return (
          <div className="w-full min-w-0 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Sign Up</h2>
            <form className="mt-6 space-y-4">
              <input type="text" placeholder="Name" className="w-full rounded-xl border px-4 py-2" />
              <input type="email" placeholder="Email" className="w-full rounded-xl border px-4 py-2" />
              <input type="password" placeholder="Password" className="w-full rounded-xl border px-4 py-2" />
              <button className="w-full rounded-xl bg-slate-600 px-4 py-2 text-white hover:bg-slate-700">
                Sign Up
              </button>
            </form>
            {/* Centered Back to Logout */}
            <div className="mt-4 text-center">
              <button
                onClick={() => setActiveTab("Logout")}
                className="text-sm text-slate-500 underline"
              >
                Back to Logout
              </button>
            </div>
          </div>
        );

      default:
        return <Analytics />;
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
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setSidebarOpen={setSidebarOpen}
        />
        <main className="min-h-[calc(100vh-72px)] w-full min-w-0 flex-1 space-y-6 p-3 sm:p-6 lg:p-8">
          {renderPage(activeTab)}
        </main>
      </div>
    </div>
  );
}
