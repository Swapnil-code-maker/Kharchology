import FinancialThought from "./FinancialThought";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-5
        sm:px-8
        pt-16
        sm:pt-24
        md:pt-28
        pb-20
        min-h-[88vh]
        overflow-hidden
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
            top-[-120px]
            right-[-120px]
            w-[420px]
            h-[420px]
            rounded-full
            bg-emerald-500/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-[-150px]
            left-[-100px]
            w-[350px]
            h-[350px]
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
          flex
          flex-col
          items-center
          w-full
        "
      >

        {/* TITLE */}

        <h1
          className="
            text-[58px]
            sm:text-[82px]
            md:text-[110px]
            lg:text-[120px]
            xl:text-[135px]
            leading-[0.92]
            font-extrabold
            tracking-tight
            text-white
            mb-6
          "
        >
          Kharchology
        </h1>

        {/* SUBTITLE */}

        <p
          className="
            text-[18px]
            sm:text-[22px]
            md:text-[26px]
            lg:text-[30px]
            leading-relaxed
            text-zinc-400
            mb-10
            max-w-[92%]
            sm:max-w-3xl
          "
        >
          Decode your spending patterns
          and build smarter financial habits.
        </p>

        {/* FINANCIAL THOUGHT */}

        <div
          className="
            w-full
            max-w-[92%]
            sm:max-w-2xl
            md:max-w-3xl
            mb-10
          "
        >
          <FinancialThought />
        </div>

        {/* BUTTON */}

        <Link
          href="/login"

          className="
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
            inline-block
          "
        >
          Start Tracking
        </Link>

      </div>

    </section>
  );
}
