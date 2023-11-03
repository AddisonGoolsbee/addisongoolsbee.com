import type { Component } from "solid-js";
import Particles from "./Particles";
import Blurb from "./Blurb";

const App: Component = () => {
  return (
    <div class="h-screen overflow-hidden relative bg-gray-800">
      <Particles />
      <div class="h-16 text-white flex flex-row items-end z-10">
        <img src="/images/whiteLogo.svg" alt="logo" class="absolute top-0 left-0 ml-4 mt-2 h-auto w-12 cursor-pointer" draggable="false" onClick={() => window.location.href = '/'}/>
      </div>
      <div class="absolute w-full h-9/10 bottom-0 flex items-end" style={{ left: "22%", transform: "translateX(-50%)" }}>
        <img src="/images/profile.png" alt="Addison" class="w-full h-auto object-contain max-h-full animate-slide-up" draggable="false" />
      </div>
      <Blurb/>
    </div>
  );
};

export default App;
