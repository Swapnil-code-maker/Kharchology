"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { updateProfile } from "firebase/auth";

import { registerUser } from "@/lib/auth";

export default function RegisterPage() {

  const router = useRouter();

  const [formData, setFormData] =
    useState({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
    });

  function handleChange(e) {

    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));
  }

  async function handleSubmit(e) {

    e.preventDefault();

    const {
      firstName,
      lastName,
      phone,
      email,
      password,
    } = formData;

    // VALIDATION
    if (
      !firstName ||
      !lastName ||
      !phone ||
      !email ||
      !password
    ) {

      alert(
        "Please fill all fields."
      );

      return;
    }

    try {

      // FIREBASE REGISTER
      const userCredential =
        await registerUser(
          email,
          password
        );

      // FULL NAME
      const fullName =
        `${firstName} ${lastName}`;

      // SAVE DISPLAY NAME
      await updateProfile(
        userCredential.user,
        {
          displayName:
            fullName,
        }
      );

      // SAVE USER DATA
      const userData = {
        uid:
          userCredential.user.uid,

        firstName,

        lastName,

        fullName,

        phone,

        email,
      };

      localStorage.setItem(
        "kharchology-user",
        JSON.stringify(userData)
      );

      alert(
        "Account created successfully!"
      );

      // REDIRECT
      router.push(
        "/dashboard"
      );

    } catch (error) {

      console.log(error);

      alert(
        error.message
      );
    }
  }

  return (
    <main className="min-h-screen bg-[#F5F7FB] flex overflow-hidden">

      {/* LEFT */}
      <section className="hidden lg:flex w-1/2 relative overflow-hidden bg-[#04130B] px-14 py-12 flex-col justify-evenly">

        {/* Glow */}
        <div className="absolute -top-32 -left-32 w-[460px] h-[460px] bg-emerald-500/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-xl mx-auto">

          {/* Branding */}
          <div className="flex items-center gap-5 mb-14">

            <Image
              src="/logo/Kharchology-logo.png"
              alt="Kharchology Logo"
              width={64}
              height={64}
              className="rounded-2xl"
            />

            <div>
              <h1 className="text-4xl font-bold text-white tracking-tight">
                Kharchology
              </h1>

              <p className="text-emerald-400 text-sm tracking-wide uppercase">
                Expense Analytics
              </p>
            </div>
          </div>

          {/* Hero */}
          <div className="mb-12">

            <h2 className="text-5xl font-bold leading-[1.02] tracking-tight mb-8 text-white">
              Build Better <br />
              Financial Habits.
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
              Track expenses, manage budgets, and
              understand your spending patterns with
              a clean modern workspace.
            </p>

            <div className="w-24 h-[2px] bg-emerald-500/40 rounded-full mt-8"></div>

          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-5">

            {[
              {
                title: "Expense Tracking",
                desc: "Track spending habits in real-time.",
              },
              {
                title: "Budget Planning",
                desc: "Set monthly financial goals.",
              },
              {
                title: "Category Insights",
                desc: "Organize expenses intelligently.",
              },
              {
                title: "Secure Workspace",
                desc: "Your financial data stays protected.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl"
              >
                <h3 className="text-white font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* RIGHT */}
      <section className="w-full lg:w-1/2 flex items-center justify-center px-8 py-16">

        <div className="w-full max-w-lg bg-white border border-zinc-200 rounded-[32px] p-8 xl:p-10 shadow-sm">

          {/* Heading */}
          <div className="mb-8">

            <h1 className="text-5xl font-bold tracking-tight mb-3 text-[#111827]">
              Create Account
            </h1>

            <p className="text-zinc-500 text-lg">
              Start managing your finances smarter.
            </p>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Name Row */}
            <div className="grid grid-cols-2 gap-4">

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  First Name
                </label>

                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full bg-white border border-zinc-300 rounded-2xl px-5 py-4 text-[#111827] outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Last Name
                </label>

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name "
                  className="w-full bg-white border border-zinc-300 rounded-2xl px-5 py-4 text-[#111827] outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all"
                />
              </div>

            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 _"
                className="w-full bg-white border border-zinc-300 rounded-2xl px-5 py-4 text-[#111827] outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="xyz@gmail.com"
                className="w-full bg-white border border-zinc-300 rounded-2xl px-5 py-4 text-[#111827] outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="w-full bg-white border border-zinc-300 rounded-2xl px-5 py-4 text-[#111827] outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 text-white font-semibold py-4 rounded-2xl shadow-sm mt-2"
            >
              Create Account
            </button>

          </form>

          {/* Redirect */}
          <div className="mt-7 text-center">

            <p className="text-zinc-500">
              Already have an account?{" "}

              <Link
                href="/login"
                className="text-emerald-600 hover:text-emerald-700 font-semibold transition"
              >
                Login
              </Link>

            </p>

          </div>
        </div>
      </section>
    </main>
  );
}
