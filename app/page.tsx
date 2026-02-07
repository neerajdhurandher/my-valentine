"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);
  const [showNextButton, setShowNextButton] = useState(false);

  useEffect(() => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    // Check if current date is greater than Feb 7
    if (month === 2 && date > 7) {
      setShowNextButton(true);
    }

    const timer = setTimeout(() => {
      const dateMap: Record<string, string> = {
        "2-7": "/my-rose",
        "2-8": "/my-soulmate",
        // Add more dates as needed
      };

      const route = dateMap[`${month}-${date}`];
      if (route) {
        router.push(route);
      }
    }, 10000);

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-red-900 via-pink-800 to-purple-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-300 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 right-20 w-36 h-36 bg-purple-300 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container flex flex-col items-center justify-center gap-8 px-4 py-16 text-center">
        {/* Hearts animation */}
        <div className="mb-6 text-6xl animate-bounce">
          💝
        </div>

        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
          My Valentine
        </h1>

        <p className="text-lg sm:text-xl text-pink-100 max-w-md drop-shadow-md animate-fade-in">
          A journey of love awaits you...
        </p>

        {/* Countdown timer */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="text-center">
            <p className="text-pink-200 mb-2 text-sm sm:text-base">
              Redirecting in...
            </p>
            <div className="text-5xl sm:text-6xl font-bold text-red-200 tabular-nums">
              {countdown}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex gap-4 justify-center flex-wrap text-4xl animate-pulse">
          <span>🌹</span>
          <span>💕</span>
          <span>✨</span>
          <span>💕</span>

        {/* Next button for dates after Feb 7 */}
        {showNextButton && (
          <button
            onClick={() => router.push("/my-rose")}
            className="mt-8 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Next →
          </button>
        )}
          <span>🌹</span>
        </div>

        <p className="mt-8 text-xs sm:text-sm text-pink-200 opacity-75">
          Based on today&rsquo;s date, you&rsquo;ll be taken to a special page...
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  );
}
