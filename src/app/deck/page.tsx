"use client";

import { useState, useEffect } from "react";
import DeckGate from "./DeckGate";

/**
 * /deck — gated investor deck page.
 *
 * On load:
 * 1. Check for existing session cookie via /api/deck/gate/validate
 * 2. If valid → show deck content
 * 3. If not → show DeckGate (email verification flow)
 */
export default function DeckPage() {
  const [state, setState] = useState<
    "checking" | "gated" | "authenticated"
  >("checking");
  const [viewerEmail, setViewerEmail] = useState<string | null>(null);

  useEffect(() => {
    // Check for ?verify= param first — let DeckGate handle it
    const params = new URLSearchParams(window.location.search);
    if (params.get("verify")) {
      setState("gated");
      return;
    }

    // Check existing session cookie
    fetch("/api/deck/gate/validate")
      .then((r) => r.json())
      .then((data) => {
        if (data.valid) {
          setViewerEmail(data.email);
          setState("authenticated");
        } else {
          setState("gated");
        }
      })
      .catch(() => setState("gated"));
  }, []);

  if (state === "checking") {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-pulse text-white/40 text-xs tracking-widest uppercase">
          Loading...
        </div>
      </main>
    );
  }

  if (state === "gated") {
    return (
      <DeckGate
        onSuccess={(email) => {
          setViewerEmail(email);
          setState("authenticated");
        }}
      />
    );
  }

  // Authenticated — show deck content
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <img
            src="/socceria-logo-white.svg"
            alt="Socceria"
            className="w-64 mx-auto mb-6"
          />
          <p className="text-white/40 text-xs tracking-widest uppercase">
            Investor Presentation · Confidential
          </p>
          {viewerEmail && (
            <p className="text-white/20 text-[10px] tracking-wide mt-2">
              Viewing as {viewerEmail}
            </p>
          )}
        </div>

        {/* Deck content placeholder — the parallel agent will build the actual slides */}
        <div className="flex flex-col items-center justify-center min-h-[50vh] border border-white/10 rounded-lg">
          <p className="text-white/30 text-sm tracking-wide">
            Deck content loading...
          </p>
          <p className="text-white/15 text-xs mt-2">
            Slides will be rendered here
          </p>
        </div>
      </div>
    </main>
  );
}
