const messages = [
  { id: 1, title: 'New client feedback', sender: 'Ava Cole', time: '2h ago', preview: 'Reviewed the launch notes for Pulse Web.' },
  { id: 2, title: 'Design review', sender: 'Liam Smith', time: '5h ago', preview: 'Please check the mobile header spacing.' },
  { id: 3, title: 'Invoice approval', sender: 'Emma Green', time: '1d ago', preview: 'Invoice A127 is ready for payment.' },
];

export default function Messages() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Messages</h2>
          <p className="text-sm text-slate-500">Latest updates from your team and clients.</p>
        </div>
        <button className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition">New message</button>
      </div>

      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">{message.title}</p>
                <p className="mt-1 text-sm text-slate-500">{message.preview}</p>
              </div>
              <span className="text-xs text-slate-400">{message.time}</span>
            </div>
            <p className="mt-3 text-xs font-semibold text-slate-600">From {message.sender}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
