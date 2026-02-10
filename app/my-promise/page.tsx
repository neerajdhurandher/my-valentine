import type { Metadata } from "next";
import NextButton from "@/components/NextButton";
import SetFavicon from "@/components/SetFavicon";
import PromiseCarousel from "@/components/PromiseCarousel";

export const metadata: Metadata = {
  title: "My Promise",
  description: "Promise Day - A forever commitment of love and trust",
};

const floatingPromises = [
  { left: "5%", delay: "0s" },
  { left: "15%", delay: "0.8s" },
  { left: "25%", delay: "1.6s" },
  { left: "45%", delay: "1.2s" },
  { left: "60%", delay: "2s" },
  { left: "75%", delay: "0.4s" },
  { left: "90%", delay: "1.4s" },
];

export default function MyPromisePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#663399] via-[#7851a9] to-[#e6d5f0] relative overflow-hidden">
      <SetFavicon emoji="🤞" title="My Promise" />
      
      {/* Floating crossed fingers background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {floatingPromises.map((item, index) => (
          <div
            key={`${item.left}-${index}`}
            className="absolute text-5xl sm:text-6xl animate-promise-float"
            style={{ left: item.left, animationDelay: item.delay }}
          >
            🤞
          </div>
        ))}
      </div>

      {/* Animated background orbs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#FFD700] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#F0E68C] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#B76E79] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center">
        <div className="space-y-4 mb-8 animate-fade-in">
          <p className="text-xs sm:text-sm text-[#F0E68C] tracking-[0.35em] uppercase font-semibold">
            Promise Day • Feb 11
          </p>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white drop-shadow-lg">
            A Promise Forever
          </h1>
          <p className="text-lg sm:text-xl text-[#e6d5f0] drop-shadow-md">
            A commitment that transcends time, grows stronger with every moment...
          </p>
        </div>

        {/* Main content card */}
        <div className="relative w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-3xl border border-[#FFD700]/40 shadow-2xl px-6 sm:px-10 py-12">
          {/* Decorative header */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl animate-promise-glow">
            🤞
          </div>

          {/* Promise Carousel */}
          <div className="mb-10">
            <PromiseCarousel />
          </div>

          {/* Promise Certificate Section */}
          <div className="space-y-6">
            <div className="relative bg-gradient-to-r from-[#663399]/20 to-[#FFD700]/20 rounded-2xl border-2 border-[#FFD700]/60 p-8 space-y-4">
              <div className="text-center space-y-3">
                <p className="text-sm text-[#F0E68C] tracking-widest uppercase font-semibold">
                  ✨ My Sacred Promise to You ✨
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto"></div>
              </div>

              <div className="space-y-4 text-center">
                <p className="text-white text-base sm:text-lg leading-relaxed font-light italic">
                  I promise to love you unconditionally, with all the strength and devotion my heart can hold. Through every season of life, I stand by you.
                </p>

                <div className="flex justify-center gap-6 text-4xl">
                  <span className="animate-promise-float" style={{ animationDuration: "3s" }}>💜</span>
                  <span className="animate-promise-float" style={{ animationDuration: "3s", animationDelay: "0.5s" }}>✨</span>
                  <span className="animate-promise-float" style={{ animationDuration: "3s", animationDelay: "1s" }}>🤞</span>
                </div>
              </div>

              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto"></div>
            </div>

            {/* Promise Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#663399]/30 rounded-lg p-4 border border-[#FFD700]/30 hover:border-[#FFD700]/60 transition-all duration-300">
                <p className="text-[#FFD700] font-semibold mb-2">💜 Forever Together</p>
                <p className="text-white/80 text-sm">To walk beside you, in joy and in struggle</p>
              </div>
              <div className="bg-[#663399]/30 rounded-lg p-4 border border-[#FFD700]/30 hover:border-[#FFD700]/60 transition-all duration-300">
                <p className="text-[#FFD700] font-semibold mb-2">🤞 Growth & Trust</p>
                <p className="text-white/80 text-sm">To grow together, supporting each other&rsquo;s dreams</p>
              </div>
              <div className="bg-[#663399]/30 rounded-lg p-4 border border-[#FFD700]/30 hover:border-[#FFD700]/60 transition-all duration-300">
                <p className="text-[#FFD700] font-semibold mb-2">✨ Infinite Love</p>
                <p className="text-white/80 text-sm">To cherish every moment and memory we create</p>
              </div>
              <div className="bg-[#663399]/30 rounded-lg p-4 border border-[#FFD700]/30 hover:border-[#FFD700]/60 transition-all duration-300">
                <p className="text-[#FFD700] font-semibold mb-2">💕 Eternity</p>
                <p className="text-white/80 text-sm">To love you beyond forever, always and always</p>
              </div>
            </div>
          </div>

          {/* Closing message */}
          <div className="mt-10 text-center space-y-3">
            <p className="text-white text-lg italic">
              &ldquo;What is a promise? A future certainty rooted in present love.&rdquo;
            </p>
            <div className="flex justify-center gap-4 text-3xl">
              <span className="animate-promise-sway">🤞</span>
              <span className="animate-promise-sway" style={{ animationDelay: "0.3s" }}>💜</span>
              <span className="animate-promise-sway" style={{ animationDelay: "0.6s" }}>🤞</span>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <NextButton
            hideBetween={{ start: new Date(2026, 1, 6), end: new Date(2026, 1, 11) }}
            destination="/my-hug"
          />
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 right-8 text-5xl opacity-30 animate-promise-float">
        ✨
      </div>
      <div className="absolute bottom-12 left-8 text-5xl opacity-30 animate-promise-float" style={{ animationDelay: "2s" }}>
        💜
      </div>
    </main>
  );
}
