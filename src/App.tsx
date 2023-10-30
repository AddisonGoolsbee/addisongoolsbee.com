import type { Component } from "solid-js";

const App: Component = () => {
  return (
<div class="h-screen overflow-hidden relative bg-gray-800">
  <div class="h-16 bg-black text-white flex items-center px-4 z-10">Top Bar</div>
  <div class="absolute w-full h-5/6 bottom-0 flex items-end" style={{ left: "25%", transform: "translateX(-50%)" }}>
    <img src="/images/profile.png" alt="Addison" class="w-full h-auto object-contain max-h-full" />
  </div>
</div>


  

  );
};

export default App;

