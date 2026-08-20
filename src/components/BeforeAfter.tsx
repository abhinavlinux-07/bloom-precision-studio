import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function BeforeAfter({
  before,
  after,
  label,
  className,
}: {
  before: string;
  after: string;
  label: string;
  className?: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <figure className={cn("group", className)}>
      <div
        ref={containerRef}
        className="relative aspect-4/5 w-full cursor-ew-resize select-none overflow-hidden bg-muted sm:aspect-square"
        onPointerDown={(e) => {
          dragging.current = true;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          updateFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (dragging.current) updateFromClientX(e.clientX);
        }}
        onPointerUp={() => {
          dragging.current = false;
        }}
        onPointerLeave={() => {
          dragging.current = false;
        }}
      >
        <img
          src={after}
          alt={`${label} — after treatment`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={before}
            alt={`${label} — before treatment`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <span className="eyebrow pointer-events-none absolute top-4 left-4 bg-background/85 px-2.5 py-1 text-foreground">
          Before
        </span>
        <span className="eyebrow pointer-events-none absolute top-4 right-4 bg-primary/90 px-2.5 py-1 text-primary-foreground">
          After
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-background/90"
          style={{ left: `${position}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-background/70 bg-background/90 text-[11px] tracking-[0.2em] text-foreground shadow-sm">
            ↔
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={position}
          aria-label={`${label} before and after comparison slider`}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-x-0 bottom-0 h-10 w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-4 flex items-center justify-between border-t border-border pt-3">
        <span className="eyebrow text-foreground">{label}</span>
        <span className="text-xs text-muted-foreground">Drag to compare</span>
      </figcaption>
    </figure>
  );
}
