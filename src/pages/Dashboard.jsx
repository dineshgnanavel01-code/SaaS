import React from "react";
import { DollarSign, Users,FolderKanban, ListChecks,ArrowUpRight,ArrowDownRight,} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$84,250",
    change: "12.4%",
    trend: "up",
    icon: DollarSign,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    title: "Total Users",
    value: "12,480",
    change: "8.1%",
    trend: "up",
    icon: Users,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Active Projects",
    value: "36",
    change: "2.3%",
    trend: "down",
    icon: FolderKanban,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    title: "Pending Tasks",
    value: "128",
    change: "5.6%",
    trend: "up",
    icon: ListChecks,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];

function StatCard({ title, value, change, trend, icon: Icon, iconBg, iconColor }) {
  const isUp = trend === "up";

  return (
    <div className="flex min-w-0 flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconBg}`}>
          <Icon className={`h-5 w-5 ${iconColor}`} strokeWidth={2} />
        </div>

        <div
          className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
            isUp ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
          }`} >
          {isUp ? (
            <ArrowUpRight className="h-3.5 w-3.5" />
          ) : (
            <ArrowDownRight className="h-3.5 w-3.5" />
          )}
          {change}
        </div>
      </div>

      <div className="min-w-0">
        <p className="truncate text-sm text-slate-500">{title}</p>
        <p className="mt-1 text-2xl font-bold tracking-tight text-slate-900">{value}</p>
      </div>
    </div>
  );
}

export default function DashboardStats() {
  return (
    <div className="w-full min-w-0 space-y-4">
      <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
        Dashboard Overview
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>
    </div>
  );
}