"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { VIDEO_ASSETS } from "@/lib/video-assets";
import * as Sentry from "@sentry/nextjs";

interface DeckGateProps {
  recipientName: string | null;
  recipientEmail: string | null;
  onSuccess: (viewerEmail: string, sessionToken: string, recipientName: string | null) => void;
}

type Step = "email" | "loading" | "email_sent" | "verifying" | "verify_failed";

export default function DeckGate({ recipientName, recipientEmail, onSuccess }: DeckGateProps) {
  const [email, setEmail] = useState(recipientEmail ?? "");
  const [step, setStep] = useState<Step>("email");
  const [error, setError] = useState("");
  const [videoReady, setVideoReady] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const inputRef = useRef<HTMLInputElement>(null);

  // Capture forward attribution param on mount — persists through the email verification flow
  const [referredBy] = useState(() => {
    if (typeof window === "undefined") return null;
    const params = new URLSearchParams(window.location.search);
    return params.get("v") || null;
  });

  // Video fade-in — removed delay for immediate playback
  useEffect(() => {
    setVideoReady(true);
  }, []);

  // Highlight: gate_loaded event — fires once on mount
  useEffect(() => {
    Sentry.addBreadcrumb({
      category: 'deck.gate',
      message: 'gate_loaded',
      data: {
        hasRecipientName: !!recipientName,
        hasReferral: typeof window !== 'undefined'
          ? !!new URLSearchParams(window.location.search).get('v')
          : false,
      },
      level: 'info',
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // On mount — check for ?verify= param
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("verify");
    if (!code) return;
    // Capture forward attribution param (?v=<sessionToken> of the person who shared)
    const referredBy = params.get("v") || undefined;
    setStep("verifying");
    fetch("/api/deck/gate/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, referredBy }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.valid) {
          // Highlight: identify viewer + track email_verified
          Sentry.setUser({
            email: data.viewerEmail,
            username: data.recipientName ?? 'unknown',
          });
          Sentry.captureMessage('email_verified', {
            level: 'info',
            extra: {
              isOwner: data.isOwner ?? false,
              isForwarded: !(data.isOwner ?? false),
            },
          });
          window.history.replaceState({}, "", window.location.pathname);
          onSuccess(data.viewerEmail, data.sessionToken, data.recipientName ?? null);
        } else {
          Sentry.addBreadcrumb({ category: 'deck.gate', message: 'gate_verify_failed', data: { error: data.error || 'Link expired.' }, level: 'warning' });
          setError(data.error || "Link expired.");
          setStep("verify_failed");
        }
      })
      .catch(() => {
        Sentry.addBreadcrumb({ category: 'deck.gate', message: 'gate_verify_failed', data: { error: 'network_error' }, level: 'warning' });
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

  // Submit handler
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStep("loading");
    setError("");
    // Track email submission (email value not captured in breadcrumb for privacy)
    Sentry.addBreadcrumb({ category: 'deck.gate', message: 'email_submitted', level: 'info' });
    try {
      const res = await fetch("/api/deck/gate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, referredBy }),
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
    // email / loading — form
    if (step === "email" || step === "loading") {
      return (
        <>
          <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col items-center gap-4">
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
              style={{ backgroundColor: "#D4654A" }}
            >
              {step === "loading" ? (
                <span className="inline-flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                    <path d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" fill="currentColor" className="opacity-75" />
                  </svg>
                  SENDING
                </span>
              ) : (
                "SEND ME THE LINK"
              )}
            </button>
          </form>

          {error && (
            <p className="mt-4 text-red-400/80 text-xs tracking-wide text-center">{error}</p>
          )}
        </>
      );
    }

    // email_sent
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
            style={countdown === 0 ? { backgroundColor: "#D4654A", borderColor: "transparent" } : {}}
          >
            {countdown > 0 ? `Resend in ${countdown}s` : "RESEND LINK"}
          </button>

          <p className="text-white/30 text-[11px] tracking-wide text-center">
            Link expires in 15 minutes · Check your spam folder
          </p>
        </div>
      );
    }

    // verifying
    if (step === "verifying") {
      return (
        <div className="flex flex-col items-center gap-4">
          <h2
            className="text-white text-lg tracking-widest uppercase font-medium animate-pulse"
          >
            Verifying...
          </h2>
        </div>
      );
    }

    // verify_failed
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
            style={{ backgroundColor: "#D4654A" }}
          >
            TRY AGAIN
          </button>
        </div>
      );
    }

    return null;
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Full-screen Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={(el) => {
            if (el) el.play().catch(() => {});
          }}
          onCanPlay={(e) => (e.target as HTMLVideoElement).play().catch(() => {})}
          className="absolute pointer-events-none opacity-100"
          style={{
            width: "200vw",
            height: "200vh",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
          }}
          src={VIDEO_ASSETS.peleBackground}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        {/* Logos (overlapping layout matching deck cover) */}
        <div className="inline-block mb-8">
          <img
            src="/socceria-logo-white.svg"
            alt="Socceria Ramírez"
            className="w-[80vw] md:w-[55vw] max-w-2xl h-auto drop-shadow-lg"
          />
        </div>

        {/* Tagline */}
        <span className="text-xs text-white/50 tracking-widest uppercase font-inter mb-12">
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
