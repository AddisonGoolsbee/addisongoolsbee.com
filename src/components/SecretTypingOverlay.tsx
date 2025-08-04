import { createSignal, onCleanup, onMount, Show } from "solid-js";
import { Motion } from "@motionone/solid";
import { GLOBAL_SALT, sha256 } from "../utils/cryptography";
import { secrets } from "../utils/secrets";

import { setCurrentDecoderSecret } from "../signals/state";

const SecretTypingOverlay = () => {
  const [typed, setTyped] = createSignal("");
  const [visible, setVisible] = createSignal(false);
  const [fading, setFading] = createSignal(false);
  const [pulsing, setPulsing] = createSignal(false);

  let timeout: ReturnType<typeof setTimeout> | undefined;
  let fadeTimeout: ReturnType<typeof setTimeout> | undefined;
  let pulseTimeout: ReturnType<typeof setTimeout> | undefined;

  const resetTyping = () => {
    setTyped("");
    setVisible(false);
    setFading(false);
    setPulsing(false);
  };

  const handleKey = (e: KeyboardEvent) => {
    const key = e.key;

    if (e.metaKey || e.ctrlKey) {
      return;
    }

    if (typed() === "" && key === " ") {
      return;
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
        setFading(false);
        resetTimeout();
        return next;
      });
    } else if (key === "Escape" || key === "Enter") {
      resetTyping();
    }
  };

  const checkSecret = async (word: string) => {
    word = word.replace(/\s+/g, "");
    const wordHash = await sha256(word);
    for (const secret of secrets) {
      if (wordHash === secret.hash) {
        setPulsing(true);
        clearTimeout(pulseTimeout);
        pulseTimeout = setTimeout(() => {
          setPulsing(false);
        }, 600); // Duration of pulse animation
        setCurrentDecoderSecret(GLOBAL_SALT + word);
        secret.onUnlock();

        // Start fading immediately after finding secret
        clearTimeout(timeout);
        clearTimeout(fadeTimeout);
        setTimeout(() => {
          setFading(true);
          fadeTimeout = setTimeout(() => {
            resetTyping();
          }, 300); // matches fade duration
        }, 400); // Start fading after pulse animation begins

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
      }, 300); // matches fade duration
    }, 1000);
  };

  onMount(() => {
    window.addEventListener("keydown", handleKey);
  });

  onCleanup(() => {
    window.removeEventListener("keydown", handleKey);
    clearTimeout(timeout);
    clearTimeout(fadeTimeout);
    clearTimeout(pulseTimeout);
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
        <div class="relative flex items-center justify-center">
          <Show when={pulsing()}>
            <Motion.div
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.3, opacity: 0 }}
              transition={{ duration: 1, easing: "ease-out" }}
              class="absolute inset-0 bg-black rounded-lg"
            />
          </Show>

          <Motion.div
            animate={{ opacity: fading() ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            class="text-white text-5xl sm:text-7xl font-bold font-mono bg-black/50 px-6 py-4 rounded-lg relative z-10"
          >
            {typed()}
          </Motion.div>
        </div>
      </Motion.div>
    </Show>
  );
};

export default SecretTypingOverlay;
