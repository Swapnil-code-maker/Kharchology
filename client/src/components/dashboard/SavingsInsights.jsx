"use client";

import {
  PiggyBank,
  Wallet,
  TrendingUp,
  CalendarDays,
} from "lucide-react";

export default function SavingsInsights({
  expenses = [],
  budget = 0,
}) {

  // =========================================
  // TOTAL SPENT
  // =========================================

  const totalSpent =
    expenses.reduce(
      (sum, expense) =>
        sum +
        Number(
          expense.amount || 0
        ),
      0
    );

  // =========================================
  // SAVINGS
  // =========================================

  const remainingBudget =
    Math.max(
      budget - totalSpent,
      0
    );

  // =========================================
  // SAVINGS RATE
  // =========================================

  const savingsRate =
    budget > 0
      ? Math.round(
          (remainingBudget /
            budget) *
            100
        )
      : 0;

  // =========================================
  // CURRENT MONTH SPEND
  // =========================================

  const currentMonth =
    new Date().getMonth();

  const currentYear =
    new Date().getFullYear();

  const monthlySpend =
    expenses
      .filter((expense) => {

        if (!expense.date)
          return false;

        const expenseDate =
          new Date(
            expense.date
          );

        return (
          expenseDate.getMonth() ===
            currentMonth &&

          expenseDate.getFullYear() ===
            currentYear
        );
      })
      .reduce(
        (sum, expense) =>
          sum +
          Number(
            expense.amount || 0
          ),
        0
      );

  // =========================================
  // DAILY AVERAGE
  // =========================================

  const currentDay =
    new Date().getDate();

  const dailyAverage =
    monthlySpend > 0
      ? Math.round(
          monthlySpend /
            currentDay
        )
      : 0;

  // =========================================
  // BUDGET UTILIZATION
  // =========================================

  const budgetUsage =
    budget > 0
      ? Math.min(
          Math.round(
            (monthlySpend /
              budget) *
              100
          ),
          100
        )
      : 0;

  // =========================================
  // METRICS
  // =========================================

  const metrics = [

    {
      label:
        "Remaining Budget",

      value:
        budget > 0
          ? `₹${remainingBudget.toLocaleString()}`
          : "No Budget",

      subtext:
        budget > 0
          ? `Out of ₹${budget.toLocaleString()}`
          : "Monthly budget not configured",

      icon:
        PiggyBank,

      accent:
        "#16A34A",

      bg:
        "#DCFCE7",
    },

    {
      label:
        "Savings Rate",

      value:
        `${savingsRate}%`,

      subtext:
        "Remaining budget ratio",

      icon:
        Wallet,

      accent:
        "#2563EB",

      bg:
        "#DBEAFE",
    },

    {
      label:
        "Budget Utilization",

      value:
        `${budgetUsage}%`,

      subtext:
        "Current month usage",

      icon:
        TrendingUp,

      accent:
        "#F59E0B",

      bg:
        "#FEF3C7",
    },

    {
      label:
        "Daily Spend Average",

      value:
        `₹${dailyAverage}`,

      subtext:
        "Average daily spending",

      icon:
        CalendarDays,

      accent:
        "#8B5CF6",

      bg:
        "#EDE9FE",
    },
  ];

  return (

    <div
      className="
        bg-white
        border
        border-gray-200
        rounded-[28px]
        p-5
        sm:p-7
        shadow-sm
      "
    >

      {/* HEADER */}

      <div className="mb-7">

        <p
          className="
            text-[12px]
            font-semibold
            text-green-600
            uppercase
            tracking-[0.12em]
            mb-2
          "
        >
          Savings Analytics
        </p>

        <h2
          className="
            text-[32px]
            sm:text-[38px]
            leading-tight
            font-bold
            tracking-tight
            text-gray-900
          "
        >
          Budget Overview
        </h2>

        <p
          className="
            mt-3
            text-[15px]
            sm:text-[16px]
            text-gray-500
            leading-7
            max-w-[700px]
          "
        >
          Monitor savings efficiency,
          budget usage, and spending
          activity using realtime
          transaction data.
        </p>

      </div>

      {/* GRID */}

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-4
        "
      >

        {metrics.map(

          ({
            label,
            value,
            subtext,
            icon: Icon,
            accent,
            bg,
          }) => (

            <div
              key={label}

              className="
                bg-gray-50
                border
                border-gray-200
                rounded-[24px]
                p-5
                sm:p-6
              "
            >

              {/* ICON */}

              <div
                style={{
                  background: bg,
                }}

                className="
                  w-[54px]
                  h-[54px]
                  rounded-[16px]
                  flex
                  items-center
                  justify-center
                  mb-5
                "
              >

                <Icon
                  size={24}
                  color={accent}
                />

              </div>

              {/* LABEL */}

              <p
                className="
                  text-[13px]
                  text-gray-500
                  mb-3
                "
              >

                {label}

              </p>

              {/* VALUE */}

              <h3
                className="
                  text-[32px]
                  sm:text-[36px]
                  leading-tight
                  font-bold
                  tracking-tight
                  text-gray-900
                  break-words
                "
              >

                {value}

              </h3>

              {/* SUBTEXT */}

              <p
                className="
                  mt-3
                  text-[14px]
                  text-gray-500
                  leading-6
                "
              >

                {subtext}

              </p>

            </div>

          )
        )}

      </div>

    </div>
  );
}