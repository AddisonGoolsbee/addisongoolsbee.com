import { createSignal, onMount } from "solid-js";
import confetti from "canvas-confetti";

interface HighFiveButtonProps {
  key: string;
}

const baseUrl = "https://abacus.jasoncameron.dev";
const domain = "addisongoolsbee.com";

export default function HighFiveButton(props: HighFiveButtonProps) {
  const [count, setCount] = createSignal<number | null>(null);
  let buttonRef: HTMLButtonElement | undefined;
  const clapSound = new Audio("/sounds/clap.mp3");

  onMount(async () => {
    try {
      const res = await fetch(`${baseUrl}/get/${domain}/${props.key}`);
      const data = await res.json();
      setCount(data.value);

      // Preload the audio
      clapSound.load();
    } catch (err) {
      console.error("Failed to fetch initial count:", err);
    }
  });

  const handleClick = async () => {
    try {
      const res = await fetch(`${baseUrl}/hit/${domain}/${props.key}`);
      const data = await res.json();
      setCount(data.value);

      // Play sound
      clapSound.currentTime = 0;
      clapSound.volume = 0.15;
      clapSound
        .play()
        .catch((err) => console.error("Failed to play sound:", err));

      // Trigger confetti burst
      if (buttonRef) {
        const rect = buttonRef.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;

        confetti({
          particleCount: 40,
          scalar: 1.5,
          spread: Math.random() * 60 + 60,
          startVelocity: 40,
          angle: 90,
          origin: { x, y },
          zIndex: 500000,
        });
      }
    } catch (err) {
      console.error("Failed to increment count:", err);
    }
  };

  return (
    <div class="flex flex-col items-center">
      <button
        ref={buttonRef}
        class="bg-[#f1a860] transition-all duration-200 px-6 py-2 text-xl rounded-full shadow hover:scale-105 active:scale-100 font-semibold text-white"
        onPointerDown={handleClick}
      >
        High five
      </button>
      <p class="text-md text-black mt-3">
        {count()?.toLocaleString() ?? "0"} high fives
      </p>
    </div>
  );
}
