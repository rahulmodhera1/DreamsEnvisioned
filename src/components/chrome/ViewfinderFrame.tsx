import { TimecodeTicker } from "./TimecodeTicker";

const bracketBase =
  "absolute h-6 w-6 sm:h-8 sm:w-8 border-gold/70";

export function ViewfinderFrame() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 hidden sm:block"
    >
      {/* corner brackets */}
      <span className={`${bracketBase} top-4 left-4 border-t-2 border-l-2`} />
      <span className={`${bracketBase} top-4 right-4 border-t-2 border-r-2`} />
      <span
        className={`${bracketBase} bottom-4 left-4 border-b-2 border-l-2`}
      />
      <span
        className={`${bracketBase} bottom-4 right-4 border-b-2 border-r-2`}
      />

      {/* bottom-left timecode */}
      <div className="absolute bottom-4 left-14 sm:left-16 flex items-center gap-2 text-[11px] text-ivory-dim">
        <TimecodeTicker />
      </div>

      {/* bottom-right frame info */}
      <div className="absolute bottom-4 right-14 sm:right-16 text-[10px] tracking-[0.2em] text-ivory-dim font-mono uppercase">
        GTA · 24FPS
      </div>
    </div>
  );
}
