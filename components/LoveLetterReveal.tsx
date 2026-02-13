"use client";

import { useEffect, useRef, useState } from "react";

export default function LoveLetterReveal() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonClickDelay = 500; // Delay in milliseconds before changing state after button click
  const letterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && letterRef.current) {
      letterRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
        A Love Letter Sealed with a Kiss
      </h2>

      <div className="relative w-full max-w-2xl z-20">
        {/* Envelope */}
        <div
          className={`relative ${isOpen ? "hidden" : "block"}`}
        >
          <svg viewBox="0 0 400 250" className="w-full drop-shadow-2xl pointer-events-none">
            <defs>
              <linearGradient id="envelopeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFE4E1" />
                <stop offset="100%" stopColor="#FFC0CB" />
              </linearGradient>
            </defs>
            
            {/* Envelope body */}
            <rect x="50" y="80" width="300" height="150" fill="url(#envelopeGradient)" stroke="#FF1493" strokeWidth="2" />
            
            {/* Envelope flap */}
            <path d="M 50 80 L 200 160 L 350 80" fill="#FFC0CB" stroke="#FF1493" strokeWidth="2" />
            <path d="M 50 80 L 200 160 L 350 80 L 350 230 L 50 230 Z" fill="none" stroke="#FF1493" strokeWidth="2" />
            
            {/* Wax seal */}
            <circle cx="200" cy="140" r="25" fill="#C71585" className="animate-kiss-pulse" />
            <text x="200" y="150" fontSize="24" textAnchor="middle" fill="white">💋</text>
          </svg>

          {/* Click to open */}
          <button
              onClick={() => {
                setTimeout(() => {
                  setIsOpen(true);
                }, buttonClickDelay);
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8 px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer pointer-events-auto z-30"
            data-interactive="true"
          >
            Open Love Letter
          </button>
        </div>

        {/* Letter content */}
        <div
          ref={letterRef}
          className={isOpen ? "block scroll-mt-24" : "hidden"}
        >
          <div className="bg-gradient-to-br from-pink-50/95 to-rose-50/95 rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-pink-300 backdrop-blur-sm">
            <div className="space-y-6 text-gray-800">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-rose-600 mb-2">
                  My Dearest Love,
                </h3>
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto"></div>
              </div>

              <p className="text-lg leading-relaxed">
                Every kiss we share is a verse in our love story, a moment frozen in time where nothing else matters but us. Your lips against mine feel like coming home, like finding the missing piece of my soul.
              </p>

              <p className="text-lg leading-relaxed">
                When I kiss you, I taste tomorrow&rsquo;s promises and yesterday&rsquo;s memories, all wrapped in the sweetness of this present moment. Each kiss is different, yet every single one tells you the same truth: I love you, completely and unconditionally.
              </p>

              <p className="text-lg leading-relaxed">
                From the gentle morning kisses to the passionate goodnight embraces, every touch of our lips writes another chapter in our forever. You are my first thought, my last kiss, and everything in between.
              </p>

              <div className="text-right mt-8">
                <p className="text-xl font-semibold text-rose-600">
                  Forever yours,
                </p>
                <p className="text-2xl font-bold text-rose-700 mt-2">
                  With all my love 💋
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setTimeout(() => {
                  setIsOpen(false);
                }, buttonClickDelay);
            }}
              className="mt-8 mx-auto block px-6 py-2 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full hover:scale-105 transition-all duration-300"
              data-interactive="true"
            >
              Close Letter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
