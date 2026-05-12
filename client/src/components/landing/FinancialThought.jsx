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

  const [currentThought, setCurrentThought] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentThought((prev) =>
        (prev + 1) % thoughts.length
      );

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 max-w-2xl shadow-2xl">

      <p className="text-emerald-400 italic text-xl text-center transition-all duration-500">
        “{thoughts[currentThought]}”
      </p>

    </div>
  );
}