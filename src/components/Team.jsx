import React from 'react';

const members = [
  { id: 1, name: 'Karun S', role: 'Product Manager', status: 'Online', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
  { id: 2, name: 'Murali M P', role: 'Lead Developer', status: 'Online', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100' },
  { id: 3, name: 'Kathir Candy', role: 'UI/UX Designer', status: 'Offline', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100' },
];

export default function Team() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
      <h2 className="text-base font-bold text-slate-900 mb-4">Team Members</h2>
      <div className="space-y-3.5">
        {members.map((m) => (
          <div key={m.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src={m.avatar} alt={m.name} className="w-8 h-8 rounded-full object-cover ring-2 ring-slate-100" />
                <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full ring-2 ring-white ${
                  m.status === 'Online' ? 'bg-emerald-500' : 'bg-slate-300'
                }`} />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-800 leading-tight">{m.name}</p>
                <p className="text-[10px] text-slate-400">{m.role}</p>
              </div>
            </div>
            <span className={`text-[10px] font-medium ${
              m.status === 'Online' ? 'text-emerald-600' : 'text-slate-400'
            }`}>
              {m.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}