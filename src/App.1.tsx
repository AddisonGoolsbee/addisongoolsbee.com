import { onMount, type Component } from "solid-js";
import Particles from "./Particles";
import Blurb from "./Blurb";

export const App: Component = () => {
  let imgRef;
  // Create a signal for the top point
  const [topPoint, setTopPoint] = createSignal(0);

  // Function to update the top point
  const updateTopPoint = () => {
    if (imgRef) {
      const rect = imgRef.getBoundingClientRect();
      setTopPoint(rect.top);
    }
  };

  // Attach event listener on mount and remove on cleanup
  onMount(() => {
    window.addEventListener("resize", updateTopPoint);
    updateTopPoint(); // Initialize with the correct value
  });

  onCleanup(() => {
    window.removeEventListener("resize", updateTopPoint);
  });

  return (
    <div class="h-screen overflow-hidden relative bg-gray-800">
      <Particles />
      <div class="h-16 text-white flex flex-row items-end z-10">
        <img src="/images/whiteLogo.svg" alt="logo" class="absolute top-0 left-0 ml-4 mt-2 h-auto w-12 cursor-pointer animate-logo" draggable="false" onClick={() => (window.location.href = "/")} />
      </div>
      <div class="absolute w-5/6 h-9/10 bottom-0 flex items-end left-1/2 transform -translate-x-1/2 sm:left-22p">
        <img src="/images/profile.png" alt="Addison" class="w-full h-auto object-contain max-h-full animate-slide-up" draggable="false" />
      </div>
      <Blurb />
    </div>
  );
};
