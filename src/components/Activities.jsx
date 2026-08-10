import React from 'react';
import { UserPlus, CheckCircle2, FileText, CreditCard } from 'lucide-react';

const activities = [
  { id: 1, title: 'New user registered', desc: 'Alex Rivera created an account', time: '10m ago', icon: UserPlus, color: 'text-blue-600 bg-blue-50' },
  { id: 2, title: 'Project completed', desc: 'Mobile App Redesign marked done', time: '1h ago', icon: CheckCircle2, color: 'text-emerald-600 bg-emerald-50' },
  { id: 3, title: 'Task assigned', desc: 'David assigned #204 to Team', time: '3h ago', icon: FileText, color: 'text-amber-600 bg-amber-50' },
  { id: 4, title: 'Payment received', desc: '$2,400 from Acme Corp', time: '5h ago', icon: CreditCard, color: 'text-indigo-600 bg-indigo-50' },
];

export default function Activities() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
      <h2 className="text-base font-bold text-slate-900 mb-4">Recent Activities</h2>
      <div className="space-y-4">
        {activities.map((act) => {
          const Icon = act.icon;
          return (
            <div key={act.id} className="flex items-start gap-3">
              <div className={`p-2 rounded-xl shrink-0 ${act.color}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-slate-800 leading-tight">{act.title}</p>
                <p className="text-[11px] text-slate-500 truncate">{act.desc}</p>
              </div>
              <span className="text-[10px] text-slate-400 shrink-0">{act.time}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}