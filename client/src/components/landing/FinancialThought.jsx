"use client";

import { useEffect, useState } from "react";

const thoughts = [
  "Track your expenses before they track your future.",
  "Financial freedom starts with awareness.",
  "Small savings today create big freedom tomorrow.",
  "Budgeting is telling your money where to go.",
  "Control your money before it controls you."
];

export default function FinancialThought() {

  const [currentThought, setCurrentThought] =
    useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentThought(
        (prev) =>
          (prev + 1) %
          thoughts.length
      );

    }, 4000);

    return () =>
      clearInterval(interval);

  }, []);

  return (

    <div
      className="
        bg-zinc-900/90
        border
        border-zinc-800
        rounded-3xl
        px-5
        sm:px-8
        py-5
        w-full
        max-w-[92%]
        sm:max-w-2xl
        shadow-2xl
        backdrop-blur-xl
      "
    >

      <p
        className="
          text-emerald-400
          italic
          text-[18px]
          sm:text-[22px]
          md:text-[28px]
          text-center
          leading-relaxed
          transition-all
          duration-500
        "
      >
        “{thoughts[currentThought]}”
      </p>

    </div>
  );
}
