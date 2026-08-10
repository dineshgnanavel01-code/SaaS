import React, { useState } from "react";

const revenueStats = [
  { month: "Jan", value: 26 },
  { month: "Feb", value: 35 },
  { month: "Mar", value: 42 },
  { month: "Apr", value: 28 },
  { month: "May", value: 52 },
  { month: "Jun", value: 63 },
  { month: "Jul", value: 58 },
  { month: "Aug", value: 71 },
];

const growthStats = [
  { label: "W1", value: 18 },
  { label: "W2", value: 23 },
  { label: "W3", value: 31 },
  { label: "W4", value: 38 },
  { label: "W5", value: 45 },
];

export default function Analytics() {
  const [activeTab, setActiveTab] = useState("Revenue overview");

  return (
    <section className="w-full">
      <div className="flex gap-3 mb-6">
        {["Revenue overview", "User growth", "Monthly statistics"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-2xl text-sm font-medium transition ${
              activeTab === tab
                ? "bg-indigo-600 text-white shadow"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}>
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Revenue overview" && (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Revenue Overview</h2>
          <div className="mt-6 space-y-4">
            {revenueStats.map((item) => (
              <div key={item.month} className="space-y-2">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>{item.month}</span>
                  <span>{item.value}K</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 transition-all duration-500"
                    style={{ width: `${item.value * 1.25}%` }}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "User growth" && (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">User Growth</h2>
          <div className="mt-6 space-y-4">
            {growthStats.map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>{item.label}</span>
                  <span>{item.value}K</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500"
                    style={{ width: `${item.value * 2}%` }}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "Monthly statistics" && (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Monthly Statistics</h2>
          <p className="mt-3 text-slate-500">Performance breakdown (mock data)</p>
          <div className="mt-6 h-40 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold">
            Chart Placeholder
          </div>
        </div>
      )}
    </section>
  );
}
