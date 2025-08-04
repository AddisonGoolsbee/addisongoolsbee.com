import { Component } from "solid-js";

const code = "__._ .._ .. __ _... .._ ...";

const KumquatHint: Component = () => {
  return (
    <div class="fixed left-2 top-1/2 transform -translate-y-1/2 rotate-90 text-white/50 z-[1000] font-mono whitespace-pre origin-left">
      {Array.from(code).map((char, idx) => {
        if (char === ".") {
          const isPairStart = code[idx + 1] === ".";
          return <span class={`relative top-1 ${isPairStart ? "-mr-1" : ""}`}>.</span>;
        }
        if (char === "_") {
          const isPairStart = code[idx + 1] === "_";
          return (
            <span class={`inline-block ${isPairStart ? "pr-1" : ""}`}>_</span>
          );
        }
        return <span>{char}</span>;
      })}
    </div>
  );
};

export default KumquatHint;
