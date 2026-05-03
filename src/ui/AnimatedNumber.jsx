import { useState, useEffect, useRef } from "react";

function logEase(t) {
  return Math.log1p(t * 9) / Math.log(10);
}

/**
 * Counts from 0 to `target` using a logarithmic ease curve (fast start, slow finish).
 * Renders inline — wrap in a styled element as needed.
 *
 * Props:
 *   target   — final number value
 *   suffix   — string appended after the number (e.g. "+", "%", " yrs")
 *   triggered — boolean; animation starts when this flips to true
 *   duration  — total animation length in ms (default: 1000)
 *   delay     — per-item stagger offset in ms (default: 0)
 */
export default function AnimatedNumber({
  target,
  suffix = "",
  duration = 1000,
  delay = 0,
  triggered,
}) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!triggered) return;
    let startTime = null;

    const tick = (timestamp) => {
      if (startTime === null) startTime = timestamp + delay;
      const elapsed = timestamp - startTime;
      if (elapsed < 0) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const t = Math.min(elapsed / duration, 1);
      setDisplay(Math.round(logEase(t) * target));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [triggered, target, duration, delay]);

  return (
    <>
      {display}
      {suffix}
    </>
  );
}
