interface SlateDividerProps {
  scene: string;
  take: string;
  label: string;
  id?: string;
  theme?: "dark" | "light";
}

export function SlateDivider({
  scene,
  take,
  label,
  id,
  theme = "dark",
}: SlateDividerProps) {
  const isLight = theme === "light";

  return (
    <div id={id} className="relative mx-auto max-w-7xl px-6 sm:px-10">
      <div className="flex items-center gap-4 py-4">
        <div
          className={`flex items-center gap-3 border px-4 py-2 ${
            isLight
              ? "border-ink/15 bg-ink text-paper"
              : "border-surface-2 bg-surface"
          }`}
        >
          <span
            className={`font-mono text-[11px] tracking-[0.2em] uppercase ${
              isLight ? "text-gold" : "text-gold"
            }`}
          >
            Scene {scene}
          </span>
          <span
            className={`h-3 w-px ${isLight ? "bg-paper/20" : "bg-surface-2"}`}
          />
          <span
            className={`font-mono text-[11px] tracking-[0.2em] uppercase ${
              isLight ? "text-paper/70" : "text-ivory-dim"
            }`}
          >
            Take {take}
          </span>
        </div>
        <div
          aria-hidden="true"
          className={`hidden sm:block flex-1 h-px ${
            isLight
              ? "bg-[repeating-linear-gradient(90deg,var(--color-ink)_0,var(--color-ink)_8px,transparent_8px,transparent_16px)] opacity-15"
              : "bg-[repeating-linear-gradient(90deg,var(--color-surface-2)_0,var(--color-surface-2)_8px,transparent_8px,transparent_16px)]"
          }`}
        />
        <span
          className={`font-mono text-[11px] tracking-[0.2em] uppercase whitespace-nowrap ${
            isLight ? "text-ink-dim" : "text-ivory-dim"
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
