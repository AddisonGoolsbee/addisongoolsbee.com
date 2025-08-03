import { onCleanup, onMount, createSignal, createEffect } from "solid-js";
import type { Component } from "solid-js";
import { particleEmoji } from "../signals/state";

interface Particle {
  x: number;
  y: number;
  maxSize: number;
  currentSize: number;
  increasing: boolean;
  speedX: number;
  speedY: number;
  emoji?: string;
}

const Particles: Component = () => {
  const SPEED = 0.1;
  const SIZE = 2;
  const GROWTH = 0.01;
  const MAX_AMOUNT = 120;
  const COLOR = "#ddd";

  const EMOJI_SIZE = 50;
  const EMOJI_GROWTH = 0.1;

  const [canvasSize, setCanvasSize] = createSignal({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  let currentAmount = 0;
  let canvasRef: HTMLCanvasElement | undefined;
  const particles: Particle[] = [];
  let animationFrameId: number;

  const handleResize = () => {
    setCanvasSize({ width: window.innerWidth, height: window.innerHeight });

    // Clear existing particles and reinitialize to prevent stretching
    particles.length = 0;
    currentAmount = 0;

    // Update canvas dimensions immediately
    if (canvasRef) {
      canvasRef.width = window.innerWidth;
      canvasRef.height = window.innerHeight;
    }
  };

  const initParticles = () => {
    const canvas = canvasRef;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Update canvas dimensions
    const { width, height } = canvasSize();
    canvas.width = width;
    canvas.height = height;

    const createParticle = () => {
      currentAmount++;
      const isEmojiMode = particleEmoji() !== "";
      const particleSize = isEmojiMode ? EMOJI_SIZE : SIZE;

      const particle: Particle = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        maxSize: Math.random() * particleSize + (isEmojiMode ? 20 : 1),
        currentSize: 0,
        increasing: true,
        speedX: Math.random() * SPEED - SPEED / 2,
        speedY: Math.random() * SPEED - SPEED / 2,
      };

      if (isEmojiMode) {
        particle.emoji = particleEmoji();
      }

      particles.push(particle);
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isEmojiMode = particleEmoji() !== "";
      const currentGrowth = isEmojiMode ? EMOJI_GROWTH : GROWTH;

      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];

        if (p.emoji) {
          // Render emoji
          ctx.font = `${p.currentSize}px Arial`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";

          // Set opacity based on size for fade effect
          const opacity = p.currentSize / p.maxSize;
          ctx.globalAlpha = opacity;

          // Draw the emoji
          ctx.fillText(p.emoji, p.x, p.y);

          // Reset global alpha
          ctx.globalAlpha = 1;
        } else {
          // Render circle
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.currentSize, 0, Math.PI * 2);
          ctx.fillStyle = COLOR;
          ctx.fill();
        }

        p.x += p.speedX;
        p.y += p.speedY;
        if (p.increasing) {
          p.currentSize += currentGrowth;
          if (p.currentSize >= p.maxSize) p.increasing = false;
        } else {
          p.currentSize -= currentGrowth;
          const minSize = p.emoji ? 2 : 0.2;
          if (p.currentSize <= minSize) {
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
    window.addEventListener("resize", handleResize);
    initParticles();
  });

  onCleanup(() => {
    window.removeEventListener("resize", handleResize);
    cancelAnimationFrame(animationFrameId);
  });

  createEffect(() => {
    // Clear existing particles when emoji mode changes
    particleEmoji(); // Track the signal
    particles.length = 0;
    currentAmount = 0;
  });

  createEffect(() => {
    // Handle canvas size changes
    const { width, height } = canvasSize();
    if (canvasRef) {
      canvasRef.width = width;
      canvasRef.height = height;
    }
  });

  return (
    <canvas
      ref={canvasRef}
      class="fixed top-0 left-0 w-full h-full z-0"
    ></canvas>
  );
};

export default Particles;
