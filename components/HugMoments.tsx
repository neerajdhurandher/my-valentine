"use client";

import { useState, useEffect } from "react";

export default function HugMoments() {
  const [activeIndex, setActiveIndex] = useState(0);

  const moments = [
    {
      emoji: "🌙",
      title: "Midnight Hugs",
      description: "When the world sleeps, we hold each other closer.",
    },
    {
      emoji: "🌅",
      title: "Morning Embrace",
      description: "Starting the day wrapped in your warmth and love.",
    },
    {
      emoji: "🌧️",
      title: "Rainy Day Comfort",
      description: "When storms come, your hug is my shelter.",
    },
    {
      emoji: "🎭",
      title: "Quiet Moments",
      description: "No words needed, just your arms and my heartbeat.",
    },
    {
      emoji: "🚀",
      title: "Adventurous Hugs",
      description: "Ready to conquer the world because you&rsquo;ve got me.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % moments.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [moments.length]);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center text-[#8B5A2B]">
        Different Kinds of Hugs, All Meaning the Same
      </h2>

      <div className="bg-gradient-to-r from-[#FFB347]/20 to-[#FF8C42]/20 rounded-2xl p-8 border border-[#FFB347]/40 min-h-48 flex flex-col items-center justify-center transition-all duration-500">
        <div className="text-6xl mb-4 animate-gentle-float">
          {moments[activeIndex].emoji}
        </div>
        <h3 className="text-2xl font-bold text-[#8B6F47] mb-2">
          {moments[activeIndex].title}
        </h3>
        <p
          className="text-[#A0826D] text-center max-w-xl text-lg"
          dangerouslySetInnerHTML={{ __html: moments[activeIndex].description }}
        />
      </div>

      {/* Carousel indicators */}
      <div className="flex gap-3 justify-center">
        {moments.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === activeIndex
                ? "w-8 h-3 bg-[#FF8C42]"
                : "w-3 h-3 bg-[#FFB347] hover:bg-[#FF8C42]"
            }`}
            aria-label={`Go to moment ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
