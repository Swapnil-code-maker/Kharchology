import FinancialThought from "./FinancialThought";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        min-h-[90vh]
        flex
        items-center
        justify-center
        overflow-hidden
        px-6
        sm:px-8
        pb-16
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          overflow-hidden
        "
      >

        <div
          className="
            absolute
            top-[-180px]
            right-[-180px]
            w-[500px]
            h-[500px]
            rounded-full
            bg-emerald-500/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-[-220px]
            left-[-140px]
            w-[420px]
            h-[420px]
            rounded-full
            bg-white/5
            blur-3xl
          "
        />

      </div>

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-6xl
          mx-auto
          flex
          flex-col
          items-center
          text-center
        "
      >

        {/* TITLE */}

        <h1
          className="
            text-white
            font-extrabold
            tracking-tight
            leading-[0.92]
            text-[58px]
            sm:text-[84px]
            md:text-[110px]
            lg:text-[125px]
            xl:text-[135px]
          "
        >
          Kharchology
        </h1>

        {/* SUBTITLE */}

        <p
          className="
            mt-6
            text-zinc-400
            leading-relaxed
            text-[18px]
            sm:text-[22px]
            md:text-[28px]
            max-w-3xl
          "
        >
          Decode your spending patterns and
          build smarter financial habits.
        </p>

        {/* QUOTE */}

        <div
          className="
            mt-12
            w-full
            max-w-3xl
          "
        >
          <FinancialThought />
        </div>

        {/* BUTTON */}

        <Link
          href="/login"

          className="
            mt-12
            bg-emerald-500
            hover:bg-emerald-600
            transition-all
            duration-300
            hover:scale-105
            px-8
            sm:px-10
            py-4
            rounded-2xl
            text-black
            text-[18px]
            sm:text-[22px]
            font-bold
            shadow-lg
          "
        >
          Start Tracking
        </Link>

      </div>

    </section>
  );
}
