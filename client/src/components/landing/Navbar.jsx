import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-6">
      
      <div className="flex items-center gap-4">
        
        <Image
          src="/logo/Kharchology-logo.png"
          alt="Kharchology Logo"
          width={50}
          height={50}
          className="rounded-xl"
        />

        <div>
          <h1 className="text-2xl font-bold text-white">
            Kharchology
          </h1>

          <p className="text-sm text-emerald-400">
            Expense Analytics
          </p>
        </div>

      </div>

      <div className="flex gap-4 items-center">
        
        <Link
  href="/login"
  className="text-zinc-400 hover:text-white transition"
>
  Login
</Link>

        <Link
  href="/register"
  className="bg-emerald-500 hover:bg-emerald-600 transition-all hover:scale-105 px-5 py-2 rounded-xl text-black font-semibold shadow-lg"
>
  Get Started
</Link>

      </div>

    </nav>
  );
}