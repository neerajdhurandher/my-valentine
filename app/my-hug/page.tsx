import type { Metadata } from "next";
import SetFavicon from "@/components/SetFavicon";
import NextButton from "@/components/NextButton";
import HugLoveLines from "@/components/HugLoveLines";
import HugMoments from "@/components/HugMoments";
import HugGifCarousel from "@/components/HugGifCarousel";

export const metadata: Metadata = {
  title: "My Hug",
  description: "Valentine's Day - Hug Day (Feb 12) - Close to My Heart",
};

export default function HugPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#FFD4E5] via-[#FFCBA4] to-[#FFF5E1] overflow-hidden relative">
      <SetFavicon emoji="🤗" title="My Hug" />

      {/* Floating decorative hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-30 animate-float-up"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${100 + Math.random() * 50}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Animated background circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-rose-300/15 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 text-6xl opacity-20 animate-gentle-float">✨</div>
      <div className="absolute bottom-12 right-12 text-5xl opacity-20 animate-gentle-float" style={{ animationDelay: "2s" }}>💕</div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-12 px-4 py-12">
        
        {/* Interactive Hug Visualization */}
        <div className="w-full max-w-2xl animate-fade-in">
          <HugLoveLines />
        </div>

        {/* Main Message */}
        <div className="text-center space-y-4 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#E84C3D] via-[#FF6B5B] to-[#FF8C42] bg-clip-text text-transparent animate-fade-in">
            Close to My Heart
          </h1>

          <p className="text-xl md:text-2xl text-[#C85A54] drop-shadow-md animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Being held by you is like home found in human form.
          </p>
        </div>

        {/* Intimate Message Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="group relative overflow-hidden rounded-xl p-8 bg-gradient-to-br from-[#FF6B5B]/20 to-[#FF8C42]/20 border border-[#FF6B5B]/40 hover:border-[#FF6B5B]/70 transition-all duration-600">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B5B]/0 to-[#FF8C42]/0 group-hover:from-[#FF6B5B]/10 group-hover:to-[#FF8C42]/10 transition-all duration-300"></div>
            <div className="relative">
              <div className="text-4xl mb-3 animate-hug-beat">❤️</div>
              <h3 className="text-[#8B3A3A] font-bold text-lg mb-2">Vulnerability</h3>
              <p className="text-[#A85050] text-sm leading-relaxed">
                In your embrace, I let my guard down and show you the real me without fear.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl p-8 bg-gradient-to-br from-[#FFB347]/20 to-[#FFA07A]/20 border border-[#FFB347]/40 hover:border-[#FFB347]/70 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFB347]/0 to-[#FFA07A]/0 group-hover:from-[#FFB347]/10 group-hover:to-[#FFA07A]/10 transition-all duration-300"></div>
            <div className="relative">
              <div className="text-4xl mb-3 animate-hug-beat" style={{ animationDelay: "0.3s" }}>💞</div>
              <h3 className="text-[#8B6F47] font-bold text-lg mb-2">Belonging</h3>
              <p className="text-[#A0826D] text-sm leading-relaxed">
                Every embrace reminds me that I am exactly where I belong, with you.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl p-8 bg-gradient-to-br from-[#FF8C42]/20 to-[#FFB347]/20 border border-[#FF8C42]/40 hover:border-[#FF8C42]/70 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C42]/0 to-[#FFB347]/0 group-hover:from-[#FF8C42]/10 group-hover:to-[#FFB347]/10 transition-all duration-300"></div>
            <div className="relative">
              <div className="text-4xl mb-3 animate-hug-beat" style={{ animationDelay: "0.6s" }}>🌹</div>
              <h3 className="text-[#8B5A2B] font-bold text-lg mb-2">Serenity</h3>
              <p className="text-[#A0826D] text-sm leading-relaxed">
                Your arms are my sanctuary, where chaos fades and only peace remains.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl p-8 bg-gradient-to-br from-[#FFA07A]/20 to-[#FF8C42]/20 border border-[#FFA07A]/40 hover:border-[#FFA07A]/70 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFA07A]/0 to-[#FF8C42]/0 group-hover:from-[#FFA07A]/10 group-hover:to-[#FF8C42]/10 transition-all duration-300"></div>
            <div className="relative">
              <div className="text-4xl mb-3 animate-hug-beat" style={{ animationDelay: "0.9s" }}>✨</div>
              <h3 className="text-[#8B6F47] font-bold text-lg mb-2">Forever</h3>
              <p className="text-[#A0826D] text-sm leading-relaxed">
                I want to hold you like this for all our tomorrows and every moment in between.
              </p>
            </div>
          </div>
        </div>

        {/* Hug Moments Carousel */}
        <div className="w-full max-w-3xl animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <HugMoments />
        </div>

        {/* Poetic line */}
        <div className="text-center max-w-2xl animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <p className="text-[#C85A54] italic text-lg leading-relaxed">
            &ldquo;In the silence of your embrace, I hear the loudest love story ever told.&rdquo;
          </p>
        </div>

        {/* Why Your Hug Matters */}
        <div className="max-w-3xl bg-gradient-to-r from-[#FF6B5B]/10 to-[#FFB347]/10 rounded-2xl border border-[#FF8C42]/30 p-8 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "1s" }}>
          <h2 className="text-2xl md:text-3xl font-bold text-[#8B5A2B] mb-6 text-center">
            Why Your Hug Means Everything
          </h2>
          <div className="space-y-4 text-[#A0826D]">
            <div className="flex gap-4 items-start">
              <span className="text-2xl flex-shrink-0">🫂</span>
              <p>Your hug is my reset button, turning bad days into moments of peace.</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl flex-shrink-0">🌟</span>
              <p>It&rsquo;s the smallest gesture that speaks the biggest words of love.</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl flex-shrink-0">💫</span>
              <p>In your arms, I find not just comfort, but my entire world.</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl flex-shrink-0">🎀</span>
              <p>Every embrace is a promise that we&rsquo;ll face everything together.</p>
            </div>
          </div>
        </div>

        {/* Hug Gif Carousel */}
        <div className="w-full max-w-3xl animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <HugGifCarousel />
        </div>

        {/* Next Button */}
        <div className="mt-12">
          <NextButton
            destination="/my-kiss"
            text="Next: Kiss Day"
            hideBetween={{
              start: new Date(2026, 1, 6), // Feb 6
              end: new Date(2026, 1, 12), // Feb 12
            }}
          />
        </div>
      </div>
    </main>
  );
}
