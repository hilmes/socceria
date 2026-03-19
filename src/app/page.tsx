"use client";

import { useState, useEffect } from "react";

export default function LandingPage() {
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVideoReady(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Full-screen Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={(el) => { if (el) el.play().catch(() => {}); }}
          onCanPlay={(e) => (e.target as HTMLVideoElement).play().catch(() => {})}
          className={`absolute pointer-events-none transition-opacity duration-1000 ${videoReady ? "opacity-100" : "opacity-0"}`}
          style={{
            width: "200vw",
            height: "200vh",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
          }}
          src="https://82kji4cadp9uioad.public.blob.vercel-storage.com/pitch-invading-dog.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Logo — perfectly centered on screen */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <img 
          src="/socceria-logo-white.svg" 
          alt="Socceria" 
          className="w-[80vw] md:w-[65vw] max-w-4xl h-auto drop-shadow-lg"
        />
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-0 inset-x-0 z-10 flex flex-col items-center gap-4 pb-12 md:pb-16">
        <span className="text-xs md:text-sm text-white/50 tracking-widest text-center uppercase">
          GREENPOINT // BROOKLYN // NYC
        </span>
        <a
          href="https://instagram.com/soccerianyc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-white/40 hover:text-white/60 tracking-widest uppercase transition-colors"
        >
          @SOCCERIANYC
        </a>
      </div>
    </main>
  );
}
