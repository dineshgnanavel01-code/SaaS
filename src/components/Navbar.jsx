import { useState, useRef, useEffect } from 'react';
import {
  Bell,
  Menu,
  Search,
  X,
  LayoutDashboard,
  BarChart3,
  FolderKanban,
  Users,
  CheckSquare,
  MessageSquare,
  Settings,
  LogOut,
  User,
} from 'lucide-react';

export default function Navbar({ activeTab = 'Dashboard', setActiveTab }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  const user = {
    name: 'Dinesh G',
    initials: 'DG',
    role: 'Frontend Developer',
    bio: 'Workspace admin focused on delivery health, team growth, and product quality.',
    email: 'dinesh.g@saas.app',
    phone: '+1 (415) 204–0150',
    location: 'Remote — IN',
    joined: 'Mar 07, 2021',
  };

  const navigation = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Analytics', icon: BarChart3 },
    { name: 'Projects', icon: FolderKanban },
    { name: 'Team', icon: Users },
    { name: 'Tasks', icon: CheckSquare },
    { name: 'Messages', icon: MessageSquare },
    { name: 'Settings', icon: Settings },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (tabName) => {
    if (setActiveTab) setActiveTab(tabName);
    setSidebarOpen(false);
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />

        <div
          className={`fixed inset-y-0 left-0 z-50 flex w-full max-w-xs flex-col bg-white p-6 shadow-xl transition-transform duration-300 ease-in-out ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between pb-4">
            <h2 className="text-lg font-bold text-slate-900">Navigation</h2>
            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50 hover:text-slate-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-2 mb-6">
            <label className="relative block">
              <span className="sr-only">Search navigation</span>
              <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                className="w-full rounded-xl border border-slate-200 bg-slate-100 py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                placeholder="Search links..."
                type="search"
              />
            </label>
          </div>

          <nav className="flex-1 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isCurrent = activeTab === item.name;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleNavClick(item.name)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium transition ${
                    isCurrent
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </button>
              );
            })}
          </nav>

          <div className="border-t border-slate-200 pt-4">
            <button
              type="button"
              onClick={() => handleNavClick('Logout')}
              className="flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-rose-600 transition hover:bg-rose-50"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </div>
        </div>
      </div>

 
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="flex-1">
            <label className="relative block">
              <span className="sr-only">Search</span>
              <Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                className="w-full rounded-2xl border border-slate-200 bg-slate-100 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                placeholder="Search dashboard"
                type="search"
              />
            </label>
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <button
              type="button"
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-rose-500 ring-2 ring-white" />
            </button>

            
            <div className="relative" ref={profileRef}>
              <button
                type="button"
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-2 pr-4 transition hover:bg-slate-100"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white">
                  {user.initials}
                </div>
                <div className="hidden text-left sm:block">
                  <p className="text-sm font-semibold text-slate-900">
                    {user.name}
                  </p>
                  <p className="text-xs text-slate-500">{user.role}</p>
                </div>
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {user.name}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {user.role}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">{user.bio}</p>

                    <div className="mt-4 space-y-1 text-sm text-slate-700">
                      <p>Email: {user.email}</p>
                      <p>Phone: {user.phone}</p>
                      <p>Location: {user.location}</p>
                      <p>Joined: {user.joined}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setProfileOpen(false);
                        if (setActiveTab) setActiveTab('Settings');
                      }}
                      className="mt-4 w-full rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-600"
                    >
                      Open settings
                    </button>
                  </div>

                 
                  <div className="border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => {
                        setProfileOpen(false);
                        if (setActiveTab) setActiveTab('SignUp');
                      }}
                      className="flex w-full items-center gap-3 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                    >
                      <User className="h-4 w-4" />
                      Sign Up
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setProfileOpen(false);
                        if (setActiveTab) setActiveTab('Logout');
                      }}
                      className="flex w-full items-center gap-3 border-t border-slate-100 px-6 py-3 text-sm font-medium text-rose-600 transition hover:bg-rose-50"
                    >
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}