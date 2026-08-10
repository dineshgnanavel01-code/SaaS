import React, { useState } from "react";

export default function Settings() {
  const [profile, setProfile] = useState({
    fullName: "Dinesh G",
    role: "Frontend Developer",
    email: "dinesh.g@saas.app",
  });

  const [notifications, setNotifications] = useState({
    product: true,
    digest: false,
  });

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-slate-900">Settings</h1>
        <p className="mt-2 text-sm text-slate-500">
          Manage your profile preferences and notification options.
        </p>
      </div>

      <div className="space-y-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-900">Profile</h2>
            <p className="mt-2 text-sm text-slate-500">
              Update your name, role, and email address.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm text-slate-600">Full name</span>
              <input
                type="text"
                value={profile.fullName}
                onChange={(event) =>
                  setProfile({ ...profile, fullName: event.target.value })
                }
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm text-slate-600">Role</span>
              <input
                type="text"
                value={profile.role}
                onChange={(event) =>
                  setProfile({ ...profile, role: event.target.value })
                }
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="text-sm text-slate-600">Email</span>
              <input
                type="email"
                value={profile.email}
                onChange={(event) =>
                  setProfile({ ...profile, email: event.target.value })
                }
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
            </label>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-900">Notifications</h2>
            <p className="mt-2 text-sm text-slate-500">
              Choose which updates you receive.
            </p>
          </div>

          <div className="space-y-4">
            <label className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
              <div>
                <p className="font-medium text-slate-900">Product notifications</p>
              </div>
              <input
                type="checkbox"
                checked={notifications.product}
                onChange={() =>
                  setNotifications((prev) => ({
                    ...prev,
                    product: !prev.product,
                  }))
                }
                className="h-5 w-5 rounded border-slate-200 text-emerald-600 focus:ring-emerald-500"
              />
            </label>

            <label className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
              <div>
                <p className="font-medium text-slate-900">Weekly digest email</p>
              </div>
              <input
                type="checkbox"
                checked={notifications.digest}
                onChange={() =>
                  setNotifications((prev) => ({
                    ...prev,
                    digest: !prev.digest,
                  }))
                }
                className="h-5 w-5 rounded border-slate-200 text-emerald-600 focus:ring-emerald-500"
              />
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="rounded-3xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
            Save changes
          </button>
        </div>
      </div>
    </section>
  );
}
