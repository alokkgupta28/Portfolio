import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor: a small ink dot with a larger outlined ring that lags behind.
 * Hidden on touch/coarse devices. Enlarges when hovering interactive elements
 * (a, button, [data-cursor="hover"]).
 */
export function CursorFollower() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const supports = window.matchMedia("(pointer: fine)").matches;
    if (!supports) return;
    setEnabled(true);

    let rx = window.innerWidth / 2;
    let ry = window.innerHeight / 2;
    let x = rx,
      y = ry;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
      }
      const t = e.target as HTMLElement | null;
      const hoverable = !!t?.closest('a, button, [data-cursor="hover"]');
      if (ring.current) ring.current.dataset.state = hoverable ? "hover" : "idle";
    };

    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx - 16}px, ${ry - 16}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-2 w-2 rounded-full bg-[color:var(--foreground)] mix-blend-difference"
      />
      <div
        ref={ring}
        aria-hidden
        data-state="idle"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 rounded-full border border-[color:var(--foreground)] mix-blend-difference transition-[width,height,margin,border-color] duration-200 ease-out data-[state=hover]:h-14 data-[state=hover]:w-14 data-[state=hover]:-ml-3 data-[state=hover]:-mt-3 data-[state=hover]:border-[color:var(--primary)]"
      />
    </>
  );
}
