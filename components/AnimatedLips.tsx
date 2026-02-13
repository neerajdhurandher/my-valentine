"use client";

export default function AnimatedLips() {
  return (
    <div className="flex items-center justify-center relative">
      {/* Central romantic heart with kiss marks */}
      <div className="relative">
        {/* Main heart container */}
        <div className="text-9xl animate-kiss-pulse filter drop-shadow-2xl">
          ❤️
        </div>
        
        {/* Kiss marks orbiting the heart */}
        <div className="absolute inset-0">
          {[
            { angle: 0, delay: "0s", emoji: "💋" },
            { angle: 60, delay: "0.3s", emoji: "💕" },
            { angle: 120, delay: "0.6s", emoji: "💖" },
            { angle: 180, delay: "0.9s", emoji: "💋" },
            { angle: 240, delay: "1.2s", emoji: "💗" },
            { angle: 300, delay: "1.5s", emoji: "💓" },
          ].map((item, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                animation: `kissOrbit 8s linear infinite`,
                animationDelay: item.delay,
              }}
            >
              <div
                className="text-4xl animate-kiss-bounce"
                style={{
                  animationDelay: item.delay,
                  transform: `rotate(${item.angle}deg) translateX(100px) rotate(-${item.angle}deg)`,
                }}
              >
                {item.emoji}
              </div>
            </div>
          ))}
        </div>

        {/* Sparkles */}
        {[
          { x: -80, y: -60, delay: "0s" },
          { x: 80, y: -60, delay: "0.5s" },
          { x: -90, y: 40, delay: "1s" },
          { x: 90, y: 40, delay: "1.5s" },
          { x: 0, y: -90, delay: "0.8s" },
          { x: 0, y: 80, delay: "1.3s" },
        ].map((sparkle, i) => (
          <div
            key={i}
            className="absolute text-yellow-300 text-3xl animate-kiss-sparkle"
            style={{
              left: `calc(50% + ${sparkle.x}px)`,
              top: `calc(50% + ${sparkle.y}px)`,
              animationDelay: sparkle.delay,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Floating romantic text */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <p className="text-2xl font-bold text-pink-200 animate-kiss-glow tracking-wider">
          Kiss Me Forever 💋
        </p>
      </div>
    </div>
  );
}
