"use client";

import { useEffect } from "react";

interface SetFaviconProps {
  emoji: string;
  title: string;
}

export default function SetFavicon({ emoji, title }: SetFaviconProps) {
  useEffect(() => {
    document.title = title;
    const favicon = document.querySelector("link[rel='icon']") || document.createElement("link");
    favicon.setAttribute("rel", "icon");
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${emoji}</text></svg>`;
    favicon.setAttribute("href", `data:image/svg+xml,${encodeURIComponent(svg)}`);
    document.head.appendChild(favicon);
  }, [emoji, title]);

  return null;
}
