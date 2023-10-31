import type { Component } from "solid-js";
import Particles from "./Particles";
import Blurb from "./Blurb";

const App: Component = () => {
  return (
    <div class="h-screen overflow-hidden relative bg-gray-800">
      <Particles />
      <div class="h-16 text-white flex items-center px-6 z-10"></div>
      <div class="absolute w-full h-9/10 bottom-0 flex items-end" style={{ left: "22%", transform: "translateX(-50%)" }}>
        <img src="/images/profile.png" alt="Addison" class="w-full h-auto object-contain max-h-full" />
      </div>
      <Blurb />
    </div>
  );
};

export default App;
