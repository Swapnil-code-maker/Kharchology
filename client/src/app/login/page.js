"use client";

import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { loginUser } from "@/lib/auth";

export default function LoginPage() {

  const router = useRouter();

  const [formData, setFormData] =
    useState({
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
      email,
      password,
    } = formData;

    // VALIDATION
    if (
      !email ||
      !password
    ) {
      alert(
        "Please fill all fields."
      );

      return;
    }

    try {

      // FIREBASE LOGIN
      const userCredential =
        await loginUser(
          email,
          password
        );

      console.log(
        userCredential
      );

      alert(
        "Login successful!"
      );

      // REDIRECT
      router.push(
        "/dashboard"
      );

    } catch (error) {

      console.log(error);

      alert(error.message);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex overflow-hidden">

      {/* LEFT SIDE */}
      <section className="hidden lg:flex w-1/2 relative overflow-hidden bg-gradient-to-br from-emerald-950/20 via-black to-zinc-950 px-14 py-12 flex-col justify-evenly">

        {/* Glow */}
        <div className="absolute -top-32 -left-32 w-[460px] h-[460px] bg-emerald-500/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-xl mx-auto">

          {/* Logo + Branding */}
          <div className="flex items-center gap-4 mb-14">

            <Image
              src="/logo/Kharchology-logo.png"
              alt="Kharchology Logo"
              width={60}
              height={60}
              className="rounded-2xl"
            />

            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Kharchology
              </h1>

              <p className="text-emerald-400 text-sm">
                Expense Analytics Platform
              </p>
            </div>

          </div>

          {/* Main Content */}
          <div className="mb-12">

            <h2 className="text-4xl xl:text-5xl font-bold leading-[1.02] tracking-tight mb-8">
              Understand <br />
              Your Money <br />
              Better.
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
              Analyze expenses, detect spending patterns,
              and build smarter financial habits with AI-powered insights.
            </p>

            {/* Divider */}
            <div className="w-24 h-[2px] bg-emerald-500/40 rounded-full mt-8"></div>

          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-5">

            <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-2xl p-5 hover:border-emerald-500/30 transition-all duration-300">

              <h3 className="text-lg font-semibold mb-2">
                Smart Tracking
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed">
                Monitor daily expenses and understand spending habits clearly.
              </p>

            </div>

            <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-2xl p-5 hover:border-emerald-500/30 transition-all duration-300">

              <h3 className="text-lg font-semibold mb-2">
                AI Insights
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed">
                Get intelligent suggestions to improve financial decisions.
              </p>

            </div>

            <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-2xl p-5 hover:border-emerald-500/30 transition-all duration-300">

              <h3 className="text-lg font-semibold mb-2">
                Budget Planning
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed">
                Create smarter monthly budgets and reduce unnecessary spending.
              </p>

            </div>

            <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-2xl p-5 hover:border-emerald-500/30 transition-all duration-300">

              <h3 className="text-lg font-semibold mb-2">
                Secure Analytics
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed">
                Your financial data stays private with secure authentication.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* RIGHT SIDE */}
      <section className="w-full lg:w-1/2 flex items-center justify-center px-8 py-16 bg-gradient-to-br from-black via-zinc-950 to-black">

        <div className="w-full max-w-md bg-zinc-900/70 backdrop-blur-2xl border border-zinc-800 rounded-[32px] p-8 xl:p-10 shadow-2xl">

          {/* Heading */}
          <div className="mb-8 text-center">

            <h1 className="text-5xl font-bold tracking-tight mb-3">
              Welcome Back
            </h1>

            <p className="text-zinc-400">
              Login to continue your financial journey.
            </p>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Email */}
            <div>

              <label className="block text-sm text-zinc-300 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-black/70 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />

            </div>

            {/* Password */}
            <div>

              <label className="block text-sm text-zinc-300 mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full bg-black/70 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />

            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">

              <button
                type="button"
                className="text-sm text-emerald-400 hover:text-emerald-300 transition"
              >
                Forgot Password?
              </button>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 hover:scale-[1.01] text-black font-bold py-4 rounded-2xl shadow-xl"
            >
              Login
            </button>

          </form>

          {/* Register */}
          <div className="mt-7 text-center">

            <p className="text-zinc-400">
              Don’t have an account?{" "}

              <Link
                href="/register"
                className="text-emerald-400 hover:text-emerald-300 font-medium transition"
              >
                Register
              </Link>

            </p>

          </div>

        </div>

      </section>

    </main>
  );
}