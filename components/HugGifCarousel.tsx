"use client";

import { useState } from "react";
import Image from "next/image";

export default function HugGifCarousel() {
  const [currentGif, setCurrentGif] = useState(0);

  const gifs = [
    {
      url: "https://media1.tenor.com/m/O0L78rE1EZQAAAAd/milk-and-mocha-cute.gif",
      title: "Cozy Cuddle",
    },
    {
      url: "https://media1.tenor.com/m/UY8UC86acBoAAAAd/milk-and-mocha-kiss.gif",
      title: "Tight Bear Hug",
    },
  ];

  const goToGif = (index: number) => {
    setCurrentGif(index);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-3xl font-bold text-[#8B5A2B]">The Perfect Hug</h2>

      {/* GIF Display */}
      <div className="relative w-full max-w-md bg-gradient-to-br from-[#FFB347]/30 to-[#FF8C42]/30 rounded-2xl p-6 border border-[#FFB347]/50 overflow-hidden">
        <Image
          src={gifs[currentGif].url}
          alt={gifs[currentGif].title}
          width={400}
          height={300}
          unoptimized
          className="w-full h-auto rounded-xl"
          priority
        />
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-3">
        {gifs.map((_, index) => (
          <button
            key={index}
            onClick={() => goToGif(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentGif
                ? "w-8 h-3 bg-[#FF8C42]"
                : "w-3 h-3 bg-[#FFB347] hover:bg-[#FF8C42]"
            }`}
            aria-label={`View gif ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
