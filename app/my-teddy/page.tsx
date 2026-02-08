import type { Metadata } from "next";
import NextButton from "@/components/NextButton";
import TeddyAnimationCarousel from "@/components/TeddyAnimationCarousel";
import SetFavicon from "@/components/SetFavicon";

export const metadata: Metadata = {
  title: "My Teddy",
  description: "Teddy Day - A warm embrace of comfort and cuddles",
};

const floatingTeddies = [
  { left: "8%", delay: "0s" },
  { left: "20%", delay: "0.5s" },
  { left: "35%", delay: "1s" },
  { left: "50%", delay: "1.5s" },
  { left: "65%", delay: "0.8s" },
  { left: "80%", delay: "1.2s" },
];

export default function MyTeddyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#d4a574] via-[#e8c5a5] to-[#f5e6d3] relative overflow-hidden">
      <SetFavicon emoji="🧸" title="My Teddy" />
      {/* Floating teddy bears */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingTeddies.map((item, index) => (
          <div
            key={`${item.left}-${index}`}
            className="absolute text-4xl sm:text-5xl animate-teddy-float"
            style={{ left: item.left, animationDelay: item.delay }}
          >
            🧸
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center">
        <div className="space-y-3 mb-8 animate-fade-in">
          <p className="text-xs sm:text-sm text-[#8b6f47] tracking-[0.35em] uppercase font-semibold">
            Teddy Day • Feb 10
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#6b4423] drop-shadow-md">
            My Teddy
          </h1>
          <p className="text-base sm:text-lg text-[#a0826d] max-w-xl mx-auto">
            You are my comfort, my cuddle, my forever warmth. <span className="inline-block text-4xl animate-heart-float">🧸</span>
          </p>
        </div>

        <div className="relative w-full max-w-4xl bg-white/20 backdrop-blur-md rounded-3xl border border-[#d4a574]/50 shadow-2xl px-6 sm:px-10 py-8">
          <div className="grid gap-8 sm:grid-cols-2 items-center">
            <div className="space-y-4 text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#6b4423]">
                A cuddle so warm
              </h2>
              <p className="text-[#a0826d] leading-relaxed">
                In your arms, I find comfort. In your presence, I find home. You are my softness in a hard world, my teddy in the night.
              </p>
              <div className="flex items-center gap-3 text-3xl">
                <span className="animate-teddy-hug">🧸</span>
                <span className="animate-teddy-hug">💕</span>
                <span className="animate-teddy-hug">🤗</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="text-6xl sm:text-7xl animate-teddy-bounce">
                🧸
              </div>
              <div className="text-center">
                <p className="text-[#a0826d] text-sm sm:text-base mb-2">
                  Soft as teddy fur, warm as love
                </p>
                <div className="flex justify-center gap-4 text-3xl">
                  <span className="animate-pulse">🧸</span>
                  <span className="animate-pulse" style={{ animationDelay: "0.3s" }}>
                    🧸
                  </span>
                  <span className="animate-pulse" style={{ animationDelay: "0.6s" }}>
                    🧸
                  </span>
                </div>
              </div>
            </div>
          </div>

            {/* Milk and Mocha Animation Carousel */}
          <TeddyAnimationCarousel />

          <div className="mt-8 flex justify-center gap-3 text-3xl sm:text-4xl">
            <span className="animate-teddy-sway">🧸</span>
            <span className="animate-teddy-sway" style={{ animationDelay: "0.3s" }}>
              💕
            </span>
            <span className="animate-teddy-sway" style={{ animationDelay: "0.6s" }}>
              🧸
            </span>
            <span className="animate-teddy-sway" style={{ animationDelay: "0.9s" }}>
              💕
            </span>
            <span className="animate-teddy-sway" style={{ animationDelay: "1.2s" }}>
              🧸
            </span>
          </div>

          <p className="mt-6 text-[#a0826d] text-base sm:text-lg italic">
            &ldquo;Hold me close, never let go&rdquo;
          </p>
        </div>

        <NextButton
          hideBetween={{ start: new Date(2026, 1, 6), end: new Date(2026, 1, 10) }}
          destination="/my-promise"
        />
      </div>
    </main>
  );
}
