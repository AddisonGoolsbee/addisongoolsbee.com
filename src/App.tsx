import { onMount, type Component, onCleanup, createSignal, Show } from "solid-js";
import Particles from "./Particles";
import Blurb from "./Blurb";

const App: Component = () => {
  let imgRef;
  const [topPoint, setTopPoint] = createSignal(window.innerHeight);
  const [imageLoaded, setImageLoaded] = createSignal(false);

  const updateTopPoint = () => {
    if (imgRef) {
      const rect = imgRef.getBoundingClientRect();
      if (window.innerWidth >= 640) {
        setTopPoint(0);
      } else {
        console.log(rect);
        setTopPoint(rect.height);
      }
    }
  };
  const onImageLoad = () => {
    updateTopPoint();
    setImageLoaded(true);
  };

  onMount(() => {
    window.addEventListener("resize", updateTopPoint);
    updateTopPoint();
  });

  onCleanup(() => {
    window.removeEventListener("resize", updateTopPoint);
  });

  return (
    <div class="h-screen overflow-hidden relative bg-gray-800">
      <Particles />
      <div class="h-16 text-white flex flex-row items-end z-10">
        <img src="/images/whiteLogo.svg" alt="logo" class="absolute top-0 left-0 ml-4 mt-2 h-auto w-10 sm:w-12 cursor-pointer animate-logo" draggable="false" onClick={() => (window.location.href = "/")} />
      </div>
      <div class="absolute w-5/6 h-9/10 bottom-0 flex items-end left-1/2 transform -translate-x-1/2 sm:left-22p">
        <img src="/images/profile.png" alt="Addison" class="w-full h-auto object-contain max-h-full animate-slide-up" draggable="false" ref={imgRef} onLoad={onImageLoad} />
      </div>
      <Show when={imageLoaded()}>
        <Blurb imgTop={topPoint()} />
      </Show>
    </div>
  );
};

export default App;
