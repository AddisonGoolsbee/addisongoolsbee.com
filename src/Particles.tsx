import { onCleanup, onMount, createSignal, createEffect } from "solid-js";
import type { Component } from "solid-js";

interface Particle {
  x: number;
  y: number;
  maxSize: number;
  currentSize: number;
  increasing: boolean;
  speedX: number;
  speedY: number;
}

const Particles: Component = () => {
  const SPEED = 0.5;
  const SIZE = 5;
  const GROWTH = 0.03;
  const MAX_AMOUNT = 120;

  let currentAmount = 0;
  let canvasRef: HTMLCanvasElement | undefined;

  const initParticles = () => {
    const canvas = canvasRef;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = [];
    let canvasSize = { width: window.innerWidth, height: window.innerHeight };
    let animationFrameId: number;

    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;

    const createParticle = () => {
      currentAmount++;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        maxSize: Math.random() * SIZE + 1,
        currentSize: 0,
        increasing: true,
        speedX: Math.random() * SPEED - SPEED / 2,
        speedY: Math.random() * SPEED - SPEED / 2,
      });
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.currentSize, 0, Math.PI * 2);
        ctx.fillStyle = "#8ff";
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.increasing) {
          p.currentSize += GROWTH;
          if (p.currentSize >= p.maxSize) p.increasing = false;
        } else {
          p.currentSize -= GROWTH;
          if (p.currentSize <= 0.2) {
            particles.splice(i, 1);
            i--;
            currentAmount--;
          }
        }
      }
      if (currentAmount < MAX_AMOUNT) {
        createParticle();
      }
      animationFrameId = requestAnimationFrame(animateParticles);
    };

    animateParticles();

    onCleanup(() => {
      cancelAnimationFrame(animationFrameId);
    });
  };

  onMount(() => {
    initParticles();
  });

  return <canvas ref={canvasRef} class="fixed top-0 left-0 w-full h-full z-0"></canvas>;
};

export default Particles;
