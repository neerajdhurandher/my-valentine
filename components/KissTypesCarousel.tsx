"use client";

import { useState, useEffect } from "react";

export default function KissTypesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const kissTypes = [
    {
      emoji: "💋",
      title: "The Passionate Kiss",
      description: "When our lips meet, the world fades away and only we exist in that perfect moment of pure passion.",
      color: "from-red-500 to-pink-500",
      borderColor: "border-red-400",
    },
    {
      emoji: "😘",
      title: "The Forehead Kiss",
      description: "A tender kiss on your forehead that says 'I cherish you' more than a thousand words ever could.",
      color: "from-pink-500 to-rose-500",
      borderColor: "border-pink-400",
    },
    {
      emoji: "💕",
      title: "The Good Morning Kiss",
      description: "The sweetest way to start each day, greeting you with love before the sun fully rises.",
      color: "from-rose-500 to-purple-500",
      borderColor: "border-rose-400",
    },
    {
      emoji: "✨",
      title: "The Surprise Kiss",
      description: "Unexpected moments when I can&rsquo;t resist stealing a kiss, just because you&rsquo;re you.",
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-400",
    },
    {
      emoji: "🌙",
      title: "The Goodnight Kiss",
      description: "The last kiss of the day, a promise that my love will guard your dreams until morning.",
      color: "from-indigo-500 to-pink-500",
      borderColor: "border-indigo-400",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % kissTypes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [kissTypes.length]);

  return (
    <div className="space-y-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
        Every Kiss Tells a Story
      </h2>

      {/* Main card */}
      <div className="relative min-h-[320px] flex items-center justify-center">
        {kissTypes.map((kiss, index) => (
          <div
            key={index}
            className={`absolute w-full transition-all duration-700 ${
              index === activeIndex
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-95 z-0"
            }`}
          >
            <div className={`bg-gradient-to-br ${kiss.color}/20 border-2 ${kiss.borderColor}/50 rounded-3xl p-10 md:p-12 backdrop-blur-md shadow-2xl`}>
              <div className="text-center space-y-6">
                <div className="text-7xl md:text-8xl animate-kiss-bounce">
                  {kiss.emoji}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {kiss.title}
                </h3>
                <p
                  className="text-lg md:text-xl text-pink-100 leading-relaxed max-w-2xl mx-auto"
                  dangerouslySetInnerHTML={{ __html: kiss.description }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="flex gap-3 justify-center">
        {kissTypes.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === activeIndex
                ? "w-12 h-4 bg-pink-400 shadow-lg shadow-pink-400/50"
                : "w-4 h-4 bg-pink-600/40 hover:bg-pink-500"
            }`}
            aria-label={`Go to kiss type ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
