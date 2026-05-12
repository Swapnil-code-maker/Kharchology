import FinancialThought from "./FinancialThought";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 pt-24">

      <h1 className="text-7xl font-extrabold text-white mb-6">
        Kharchology
      </h1>

      <p className="text-2xl text-zinc-400 mb-10 max-w-2xl">
        Decode your spending patterns and build smarter financial habits.
      </p>

      <FinancialThought />

      <Link
  href="/login"
  className="mt-10 bg-emerald-500 hover:bg-emerald-600 transition-all hover:scale-105 px-8 py-4 rounded-2xl text-black text-lg font-bold shadow-lg inline-block"
>
  Start Tracking
</Link>

    </section>
  );
}