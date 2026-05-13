import FinancialThought from "./FinancialThought";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-5
        sm:px-8
        pt-20
        sm:pt-28
        md:pt-32
        pb-20
        min-h-[85vh]
      "
    >

      {/* TITLE */}

      <h1
        className="
          text-[58px]
          sm:text-[90px]
          md:text-[120px]
          lg:text-[150px]
          leading-none
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
          md:text-[30px]
          leading-relaxed
          text-zinc-400
          mb-10
          max-w-[92%]
          sm:max-w-2xl
          md:max-w-4xl
        "
      >
        Decode your spending patterns
        and build smarter financial habits.
      </p>

      {/* FINANCIAL THOUGHT */}

      <FinancialThought />

      {/* BUTTON */}

      <Link
        href="/login"

        className="
          mt-10
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

    </section>
  );
}
