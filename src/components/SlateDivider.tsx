interface SlateDividerProps {
  scene: string;
  take: string;
  label: string;
  id?: string;
}

export function SlateDivider({ scene, take, label, id }: SlateDividerProps) {
  return (
    <div id={id} className="relative mx-auto max-w-7xl px-6 sm:px-10">
      <div className="flex items-center gap-4 py-4">
        <div className="flex items-center gap-3 border border-surface-2 bg-surface px-4 py-2">
          <span className="font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
            Scene {scene}
          </span>
          <span className="h-3 w-px bg-surface-2" />
          <span className="font-mono text-[11px] tracking-[0.2em] text-ivory-dim uppercase">
            Take {take}
          </span>
        </div>
        <div
          aria-hidden="true"
          className="hidden sm:block flex-1 h-px bg-[repeating-linear-gradient(90deg,var(--color-surface-2)_0,var(--color-surface-2)_8px,transparent_8px,transparent_16px)]"
        />
        <span className="font-mono text-[11px] tracking-[0.2em] text-ivory-dim uppercase whitespace-nowrap">
          {label}
        </span>
      </div>
    </div>
  );
}
