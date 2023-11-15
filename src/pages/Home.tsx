import { onMount, type Component, onCleanup, createSignal, Show, createEffect } from "solid-js";
import Particles from "../components/Particles";
import Blurb from "../components/Blurb";
import Changelog from "../components/Changelog";
import Navbar from "../components/Navbar";
import { useCanonical } from "../utils/canonical";

const Home: Component = () => {
  useCanonical();
  let imgRef;

  const [topPoint, setTopPoint] = createSignal(window.innerHeight);
  const [imageLoaded, setImageLoaded] = createSignal(false);
  const [changelogVisible, setChangelogVisible] = createSignal(false);
  const [profileSrc, setProfileSrc] = createSignal("/images/profile.png");
  const [myName, setMyName] = createSignal("Addison Goolsbee");

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

  const sandwichMode = () => {
    const newSrc = profileSrc() === "/images/profile.png" ? "/images/sandwich.gif" : "/images/profile.png";
    setProfileSrc(newSrc);
    const newName = myName() === "Addison Goolsbee" ? "Sandwich" : "Addison Goolsbee";
    setMyName(newName);
  };

  return (
    <div class="h-screen overflow-hidden relative bg-gray-800">
      <Particles />
      <img src="/images/whiteLogo.svg" alt="logo" class="absolute top-0 left-0 ml-4 mt-2 h-auto w-10 sm:w-12 cursor-pointer animate-logo select-none" draggable="false" onClick={() => (window.location.href = "/")} />
      <Navbar toggleChangelog={toggleChangelog} />
      <div class="absolute w-5/6 h-9/10 bottom-0 flex items-end left-1/2 transform -translate-x-1/2 sm:left-22p">
        <img src={profileSrc()} alt="Addison" class="w-full h-auto object-contain max-h-full animate-slide-up select-none" draggable="false" ref={imgRef} onLoad={onImageLoad} />
      </div>
      <Show when={imageLoaded()}>
        <Blurb imgTop={topPoint()} toggleChangelog={toggleChangelog} sandwichMode={sandwichMode} myName={myName()} />
      </Show>
      <Changelog changelogVisible={changelogVisible} setChangelogVisible={setChangelogVisible} toggleChangelog={toggleChangelog} />
    </div>
  );
};

export default Home;
