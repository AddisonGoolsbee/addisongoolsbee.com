import { Component } from "solid-js";

const code = "__._ .._ .. __ _... .._ ...";

const Dot = () => {
  return <div class="w-0.5 h-1 bg-white/50"></div>;
};

const Dash = () => {
  return <div class="w-0.5 h-3 bg-white/50"></div>;
};

const Space = () => {
  return <div class="h-1"></div>;
}

const KumquatHint: Component = () => {
  return (
    <div class="fixed left-0 top-1/2 -translate-y-1/2 text-white/50 z-[1000] flex flex-col gap-1">
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
