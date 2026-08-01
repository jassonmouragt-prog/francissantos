import { useEffect, useState } from "react";

/** Cortina preta inicial: revela "FRANCIS SANTOS" com fade-in + glow e depois abre o site. */
export function IntroOverlay() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem("fs-intro-seen")) return;
    sessionStorage.setItem("fs-intro-seen", "1");
    setShow(true);
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setFading(true), 2400);
    const t2 = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 3400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted || !show) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] grid place-items-center bg-black transition-opacity duration-1000 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="intro-name font-[family-name:var(--font-fixture)] whitespace-nowrap px-4 text-[clamp(1.5rem,6vw,5rem)] font-light uppercase leading-none tracking-[0.22em] text-foreground">
        Francis Santos
      </h1>
    </div>
  );
}
