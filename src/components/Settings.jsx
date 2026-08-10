const settings = [
  { title: 'Profile Settings', description: 'Manage your personal information and preferences.' },
  { title: 'Account Security', description: 'Update password, 2FA, and session settings.' },
  { title: 'Notification Preferences', description: 'Choose which updates you receive.' },
  { title: 'Billing', description: 'View invoices and payment methods.' },
];

export default function Settings() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900">Settings</h2>
        <p className="text-sm text-slate-500">Configure your workspace and account preferences.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {settings.map((item) => (
          <div key={item.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
            <h3 className="font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-500">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
