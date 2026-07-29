import { useRef, type ReactNode, type MouseEvent } from "react";

/**
 * Subtle magnetic hover: the element eases toward the cursor within its bounds.
 * Renders <a> when `href` is set, otherwise <button>.
 */
type MagneticProps = {
  as?: "a" | "button";
  strength?: number;
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  className?: string;
  children: ReactNode;
};

export function MagneticButton(props: MagneticProps) {
  const { as, strength = 0.3, className = "", children, ...rest } = props;
  const ref = useRef<HTMLElement | null>(null);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const tag = as ?? (rest.href ? "a" : "button");
  const cls = `inline-flex will-change-transform transition-transform duration-300 ease-out ${className}`;

  if (tag === "a") {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className={cls}
        href={rest.href}
        target={rest.target}
        rel={rest.rel}
        download={rest.download as string | undefined}
        onClick={rest.onClick}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cls}
      type={rest.type ?? "button"}
      disabled={rest.disabled}
      onClick={rest.onClick}
    >
      {children}
    </button>
  );
}
