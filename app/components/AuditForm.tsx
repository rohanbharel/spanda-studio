"use client";

import Link from "next/link";
import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  city: string;
  question: string;
}

const empty: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  city: "",
  question: "",
};

export default function AuditForm() {
  const [form, setForm] = useState<FormData>(empty);
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to form backend (Resend/Supabase)
    console.log("Audit form submission:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <h3 className="font-caveat text-[36px] text-ink">Noted.</h3>
        <p className="font-epilogue font-light text-[16px] text-stone mt-4 max-w-[440px] mx-auto">
          Expect a call within 24 hours to confirm fit before we begin.
        </p>
        <p className="font-epilogue font-light text-[16px] text-stone mt-2">
          <Link
            href="mailto:hello@spanda.studio"
            className="hover:text-ink transition-colors"
          >
            hello@spanda.studio
          </Link>
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full font-epilogue font-light text-[15px] text-ink bg-transparent border border-ink px-4 py-3 focus:outline-none focus:border-saffron transition-colors";
  const labelClass = "font-epilogue font-light text-[13px] text-stone mb-1 block";

  return (
    <form onSubmit={handleSubmit} className="mt-10">
      <p className="font-epilogue font-light text-[13px] text-stone mb-6">
        All fields are required.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>First name</label>
          <input required type="text" value={form.firstName} onChange={set("firstName")} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Last name</label>
          <input required type="text" value={form.lastName} onChange={set("lastName")} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Email</label>
          <input required type="email" value={form.email} onChange={set("email")} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Phone</label>
          <input required type="tel" value={form.phone} onChange={set("phone")} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Company name</label>
          <input required type="text" value={form.company} onChange={set("company")} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>City</label>
          <input required type="text" value={form.city} onChange={set("city")} className={inputClass} />
        </div>
      </div>

      <div className="mt-6">
        <label className={labelClass}>
          What&rsquo;s the one thing you want the Audit to answer?
        </label>
        <textarea
          required
          rows={3}
          value={form.question}
          onChange={set("question")}
          className={`${inputClass} resize-none`}
          placeholder="The one question you need answered."
        />
      </div>

      <button
        type="submit"
        className="mt-8 w-full font-epilogue font-semibold text-[16px] text-ink bg-saffron px-6 py-4 hover:opacity-90 transition-opacity"
      >
        Request the Audit →
      </button>
    </form>
  );
}
