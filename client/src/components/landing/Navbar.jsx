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
        px-5
        sm:px-8
        py-5
        gap-4
        flex-wrap
      "
    >

      {/* LEFT */}

      <div
        className="
          flex
          items-center
          gap-4
          min-w-0
        "
      >

        <Image
          src="/logo/Kharchology-logo.png"
          alt="Kharchology Logo"
          width={50}
          height={50}
          className="rounded-xl"
        />

        <div className="min-w-0">

          <h1
            className="
              text-[22px]
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
              text-[13px]
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
          gap-3
          sm:gap-4
          items-center
          flex-wrap
          justify-end
        "
      >

        <Link
          href="/login"

          className="
            text-zinc-400
            hover:text-white
            transition
            text-sm
            sm:text-base
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
            py-2
            rounded-xl
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
