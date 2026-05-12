from collections import defaultdict

from app.category_intelligence import (
    analyze_categories
)

from app.trend_analysis import (
    analyze_trends
)

from app.burn_rate import (
    analyze_burn_rate
)

from app.gemini_engine import (
    ask_gemini
)


def generate_chat_response(
    message,
    expenses,
    budget=0
):

    msg = message.lower().strip()

    # =========================================
    # SIMPLE CONVERSATION HANDLING
    # =========================================

    greetings = [

        "hi",
        "hello",
        "hey",
        "hii",
        "yo"
    ]

    thanks = [

        "thanks",
        "thank you",
        "thx",
        "ty"
    ]

    bye_words = [

        "bye",
        "goodbye",
        "see you"
    ]


    # -----------------------------------------
    # GREETINGS
    # -----------------------------------------

    if msg in greetings:

        return (

            "Hey, I'm KAI — your AI financial "
            "copilot inside Kharchology.\n\n"

            "I can help you analyze spending, "
            "optimize savings, detect risky "
            "financial patterns, and understand "
            "where your money is actually going.\n\n"

            "How can I help you today?"
        )


    # -----------------------------------------
    # THANK YOU
    # -----------------------------------------

    if msg in thanks:

        return (

            "You're welcome. "
            "Your current focus should be "
            "stabilizing spending pace and "
            "reducing unnecessary expenses."
        )


    # -----------------------------------------
    # GOODBYE
    # -----------------------------------------

    if msg in bye_words:

        return (

            "Take care. "
            "KAI will be here whenever you "
            "want to review your finances again."
        )

    # =========================================
    # CATEGORY ANALYSIS
    # =========================================

    category_data = (
        analyze_categories(
            expenses
        )
    )

    total_spent = (
        category_data[
            "total_spent"
        ]
    )

    dominant = (
        category_data[
            "dominant_category"
        ]
    )

    categories = (
        category_data[
            "categories"
        ]
    )

    # =========================================
    # TREND ANALYSIS
    # =========================================

    trend_data = (
        analyze_trends(
            expenses
        )
    )

    # =========================================
    # BURN RATE ANALYSIS
    # =========================================

    burn_rate = (
        analyze_burn_rate(
            expenses,
            budget
        )
    )

    # =========================================
    # EXACT SAVINGS / BUDGET CALCULATIONS
    # =========================================

    calculation_keywords = [

        "remaining budget",
        "budget left",
        "money left",
        "remaining money",
        "remaining balance",
        "how much left",
        "my savings",
        "savings left",
        "budget usage",
        "remaining budget amount"
    ]

    if any(
        keyword in msg
        for keyword in calculation_keywords
    ):

        if budget > 0:

            remaining = max(
                budget - total_spent,
                0
            )

            usage_percent = round(

                (
                    total_spent /
                    budget
                ) * 100,

                1
            )

            return (

                f"You've used "
                f"{usage_percent}% "
                f"of your budget. "
                f"Remaining balance is "
                f"₹{round(remaining, 2)}."
            )

        return (

            "Set a monthly budget "
            "to unlock savings insights."
        )

    # =========================================
    # RISK / BURN RATE ANALYSIS
    # =========================================

    if (

        "risk" in msg
        or "overspending" in msg
        or "burn rate" in msg
        or "exceed budget" in msg
        or "budget risk" in msg
        or "spending pace" in msg
        or "am i safe" in msg
    ):

        if (
            "message" in burn_rate
        ):

            return (
                burn_rate[
                    "message"
                ]
            )

        projected = (
            burn_rate[
                "projected_spending"
            ]
        )

        remaining_projection = (
            burn_rate[
                "remaining_projection"
            ]
        )

        if (
            burn_rate["status"]
            == "risk"
        ):

            return (

                f"Warning: your current "
                f"spending pace may exceed "
                f"your budget by "
                f"₹{abs(remaining_projection):,.2f} "
                f"by month-end."
            )

        return (

            f"Your current spending pace "
            f"appears stable. Projected "
            f"monthly spending is ₹{projected}."
        )

    # =========================================
    # CATEGORY INSIGHTS
    # =========================================

    if (
        "where am i spending" in msg
        or "highest spending" in msg
        or "top category" in msg
    ):

        if dominant:

            return (

                f"{dominant['category']} "
                f"is your highest spending "
                f"category at "
                f"{dominant['percentage']}% "
                f"(₹{dominant['amount']})."
            )

        return (
            "Not enough expense "
            "data available yet."
        )

    # =========================================
    # CATEGORY BREAKDOWN
    # =========================================

    if (
        "category" in msg
        or "categories" in msg
        or "top spending" in msg
    ):

        if categories:

            top = categories[:3]

            summary = []

            for item in top:

                summary.append(

                    f"{item['category']} "
                    f"({item['percentage']}%)"
                )

            joined = ", ".join(
                summary
            )

            return (
                f"Top spending categories: "
                f"{joined}."
            )

        return (
            "No category analytics "
            "available yet."
        )

    # =========================================
    # TREND QUESTIONS
    # =========================================

    if (
        "trend" in msg
        or "increase" in msg
        or "decrease" in msg
        or "this month" in msg
        or "last month" in msg
    ):

        if (
            "message" in trend_data
        ):

            return (
                trend_data[
                    "message"
                ]
            )

        overall = (
            trend_data[
                "overall_change_percent"
            ]
        )

        previous_month = (
            trend_data[
                "previous_month"
            ]
        )

        direction = (
            "increased"
            if overall >= 0
            else "decreased"
        )

        response = (

            f"Your spending "
            f"{direction} by "
            f"{abs(overall)}% "
            f"compared to "
            f"{previous_month}."
        )

        category_changes = (
            trend_data[
                "category_changes"
            ]
        )

        if category_changes:

            top_change = (
                category_changes[0]
            )

            response += (

                f" Biggest change: "
                f"{top_change['category']} "
                f"({top_change['change_percent']}%)."
            )

        return response

    # =========================================
    # TOTAL SPENDING
    # =========================================

    if (
        "total spent" in msg
        or "total expenses" in msg
        or "total spending" in msg
    ):

        return (
            f"Your total recorded "
            f"spending is "
            f"₹{total_spent}."
        )

    # =========================================
    # AI FINANCIAL REASONING
    # =========================================

    financial_context = f"""

    You are KAI,
    the premium AI financial copilot
    inside Kharchology.

    Personality:
    - intelligent
    - concise
    - emotionally aware
    - analytical
    - supportive
    - calm

    Rules:
    - Never sound robotic
    - Avoid generic chatbot behavior
    - Avoid repetitive numbers
    - Give actionable advice
    - Use real financial analytics
    - Keep responses concise
    - Sound like a premium fintech AI

    Financial Summary:

    Total Spending:
    ₹{total_spent}

    Budget:
    ₹{budget}

    Dominant Category:
    {dominant['category'] if dominant else "Unknown"}

    Spending Categories:
    {categories}

    Burn Rate:
    {burn_rate}

    Trend Analysis:
    {trend_data}

    User Question:
    {message}
    """

    ai_response = ask_gemini(
        financial_context
    )

    if ai_response:

        return ai_response

    return (

        "KAI AI services are temporarily "
        "unavailable. Financial analytics "
        "and monitoring are still active."
    )