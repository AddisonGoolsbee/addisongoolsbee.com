import { Component } from "solid-js";

const code = "__._ .._ .. __ _... .._ ...";

const Dot = () => {
  return <div class="w-1 h-1 rounded-full bg-white/50"></div>;
};

const Dash = () => {
  return <div class="w-1 h-3 bg-white/50"></div>;
};

const Space = () => {
  return <div class="h-1"></div>;
}

const KumquatHint: Component = () => {
  return (
    <div class="fixed left-0 top-1/2 -translate-y-1/2 text-white/50 z-[1000] flex flex-col gap-1 opacity-0 animate-fadein5s">
      <style>
      {`
        @keyframes fadein5s {
        from { opacity: 0; }
        to { opacity: 1; }
        }
        .animate-fadein5s {
        animation: fadein5s 5s ease-in forwards;
        }
      `}
      </style>
      {Array.from(code).map((char, idx) => {
      if (char === ".") {
        return <Dot />;
      }
      if (char === "_") {
        return <Dash />;
      }
      return <Space />;
      })}
    </div>
  );
};

export default KumquatHint;
