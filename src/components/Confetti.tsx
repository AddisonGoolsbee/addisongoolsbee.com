import { createEffect, onCleanup } from "solid-js";
import confetti from "canvas-confetti";

export default function ConfettiEffect() {
  const isMobile = window.innerWidth < 768;

  createEffect(() => {
    const interval = setInterval(() => {
      confetti({
        particleCount: isMobile ? 50 : 100,
        scalar: Math.random() * 0.5 + (isMobile ? 0.8 : 1.5),
        spread: Math.random() * (isMobile ? 40 : 120) + 30,
        startVelocity: isMobile ? 20 : 40,
        angle: Math.random() * 360,
        origin: { x: Math.random(), y: Math.random() },
        zIndex: 499, 
      });
    }, 400);

    onCleanup(() => clearInterval(interval));
  });

  return null;
}
