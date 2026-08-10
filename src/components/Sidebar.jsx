import { Home, BarChart3, FolderOpen, Users, CheckCircle2, MessageSquare, Settings, LogOut, X } from 'lucide-react';

const navItems = [
  { key: 'Dashboard', icon: Home },
  { key: 'Analytics', icon: BarChart3 },
  { key: 'Projects', icon: FolderOpen },
  { key: 'Team', icon: Users },
  { key: 'Tasks', icon: CheckCircle2 },
  { key: 'Messages', icon: MessageSquare },
  { key: 'Settings', icon: Settings },
  { key: 'Logout', icon: LogOut },
];

export default function Sidebar({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-20 bg-slate-900/40 transition-opacity md:hidden ${sidebarOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
        onClick={() => setSidebarOpen(false)}/>
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-72 transform overflow-y-auto border-r border-slate-200 bg-white px-5 py-6 shadow-xl transition duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:static md:translate-x-0 md:shadow-none`}>
        <div className="flex items-center justify-between lg:hidden">
      
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900 text-white">SD</div>
            <div>
              <p className="text-sm font-semibold text-slate-900">SaaS Dashboard</p>
              <p className="text-xs lowercase tracking-[0.29em] text-slate-500">Admin Panel</p>
            </div>
          </div>

          <nav className="mt-8 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.key === activeTab;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => {
                    setActiveTab(item.key);
                    setSidebarOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>
                  <Icon className="h-5 w-5" />
                  <span>{item.key}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Workspace summary</p>
            <p className="mt-2 text-xs text-slate-500">A clean dashboard built to keep your team aligned and productive.</p>
          </div>
        </div>
      </aside>
    </>
  );
}
