"use client";

export default function HugLoveLines() {
  return (
    <div className="flex flex-col items-center gap-8">
      {/* SVG Animation */}
      <svg
        viewBox="0 0 400 300"
        className="w-full h-auto max-w-2xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <defs>
          <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B5B" />
            <stop offset="100%" stopColor="#FFB347" />
          </linearGradient>
          <linearGradient id="armGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF8C42" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FF6B5B" stopOpacity="0.9" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Soft glow behind */}
        <circle cx="200" cy="150" r="110" fill="#FFB347" opacity="0.12" />
        <circle cx="200" cy="150" r="80" fill="#FF8C42" opacity="0.12" />

        {/* Embracing arms */}
        <path
          d="M 70 170 C 110 135, 145 120, 200 130"
          stroke="url(#armGradient)"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
          className="animate-hug-pulse"
        />
        <path
          d="M 330 170 C 290 135, 255 120, 200 130"
          stroke="url(#armGradient)"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
          className="animate-hug-pulse"
        />
        <circle cx="70" cy="170" r="10" fill="#FFB347" opacity="0.9" />
        <circle cx="330" cy="170" r="10" fill="#FFB347" opacity="0.9" />

        {/* Heart center */}
        <path
          d="M200 105 C185 85 150 85 150 115 C150 150 200 175 200 175 C200 175 250 150 250 115 C250 85 215 85 200 105 Z"
          fill="url(#heartGradient)"
          filter="url(#glow)"
          className="animate-hug-bloom"
        />

        {/* Love sparks */}
        <circle cx="120" cy="105" r="4" fill="#FF6B5B" className="animate-hug-orbit" />
        <circle cx="280" cy="105" r="4" fill="#FF8C42" className="animate-hug-orbit" style={{ animationDelay: "0.4s" }} />
        <circle cx="110" cy="195" r="3" fill="#FF8C42" className="animate-hug-orbit" style={{ animationDelay: "0.8s" }} />
        <circle cx="290" cy="195" r="3" fill="#FF6B5B" className="animate-hug-orbit" style={{ animationDelay: "1.2s" }} />
      </svg>

      {/* Interactive hint */}
      <p className="text-center text-[#C85A54] text-sm italic">
        A gentle hug of love, holding us close
      </p>
    </div>
  );
}
