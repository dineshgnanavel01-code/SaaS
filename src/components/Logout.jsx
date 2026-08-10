import React, { useState } from "react";

function Logout({ setActiveTab }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="mx-auto w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_30px_90px_rgba(15,23,42,0.08)]">
      <div className="mb-8 flex flex-col items-center gap-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-700 text-white">
          <span className="text-2xl font-semibold">SD</span>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-slate-900">Sign in to SaaS Dasboard</h2>
          <p className="mt-2 text-sm text-slate-500">
            You’ve been logged out. Choose a sign-in option to return to your workspace.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
        >
          <span className="text-base">🌐</span>
          Continue with Google
        </button>
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
        >
          <span className="text-base">&lt;/&gt;</span>
          Continue with GitHub
        </button>
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
        >
          <span className="text-base">✉️</span>
          Continue with email link
        </button>
      </div>

      <div className="my-6 flex items-center text-xs uppercase tracking-[0.2em] text-slate-400">
        <span className="grow border-t border-slate-200" />
        <span className="mx-3">or</span>
        <span className="grow border-t border-slate-200" />
      </div>

      <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
        <label className="block text-sm font-medium text-slate-600">
          Work email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@company.com"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          />
        </label>

        <label className="block text-sm font-medium text-slate-600">
          Password
          <div className="mt-2 relative">
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
              👁️
            </span>
          </div>
        </label>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-500">
          <p className="font-semibold uppercase tracking-[0.2em] text-slate-400">Password must include</p>
          <ul className="mt-3 space-y-1 list-disc pl-5">
            <li>At least 8 characters</li>
            <li>One uppercase letter</li>
            <li>One lowercase letter</li>
            <li>One number</li>
          </ul>
        </div>

        <button
          type="button"
          onClick={() => setActiveTab("Dashboard")}
          className="w-full rounded-2xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
        >
          Sign in with email
        </button>
      </form>

      <button
        type="button"
        onClick={() => setActiveTab("Dashboard")}
        className="mt-3 w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Continue as demo admin
      </button>

      <p className="mt-4 text-center text-sm text-slate-400">
        Use a valid email and a strong password, or continue as demo admin to skip.
      </p>
    </div>
  );
}

export default Logout;
