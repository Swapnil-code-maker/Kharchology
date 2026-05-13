"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  Bot,
  Send,
  Sparkles,
  X,
} from "lucide-react";

export default function AIChatPanel({
  expenses = [],
  budget = 0,
}) {

  const [open, setOpen] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [messages, setMessages] =
    useState([
      {
        role: "assistant",
        text:
          "Hey, I'm KAI. Ask me about your spending, forecasts, savings, or financial activity.",
      },
    ]);

  useEffect(() => {

    function handleOpenKAI() {

      setOpen(true);
    }

    window.addEventListener(
      "open-kai",
      handleOpenKAI
    );

    return () => {

      window.removeEventListener(
        "open-kai",
        handleOpenKAI
      );
    };

  }, []);

  async function sendMessage() {

    if (!message.trim()) {
      return;
    }

    const userMessage = {
      role: "user",
      text: message,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    const currentMessage =
      message;

    setMessage("");

    try {

      const response =
await fetch(
  "https://kharchology-api.onrender.com/chat",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              message:
                currentMessage,

              expenses,

              budget,
            }),
          }
        );

      const data =
        await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            data.response ||
            "No response generated.",
        },
      ]);

    } catch {

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            "Unable to connect to AI engine.",
        },
      ]);

    }
  }

  return (
    <>
      {/* FLOATING BUTTON */}

      {

        !open && (

          <button

            onClick={() =>
              setOpen(true)
            }

            className="
              fixed
              bottom-4
              right-4
              sm:bottom-6
              sm:right-6
              z-[9999]
              w-[66px]
              h-[66px]
              sm:w-[74px]
              sm:h-[74px]
              rounded-[24px]
              sm:rounded-[28px]
              flex
              items-center
              justify-center
              shadow-2xl
              border
              border-white/20
              overflow-hidden
            "

            style={{

              background:
                "linear-gradient(135deg,#8FE388,#60A5FA)",

              boxShadow:
                "0 18px 50px rgba(96,165,250,0.28)",
            }}
          >

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg,rgba(255,255,255,0.22),transparent)",
              }}
            />

            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                relative
              "
            >

              <Sparkles
                size={18}
                color="#07111F"
              />

              <span
                className="
                  text-[10px]
                  sm:text-[11px]
                  font-black
                  tracking-wide
                  text-slate-900
                "
              >
                KAI
              </span>

            </div>

          </button>

        )

      }

      {/* BACKDROP */}

      {

        open && (

          <div

            onClick={() =>
              setOpen(false)
            }

            className="
              fixed
              inset-0
              z-[9997]
              backdrop-blur-md
            "

            style={{
              background:
                "rgba(5,10,18,0.45)",
            }}
          />

        )

      }

      {/* WORKSPACE */}

      {

        open && (

          <div

            className="
              fixed
              inset-x-2
              bottom-2
              top-2
              sm:top-[50%]
              sm:right-8
              sm:left-auto
              z-[9998]
              w-auto
              sm:w-[430px]
              h-auto
              sm:h-[82vh]
              rounded-[28px]
              sm:rounded-[34px]
              overflow-hidden
              border
              border-white/20
              flex
              flex-col
            "

            style={{

              transform:
                window.innerWidth >= 640
                  ? "translateY(-50%)"
                  : "none",

              background:
                "linear-gradient(180deg,rgba(227,243,237,0.96),rgba(221,235,242,0.95))",

              backdropFilter:
                "blur(28px)",

              boxShadow:
                "0 40px 120px rgba(0,0,0,0.35)",
            }}
          >

            {/* GLOW */}

            <div
              style={{
                position:
                  "absolute",

                width: 240,

                height: 240,

                borderRadius:
                  "999px",

                background:
                  "#8FE388",

                filter:
                  "blur(90px)",

                opacity: 0.16,

                top: -60,

                left: -80,
              }}
            />

            <div
              style={{
                position:
                  "absolute",

                width: 220,

                height: 220,

                borderRadius:
                  "999px",

                background:
                  "#60A5FA",

                filter:
                  "blur(90px)",

                opacity: 0.18,

                bottom: -80,

                right: -60,
              }}
            />

            {/* HEADER */}

            <div
              className="
                relative
                z-10
                px-4
                sm:px-7
                pt-5
                sm:pt-7
                pb-4
                sm:pb-5
                border-b
              "

              style={{
                borderColor:
                  "rgba(15,23,42,0.08)",
              }}
            >

              <div
                className="
                  flex
                  items-start
                  justify-between
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    sm:gap-4
                  "
                >

                  <div

                    className="
                      w-[52px]
                      h-[52px]
                      sm:w-[58px]
                      sm:h-[58px]
                      rounded-[18px]
                      sm:rounded-[22px]
                      flex
                      items-center
                      justify-center
                    "

                    style={{

                      background:
                        "linear-gradient(135deg,#DDF8D2,#BFE4FF)",

                      boxShadow:
                        "0 10px 30px rgba(96,165,250,0.18)",
                    }}
                  >

                    <Bot
                      size={24}
                      color="#1E293B"
                    />

                  </div>

                  <div>

                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing:
                          "0.22em",
                        textTransform:
                          "uppercase",
                        color:
                          "#4B5563",
                        marginBottom: 4,
                      }}
                    >
                      Kharchology AI
                    </div>

                    <h2
                      style={{
                        fontSize:
                          window.innerWidth < 640
                            ? 38
                            : 48,

                        lineHeight: 1,

                        fontWeight: 900,

                        color:
                          "#07111F",

                        letterSpacing:
                          "-0.06em",
                      }}
                    >
                      KAI
                    </h2>

                  </div>

                </div>

                <button

                  onClick={() =>
                    setOpen(false)
                  }

                  className="
                    w-10
                    h-10
                    sm:w-11
                    sm:h-11
                    rounded-xl
                    sm:rounded-2xl
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                  "

                  style={{
                    background:
                      "rgba(255,255,255,0.42)",
                  }}
                >

                  <X
                    size={20}
                    color="#07111F"
                  />

                </button>

              </div>

            </div>

            {/* CHAT */}

            <div
              className="
                relative
                z-10
                flex-1
                overflow-y-auto
                px-4
                sm:px-6
                py-4
                sm:py-5
                flex
                flex-col
                gap-4
                sm:gap-5
              "
            >

              {

                messages.map(
                  (msg, index) => (

                    <div

                      key={index}

                      className={

                        msg.role ===
                        "user"

                          ? "flex justify-end"

                          : "flex justify-start"
                      }
                    >

                      <div

                        className="
                          max-w-[88%]
                          sm:max-w-[85%]
                          rounded-[24px]
                          sm:rounded-[28px]
                          px-4
                          sm:px-5
                          py-3
                          sm:py-4
                          break-words
                        "

                        style={{

                          background:

                            msg.role ===
                            "user"

                              ? "linear-gradient(135deg,#CFF3D0,#BFDFFF)"

                              : "rgba(255,255,255,0.45)",

                          color:
                            "#0F172A",

                          lineHeight:
                            1.8,

                          fontSize:
                            window.innerWidth < 640
                              ? 15
                              : 16,

                          boxShadow:
                            "0 10px 24px rgba(15,23,42,0.06)",

                          border:
                            "1px solid rgba(255,255,255,0.38)",
                        }}
                      >

                        {msg.text}

                      </div>

                    </div>

                  )
                )

              }

            </div>

            {/* INPUT */}

            <div

              className="
                relative
                z-10
                p-3
                sm:p-5
                border-t
              "

              style={{
                borderColor:
                  "rgba(15,23,42,0.08)",
              }}
            >

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <input

                  value={message}

                  onChange={(e) =>
                    setMessage(
                      e.target.value
                    )
                  }

                  onKeyDown={(e) => {

                    if (
                      e.key ===
                      "Enter"
                    ) {

                      sendMessage();
                    }
                  }}

                  placeholder="Ask KAI about your spending..."

                  className="
                    flex-1
                    h-[56px]
                    sm:h-[64px]
                    rounded-[20px]
                    sm:rounded-[24px]
                    px-5
                    sm:px-6
                    text-[15px]
                    sm:text-[16px]
                    outline-none
                    min-w-0
                  "

                  style={{

                    background:
                      "rgba(255,255,255,0.48)",

                    color:
                      "#07111F",

                    border:
                      "1px solid rgba(255,255,255,0.4)",
                  }}
                />

                <button

                  onClick={
                    sendMessage
                  }

                  className="
                    w-[56px]
                    h-[56px]
                    sm:w-[64px]
                    sm:h-[64px]
                    rounded-[20px]
                    sm:rounded-[24px]
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                  "

                  style={{

                    background:
                      "linear-gradient(135deg,#8FE388,#60A5FA)",

                    boxShadow:
                      "0 15px 35px rgba(96,165,250,0.24)",
                  }}
                >

                  <Send
                    size={18}
                    color="#07111F"
                  />

                </button>

              </div>

            </div>

          </div>

        )

      }

    </>
  );
}
