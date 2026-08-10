const tasks = [
  { id: 1, title: 'Design onboarding flow', project: 'Aurora App', assignee: 'Sofia Lee', due: 'Aug 24', status: 'In Progress', progress: 65 },
  { id: 2, title: 'Write API documentation', project: 'Zenith API', assignee: 'Noah Kim', due: 'Aug 28', status: 'Pending', progress: 28 },
  { id: 3, title: 'QA regression suite', project: 'Pulse Web', assignee: 'Ethan Cruz', due: 'Sep 02', status: 'In Review', progress: 50 },
  { id: 4, title: 'Marketing landing page', project: 'Vertex UI', assignee: 'Maya Patel', due: 'Sep 10', status: 'Completed', progress: 100 },
];

const statusStyles = {
  Completed: 'bg-emerald-100 text-emerald-700',
  'In Progress': 'bg-amber-100 text-amber-700',
  Pending: 'bg-slate-100 text-slate-700',
  'In Review': 'bg-sky-100 text-sky-700',
};

export default function Tasks() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Task Board</h2>
          <p className="text-sm text-slate-500">Track your current tasks and deadlines.</p>
        </div>
        <span className="inline-flex items-center rounded-2xl bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">4 active tasks</span>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-base font-semibold text-slate-900">{task.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{task.project} • Assigned to {task.assignee}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[task.status]}`}>{task.status}</span>
                <span className="text-xs text-slate-500">Due {task.due}</span>
              </div>
            </div>
            <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-slate-900" style={{ width: `${task.progress}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
