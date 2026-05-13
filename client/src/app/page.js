"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        min-h-[calc(100vh-90px)]
        flex
        items-center
        justify-center
        px-5
        sm:px-8
        md:px-12
        py-16
        bg-gradient-to-br
        from-black
        via-black
        to-zinc-800
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          inset-0
          opacity-40
          pointer-events-none
        "
      >
        <div
          className="
            absolute
            top-[-120px]
            right-[-120px]
            w-[420px]
            h-[420px]
            rounded-full
            bg-green-400/20
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-[-160px]
            left-[-120px]
            w-[420px]
            h-[420px]
            rounded-full
            bg-emerald-500/10
            blur-3xl
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          text-center
          w-full
          max-w-6xl
          mx-auto
        "
      >

        {/* TITLE */}
        <h1
          className="
            text-white
            font-black
            tracking-tight
            leading-[0.95]
            text-[52px]
            sm:text-[72px]
            md:text-[100px]
            lg:text-[130px]
          "
        >
          Kharchology
        </h1>

        {/* SUBTITLE */}
        <p
          className="
            mt-6
            text-gray-400
            leading-relaxed
            max-w-4xl
            text-[18px]
            sm:text-[22px]
            md:text-[28px]
          "
        >
          Decode your spending patterns and build smarter
          financial habits.
        </p>

        {/* QUOTE BOX */}
        <div
          className="
            mt-10
            w-full
            max-w-3xl
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            px-6
            py-5
            shadow-2xl
          "
        >
          <p
            className="
              text-green-400
              italic
              leading-relaxed
              text-[18px]
              sm:text-[22px]
              md:text-[28px]
            "
          >
            “Track your expenses before they track your future.”
          </p>
        </div>

        {/* BUTTON */}
        <Link href="/login">
          <button
            className="
              mt-12
              bg-green-400
              hover:bg-green-300
              text-black
              font-bold
              rounded-2xl
              transition-all
              duration-300
              hover:scale-105
              shadow-lg
              px-8
              py-4
              text-[18px]
              sm:text-[20px]
            "
          >
            Start Tracking
          </button>
        </Link>

      </div>
    </section>
  );
}
