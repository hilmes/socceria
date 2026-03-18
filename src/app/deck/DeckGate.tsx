"use client";

import { useState, useEffect, useRef, FormEvent } from "react";

interface DeckGateProps {
  onSuccess: (viewerEmail: string) => void;
}

type Step = "email" | "loading" | "email_sent" | "verifying" | "verify_failed";

export default function DeckGate({ onSuccess }: DeckGateProps) {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<Step>("email");
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(60);
  const inputRef = useRef<HTMLInputElement>(null);

  // On mount — check for ?verify= param (magic link click-through)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("verify");
    if (!code) return;

    setStep("verifying");
    fetch("/api/deck/gate/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.valid) {
          // Clean URL
          window.history.replaceState({}, "", window.location.pathname);
          onSuccess(data.viewerEmail);
        } else {
          setError(data.error || "Link expired.");
          setStep("verify_failed");
        }
      })
      .catch(() => {
        setStep("verify_failed");
        setError("Something went wrong.");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Countdown timer for email_sent state
  useEffect(() => {
    if (step !== "email_sent") return;
    setCountdown(60);
    const t = setInterval(
      () =>
        setCountdown((c) => {
          if (c <= 1) {
            clearInterval(t);
            return 0;
          }
          return c - 1;
        }),
      1000
    );
    return () => clearInterval(t);
  }, [step]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStep("loading");
    setError("");

    try {
      const res = await fetch("/api/deck/gate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.status === 429 || data.status === "rate_limited") {
        setStep("email_sent");
      } else if (data.status === "email_sent") {
        setStep("email_sent");
      } else {
        setError(data.error || "Something went wrong.");
        setStep("email");
      }
    } catch {
      setError("Something went wrong.");
      setStep("email");
    }
  };

  const renderContent = () => {
    if (step === "email" || step === "loading") {
      return (
        <>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm flex flex-col items-center gap-4"
          >
            <input
              ref={inputRef}
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              placeholder="your@email.com"
              disabled={step === "loading"}
              required
              className="w-full px-4 py-3 bg-transparent border border-white/30 text-white
                         placeholder:text-white/30 text-center text-sm tracking-wide
                         focus:outline-none focus:border-white/60
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transition-colors rounded-none"
              autoComplete="email"
              autoFocus
            />

            <button
              type="submit"
              disabled={step === "loading" || !email.trim()}
              className="w-full py-3 text-white text-xs tracking-widest uppercase font-medium
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transition-all duration-200 hover:brightness-110"
              style={{ backgroundColor: "#C75B3B" }}
            >
              {step === "loading" ? (
                <span className="inline-flex items-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="opacity-25"
                    />
                    <path
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      fill="currentColor"
                      className="opacity-75"
                    />
                  </svg>
                  SENDING
                </span>
              ) : (
                "SEND ME THE LINK"
              )}
            </button>
          </form>

          {error && (
            <p className="mt-4 text-red-400/80 text-xs tracking-wide text-center">
              {error}
            </p>
          )}
        </>
      );
    }

    if (step === "email_sent") {
      return (
        <div className="w-full max-w-sm flex flex-col items-center gap-6">
          <h2 className="text-white text-lg tracking-widest uppercase font-medium">
            Check Your Email
          </h2>
          <p className="text-white/60 text-sm text-center leading-relaxed">
            We sent a link to{" "}
            <span className="text-white/90 font-medium">{email}</span>
          </p>

          <button
            onClick={(e) => {
              if (countdown > 0) return;
              handleSubmit(e as unknown as FormEvent);
            }}
            disabled={countdown > 0}
            className="w-full py-3 text-white text-xs tracking-widest uppercase font-medium
                       disabled:opacity-40 disabled:cursor-not-allowed
                       transition-all duration-200 hover:brightness-110 border border-white/30"
            style={
              countdown === 0
                ? { backgroundColor: "#C75B3B", borderColor: "transparent" }
                : {}
            }
          >
            {countdown > 0 ? `Resend in ${countdown}s` : "RESEND LINK"}
          </button>

          <p className="text-white/30 text-[11px] tracking-wide text-center">
            Link expires in 15 minutes · Check your spam folder
          </p>
        </div>
      );
    }

    if (step === "verifying") {
      return (
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-white text-lg tracking-widest uppercase font-medium animate-pulse">
            Verifying...
          </h2>
        </div>
      );
    }

    if (step === "verify_failed") {
      return (
        <div className="w-full max-w-sm flex flex-col items-center gap-6">
          <p className="text-red-400/80 text-sm tracking-wide text-center">
            {error || "Link expired or already used."}
          </p>
          <button
            onClick={() => {
              setStep("email");
              setError("");
            }}
            className="w-full py-3 text-white text-xs tracking-widest uppercase font-medium
                       transition-all duration-200 hover:brightness-110"
            style={{ backgroundColor: "#C75B3B" }}
          >
            TRY AGAIN
          </button>
        </div>
      );
    }

    return null;
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-black">
      {/* Dark background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        {/* Logo */}
        <div className="inline-block mb-8">
          <img
            src="/socceria-logo-white.svg"
            alt="Socceria"
            className="w-[70vw] md:w-[45vw] max-w-xl h-auto drop-shadow-lg"
          />
        </div>

        {/* Tagline */}
        <span className="text-xs text-white/50 tracking-widest uppercase font-sans mb-12">
          GREENPOINT // BROOKLYN // NYC
        </span>

        {/* Dynamic content area */}
        {renderContent()}

        {/* Confidential notice */}
        <p className="mt-8 text-white/30 text-[10px] tracking-widest uppercase">
          Confidential · Authorized recipients only
        </p>
      </div>
    </main>
  );
}
