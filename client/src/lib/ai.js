const AI_BASE_URL =
  "https://kharchology-api.onrender.com";

export async function getPrediction(
  expenses,
  budget = 0
) {

  try {

    const response =
      await fetch(
        `${AI_BASE_URL}/predict`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({

            expenses,

            budget:
              Number(budget)
          }),
        }
      );

    if (!response.ok) {

      throw new Error(
        "AI request failed"
      );
    }

    return await response.json();

  } catch (error) {

    console.error(
      "AI Engine Error:",
      error
    );

    return null;
  }
}
