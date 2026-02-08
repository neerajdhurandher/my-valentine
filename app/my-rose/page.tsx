"use client";

import { useEffect, useState } from "react";
import NextButton from "@/components/NextButton";

export default function MyRosePage() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    document.title = "My Rose ";
    const favicon = document.querySelector("link[rel='icon']") || document.createElement("link");
    favicon.setAttribute("rel", "icon");
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌹</text></svg>`;
    favicon.setAttribute("href", `data:image/svg+xml,${encodeURIComponent(svg)}`);
    document.head.appendChild(favicon);
  }, []);


  const lyrics = [
    {
      marathi: "तू माझी गुलाब, मी तुझा बाग",
      english: "You are my rose, I am your garden",
    },
    {
      marathi: "तुझ्या सुगंधात हरवतो रोज रात्री आणि दिवसा",
      english: "Lost in your fragrance every night and day",
    },
    {
      marathi: "लाल गुलाबासारखं तुझं प्रेम",
      english: "Like a red rose, your love",
    },
    {
      marathi: "माझ्या हृदयात नेहमी ताजं",
      english: "Forever fresh in my heart",
    },
    {
      marathi: "सात गुलाब, सात दिवस",
      english: "Seven roses, seven days",
    },
    {
      marathi: "प्रेमाच्या या खास वेळेला",
      english: "For this special time of love",
    },
  ];

  const currentLyric = lyrics[currentLineIndex];

  useEffect(() => {
    if (!currentLyric) return;

    const fullText = `${currentLyric.marathi}\n${currentLyric.english}`;

    if (isTyping && displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else if (displayedText.length === fullText.length) {
      setIsTyping(false);
      const pauseTimeout = setTimeout(() => {
        if (currentLineIndex < lyrics.length - 1) {
          setCurrentLineIndex(currentLineIndex + 1);
          setDisplayedText("");
          setIsTyping(true);
        } else {
          // Restart from beginning
          setTimeout(() => {
            setCurrentLineIndex(0);
            setDisplayedText("");
            setIsTyping(true);
          }, 2000);
        }
      }, 3000);
      return () => clearTimeout(pauseTimeout);
    }
  }, [displayedText, isTyping, currentLineIndex, currentLyric, lyrics.length]);
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-pink-900 relative overflow-hidden">
      {/* Animated rose petals background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-5 left-5 w-40 h-40 bg-pink-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-red-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/3 right-5 w-44 h-44 bg-red-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Falling rose petals animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              🌹
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="text-center space-y-8 max-w-2xl">
          {/* Rose emoji header */}
          <div className="text-7xl sm:text-8xl mb-6 animate-bounce">
            🌹
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl font-bold text-white drop-shadow-lg animate-fade-in">
              My Rose
            </h1>
            <p className="text-xl sm:text-2xl text-pink-100 drop-shadow-md animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Beautiful, delicate, and eternal...
            </p>
          </div>

          {/* Typewriter Lyrics */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-300/30 min-h-[180px] flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <p className="text-xl sm:text-2xl text-white leading-relaxed font-semibold whitespace-pre-line">
                {displayedText}
                {isTyping && <span className="animate-pulse">|</span>}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-pink-300/30 space-y-3 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <p className="text-base text-white leading-relaxed">
              Like a rose, you bring beauty and grace into my life every single day. 🌹
            </p>
            <p className="text-base text-pink-100 leading-relaxed">
              Your presence is as precious as the most delicate petals, and your love as deep as the roots beneath.
            </p>
          </div>

          {/* Decorative hearts and roses */}
          <div className="flex justify-center gap-6 text-5xl sm:text-6xl animate-pulse">
            <span>💕</span>
            <span>🌹</span>
            <span>✨</span>
            <span>🌹</span>
            <span>💕</span>
          </div>

          {/* Special message */}
          <div className="pt-4">
            <p className="text-pink-200 text-lg italic">
              &ldquo;A rose by any other name would smell as sweet...&rdquo;
            </p>
            <p className="text-white text-sm mt-2 opacity-75">
              — But none as beautiful as you
            </p>
          </div>

          {/* Interactive element */}
          <div className="pt-6">
            <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Cherish This Moment ❤️
            </button>
          </div>

          <div className="pt-4">
            <NextButton
              hideBetween={{
                start: new Date(2026, 1, 6),
                end: new Date(2026, 1, 7),
              }}
              destination="/my-soulmate"
            />
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="absolute bottom-8 left-8 text-5xl opacity-50 animate-pulse">
          🌹
        </div>
        <div className="absolute bottom-8 right-8 text-5xl opacity-50 animate-pulse" style={{ animationDelay: "3s" }}>
          💕
        </div>
      </div>
    </main>
  );
}
