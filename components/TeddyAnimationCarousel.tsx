"use client";

import { useState, useEffect } from "react";

interface Animation {
  url: string;
  alt: string;
}

const animations: Animation[] = [
  {
    url: "https://media1.tenor.com/m/UY8UC86acBoAAAAd/milk-and-mocha-kiss.gif",
    alt: "Milk and Mocha kissing",
  },
  {
    url: "https://media1.tenor.com/m/AywMdBYeX5oAAAAd/milk-and-mocha-yay.gif",
    alt: "Milk and Mocha jumping with joy",
  },
  {
    url: "https://media1.tenor.com/m/O0L78rE1EZQAAAAd/milk-and-mocha-cute.gif",
    alt: "Milk and Mocha hugging",
  },
];

export default function TeddyAnimationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % animations.length);
        setIsTransitioning(false);
      }, 300);
    }, 4000); // Change GIF every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-auto mb-2 flex items-center justify-center  rounded-2xl p-2">
      <div className={`transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
        <img
          src={animations[currentIndex].url}
          alt={animations[currentIndex].alt}
          className="w-full max-w-md h-auto rounded-xl shadow-lg"
        />
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-12 flex gap-2">
        {animations.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsTransitioning(false);
              }, 300);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#8b6f47] w-6"
                : "bg-[#d4a574] hover:bg-[#a0826d]"
            }`}
            aria-label={`Go to animation ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
