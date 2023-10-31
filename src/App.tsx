import type { Component } from "solid-js";
import Particles from "./Particles";

const App: Component = () => {
  return (
    <div class="h-screen overflow-hidden relative bg-gray-800">
      <Particles />
      <div class="h-16 text-white flex items-center px-6 z-10">Addison Goolsbee</div>
      <div class="absolute w-full h-9/10 bottom-0 flex items-end" style={{ left: "22%", transform: "translateX(-50%)" }}>
        <img src="/images/profile.png" alt="Addison" class="w-full h-auto object-contain max-h-full" />
      </div>
      <div class="absolute top-0 right-0 w-2/3 h-full p-5p">
        <div class=" h-full bg-white bg-opacity-50 z-10 p-8 ml-7p rounded-sm shadow-2xl">
          <p class="text-black">
            Hey there! I'm currently in the process of building my new website, come check back for frequent updates!
            My email is addisongoolsbee@gmail.com if you want to contact me
            <a href="/images/initialWebsite.png" target="_blank" class="block mt-4">
              Click here to see my previous website
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
