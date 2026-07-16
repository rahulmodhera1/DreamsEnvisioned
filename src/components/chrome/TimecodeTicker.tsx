"use client";

import { useEffect, useRef, useState } from "react";

const FPS = 24;

function formatTimecode(ms: number) {
  const totalFrames = Math.floor(ms / (1000 / FPS));
  const frames = totalFrames % FPS;
  const totalSeconds = Math.floor(totalFrames / FPS);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  const pad = (n: number, len = 2) => n.toString().padStart(len, "0");
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`;
}

export function TimecodeTicker({ className = "" }: { className?: string }) {
  const [timecode, setTimecode] = useState("00:00:00:00");
  const startRef = useRef<number | null>(null);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now;
      setTimecode(formatTimecode(now - startRef.current));
      frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <span aria-hidden="true" className={`font-mono font-tabular ${className}`}>
      {timecode}
    </span>
  );
}
