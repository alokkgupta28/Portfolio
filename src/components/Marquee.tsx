/**
 * Full-bleed marquee ticker. Hover pauses the animation for readability.
 * Uses two duplicate tracks so translateX(-50%) yields a seamless loop.
 */
export function Marquee({ items, className = "" }: { items: string[]; className?: string }) {
  const track = (
    <div className="flex shrink-0 items-center gap-10 px-5 md:gap-16 md:px-8">
      {items.map((t, i) => (
        <span key={`${t}-${i}`} className="flex items-center gap-10 md:gap-16">
          <span className="font-display text-5xl font-black uppercase tracking-tighter md:text-7xl lg:text-8xl">
            {t}
          </span>
          <span aria-hidden className="text-3xl text-[color:var(--primary)]">
            /
          </span>
        </span>
      ))}
    </div>
  );
  return (
    <div
      className={`group relative overflow-hidden border-y hairline py-6 md:py-8 ${className}`}
      aria-hidden
    >
      <div className="flex w-max animate-marquee will-change-transform group-hover:[animation-play-state:paused]">
        {track}
        {track}
      </div>
    </div>
  );
}
