import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (

    <nav
      className="
        w-full
        flex
        items-center
        justify-between
        px-4
        sm:px-8
        py-5
      "
    >

      {/* LEFT */}

      <div
        className="
          flex
          items-center
          gap-3
          min-w-0
        "
      >

        <Image
          src="/logo/Kharchology-logo.png"
          alt="Kharchology Logo"
          width={42}
          height={42}
          className="rounded-xl"
        />

        <div className="leading-tight">

          <h1
            className="
              text-[20px]
              sm:text-2xl
              font-bold
              text-white
              truncate
            "
          >
            Kharchology
          </h1>

          <p
            className="
              text-[12px]
              sm:text-sm
              text-emerald-400
            "
          >
            Expense Analytics
          </p>

        </div>

      </div>

      {/* RIGHT */}

      <div
        className="
          flex
          items-center
          gap-3
          shrink-0
        "
      >

        <Link
          href="/login"

          className="
            hidden
            sm:block
            text-zinc-400
            hover:text-white
            transition
          "
        >
          Login
        </Link>

        <Link
          href="/register"

          className="
            bg-emerald-500
            hover:bg-emerald-600
            transition-all
            hover:scale-105
            px-4
            sm:px-5
            py-2.5
            rounded-2xl
            text-black
            text-sm
            sm:text-base
            font-semibold
            shadow-lg
            whitespace-nowrap
          "
        >
          Get Started
        </Link>

      </div>

    </nav>
  );
}
