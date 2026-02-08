"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export interface NextButtonProps {
  hideBetween: {
    start: Date;
    end: Date;
  };
  destination: string;
  text?: string;
}

function isDateInRange(today: Date, start: Date, end: Date) {
  const startDate = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const endDate = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  const current = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return current >= startDate && current <= endDate;
}

export default function NextButton({ hideBetween, destination, text = "Next" }: NextButtonProps) {
  const router = useRouter();
  const [showNextButton, setShowNextButton] = useState(false);

  const range = useMemo(() => hideBetween, [hideBetween]);

  useEffect(() => {
    const today = new Date();
    if (!isDateInRange(today, range.start, range.end)) {
      setShowNextButton(true);
    }
  }, [range]);

  if (!showNextButton) return null;

  return (
    <div className="mt-6">
      <button
        onClick={() => router.push(destination)}
        className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        <span className="inline-flex items-center gap-2">
          {text}
          <span className="next-arrow inline-flex">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>
      </button>
      <style jsx>{`
        @keyframes arrowMoveRight {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(6px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .next-arrow {
          animation: arrowMoveRight 1.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
