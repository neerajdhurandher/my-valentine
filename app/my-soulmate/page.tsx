import type { Metadata } from "next";
import NextButton from "@/components/NextButton";
import SetFavicon from "@/components/SetFavicon";

export const metadata: Metadata = {
  title: "My Soulmate",
  description: "Propose Day - A romantic proposal scene with rose petals",
};

const petals = [
  { left: "8%", delay: "0s", duration: "9s" },
  { left: "18%", delay: "1s", duration: "10s" },
  { left: "28%", delay: "2s", duration: "11s" },
  { left: "38%", delay: "0.5s", duration: "9.5s" },
  { left: "48%", delay: "1.5s", duration: "10.5s" },
  { left: "58%", delay: "2.5s", duration: "9s" },
  { left: "68%", delay: "1.2s", duration: "10.8s" },
  { left: "78%", delay: "2.2s", duration: "11.2s" },
  { left: "88%", delay: "0.8s", duration: "9.8s" },
];

export default function MySoulmatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-pink-100 to-rose-200 relative overflow-hidden">
      <SetFavicon emoji="💍" title="My Soulmate" />
      {/* Light pink rose petals shower */}}
      <div className="absolute inset-0 pointer-events-none">
        {petals.map((petal, index) => (
          <div
            key={`${petal.left}-${index}`}
            className="absolute top-0 text-3xl sm:text-4xl animate-petal-fall"
            style={{
              left: petal.left,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
            }}
          >
            🌸
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center">
        {/* Header */}
        <div className="space-y-3 mb-10 animate-fade-in">
          <p className="text-sm sm:text-base text-rose-700 tracking-[0.3em] uppercase">
            Propose Day • Feb 8
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-rose-800 drop-shadow-md">
            My Soulmate
          </h1>
          <p className="text-base sm:text-lg text-rose-700 max-w-xl mx-auto">
            A moment where hearts whisper “yes” and love begins forever.
          </p>
        </div>

        {/* Proposal scene */}
        <div className="relative w-full max-w-3xl bg-white/70 backdrop-blur-md rounded-3xl border border-rose-200 shadow-2xl px-6 sm:px-10 py-10">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl animate-heart-float">
            💗
          </div>

          <div className="flex items-center justify-center gap-8 sm:gap-16">
            {/* Boy proposing */}
            <div className="flex flex-col items-center animate-propose-bounce">
              <div className="text-6xl sm:text-7xl">🧎‍♂️</div>
              <div className="mt-2 text-xs sm:text-sm text-rose-600 font-semibold tracking-wide">
                Will you
              </div>
            </div>

            {/* Ring */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-rose-300 bg-white/80 flex items-center justify-center animate-ring-glow">
                <span className="text-2xl">💍</span>
              </div>
              <div className="mt-3 text-sm text-rose-700 font-semibold">
                Be mine?
              </div>
            </div>

            {/* Girl */}
            <div className="flex flex-col items-center animate-sway">
              <div className="text-6xl sm:text-7xl">👩‍❤️‍👨</div>
              <div className="mt-2 text-xs sm:text-sm text-rose-600 font-semibold tracking-wide">
                Always
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4 text-3xl sm:text-4xl animate-pulse">
            <span>🌹</span>
            <span>✨</span>
            <span>💕</span>
            <span>✨</span>
            <span>🌹</span>
          </div>

          <p className="mt-6 text-rose-700 text-base sm:text-lg">
            In this shower of roses, I promise a lifetime of love, laughter, and forever.
          </p>

          <button className="mt-8 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Say Yes 💖
          </button>

          <NextButton
            hideBetween={{
              start: new Date(2026, 1, 6),
              end: new Date(2026, 1, 8),
            }}
            destination="/my-chocolate"
          />
        </div>
      </div>
    </main>
  );
}
