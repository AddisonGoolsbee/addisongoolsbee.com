import {
  onMount,
  type Component,
  onCleanup,
  createSignal,
  Show,
  createEffect,
} from "solid-js";
import Particles from "../components/Particles";
import Blurb from "../components/Blurb";
import Changelog from "../components/Changelog";
import Navbar from "../components/Navbar";
import { useCanonical } from "../utils/canonical";
import Party from "../components/Party";
import RecursiveImageStack from "../components/RecursiveImageStack";
import SecretTypingOverlay from "../components/SecretTypingOverlay";

import {
  profileSrc,
  setProfileSrc,
  myName,
  setMyName,
  changelogVisible,
  setChangelogVisible,
  partyModeActive,
  setPartyModeActive,
  setBlurbStart,
} from "../signals/state";
import { sandwichMode } from "../signals/handlers";
import { defaultBlurb } from "../utils/blurbs";

const Home: Component = () => {
  useCanonical();
  let imgRef;

  const sandwichURL = "/images/sandwich.webp";
  const printerURL = "/images/printer.png";

  const [topPoint, setTopPoint] = createSignal(window.innerHeight);
  const [imageLoaded, setImageLoaded] = createSignal(false);
  const [isProfileLoaded, setIsProfileLoaded] = createSignal(false);
  const [recursionLevel, setRecursionLevel] = createSignal(0);

  // Read initial recursion level from URL
  createEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const level = parseInt(params.get("recursion") || "0");
    const isMobile = window.innerWidth < 640;
    setRecursionLevel(Math.min(level, isMobile ? 10 : 10));
  });

  const handleRecursion = () => {
    const currentLevel = recursionLevel();
    const newLevel = Math.min(currentLevel + 1, 10);
    setRecursionLevel(newLevel);
    const url = new URL(window.location.href);
    url.searchParams.set("recursion", newLevel.toString());
    window.location.href = url.toString();

    // Force reload if we're already at max recursion
    if (currentLevel === 10) {
      window.location.reload();
    }
  };

  onMount(() => {
    const img = new Image();
    img.onload = () => setIsProfileLoaded(true);
    img.src = profileSrc();

    setTimeout(() => {
      const img = new Image();
      img.src = sandwichURL;
      const printerImg = new Image();
      printerImg.src = printerURL;
    }, 0);

    window.addEventListener("resize", updateTopPoint);
    window.addEventListener("beforeprint", handlePrint);
    updateTopPoint();
  });

  onCleanup(() => {
    window.removeEventListener("resize", updateTopPoint);
    window.removeEventListener("beforeprint", handlePrint);
  });

  const handlePrint = () => {
    setProfileSrc(printerURL);
    setMyName("Printer");
    setBlurbStart(defaultBlurb);
  };

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

  const toggleChangelog = () => {
    setChangelogVisible(!changelogVisible());
  };

  const togglePartyMode = () => {
    setPartyModeActive(!partyModeActive());
  };

  return (
    <div class="h-[100dvh] overflow-hidden relative bg-gray-800">
      <SecretTypingOverlay />
      <Show when={partyModeActive()}>
        <Party />
      </Show>
      <Particles />

      <Navbar
        toggleChangelog={toggleChangelog}
        togglePartyMode={togglePartyMode}
        handleRecursion={handleRecursion}
      />

      <Show when={isProfileLoaded()}>
        <div
          class={`absolute w-5/6 h-9/10 -bottom-1 flex items-end left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-in-out z-[500] ${
            partyModeActive() ? "sm:left-1/2" : "sm:left-22p"
          }`}
        >
          <RecursiveImageStack
            src={profileSrc()}
            recursionLevel={recursionLevel()}
            ref={imgRef}
            onLoad={onImageLoad}
          />
        </div>
      </Show>
      <Show when={imageLoaded()}>
        <Blurb
          imgTop={topPoint()}
        />
      </Show>
      <Changelog
        changelogVisible={changelogVisible}
        setChangelogVisible={setChangelogVisible}
        toggleChangelog={toggleChangelog}
        handleRecursion={handleRecursion}
      />
    </div>
  );
};

export default Home;
