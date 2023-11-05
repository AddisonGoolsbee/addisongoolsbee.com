import { onMount, type Component, onCleanup, createSignal, Show, createEffect } from "solid-js";
import Particles from "../components/Particles";
import Blurb from "../components/Blurb";
import Changelog from "../components/Changelog";

const Home: Component = () => {
  let imgRef;

  const [topPoint, setTopPoint] = createSignal(window.innerHeight);
  const [imageLoaded, setImageLoaded] = createSignal(false);
  const [changelogVisible, setChangelogVisible] = createSignal(false);

  const updateTopPoint = () => {
    if (imgRef) {
      const rect = imgRef.getBoundingClientRect();
      if (window.innerWidth >= 640) {
        setTopPoint(0);
      } else {
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

  const toggleChangelog = () => {
    setChangelogVisible(!changelogVisible());
  };

  return (
    <div class="h-screen overflow-hidden relative bg-gray-800">
      <Particles />
      <div class="h-16 text-white flex flex-row justify-end z-10 pl-4 space-x-4 select-none">
        <img src="/images/whiteLogo.svg" alt="logo" class="absolute top-0 left-0 ml-4 mt-2 h-auto w-10 sm:w-12 cursor-pointer animate-logo select-none" draggable="false" onClick={() => (window.location.href = "/")} />
        <div class="flex flex-row items-center space-x-4 animate-navBar pr-4">
          <button class="text-white cursor-pointer z-20 p-2" onClick={toggleChangelog}>
            changelog
          </button>
        </div>
      </div>
      <div class="absolute w-5/6 h-9/10 bottom-0 flex items-end left-1/2 transform -translate-x-1/2 sm:left-22p">
        <img src="/images/profile.png" alt="Addison" class="w-full h-auto object-contain max-h-full animate-slide-up select-none" draggable="false" ref={imgRef} onLoad={onImageLoad} />
      </div>
      <Show when={imageLoaded()}>
        <Blurb imgTop={topPoint()} />
      </Show>
      <Changelog changelogVisible={changelogVisible} setChangelogVisible={setChangelogVisible} toggleChangelog={toggleChangelog} />
    </div>
  );
};

export default Home;
