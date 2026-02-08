import type { Metadata } from "next";
import SetFavicon from "@/components/SetFavicon";
import NextButton from "@/components/NextButton";

export const metadata: Metadata = {
  title: "My Chocolate",
  description: "Chocolate Day - A sweet celebration of love",
};

const chocolates = [
  { left: "10%", delay: "0s" },
  { left: "22%", delay: "0.4s" },
  { left: "34%", delay: "0.8s" },
  { left: "46%", delay: "0.2s" },
  { left: "58%", delay: "0.6s" },
  { left: "70%", delay: "1s" },
  { left: "82%", delay: "0.3s" },
];

export default function MyChocolatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#3b1f1a] via-[#5a2f26] to-[#8b4a2b] relative overflow-hidden">
      <SetFavicon emoji="🍫" title="My Chocolate" />
      {/* Floating chocolate icons */}
      <div className="absolute inset-0 pointer-events-none">
        {chocolates.map((item, index) => (
          <div
            key={`${item.left}-${index}`}
            className="absolute text-4xl sm:text-5xl animate-choco-float"
            style={{ left: item.left, animationDelay: item.delay }}
          >
            🍫
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center">
        <div className="space-y-3 mb-8 animate-fade-in">
          <p className="text-xs sm:text-sm text-[#f4bd91] tracking-[0.35em] uppercase">
            Chocolate Day • Feb 9
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#ffe4c4] drop-shadow-md">
            My Chocolate
          </h1>
          <p className="text-base sm:text-lg text-[#f7c9a6] max-w-xl mx-auto">
            Sweet as cocoa, warm as love, and always yours. <span className="inline-block text-4xl animate-heart-float">🍫</span>
          </p>
        </div>

        <div className="relative w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-3xl border border-[#f4bd91]/40 shadow-2xl px-6 sm:px-10 py-10">

          <div className="grid gap-8 sm:grid-cols-2 items-center">
            <div className="space-y-4 text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#ffe4c4]">
                A box full of love
              </h2>
              <p className="text-[#f7c9a6] leading-relaxed">
                Every piece is a promise, every bite is a memory. You are my sweetest delight.
              </p>
              <div className="flex items-center gap-3 text-3xl">
                <span className="animate-choco-glow">🍫</span>
                <span className="animate-choco-glow">💝</span>
                <span className="animate-choco-glow">✨</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="relative">
                <svg
                  className="w-44 h-44 sm:w-52 sm:h-52 animate-choco-float"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="20" y="30" width="160" height="140" rx="18" fill="#5a2f26" />
                  <rect x="28" y="38" width="144" height="124" rx="12" fill="#8b4a2b" />
                  <g fill="#c87d4c">
                    <rect x="40" y="52" width="40" height="40" rx="8" />
                    <rect x="84" y="52" width="40" height="40" rx="8" />
                    <rect x="128" y="52" width="40" height="40" rx="8" />
                    <rect x="40" y="98" width="40" height="40" rx="8" />
                    <rect x="84" y="98" width="40" height="40" rx="8" />
                    <rect x="128" y="98" width="40" height="40" rx="8" />
                  </g>
                </svg>
                <svg
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-14 animate-choco-drip"
                  viewBox="0 0 200 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 10H190V40C190 55 175 65 160 65C145 65 135 55 120 55C105 55 95 70 80 70C65 70 55 55 40 55C25 55 10 65 10 40V10Z"
                    fill="#5a2f26"
                  />
                </svg>
              </div>
              <div className="text-[#f7c9a6] text-sm sm:text-base">
                Melting for you 🍫💕
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4 text-3xl sm:text-4xl animate-pulse">
            <span>🍫</span>
            <span>🍓</span>
            <span>✨</span>
            <span>🍫</span>
          </div>

          <div className="mt-10">
            <div className="text-[#f7c9a6] text-sm sm:text-base mb-4">
              A chocolate river flows with sweet surprises...
            </div>
            <div className="relative w-full max-w-3xl mx-auto h-14 sm:h-16 choco-river shadow-lg">
              <div className="choco-stream" />
              <div className="choco-wave" />
              <div className="absolute inset-0 flex items-center justify-between px-6 text-2xl sm:text-3xl">
                <span className="candy-float">🍫</span>
                <span className="candy-float" style={{ animationDelay: "0.6s" }}>🍬</span>
                <span className="candy-float" style={{ animationDelay: "1.2s" }}>🍭</span>
                <span className="candy-float" style={{ animationDelay: "0.9s" }}>🍫</span>
                <span className="candy-float" style={{ animationDelay: "1.5s" }}>🍓</span>
              </div>
            </div>
          </div>
        </div>

        <NextButton
          hideBetween={{ start: new Date(2026, 1, 6), end: new Date(2026, 1, 9) }}
          destination="/my-teddy"
        />
      </div>
    </main>
  );
}
