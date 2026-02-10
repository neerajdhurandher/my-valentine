"use client";

import { useState, useEffect } from "react";

interface Promise {
  title: string;
  description: string;
}

const promises: Promise[] = [
  {
    title: "I promise to love you",
    description: "With all my heart, in every moment, forever",
  },
  {
    title: "I promise to be your strength",
    description: "When you stumble, I&rsquo;ll lift you up",
  },
  {
    title: "I promise to grow with you",
    description: "Not away from you, but towards a beautiful future together",
  },
  {
    title: "I promise to cherish you",
    description: "Every day, every moment, every memory we create",
  },
  {
    title: "I promise to trust you",
    description: "With my heart, my dreams, and my soul",
  },
    {
    title: "I promise to always be with you forever",
    description: "Through every joy and every challenge, hand in hand",
  },
];

export default function PromiseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % promises.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000); // Change promise every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-auto mb-2 flex flex-col items-center justify-center bg-gradient-to-br from-[#663399]/40 to-[#FFD700]/20 rounded-2xl p-8">
      <div
        className={`transition-opacity duration-300 w-full text-center ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#FFD700] mb-3">
          {promises[currentIndex].title}
        </h2>
        <p className="text-lg sm:text-xl text-white/90 italic">
          {promises[currentIndex].description}
        </p>
      </div>

      {/* Progress indicators */}
      <div className="flex gap-2 mt-6">
        {promises.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsTransitioning(false);
              }, 300);
            }}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "bg-[#FFD700] w-6 h-2.5"
                : "bg-[#FFD700]/50 w-2.5 h-2.5 hover:bg-[#FFD700]/75"
            }`}
            aria-label={`Go to promise ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
