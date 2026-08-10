import React from 'react';
import { ArrowUpRight, MoreVertical } from 'lucide-react';

const projects = [
  { id: 1, name: 'Cloud Migration', client: 'Acme Corp', status: 'In Progress', progress: 65, dueDate: 'Aug 24, 2026' },
  { id: 2, name: 'Mobile App Redesign', client: 'Starlight Inc', status: 'Completed', progress: 100, dueDate: 'Aug 12, 2026' },
  { id: 3, name: 'Payment Gateway API', client: 'Fintech Hub', status: 'Pending', progress: 15, dueDate: 'Sep 05, 2026' },
  { id: 4, name: 'E-commerce Frontend', client: 'RetailGo', status: 'In Progress', progress: 40, dueDate: 'Sep 18, 2026' },
];

export default function ProjectsTable() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base font-bold text-slate-900">Recent Projects</h2>
          <p className="text-xs text-slate-500">Active project deliverables & timelines</p>
        </div>
        <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              <th className="py-3 px-2">Project Name</th>
              <th className="py-3 px-2">Client</th>
              <th className="py-3 px-2">Status</th>
              <th className="py-3 px-2">Progress</th>
              <th className="py-3 px-2">Due Date</th>
              <th className="py-3 px-2 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 text-xs">
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3.5 px-2 font-semibold text-slate-800">{project.name}</td>
                <td className="py-3.5 px-2 text-slate-500">{project.client}</td>
                <td className="py-3.5 px-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                    project.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' :
                    project.status === 'In Progress' ? 'bg-amber-50 text-amber-600' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {project.status}
                  </span>
                </td>
                <td className="py-3.5 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: `${project.progress}%` }} />
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">{project.progress}%</span>
                  </div>
                </td>
                <td className="py-3.5 px-2 text-slate-500">{project.dueDate}</td>
                <td className="py-3.5 px-2 text-right">
                  <button className="p-1 text-slate-400 hover:text-indigo-600 rounded-md transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}