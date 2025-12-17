import { onCleanup, onMount, createSignal, createEffect } from "solid-js";
import type { Component } from "solid-js";
import { particleMode } from "../utils/state";

interface Particle {
  x: number;
  y: number;
  maxSize: number;
  currentSize: number;
  increasing: boolean;
  speedX: number;
  speedY: number;
  emoji?: string;
  isImage?: boolean;
}

const Particles: Component = () => {
  const SPEED = 0.1;
  const SIZE = 2;
  const GROWTH = 0.01;
  const MAX_AMOUNT = 120;
  const COLOR = "#ddd";

  const EMOJI_SIZE = 50;
  const EMOJI_GROWTH = 0.1;

  const IMAGE_SIZE = 48;
  const IMAGE_GROWTH = 0.12;

  const [canvasSize, setCanvasSize] = createSignal({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  let currentAmount = 0;
  let canvasRef: HTMLCanvasElement | undefined;
  const particles: Particle[] = [];
  let animationFrameId: number;

  const [spriteImage, setSpriteImage] = createSignal<HTMLImageElement | null>(null);
  const [spriteReady, setSpriteReady] = createSignal(false);

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
      const mode = particleMode();
      const isEmojiMode = mode.kind === "emoji";
      const isImageMode = mode.kind === "image";
      const particleSize = isEmojiMode ? EMOJI_SIZE : isImageMode ? IMAGE_SIZE : SIZE;

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
        particle.emoji = mode.emoji;
      }

      if (isImageMode) {
        particle.isImage = true;
      }

      particles.push(particle);
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mode = particleMode();
      const isEmojiMode = mode.kind === "emoji";
      const isImageMode = mode.kind === "image";
      const currentGrowth = isEmojiMode ? EMOJI_GROWTH : isImageMode ? IMAGE_GROWTH : GROWTH;

      const img = spriteImage();
      const canDrawImage = isImageMode && spriteReady() && img;

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
        } else if (p.isImage && canDrawImage) {
          const opacity = p.currentSize / p.maxSize;
          ctx.globalAlpha = opacity;

          const size = Math.max(1, p.currentSize);
          ctx.drawImage(img, p.x - size / 2, p.y - size / 2, size, size);

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
          const minSize = p.emoji || p.isImage ? 2 : 0.2;
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
    // Clear existing particles and (if needed) preload the sprite when mode changes.
    const mode = particleMode();
    particles.length = 0;
    currentAmount = 0;

    if (mode.kind !== "image") {
      setSpriteReady(false);
      setSpriteImage(null);
      return;
    }

    const src = mode.src;
    setSpriteReady(false);
    setSpriteImage(null);

    const img = new Image();
    img.decoding = "async";
    img.onload = () => {
      setSpriteImage(img);
      setSpriteReady(true);
    };
    img.onerror = () => {
      setSpriteReady(false);
      setSpriteImage(null);
    };
    img.src = src;
  });

  createEffect(() => {
    // Handle canvas size changes
    const { width, height } = canvasSize();
    if (canvasRef) {
      canvasRef.width = width;
      canvasRef.height = height;
    }
  });

  return <canvas ref={canvasRef} class="fixed top-0 left-0 w-full h-full z-0"></canvas>;
};

export default Particles;
