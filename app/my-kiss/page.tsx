import type { Metadata } from "next";
import SetFavicon from "@/components/SetFavicon";
import NextButton from "@/components/NextButton";
import KissParticleSystem from "@/components/KissParticleSystem";
import AnimatedLips from "@/components/AnimatedLips";
import KissTypesCarousel from "@/components/KissTypesCarousel";
import LoveLetterReveal from "@/components/LoveLetterReveal";

export const metadata: Metadata = {
  title: "My Kiss",
  description: "Valentine's Day - Kiss Day (Feb 13) - Where Words End, Kisses Speak",
};

export default function KissPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#8B0000] via-[#C71585] to-[#4A0E4E] overflow-hidden relative">
      <SetFavicon emoji="💋" title="My Kiss" />

      {/* Interactive Particle System */}
      <KissParticleSystem />

      {/* Ambient glow effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-pink-500/10 to-transparent rounded-full blur-2xl"></div>

      {/* Floating rose petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl animate-kiss-petal-fall"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            🌹
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-16 px-4 py-16 max-w-7xl">
        
        {/* Animated Lips with Glow */}
        <div className="animate-fade-in">
          <AnimatedLips />
        </div>

        {/* Main Headline */}
        <div className="text-center space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200 bg-clip-text text-transparent drop-shadow-2xl animate-kiss-glow">
            Where Words End
          </h1>
          <p className="text-3xl md:text-4xl text-pink-100 font-light tracking-wide">
            Kisses Speak
          </p>
          <p className="text-xl text-pink-200/80 max-w-2xl mx-auto leading-relaxed">
            Every kiss tells a story that words could never capture—a language of love written on our lips.
          </p>
        </div>

        {/* Kiss Types Carousel */}
        <div className="w-full max-w-5xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <KissTypesCarousel />
        </div>

        {/* Love Letter Section */}
        <div className="w-full max-w-4xl animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <LoveLetterReveal />
        </div>

        {/* The Meaning of Your Kiss */}
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-pink-500/20 to-rose-500/20 border-2 border-pink-400/40 hover:border-pink-300/60 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/0 to-rose-400/0 group-hover:from-pink-400/10 group-hover:to-rose-400/10 transition-all duration-500"></div>
            <div className="relative">
              <div className="text-5xl mb-4 animate-kiss-pulse">💕</div>
              <h3 className="text-white font-bold text-2xl mb-3">The Silent Language</h3>
              <p className="text-pink-100 leading-relaxed">
                Your kiss speaks volumes in the silence, conveying emotions that transcend words and touch my soul.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-rose-500/20 to-red-500/20 border-2 border-rose-400/40 hover:border-rose-300/60 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-400/0 to-red-400/0 group-hover:from-rose-400/10 group-hover:to-red-400/10 transition-all duration-500"></div>
            <div className="relative">
              <div className="text-5xl mb-4 animate-kiss-pulse" style={{ animationDelay: "0.3s" }}>🔥</div>
              <h3 className="text-white font-bold text-2xl mb-3">The Spark</h3>
              <p className="text-rose-100 leading-relaxed">
                Every kiss ignites a fire within me, a passion that burns eternal and grows stronger with each moment.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400/40 hover:border-purple-300/60 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 to-pink-400/0 group-hover:from-purple-400/10 group-hover:to-pink-400/10 transition-all duration-500"></div>
            <div className="relative">
              <div className="text-5xl mb-4 animate-kiss-pulse" style={{ animationDelay: "0.6s" }}>✨</div>
              <h3 className="text-white font-bold text-2xl mb-3">The Magic</h3>
              <p className="text-purple-100 leading-relaxed">
                In your kiss, I find magic—transforming ordinary moments into extraordinary memories of pure bliss.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-red-500/20 to-pink-500/20 border-2 border-red-400/40 hover:border-red-300/60 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-red-400/0 to-pink-400/0 group-hover:from-red-400/10 group-hover:to-pink-400/10 transition-all duration-500"></div>
            <div className="relative">
              <div className="text-5xl mb-4 animate-kiss-pulse" style={{ animationDelay: "0.9s" }}>💖</div>
              <h3 className="text-white font-bold text-2xl mb-3">The Promise</h3>
              <p className="text-red-100 leading-relaxed">
                Each kiss is a promise—of love today, forever together, and a future filled with endless affection.
              </p>
            </div>
          </div>
        </div>

        {/* Poetic Quote */}
        <div className="max-w-3xl text-center animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 border-2 border-pink-400/30 rounded-3xl p-10 backdrop-blur-sm">
            <p className="text-2xl md:text-3xl text-pink-100 italic leading-relaxed font-light">
              &ldquo;A kiss is a secret told to the mouth instead of the ear; kisses are the messengers of love.&rdquo;
            </p>
          </div>
        </div>

        {/* Next Button */}
        <div className="mt-12">
          <NextButton
            destination="/my-valentine-day"
            text="Next: Valentine's Day →"
            hideBetween={{
              start: new Date(2026, 1, 6), // Feb 6
              end: new Date(2026, 1, 13), // Feb 13
            }}
          />
        </div>
      </div>
    </main>
  );
}
