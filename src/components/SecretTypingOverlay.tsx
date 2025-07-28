import { createSignal, onCleanup, onMount, Show } from "solid-js";
import { Motion } from "@motionone/solid";

interface Secret {
  word: string;
  onUnlock: () => void;
}

interface Props {
  secrets: Secret[];
}

const SecretTypingOverlay = (props: Props) => {
  const [typed, setTyped] = createSignal("");
  const [visible, setVisible] = createSignal(false);
  const [fading, setFading] = createSignal(false);

  let timeout: ReturnType<typeof setTimeout> | undefined;
  let fadeTimeout: ReturnType<typeof setTimeout> | undefined;

  const resetTyping = () => {
    setTyped("");
    setVisible(false);
    setFading(false);
  };

const handleKey = (e: KeyboardEvent) => {
    const key = e.key;

    // Ignore if metaKey or ctrlKey is held
    if (e.metaKey || e.ctrlKey) {
        return;
    }

    if (typed() === "" && key === " ") {
        return; // Ignore if first key is space
    }

    if (key.length === 1 && /^[\w\s\p{P}\p{S}]$/u.test(key)) {
        setTyped((prev) => {
            const next = prev + key.toLowerCase();
            checkSecret(next);
            return next;
        });
        setVisible(true);
        setFading(false);
        resetTimeout();
    } else if (key === "Backspace") {
        setTyped((prev) => {
            const next = prev.slice(0, -1);
            resetTimeout();
            return next;
        });
    } else if (key === "Escape") {
        resetTyping();
    }
};

  const checkSecret = (word: string) => {
    for (const secret of props.secrets) {
      if (word === secret.word) {
        secret.onUnlock();
        resetTyping();
        break;
      }
    }
  };

  const resetTimeout = () => {
    clearTimeout(timeout);
    clearTimeout(fadeTimeout);
    timeout = setTimeout(() => {
      setFading(true);
      fadeTimeout = setTimeout(() => {
        resetTyping();
      }, 200); // matches fade duration
    }, 1000);
  };

  onMount(() => {
    window.addEventListener("keydown", handleKey);
  });

  onCleanup(() => {
    window.removeEventListener("keydown", handleKey);
    clearTimeout(timeout);
  });

  return (
    <Show when={visible()}>
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        class="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
      >
        <Motion.div
          animate={{ opacity: fading() ? 0 : 1 }}
          transition={{ duration: 0.6 }}
          class="text-white text-5xl sm:text-7xl font-bold font-mono bg-black/50 px-6 py-4 rounded-lg"
        >
          {typed()}
        </Motion.div>
      </Motion.div>
    </Show>
  );
};

export default SecretTypingOverlay;
