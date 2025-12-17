import { Component } from "solid-js";
import { secretMessage, secretMessageVisible } from "../utils/state";

const SecretMessage: Component = () => {
  return (
    <div
      class="fixed bottom-0 mb-5 w-full flex justify-center z-[1000] pointer-events-none"
      style={{
        opacity: secretMessageVisible() ? 1 : 0,
        transition: "opacity 0.3s",
      }}
      role="status"
      aria-live="polite"
    >
      <div class="font-extrabold bg-black/50 text-white text-2xl sm:text-4xl p-4 rounded-lg max-w-[83.333%] text-center tracking-wide">
        {secretMessage()}
      </div>
    </div>
  );
};

export default SecretMessage;
